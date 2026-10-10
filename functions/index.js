'use strict';

// ─── Tarotistan Günlük Bildirim Gönderici ─────────────────────────────────────
// ad.html, okuma kaydedildikten sonra users/{uid} belgesine şunları yazar:
//   pushEnabled: true, pushNotifyAt: <şimdi + 24 saat>, fcmToken: <token>
// Bu fonksiyon 15 dakikada bir zamanı gelmiş kullanıcıları bulur, bildirimi
// gönderir ve alanları sıfırlar (tek seferlik bildirim).
// ─────────────────────────────────────────────────────────────────────────────

const { onSchedule } = require('firebase-functions/v2/scheduler');
const logger = require('firebase-functions/logger');
const { initializeApp } = require('firebase-admin/app');
const { getFirestore, Timestamp, FieldValue } = require('firebase-admin/firestore');
const { getMessaging } = require('firebase-admin/messaging');

initializeApp();

const MESSAGES = [
    'Bugün seni neler bekliyor? Günlük okuman hazır. 🔮',
    'Kartlar seni çağırıyor... Bugünkü enerji nasıl? 🃏',
    'Yeni bir gün, yeni bir çekim. Bugün ne diyor kaderin?',
    'Günlük burç ve tarot okuman seni bekliyor. ✨'
];

const APP_URL = 'https://gokhanlones.github.io/Tarotistan/';

// Token artık geçersizse tekrar denemenin anlamı yok; token'ı sileriz.
const INVALID_TOKEN_CODES = new Set([
    'messaging/registration-token-not-registered',
    'messaging/invalid-registration-token',
    'messaging/invalid-argument'
]);

exports.sendDailyReadingReminders = onSchedule(
    { schedule: 'every 15 minutes', timeZone: 'Europe/Istanbul', region: 'europe-west1' },
    async () => {
        const db = getFirestore();

        // Sadece pushNotifyAt üzerinde aralık sorgusu: tek alanlı indeks yeterli,
        // bileşik indeks gerekmez. Gönderilenlerde alan null yapıldığı için
        // tekrar seçilmezler.
        const due = await db.collection('users')
            .where('pushNotifyAt', '<=', Timestamp.now())
            .limit(500)
            .get();

        if (due.empty) return;

        const messaging = getMessaging();
        let sent = 0;

        await Promise.all(due.docs.map(async doc => {
            const user = doc.data();
            const reset = { pushEnabled: false, pushNotifyAt: null };

            if (!user.pushEnabled || !user.fcmToken) {
                await doc.ref.update(reset);
                return;
            }

            const body = MESSAGES[Math.floor(Math.random() * MESSAGES.length)];
            try {
                // Sadece "data" gönderiyoruz; bildirimi notification-sw.js gösterir.
                // "notification" alanı eklenirse tarayıcı ikinci bir bildirim gösterir.
                await messaging.send({
                    token: user.fcmToken,
                    data: {
                        title: 'TAROTISTAN 🔮',
                        body,
                        url: APP_URL + 'dashboard.html'
                    },
                    webpush: { headers: { Urgency: 'normal', TTL: String(6 * 60 * 60) } }
                });
                sent++;
                await doc.ref.update(reset);
            } catch (err) {
                if (INVALID_TOKEN_CODES.has(err.code)) {
                    await doc.ref.update({ ...reset, fcmToken: FieldValue.delete() });
                } else {
                    // Geçici hata: alanlara dokunma, bir sonraki çalışmada tekrar denenir.
                    logger.warn('Bildirim gönderilemedi', { uid: doc.id, code: err.code });
                }
            }
        }));

        logger.info(`Bildirim gönderildi: ${sent}/${due.size}`);
    }
);

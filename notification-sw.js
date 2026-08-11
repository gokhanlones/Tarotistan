'use strict';

// ─── Tarotistan Notification Service Worker ───────────────────────────────────
// Görev: Bildirim iznini yönet, push event'leri işle, bildirime tıklanınca
//        kullanıcıyı dashboard'a yönlendir.
//
// Gelecekte Firebase Cloud Messaging (FCM) entegrasyonu için de hazır.
// ─────────────────────────────────────────────────────────────────────────────

self.addEventListener('install', () => {
    self.skipWaiting();
});

self.addEventListener('activate', event => {
    event.waitUntil(clients.claim());
});

// ── Push bildirimi (ileride FCM kullanıldığında devreye girer) ────────────────
self.addEventListener('push', event => {
    let data = {};
    try { data = event.data ? event.data.json() : {}; } catch (e) {}

    const title = data.title || 'TAROTISTAN 🔮';
    const options = {
        body: data.body || 'Bugün seni neler bekliyor? Kartlar hazır.',
        icon:  data.icon  || 'logo192.png',
        badge: data.badge || 'logo72.png',
        tag:   'tarot-daily',   // aynı tag → eski bildirimin üzerine yazar
        renotify: true,
        requireInteraction: false,
        data: { url: data.url || './dashboard.html' }
    };

    event.waitUntil(
        self.registration.showNotification(title, options)
    );
});

// ── Bildirime tıklanınca ──────────────────────────────────────────────────────
self.addEventListener('notificationclick', event => {
    event.notification.close();

    const targetUrl = event.notification.data?.url || './dashboard.html';

    event.waitUntil(
        clients.matchAll({ type: 'window', includeUncontrolled: true })
            .then(clientList => {
                // Uygulama zaten açıksa, o sekmeye odaklan
                for (const client of clientList) {
                    if (client.url.includes(self.location.origin) && 'focus' in client) {
                        return client.focus();
                    }
                }
                // Değilse yeni sekme aç
                return clients.openWindow(targetUrl);
            })
    );
});

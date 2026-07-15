<!DOCTYPE html>
<html lang="tr">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no">
    <title>TAROT'S</title>
    <script src="lang.js"></script>
    <script src="https://www.gstatic.com/firebasejs/10.12.0/firebase-app-compat.js"></script>
    <script src="https://www.gstatic.com/firebasejs/10.12.0/firebase-auth-compat.js"></script>
    <script src="https://www.gstatic.com/firebasejs/10.12.0/firebase-firestore-compat.js"></script>
    <script src="firebase-config.js"></script>
    <style>
        * { margin: 0; padding: 0; box-sizing: border-box; -webkit-tap-highlight-color: transparent; }
        html, body { width: 100%; height: 100%; background: #ffffff; font-family: 'Times New Roman', Times, serif; }

        .hidden { display: none !important; }

        /* ---- Üst Bar ---- */
        .topbar { position: fixed; top: 0; left: 0; right: 0; height: 60px; background: #ffffff; display: flex; align-items: center; padding: 0 16px; z-index: 10; border-bottom: 1px solid #f0f0f0; }
        .back-btn { width: 40px; height: 40px; background: none; border: none; display: flex; align-items: center; justify-content: center; cursor: pointer; flex-shrink: 0; }
        .back-btn svg { width: 22px; height: 22px; stroke: #000; stroke-width: 2; fill: none; stroke-linecap: round; stroke-linejoin: round; }
        .topbar-title { flex: 1; text-align: center; font-size: 1.25rem; font-weight: 700; letter-spacing: 3px; color: #000; }

        /* ---- İçerik ---- */
        .content { padding: 76px 16px 32px; max-width: 480px; margin: 0 auto; display: flex; flex-direction: column; gap: 16px; }
        .desc-text { font-size: 0.9rem; color: #555; text-align: center; line-height: 1.5; margin-bottom: 8px; }

        /* ---- Form ---- */
        .form-group { display: flex; flex-direction: column; gap: 6px; }
        .form-label { font-size: 0.85rem; font-weight: 600; color: #000; }
        .form-row { display: flex; gap: 10px; }
        .form-row .form-group { flex: 1; }
        .form-input {
            width: 100%; padding: 12px 14px;
            border: 2px solid #e8e8ed; border-radius: 10px;
            font-size: 1rem; background: #fafafa;
            outline: none; transition: all 0.3s;
            font-family: 'Times New Roman', Times, serif;
        }
        .form-input:focus { border-color: #000; background: #fff; }
        .form-input::placeholder { color: #aaa; }

        .btn-primary {
            width: 100%; padding: 16px;
            background: #000; color: #fff;
            border: none; border-radius: 12px;
            font-family: 'Times New Roman', Times, serif;
            font-size: 1rem; font-weight: 600;
            cursor: pointer; margin-top: 8px;
        }
        .btn-primary:disabled { background: #ccc; cursor: not-allowed; }

        .success-msg {
            font-size: 0.9rem; color: #28a745;
            text-align: center; margin-top: 8px;
        }
        .error-msg {
            font-size: 0.9rem; color: #e74c3c;
            text-align: center; margin-top: 8px;
        }

        /* ---- Auth kontrol spinner ---- */
        .auth-check { position: fixed; inset: 0; background: #fff; display: flex; align-items: center; justify-content: center; z-index: 200; }
        .auth-check.hidden { display: none; }
        .spinner { width: 40px; height: 40px; border: 3px solid #e8e8ed; border-top-color: #000; border-radius: 50%; animation: spin 1s linear infinite; }
        @keyframes spin { to { transform: rotate(360deg); } }
    </style>
</head>
<body>

    <div class="auth-check" id="authCheck">
        <div class="spinner"></div>
    </div>

    <div class="topbar">
        <button class="back-btn" id="backBtn" aria-label="Geri">
            <svg viewBox="0 0 24 24"><path d="M15 18l-6-6 6-6"/></svg>
        </button>
        <div class="topbar-title" id="pageTitle"></div>
    </div>

    <div class="content" id="contentArea" style="display:none;">
        <div class="desc-text" id="descText"></div>

        <!-- Doğum Tarihi -->
        <div class="form-row">
            <div class="form-group">
                <label class="form-label" id="labelDay"></label>
                <input type="number" class="form-input" id="birthDay" min="1" max="31" placeholder="1-31">
            </div>
            <div class="form-group">
                <label class="form-label" id="labelMonth"></label>
                <input type="number" class="form-input" id="birthMonth" min="1" max="12" placeholder="1-12">
            </div>
            <div class="form-group">
                <label class="form-label" id="labelYear"></label>
                <input type="number" class="form-input" id="birthYear" min="1900" max="2026" placeholder="1990">
            </div>
        </div>

        <!-- Doğum Saati -->
        <div class="form-row">
            <div class="form-group">
                <label class="form-label" id="labelHour"></label>
                <input type="number" class="form-input" id="birthHour" min="0" max="23" placeholder="0-23">
            </div>
            <div class="form-group">
                <label class="form-label" id="labelMinute"></label>
                <input type="number" class="form-input" id="birthMinute" min="0" max="59" placeholder="0-59">
            </div>
        </div>

        <!-- Doğum Yeri -->
        <div class="form-group">
            <label class="form-label" id="labelCity"></label>
            <input type="text" class="form-input" id="birthCity" placeholder="">
        </div </div>
        <div class="form-group">
            <label class="form-label" id="labelCountry"></label>
            <input type="text" class="form-input" id="birthCountry" placeholder="">
        </div>

        <!-- Enlem / Boylam -->
        <div class="form-row">
            <div class="form-group">
                <label class="form-label" id="labelLatitude"></label>
                <input type="number" class="form-input" id="birthLatitude" step="0.0001" placeholder="41.0082">
            </div>
            <div class="form-group">
                <label class="form-label" id="labelLongitude"></label>
                <input type="number" class="form-input" id="birthLongitude" step="0.0001" placeholder="28.9784">
            </div>
        </div>

        <button class="btn-primary" id="saveBtn"></button>
        <div class="success-msg hidden" id="successMsg"></div>
        <div class="error-msg hidden" id="errorMsg"></div>
    </div>

    <script>
        const auth = firebase.auth();
        const db = firebase.firestore();

        document.getElementById('pageTitle').textContent = t('birthInfoTitle');
        document.getElementById('descText').textContent = t('birthInfoDesc');
        document.getElementById('labelDay').textContent = t('birthDay');
        document.getElementById('labelMonth').textContent = t('birthMonth');
        document.getElementById('labelYear').textContent = t('birthYear');
        document.getElementById('labelHour').textContent = t('birthHour');
        document.getElementById('labelMinute').textContent = t('birthMinute');
        document.getElementById('labelCity').textContent = t('birthCity');
        document.getElementById('labelCountry').textContent = t('birthCountry');
        document.getElementById('labelLatitude').textContent = t('birthLatitude');
        document.getElementById('labelLongitude').textContent = t('birthLongitude');
        document.getElementById('saveBtn').textContent = t('birthSaveBtn');

        document.getElementById('backBtn').addEventListener('click', function() {
            const prev = document.referrer;
            if (prev && prev.includes('dashboard.html')) {
                window.location.href = 'dashboard.html';
            } else if (prev && prev.includes('cardsinfo.html')) {
                window.location.href = 'cardsinfo.html';
            } else if (prev && prev.includes('result.html')) {
                window.location.href = 'result.html';
            } else {
                window.location.href = 'dashboard.html';
            }
        });

        auth.onAuthStateChanged(async function(user) {
            if (!user) {
                window.location.href = 'auth.html';
                return;
            }
            await loadBirthInfo(user.uid);
            document.getElementById('authCheck').classList.add('hidden');
            document.getElementById('contentArea').style.display = 'flex';
        });

        async function loadBirthInfo(uid) {
            try {
                const doc = await db.collection('users').doc(uid).get();
                if (doc.exists && doc.data().birthInfo) {
                    const b = doc.data().birthInfo;
                    if (b.day) document.getElementById('birthDay').value = b.day;
                    if (b.month) document.getElementById('birthMonth').value = b.month;
                    if (b.year) document.getElementById('birthYear').value = b.year;
                    if (b.hour !== undefined) document.getElementById('birthHour').value = b.hour;
                    if (b.minute !== undefined) document.getElementById('birthMinute').value = b.minute;
                    if (b.city) document.getElementById('birthCity').value = b.city;
                    if (b.country) document.getElementById('birthCountry').value = b.country;
                    if (b.latitude) document.getElementById('birthLatitude').value = b.latitude;
                    if (b.longitude) document.getElementById('birthLongitude').value = b.longitude;
                }
            } catch (e) { console.log('Doğum bilgisi yükleme hatası:', e); }
        }

        document.getElementById('saveBtn').addEventListener('click', async function() {
            const user = auth.currentUser;
            if (!user) return;

            const day = parseInt(document.getElementById('birthDay').value);
            const month = parseInt(document.getElementById('birthMonth').value);
            const year = parseInt(document.getElementById('birthYear').value);
            const hour = parseInt(document.getElementById('birthHour').value);
            const minute = parseInt(document.getElementById('birthMinute').value);
            const city = document.getElementById('birthCity').value.trim();
            const country = document.getElementById('birthCountry').value.trim();
            const latitude = parseFloat(document.getElementById('birthLatitude').value);
            const longitude = parseFloat(document.getElementById('birthLongitude').value);

            const successMsg = document.getElementById('successMsg');
            const errorMsg = document.getElementById('errorMsg');

            if (!day || !month || !year || hour === '' || minute === '' || !city || !country || !latitude || !longitude) {
                errorMsg.textContent = t('birthRequired');
                errorMsg.classList.remove('hidden');
                successMsg.classList.add('hidden');
                return;
            }

            const birthData = {
                day: day, month: month, year: year,
                hour: hour, minute: minute,
                city: city, country: country,
                latitude: latitude, longitude: longitude,
                updatedAt: firebase.firestore.FieldValue.serverTimestamp()
            };

            try {
                await db.collection('users').doc(user.uid).set({ birthInfo: birthData }, { merge: true });
                errorMsg.classList.add('hidden');
                successMsg.textContent = t('birthSaved');
                successMsg.classList.remove('hidden');

                setTimeout(() => {
                    const prev = document.referrer;
                    if (prev && prev.includes('dashboard.html')) window.location.href = 'dashboard.html';
                    else if (prev && prev.includes('cardsinfo.html')) window.location.href = 'cardsinfo.html';
                    else if (prev && prev.includes('result.html')) window.location.href = 'result.html';
                    else window.location.href = 'dashboard.html';
                }, 1500);
            } catch (err) {
                errorMsg.textContent = err.message;
                errorMsg.classList.remove('hidden');
                successMsg.classList.add('hidden');
            }
        });
    </script>
</body>
</html>

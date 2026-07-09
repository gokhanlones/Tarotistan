const LANG = {
    tr: {
        appName: "TAROTISTAN",
        login: "Giriş Yap",
        register: "Kayıt Ol",
        email: "E-posta",
        password: "Şifre",
        passwordConfirm: "Şifre Tekrar",
        googleContinue: "Google ile devam et",
        showPassword: "Göster",
        hidePassword: "Gizle",
        passwordsNotMatch: "Şifreler eşleşmiyor",
        
        // Email doğrulama
        verifyTitle: "Email Doğrulama",
        verifySent: "6 haneli kod gönderildi",
        verifyPlaceholder: "Kodu girin",
        verifyButton: "Doğrula",
        resendCode: "Tekrar gönder",
        resendWait: "sn sonra tekrar gönder",
        invalidCode: "Geçersiz veya süresi dolmuş kod",
        
        // Terms
        termsTitle: "Gizlilik Politikası ve Kullanım Şartları",
        termsText: `Tarotistan uygulamasını kullanarak aşağıdaki şartları kabul etmiş olursunuz:

1. KİŞİSEL VERİLER: E-posta adresiniz ve çekim geçmişiniz güvenli bir şekilde saklanır. Bilgileriniz üçüncü taraflarla paylaşılmaz.

2. KULLANIM: Uygulama eğlence ve kişisel gelişim amaçlıdır. Tıbbi, hukuki veya finansal kararlar için kullanılmamalıdır.

3. REKLAMLAR: Ücretsiz kullanımda ödüllü reklamlar gösterilir. Premium üyelikle reklamsız deneyim sunulur.

4. ÜYELİK: Premium üyelik aylık veya yıllık olarak satın alınabilir. İptal istediğiniz an yapılabilir.

5. SORUMLULUK REDDİ: Tarot çekimleri yorum niteliğindedir, bağlayıcı değildir.`,
        termsAccept: "Okudum, kabul ediyorum",
        termsRequired: "Devam etmek için onaylamanız gerekir",
        continueButton: "Devam Et",

        // Dashboard / Seçici
        dashboardTitle: "TAROTİSTAN",
        singleCardTitle: "Aklındaki sorunun cevabı",
        singleCardLabel: "I Kart",
        singleCardAds: "1 Reklam",
        threeCardTitle: "Geçmiş, Şimdi, Gelecek",
        threeCardLabel: "III Kart",
        threeCardAds: "3 Reklam",
        adFree: "Reklamsız",
        dailyLimit: "Günlük 5 oturum",
        monthlyPrice: "Aylık 49,99 TL",
        yearlyPrice: "Yıllık 399,99 TL",

        // Niyet modalı
        intentTitle: "Niyet",

        // Kart seçim ekranı (cards.html)
        cardsPickOne: "Aklındaki soru için bir kart seç.",
        cardsSelectedSingle: "Kart seçildi. Devam etmek için aşağıdaki butona basın.",
        cardsSelectedOf: "kart seçildi",
        cardsSelectedComplete: "Devam etmek için aşağıdaki butona basın.",
        cardsContinueBtn: "Reklam İzle ve Devam Et",
        cardAlt: "Tarot Kartı",
        menuLabel: "Menü",

        // Sonuç ekranı (result.html)
        resultLoading: "Kartlar açılıyor...",
        resultIntentLabel: "Niyetiniz",
        resultNotSpecified: "Belirtilmemiş",
        resultReversedBadge: "TERS",
        resultUpright: "Düz",
        resultReversed: "Ters",
        positionPast: "Geçmiş",
        positionPresent: "Şimdi",
        positionFuture: "Gelecek",
        aiTitle: "Yapay Zeka Yorumu",
        aiDesc: "Bu alanda, çekilen kartlara özel yapay zeka destekli derinlemesine yorum yer alacak.<br>(Entegrasyon sonrası aktif olacaktır)",
        homeBtn: "Ana Sayfa",
        newReadingBtn: "Yeni Çekim",
        resultErrorTitle: "Kartlar yüklenemedi",
        resultErrorDesc: "Lütfen internet bağlantınızı kontrol edin.",
        closeBtn: "Kapat"
    },
    en: {
        appName: "TAROTISTAN",
        login: "Login",
        register: "Register",
        email: "Email",
        password: "Password",
        passwordConfirm: "Confirm Password",
        googleContinue: "Continue with Google",
        showPassword: "Show",
        hidePassword: "Hide",
        passwordsNotMatch: "Passwords do not match",
        
        verifyTitle: "Email Verification",
        verifySent: "6-digit code sent",
        verifyPlaceholder: "Enter code",
        verifyButton: "Verify",
        resendCode: "Resend",
        resendWait: "s to resend",
        invalidCode: "Invalid or expired code",
        
        termsTitle: "Privacy Policy and Terms of Use",
        termsText: `By using the Tarotistan app, you agree to the following terms:

1. PERSONAL DATA: Your email address and draw history are stored securely. Your information is not shared with third parties.

2. USAGE: The app is for entertainment and personal growth purposes only. It should not be used for medical, legal, or financial decisions.

3. ADS: Rewarded ads are shown in free usage. Premium membership offers an ad-free experience.

4. MEMBERSHIP: Premium membership can be purchased monthly or yearly. Cancellation can be done at any time.

5. DISCLAIMER: Tarot draws are for interpretive purposes only and are not binding.`,
        termsAccept: "I have read and agree",
        termsRequired: "You must accept to continue",
        continueButton: "Continue",

        // Dashboard / Selector
        dashboardTitle: "TAROTISTAN",
        singleCardTitle: "The answer to what's on your mind",
        singleCardLabel: "I Card",
        singleCardAds: "1 Ad",
        threeCardTitle: "Past, Present, Future",
        threeCardLabel: "III Card",
        threeCardAds: "3 Ads",
        adFree: "Ad-free",
        dailyLimit: "5 sessions/day",
        monthlyPrice: "Monthly 49.99 TL",
        yearlyPrice: "Yearly 399.99 TL",

        // Intent modal
        intentTitle: "Intention",

        // Card selection screen (cards.html)
        cardsPickOne: "Pick a card for what's on your mind.",
        cardsSelectedSingle: "Card selected. Tap the button below to continue.",
        cardsSelectedOf: "selected",
        cardsSelectedComplete: "Tap the button below to continue.",
        cardsContinueBtn: "Watch Ad and Continue",
        cardAlt: "Tarot Card",
        menuLabel: "Menu",

        // Result screen (result.html)
        resultLoading: "Revealing cards...",
        resultIntentLabel: "Your Intention",
        resultNotSpecified: "Not specified",
        resultReversedBadge: "REVERSED",
        resultUpright: "Upright",
        resultReversed: "Reversed",
        positionPast: "Past",
        positionPresent: "Present",
        positionFuture: "Future",
        aiTitle: "AI Interpretation",
        aiDesc: "This section will feature an in-depth AI-powered interpretation of your drawn cards.<br>(Will be active after integration)",
        homeBtn: "Home",
        newReadingBtn: "New Reading",
        resultErrorTitle: "Couldn't load the cards",
        resultErrorDesc: "Please check your internet connection.",
        closeBtn: "Close"
    }
};

function getLang() {
    const saved = localStorage.getItem('tarotistan-lang');
    if (saved) return saved;
    const systemLang = navigator.language || navigator.userLanguage;
    return systemLang.startsWith('tr') ? 'tr' : 'en';
}

function setLang(code) {
    localStorage.setItem('tarotistan-lang', code);
}

function t(key) {
    return LANG[getLang()][key] || key;
}

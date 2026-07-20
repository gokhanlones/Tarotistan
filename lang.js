const LANG = {
    tr: {
        aiFallback: "Bu çekim için yapay zeka yorumu bulunmuyor.",
        appName: "TAROT'S",
        birthCity: "Doğum Yeri (Şehir)",
        birthCountry: "Ülke",
        birthDay: "Gün",
        birthHour: "Saat",
        birthInfoDesc: "Burç yorumları için doğum bilgilerinizi girin.",
        birthInfoTitle: "Doğum Bilgileri",
        birthLatitude: "Enlem",
        birthLongitude: "Boylam",
        birthMinute: "Dakika",
        birthMonth: "Ay",
        birthRequired: "Lütfen tüm alanları doldurun.",
        birthSaveBtn: "Kaydet",
        birthSaved: "Doğum bilgileriniz kaydedildi.",
        birthYear: "Yıl",
        cardAlt: "Tarot Kartı",
        cardsContinueBtn: "Gönder",
        cardsInfoClose: "Kapat",
        cardsInfoMajor: "Büyük Arkana",
        cardsInfoMinor: "Küçük Arkana",
        cardsInfoReversed: "Ters Anlamı",
        cardsInfoUpright: "Düz Anlamı",
        closeBtn: "Kapat",
        continueButton: "Devam Et",
        cooldownCloseBtn: "Kapat",
        cooldownMessage: "Şu anda kilitli",
        cooldownRemainingPrefix: "Bir sonraki ücretsiz okumana kalan süre:",
        cooldownTitle: "Günlük Ücretsiz Hakkın Doldu",
        dailyHoroscopeAreaDesc: "Doğum bilgilerinizi giriniz",
        dailyHoroscopeAreaTitle: "Günlük Burç Yorumu",
        dashboardTitle: "TAROT'S",
        email: "E-posta",
        googleContinue: "Google ile devam et",
        hidePassword: "Gizle",
        intentTitle: "Niyet",
        login: "Giriş Yap",
        menuLabel: "Menü",
        navHomeLabel: "Anasayfa",
        password: "Şifre",
        passwordConfirm: "Şifre Tekrar",
        passwordsNotMatch: "Şifreler eşleşmiyor",
        premiumCtaBtn: "Premium'a Geç",
        premiumFeature1: "Reklamsız okuma deneyimi",
        premiumFeature2: "Günde 5 okuma hakkı",
        register: "Kayıt Ol",
        resultIntentLabel: "Niyetiniz",
        resultNotSpecified: "Belirtilmemiş",
        resultReversedBadge: "TERS",
        showPassword: "Göster",
        sidebarCards: "Kartlar",
        sidebarLogout: "Çıkış",
        termsAccept: "Okudum, kabul ediyorum",
        termsRequired: "Devam etmek için onaylamanız gerekir",
        termsText: `Tarot's uygulamasını kullanarak aşağıdaki şartları kabul etmiş olursunuz:
        
        1. KİŞİSEL VERİLER: E-posta adresiniz ve çekim geçmişiniz güvenli bir şekilde saklanır. Bilgileriniz üçüncü taraflarla paylaşılmaz.
        
        2. KULLANIM: Uygulama eğlence ve kişisel gelişim amaçlıdır. Tıbbi, hukuki veya finansal kararlar için kullanılmamalıdır.
        
        3. REKLAMLAR: Ücretsiz kullanımda ödüllü reklamlar gösterilir. Premium üyelikle reklamsız deneyim sunulur.
        
        4. ÜYELİK: Premium üyelik aylık veya yıllık olarak satın alınabilir. İptal istediğiniz an yapılabilir.
        
        5. SORUMLULUK REDDİ: Tarot çekimleri yorum niteliğindedir, bağlayıcı değildir.`,
        termsTitle: "Gizlilik Politikası ve Kullanım Şartları"
    },
    en: {
        aiFallback: "No AI interpretation available for this reading.",
        appName: "TAROT'S",
        birthCity: "Birth City",
        birthCountry: "Country",
        birthDay: "Day",
        birthHour: "Hour",
        birthInfoDesc: "Enter your birth details for horoscope readings.",
        birthInfoTitle: "Birth Information",
        birthLatitude: "Latitude",
        birthLongitude: "Longitude",
        birthMinute: "Minute",
        birthMonth: "Month",
        birthRequired: "Please fill in all fields.",
        birthSaveBtn: "Save",
        birthSaved: "Birth information saved.",
        birthYear: "Year",
        cardAlt: "Tarot Card",
        cardsContinueBtn: "Submit",
        cardsInfoClose: "Close",
        cardsInfoMajor: "Major Arcana",
        cardsInfoMinor: "Minor Arcana",
        cardsInfoReversed: "Reversed Meaning",
        cardsInfoUpright: "Upright Meaning",
        closeBtn: "Close",
        continueButton: "Continue",
        cooldownCloseBtn: "Close",
        cooldownMessage: "Currently locked",
        cooldownRemainingPrefix: "Time until your next free reading:",
        cooldownTitle: "Your Free Daily Reading Is Used Up",
        dailyHoroscopeAreaDesc: "Enter your birth information",
        dailyHoroscopeAreaTitle: "Daily Horoscope",
        dashboardTitle: "TAROT'S",
        email: "Email",
        googleContinue: "Continue with Google",
        hidePassword: "Hide",
        intentTitle: "Intention",
        login: "Login",
        menuLabel: "Menu",
        navHomeLabel: "Home",
        password: "Password",
        passwordConfirm: "Confirm Password",
        passwordsNotMatch: "Passwords do not match",
        premiumCtaBtn: "Upgrade to Premium",
        premiumFeature1: "Ad-free reading experience",
        premiumFeature2: "5 readings per day",
        register: "Register",
        resultIntentLabel: "Your Intention",
        resultNotSpecified: "Not specified",
        resultReversedBadge: "REVERSED",
        showPassword: "Show",
        sidebarCards: "Cards",
        sidebarLogout: "Logout",
        termsAccept: "I have read and agree",
        termsRequired: "You must accept to continue",
        termsText: `By using the Tarot's app, you agree to the following terms:
        
        1. PERSONAL DATA: Your email address and draw history are stored securely. Your information is not shared with third parties.
        
        2. USAGE: The app is for entertainment and personal growth purposes only. It should not be used for medical, legal, or financial decisions.
        
        3. ADS: Rewarded ads are shown in free usage. Premium membership offers an ad-free experience.
        
        4. MEMBERSHIP: Premium membership can be purchased monthly or yearly. Cancellation can be done at any time.
        
        5. DISCLAIMER: Tarot draws are for interpretive purposes only and are not binding.`,
        termsTitle: "Privacy Policy and Terms of Use"
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

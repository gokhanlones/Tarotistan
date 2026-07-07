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
        passwordsNotMatch: "Şifreler eşleşmiyor"
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
        passwordsNotMatch: "Passwords do not match"
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

function setCookie(name, value, days = 30) {
    const maxAge = days * 24 * 60 * 60;
    document.cookie = `${name}=${value}; max-age=${maxAge}; path=/`;
}

function getCookie(name) {
    const value = `; ${document?.cookie}`;
    const parts = value?.split(`; ${name}=`);
    if (parts?.length === 2) return parts?.pop()?.split(";")?.shift();
}


const logoutHandler = () => {
    document.cookie.split(";").forEach(cookie => {
        document.cookie = cookie
            .replace(/^ +/, "")
            .replace(/=.*/, "=;expires=" + new Date().toUTCString() + ";path=/");
        location.reload()
    });
};

export { setCookie, getCookie, logoutHandler };
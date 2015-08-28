(function() {
    sessionStorage.name = "wangcy";
    console.log(sessionStorage.name);

    sessionStorage.setItem("姓名", "王春阳");
    console.log(sessionStorage.getItem("姓名"));

    sessionStorage.removeItem("name");

    window.onload = function() {
        var email = document.getElementById("userEmail");

        email.oninput = function() {
            sessionStorage.setItem("userEmail", this.value);
        }

        email.value = sessionStorage.getItem("userEmail");
    }
}());
function login(){

    const utilizador = document.getElementById("utilizador").value;

    const pin = document.getElementById("pin").value;

    if(pin === "0793"){

        localStorage.setItem(
            "utilizador",
            utilizador
        );

        window.location.href = "dashboard.html";

    } else {

        alert("PIN incorreto");

    }

}

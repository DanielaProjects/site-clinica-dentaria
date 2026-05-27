function login(){

    const pin = document.getElementById("pin").value;

    if(pin === "0793"){

        window.location.href = "dashboard.html";

    } else {

        alert("PIN incorreto");

    }

}

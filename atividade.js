window.onload = function () {
    
    var modal = document.getElementById("modal");
    var btn = document.getElementById("abrir");
    var span = document.getElementsByClassName("close")[0];

    btn.onclick = function () {
        modal.style.display = "flex";
    }

    span.onclick = function () {
        modal.style.display = "none";
    }

    var save = document.getElementById("salvar")

    save.onclick = function () {
        localStorage.setItem("nome", document.getElementById("nome").value);
        localStorage.setItem("email", document.getElementById("email").value);
        localStorage.setItem("telefone", document.getElementById("telefone").value);
        localStorage.setItem("cpf", document.getElementById("cpf").value);
        localStorage.setItem("senha", document.getElementById("senha").value);
        alert("Você foi cadastrado");
    }

};


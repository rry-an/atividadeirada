window.onload = function () {
    const nome = localStorage.getItem("nome");
    document.getElementById("nome").value = nome

    const email = localStorage.getItem("email");
    document.getElementById("email").value = email

    const telefone = localStorage.getItem("telefone");
    document.getElementById("telefone").value = telefone

    const cpf = localStorage.getItem("cpf");
    document.getElementById("cpf").value = cpf

    const senha = localStorage.getItem("senha");
    document.getElementById("senha").value = senha

    

    

};


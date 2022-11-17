function validateLogin() {
    user = document.getElementById("user");
    pwd = document.getElementById("pwd");

    if (user.value.trim() == "") {
        alert("Usuário em branco! Favor preenchê-lo");
        user.focus();
    } else if (pwd.value == "") {
        alert("Senha em branco! Favor preenchê-la");
        pwd.focus();
    } else {
        processLogin(user.value, pwd.value);
    }

}

function processLogin(user, pwd) {
    var file = "json/users.json";
    //var file = "https://wilton-filho.github.io/JS-GitHub/aulas/jogo/login/json/users2.json";
    fetch(file)
        .then(response => response.json())
        .then(content => checkUserLogin(content, user, pwd))
        .catch(err => alert("erro na leitura do JSON"));
}

function checkUserLogin(content, user, pwd) {
    var achouUser = false;
    for (i = 0; i < content.usuarios.length; i++) {
        if (content.usuarios[i].user == user && content.usuarios[i].pwd == pwd) {
            achouUser = true;
            break;
        }
    }
    if (achouUser) {
        alert("Usuário existente!");
    } else {
        alert("Usuário inexistente!");
    }
}
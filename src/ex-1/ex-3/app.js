const message = () => {
    let nameEntered = document.getElementById('name').value;
        document.getElementById('welcome').innerHTML = `Bienvenido ${nameEntered}`;
}

message();
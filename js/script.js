var eMail = ['maria@live.com', 'filippo@gmail.com', 'ottavio@gmail.com'];

var userEmail = prompt('Inserisci la tua email');

var check = false;

for (var i = 0; i < eMail.length; i++) {
    if (userEmail === eMail[i]) {
        check = true;
    }
}

if (check = true) {
    document.getElementById('welcome').innerHTML = 'Benvenuto/a!';
} else {
    alert('Non sei registrato al sito!');
}

function alea() {
    document.getElementById('start').innerHTML = 'Alea Iacta Est!'
    document.getElementById('user-result').innerHTML = Math.floor(Math.random() * 10);
    document.getElementById('computer-result').innerHTML = Math.floor(Math.random() * 10);
    if (parseInt(document.getElementById('user-result').innerHTML = Math.floor(Math.random() * 10)) > parseInt(document.getElementById('computer-result').innerHTML = Math.floor(Math.random() * 10))) {
        document.getElementById('winner').innerHTML = 'Complimenti! Hai vinto!';
    } else {
        document.getElementById('winner').innerHTML = 'Oh no! Purtroppo hai perso!';
    }
}


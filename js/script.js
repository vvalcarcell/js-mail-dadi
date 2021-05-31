var eMail = ['maria@live.com', 'filippo@gmail.com', 'ottavio@gmail.com'];

var userEmail = prompt('Inserisci la tua email');

for (var i = 0; i < eMail.length; i++) {
    if (userEmail === eMail[i]) {
        document.getElementById('welcome').innerHTML = 'Benvenuto/a!';
    } else {
        alert('Non sei registrato al sito!')
    }
}

function alea() {
    document.getElementById('start').innerHTML = 'Alea Iacta Est!'
    document.getElementById('user-result').innerHTML = Math.floor(Math.random() * 10);
    document.getElementById('computer-result').innerHTML = Math.floor(Math.random() * 10);
}
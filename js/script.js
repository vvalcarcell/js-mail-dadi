var eMail = ['maria@live.com', 'filippo@gmail.com', 'ottavio@gmail.com'];

var userEmail = prompt('Inserisci la tua email');

for (var i = 0; i < eMail.length; i++) {
    if (userEmail === eMail[i]) {
        document.getElementById('welcome').innerHTML = 'Benvenuto/a!';
    }
}
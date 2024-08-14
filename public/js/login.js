const form = document.getElementById('loginForm');
form.addEventListener('submit', (e) => {
    e.preventDefault();
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    fetch('/login', { // login/register
        method: 'POST',
        headers: {
            'Content-type': 'application/json'
        },
        body: JSON.stringify({ username, password })
    })
    .then(res => res.text())
    .then(data => {
        console.log(data);
        alert(data);
    })
    .catch(error => console.error('Error: ', error));
});

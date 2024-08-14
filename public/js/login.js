const form = document.querySelector('form');

form.addEventListener("submit", (e) => {
    e.preventDefault();
    const username = document.getElementById('username');
    const password = document.getElementById('password');

    fetch('http://localhost:3000/login', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ username, password})
    })
    .then(response => response.text())
    .then(data => {
        console.log(data);
        alert(data);
    })
    .catch(error => console.error('Error: ', error));
});
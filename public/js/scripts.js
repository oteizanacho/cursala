const form = document.querySelector('form')
form.addEventListener('submit', (e) => {
    e.preventDefault()
    console.log(e)
    const username = document.getElementById('username').value
    const password = document.getElementById('password').value
    console.log(username, password)
})

console.log('script')
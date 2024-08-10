const universidades = document.getElementById('unibtn')
const profesores = document.getElementById('profebtn')
const materias = document.getElementById('matebtn')

universidades.addEventListener('click', (e) => {
    const div = document.getElementById('link-container')
    div.innerHTML = ''
    console.log('universidades')
    for(let i = 0; i < 5; i ++){
        const link = document.createElement('a')
        link.href = ""
        link.innerText = 'UNLP'
        div.append(link)
    }
})

profesores.addEventListener('click', (e) => {
    const div = document.getElementById('link-container')
    div.innerHTML = ''
    console.log('profesores')
    for(let i = 0; i < 5; i ++){
        const link = document.createElement('a')
        link.href = ""
        link.innerText = 'profesor'
        div.append(link)
    }
})

materias.addEventListener('click', (e) => {
    const div = document.getElementById('link-container')
    div.innerHTML = ''
    console.log('materias')
    for(let i = 0; i < 5; i ++){
        const link = document.createElement('a')
        link.href = ""
        link.innerText = 'Analisis matematico 1'
        div.append(link)
    }
})
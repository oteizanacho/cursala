const universidades = document.getElementById('unibtn')
const profesores = document.getElementById('profebtn')
const materias = document.getElementById('matebtn')
const topuni = document.getElementById('topunibtn')
const topprofe = document.getElementById('topprofebtn')

const unilink = document.getElementById('universidades')
const profelink = document.getElementById('profesores')
const matlink = document.getElementById('materias')
const topunilink = document.getElementById('topuni')
const topprofelink = document.getElementById('topprofe')

const links = [unilink, profelink, matlink, topunilink, topprofelink]

universidades.addEventListener('click', (e) => {
    links.forEach(link => {
        link.style.display = 'none'
    })
    unilink.style.display = 'block'
})

profesores.addEventListener('click', (e) => {
    links.forEach(link => {
        link.style.display = 'none'
    })
    profelink.style.display = 'block'
})

materias.addEventListener('click', (e) => {
    links.forEach(link => {
        link.style.display = 'none'
    })
    matlink.style.display = 'block'
})

topuni.addEventListener('click', (e) => {
    links.forEach(link => {
        link.style.display = 'none'
    })
    topunilink.style.display = 'block'
})

topprofe.addEventListener('click', (e) => {
    links.forEach(link => {
        link.style.display = 'none'
    })
    topprofelink.style.display = 'block'
})
const menuHanburguer = document.getElementById('menu-burguer')
const menuMobile = document.getElementById('menu-mobile')

menuHanburguer.addEventListener('click', () => {
    menuMobile.classList.toggle('show')
})


const spanDrop = document.querySelectorAll('.dropdown')
const servicos = document.querySelectorAll('.dropdown-menu-mobile01')

spanDrop.forEach((each)=>{
    each.addEventListener('click', ()=>{
        servicos.forEach((serv)=>{
            serv.classList.toggle('show')
        })
    })
})


const spanDrop02 = document.querySelectorAll('.dropdown-segundo')

spanDrop02.forEach((each)=>{
    each.addEventListener('click', ()=>{

        let serv = each.closest("li") // pega o li mais proximo (pai, avo, etc)

        let dropServicos2 = serv.querySelector('.dropdown-menu-mobile02') // dentro do li selecionado procura a class dropdown-menu-mobile02 e armazana na variavel
        
        if (dropServicos2) {
            dropServicos2.classList.toggle('show')
        }
        })
    })




const form = document.querySelector('#form')
let resp = document.querySelector('.resp')
let salarioATT = 0

form.addEventListener('submit', function (e) {
    e.preventDefault()
    const inputMas = document.getElementById('masc')
    const inputFem = document.getElementById('fem')
    const inputSal = document.querySelector('.salario')
    const salario = Number(inputSal.value)
    
    if(salario == 0){
        setResp('Informe o salario')
    } else if (!inputFem.checked && !inputMas.checked){
        setResp('Informe o gênero')
    } 

    if(inputFem.checked && salario !== 0){
        calcularSalMasc(salario)
    } else if (inputMas.checked && salario !== 0){
        calcularSalFem(salario)
    }
})

const setResp = (msg) => {
    resp.innerHTML = ''
    let p = document.createElement('p')
    p.innerHTML = msg
    resp.appendChild(p)
}

const calcularSalMasc = (salario) => {
    let p = document.createElement('p')
    salarioATT = salario + (salario * 0.205)
    p.innerHTML = `Se você fosse um homem seu salário seria de R$ ${salarioATT}. Você ganharia 20.5% a mais.`
    resp.appendChild(p)
}

const calcularSalFem = (salario) => {
    let p = document.createElement('p')
    salarioATT = salario - (salario * 0.205)
    p.innerHTML = `Se você fosse uma mulher seu salário seria de R$ ${salarioATT}. Você ganharia 20.5% a menos.`
    resp.appendChild(p)
}


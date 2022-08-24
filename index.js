// simulador de credito
let totalCredito = 0
let adquirirCredito = parseInt(
    prompt('que tipo de credito desea consultar: 1. Auto $2000 - 2.Vivienda $10000 - 3.Negocio $13000 - 4.Prestamo personal $6500'
    )
)

let consultarCredito = true
let seguirConsultando

while(consultarCredito === true){
    if(adquirirCredito === 1){
        totalCredito = totalCredito + 2000
    }
    else if(adquirirCredito === 2){
        totalCredito = totalCredito + 10000
    }
    else if(adquirirCredito === 3){
        totalCredito = totalCredito + 13000
    }
    else if(adquirirCredito === 4){
        totalCredito = totalCredito + 6500
    }else{
        adquirirCredito = parseInt(prompt('seleccione un credito existente: 1. Auto - 2.Vivienda - 3.Negocio - 4.Prestamo personal'))
        continue
    }


seguirConsultando = parseInt(prompt('desea seguir consultando? 1.Si - 2.No'))

if(seguirConsultando === 1){
    adquirirCredito = parseInt(prompt('que tipo de credito desea consultar: 1.Auto - 2.Vivienda - 3.Negocio - 4.Prestamo personal'))
}else if(seguirConsultando === 2){
    consultarCredito = false
}

}

document.write(`El monto del credito sin intereses es: <b>${totalCredito}</b><br><br>`)

function calcularIntereses(total){
    let intereses = 0
    if(total<=2000){
        intereses = 25
    }else if(total>2000 && total<=8000){
        intereses = 20
    }else if(total>8000 && total<= 15000){
        intereses = 17
    }else if(total>15000 && total<= 25000){
        intereses = 12
    }else{
        intereses = 10
    }
    let totalIntereses = total *(intereses/100)
    total = total + totalIntereses
    return total
}
let totalConInteres = calcularIntereses(totalCredito)
document.write(`El monto del credito con intereses es: <b>${totalConInteres}</b><br><br>`)


function calcularCuotas(monto){
    let cuotas = 0
    if(monto<=2000){
        cuotas = 3
    }else if(monto>2000 && monto<=8000){
        cuotas = 5
    }else if(monto>8000 && monto<= 15000){
        cuotas = 8
    }else if(monto>15000 && monto<= 25000){
        cuotas = 12
    }else{
        cuotas = 18
    }
let totalCuotas = monto /(cuotas)
monto = totalCuotas
return monto

}
let cuotaDelCredito = calcularCuotas(totalConInteres)
document.write(`El monto de tu cuotas es:  <b>${cuotaDelCredito}</b><br><br>`) 


function numeroDeCuotas(totalCredito){
    let numCuotas = 0
    if(totalCredito<=2000){
        numCuotas = 3
    }else if(totalCredito>2000 && totalCredito<=8000){
        numCuotas = 5
    }else if(totalCredito>8000 && totalCredito<=15000){
        numCuotas = 8
    }else if(totalCredito<15000 && totalCredito <=25000){
        numCuotas = 12
    }else{
        numCuotas = 18
    }
let numeroTotalCuotas = totalCredito/(numCuotas)
totalCredito = numeroTotalCuotas
return numCuotas
}
let cuotasFinales = numeroDeCuotas(totalConInteres)
document.write(`numero de cuotas a pagar: <b>${cuotasFinales}</>`)

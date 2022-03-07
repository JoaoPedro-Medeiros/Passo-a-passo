var txt_inic = document.getElementById('inicio')
var txt_fim = document.getElementById('fim')
var txt_passo = document.getElementById('passo')
var res = document.getElementById('res')

function passos(){

    var passo = Number(txt_passo.value)
    var mult = 1
    if(Number(txt_fim.value) < Number(txt_inic.value)){
        mult = -1
    }
    
    //window.alert(`Number(txt_inic.value): ${Number(txt_inic.value)}  Number(txt_fim.value): ${Number(txt_fim.value)}`)
    if(txt_inic.value.length == 0 || txt_fim.value.length == 0){
        res.innerHTML = ''
        res.innerHTML += ' Impossível contar!'
    }else if(passo == 0){
        //window.alert(`Number(txt_passo.value): ${Number(txt_passo.value)} passo: ${passo}`)
        window.alert('Número de passos impossível de prosseguir! Será considerado PASSO = 1.')
        res.innerHTML = 'Resultado: '
        passo = 1
        execute(passo, mult)
    }else{
        res.innerHTML = 'Resultado: '
        execute(passo, mult)
    }
}

function execute(passo, mult){
    
    for(var cont = Number(txt_inic.value);cont != Number(txt_fim.value);(cont+=(passo*mult))){
        res.innerHTML += ` ${cont}`
        if(cont+(passo*mult) != Number(txt_fim.value)){
            if(cont+(passo*mult)+((-1)*mult) != Number(txt_fim.value)){
                res.innerHTML += ' &#128073'//Mão
            }else{
                res.innerHTML += ` &#127937`//Bandeira
                break
            }
        }else{
            res.innerHTML += ` &#128073 ${cont+(passo*mult)}`
            res.innerHTML += ' &#127937'//Bandeira
        }
    }
}
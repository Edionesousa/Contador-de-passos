function contar(){

    let ini = document.getElementById('txti')   // busca caixa do innput inicio.//
    let fim = document.getElementById('txtf') // busca caixa do innput fim.//
    let passo = document.getElementById('txtp') // busca caixa do innput passo.//
    let res = document.getElementById('res') // prepara o retoro.//

if(ini.value.length == 0|| fim.value.length == 0 || passo.value.length == 0){

    window.alert('Algo deu errado tente novamente.')  // valida todos os campos zerados que podera ter, para nao acontecer.//

} else{
        res.innerHTML = 'contando:'
        let i = Number(ini.value) // /converte string em Numero.//
        let f = Number(fim.value) // /converte string em Numero.//
        let p = Number(passo.value) // /converte string em Numero.//
        
        if(i<f){

        for(let c = i; c <= f ; c += p){ // formula fara toda parte de funcionalidade do cod//
            res.innerHTML += `${c}\u{1F449}` // isere emoji // MAO.//
        }
        }else{
            for(let c = i; c>= f; c -=p){
                res.innerHTML += `${c}\u{1f449}`
            }
        } 
        res.innerHTML += `\u{1F3C1}` // insere emoji indicado HOME, OU FIM.//
    }
       
}
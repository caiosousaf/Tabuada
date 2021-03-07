    var n1 = document.getElementById("t1")
    var ct = document.getElementById("result")
    var res = document.getElementById("res")
function calculate() {
    var tabuada = ''
    res.innerHTML = ('')
    if (n1.value.length == 0) {
        window.alert('[ERROR] Voce esqueceu de digitar um número')
        res.innerHTML = ('[ERROR] Impossivel Multiplicar')
    } else {
        var n = Number(n1.value)
        for (var c = 0; c <= 100; c++) {
            tabuada += n + " x " + c + " = " + n * c + ' \ \ \ \ \ \ '; 
            ct.innerText = tabuada
        }
    }
}
function Sum(){
    var tabuada = ''
    res.innerHTML = ('')
    if (n1.value.length == 0) {
        window.alert('[ERROR] Voce esqueceu de digitar um número')
        res.innerHTML = ('[ERROR] Impossivel Somar')
    } else {
        var n = Number(n1.value)
        for (var c = 0; c <= 100; c++) {
            tabuada += n + " + " + c + " = " + (n + c) + ' \ \ \ \ \ \ '; 
            ct.innerText = tabuada
        }
    }
}
function Subtraction(){
    var tabuada = ''
    res.innerHTML = ('')
    if (n1.value.length == 0) {
        window.alert('[ERROR] Voce esqueceu de digitar um número')
        res.innerHTML = ('[ERROR] Impossivel Subtrair')
    } else {
        var n = Number(n1.value)
        for (var c = 0; c <= 100; c++) {
            tabuada += n + " - " + c + " = " + (n - c) + ' \ \ \ \ \ \ '; 
            ct.innerText = tabuada
        }
    }
}

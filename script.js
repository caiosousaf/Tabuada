function calcular() {
    var n1 = document.getElementById("t1")
    var ct = document.getElementById("resultado")
    var res = document.getElementById("res")
    var tabuada = ''
    res.innerHTML = ('')
    if (n1.value.length == 0) {
        window.alert('[ERROR] Voce esqueceu de digitar um número')
        res.innerHTML = ('[ERROR] Impossivel Multiplicar')
    } else {
        var n = Number(n1.value)
        var re = ct
        for (var c = 1; c <= 100; c++) {
            tabuada += n + " x " + c + " = " + n * c + ' \ \ \ \ \ \ '; 
            re.innerText = tabuada
        }
    }
}
function somar(){
    var n1 = document.getElementById("t1")
    var ct = document.getElementById("resultado")
    var res = document.getElementById("res")
    var tabuada = ''
    res.innerHTML = ('')
    if (n1.value.length == 0) {
        window.alert('[ERROR] Voce esqueceu de digitar um número')
        res.innerHTML = ('[ERROR] Impossivel Somar')
    } else {
        var n = Number(n1.value)
        var re = ct
        for (var c = 1; c <= 100; c++) {
            tabuada += n + " + " + c + " = " + (n + c) + ' \ \ \ \ \ \ '; 
            re.innerText = tabuada
        }
    }
}
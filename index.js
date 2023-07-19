var paragrafo2 = document.getElementById('paragrafo2')
paragrafo2.style.display = "none"


function quandoInteragir() {
    var btn = document.getElementById('btn1')
    var btn2 = document.getElementById('btn2')
    var btn3 = document.getElementById('btn3')
    var btn4 = document.getElementById('btn4')
    var btn5 = document.getElementById('btn5')
    res = 1
    btn.style.backgroundColor = 'white'
    btn2.style.backgroundColor = 'rgba(57, 58, 65, 0.582)'
    btn3.style.backgroundColor = 'rgba(57, 58, 65, 0.582)'
    btn4.style.backgroundColor = 'rgba(57, 58, 65, 0.582)'
    btn5.style.backgroundColor = 'rgba(57, 58, 65, 0.582)'
}

function quandoInteragir2() {
    var btn = document.getElementById('btn1')
    var btn2 = document.getElementById('btn2')
    var btn3 = document.getElementById('btn3')
    var btn4 = document.getElementById('btn4')
    var btn5 = document.getElementById('btn5')
    res = 2
    btn.style.backgroundColor = 'rgba(57, 58, 65, 0.582)'
    btn2.style.backgroundColor = 'white'
    btn3.style.backgroundColor = 'rgba(57, 58, 65, 0.582)'
    btn4.style.backgroundColor = 'rgba(57, 58, 65, 0.582)'
    btn5.style.backgroundColor = 'rgba(57, 58, 65, 0.582)'
}

function quandoInteragir3() {
    var btn = document.getElementById('btn1')
    var btn2 = document.getElementById('btn2')
    var btn3 = document.getElementById('btn3')
    var btn4 = document.getElementById('btn4')
    var btn5 = document.getElementById('btn5')
    res = 3
    btn.style.backgroundColor = 'rgba(57, 58, 65, 0.582)'
    btn2.style.backgroundColor = 'rgba(57, 58, 65, 0.582)'
    btn3.style.backgroundColor = 'white'
    btn4.style.backgroundColor = 'rgba(57, 58, 65, 0.582)'
    btn5.style.backgroundColor = 'rgba(57, 58, 65, 0.582)'
}

function quandoInteragir4() {
    var btn = document.getElementById('btn1')
    var btn2 = document.getElementById('btn2')
    var btn3 = document.getElementById('btn3')
    var btn4 = document.getElementById('btn4')
    var btn5 = document.getElementById('btn5')
    res = 4
    btn.style.backgroundColor = 'rgba(57, 58, 65, 0.582)'
    btn2.style.backgroundColor = 'rgba(57, 58, 65, 0.582)'
    btn3.style.backgroundColor = 'rgba(57, 58, 65, 0.582)'
    btn4.style.backgroundColor = 'white'
    btn5.style.backgroundColor = 'rgba(57, 58, 65, 0.582)'
}

function quandoInteragir5() {
    var btn = document.getElementById('btn1')
    var btn2 = document.getElementById('btn2')
    var btn3 = document.getElementById('btn3')
    var btn4 = document.getElementById('btn4')
    var btn5 = document.getElementById('btn5')
    res = 5
    btn.style.backgroundColor = 'rgba(57, 58, 65, 0.582)'
    btn2.style.backgroundColor = 'rgba(57, 58, 65, 0.582)'
    btn3.style.backgroundColor = 'rgba(57, 58, 65, 0.582)'
    btn4.style.backgroundColor = 'rgba(57, 58, 65, 0.582)'
    btn5.style.backgroundColor = 'white'
}

function resultado(){
    var resultado = res
    var box3 = document.getElementById('box3')
    var box4 = document.getElementById('box4')
    var paragrafo2 = document.getElementById('paragrafo2')
    var paragrafo = document.getElementById('paragrafo')
    var h1 = document.getElementById('h1')
    paragrafo.innerHTML = "We appreciate you taking the time to give a rating<br>If you ever need more support, don't hesilate to<br>get in touch!"
    paragrafo2.style.display = ""
    paragrafo2.innerHTML = `You selected ${resultado} out of 5`
    h1.innerHTML = "Thank you!"
    box3.style.display = "none"
    box4.style.display = "none"
    var star = document.getElementById('star')
    star.src = 'images/illustration-thank-you.svg'
    var box2 = document.getElementById('box2')
    box2.style.textAlign = "Center"
}
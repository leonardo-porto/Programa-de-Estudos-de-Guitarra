console.log('teste')

let menuH = document.getElementById('menuH')
let estrutura = document.getElementById('estrutura')
let tipo = document.getElementById('tipo')
let tonalidade = document.getElementById('tonalidade')
let botao0 = document.getElementById('botao0')
let posicao = document.getElementById('posicao')
let video = document.getElementById('video')
let inputVideo = document.getElementById('inputVideo')
let botao1 = document.getElementById('botao1')
let clear = document.getElementById('limpar')
let mostrar = document.getElementById('mostrar')
let botao = document.getElementById('botao')
let pestana = document.getElementById('pestana')
let pdf = document.getElementById('pdf')
let lista = document.getElementById('lista')
let corda = document.getElementsByClassName('corda')
let traste = document.getElementsByClassName('traste')
let nota = document.getElementsByClassName('nota')
let ex1 = document.getElementById('ex1')
let ex2 = document.getElementById('ex2')
let ex3 = document.getElementById('ex3')
let ex4 = document.getElementById('ex4')
let moldura = document.getElementById('moldura')
let posicao1 = document.getElementById('posicao1')
let posicao2 = document.getElementById('posicao2')
let posicao3 = document.getElementById('posicao3')
let posicao4 = document.getElementById('posicao4')
let posicao5 = document.getElementById('posicao5')
let all = document.getElementsByTagName('*')
let bolinha = document.getElementsByClassName('bolinha')
let body = document.body
let timerSvg = document.getElementById('timerSvg')
let aviso = document.getElementById('aviso')
let timer = document.getElementById('timer')
let esquerda = document.getElementById('esquerda')
let direita = document.getElementById('direita')
let contadorPosicao = 1





menuH.onclick = function () {

    lista.style.right = '10px'

    for (i = 0; i < corda.length; i++) {

        corda[i].style.filter = 'blur(5px)'


    }

    
    for (i = 0; i < bolinha.length; i++) {

        bolinha[i].style.filter = 'blur(5px)'


    }

    for (i = 0; i < traste.length; i++) {

        traste[i].style.filter = 'blur(5px)'


    }

    for (i = 0; i < nota.length; i++) {

        nota[i].style.filter = 'blur(5px)'


    }



}

if (lista.style.right == '-550px') {

    for (i = 0; i < corda.length; i++) {

        corda[i].style.filter = 'blur(0px)'


    }

    for (i = 0; i < traste.length; i++) {

        traste[i].style.filter = 'blur(0px)'


    }

    for (i = 0; i < nota.length; i++) {

        nota[i].style.filter = 'blur(0px)'


    }



}

esquerda.onclick = function () {

    console.log('esquerda')
    contadorPosicao--
    console.log(contadorPosicao)

    if (contadorPosicao == 0) {

        molduraF(0)


    } else if (contadorPosicao == 1) {

        molduraF(3)


    } else if (contadorPosicao == 2) {

        molduraF(5)


    } else if (contadorPosicao == 3) {

        molduraF(8)


    } else if (contadorPosicao == 4) {

        molduraF(10)


    } else if (contadorPosicao <= 0) {

        molduraF(0)
        contadorPosicao = 0


    } else if (contadorPosicao >= 4) {

        molduraF(10)
        contadorPosicao = 4


    }

}

direita.onclick = function () {

    console.log('direita')
    contadorPosicao++
    console.log(contadorPosicao)

    if (contadorPosicao == 0) {

        molduraF(0)


    } else if (contadorPosicao == 1) {

        molduraF(3)


    } else if (contadorPosicao == 2) {

        molduraF(5)


    } else if (contadorPosicao == 3) {

        molduraF(8)


    } else if (contadorPosicao == 4) {

        molduraF(10)


    } else if (contadorPosicao <= 0) {

        molduraF(0)
        contadorPosicao = 0


    } else if (contadorPosicao >= 4) {

        molduraF(10)
        contadorPosicao = 4


    }

}





bolinha[1].onclick = function () {

    for (i = 0; i < corda.length; i++) {

        corda[i].style.backgroundColor = 'gray'


    }

    for (i = 0; i < traste.length; i++) {

        traste[i].style.backgroundColor = 'gray'


    }

    for (i = 0; i < bolinha.length; i++) {

        bolinha[i].style.backgroundColor = 'gray'


    }

    body.style.backgroundColor = 'white'

}

bolinha[0].onclick = function () {

    for (i = 0; i < corda.length; i++) {

        corda[i].style.backgroundColor = 'orangered'


    }

    for (i = 0; i < traste.length; i++) {

        traste[i].style.backgroundColor = 'orangered'


    }

    for (i = 0; i < bolinha.length; i++) {

        bolinha[i].style.backgroundColor = 'orangered'


    }

    body.style.backgroundColor = '#1F3340'

}

timerSvg.onmouseover = function () {


    aviso.style.display = 'block'

}

timerSvg.onmouseout = function () {


    aviso.style.display = 'none'

}

timerSvg.onclick = function () {


    timer.style.animation = 'timer 600s linear'

    setTimeout(function () {

        aviso.style.display = 'block'
        aviso.innerHTML = 'Já chegamos na metade! Força, falta pouco. Não deixe as distrações te pararem!!!'
        aviso.style.animation = 'pisca 1s linear 5'

    }, 1000 * 60 * 5)

    setTimeout(function () {

        alert('Exercício finalizado!!!')
        
    }, 1000*60*10)

}







ex1.onclick = function () {

    lista.style.right = '-550px'

    ex1.style.backgroundColor = 'orange'
}

for (i = 0; i < bolinha.length; i++) {

    bolinha[i].style.backgroundColor = 'grey'


}

console.log(all.length)

posicao1.onclick = function () {

    molduraF(8)
    moldura.style.animation = 'cresce 1s linear'



}

posicao2.onclick = function () {

    molduraF(10)
    moldura.style.animation = 'cresce 1s linear'



}

posicao3.onclick = function () {

    molduraF(0)
    moldura.style.animation = 'cresce 1s linear'


}

posicao4.onclick = function () {

    molduraF(3)
    moldura.style.animation = 'cresce 1s linear'


}

posicao5.onclick = function () {

    molduraF(5)
    moldura.style.animation = 'cresce 1s linear'


}



function molduraF(casa) {

    moldura.style.display = 'block'


    if (casa == 1) {

        moldura.style.left = '100px'


    } else if (casa == 0) {

        moldura.style.left = '20px'

    } else if (casa == 2) {

        moldura.style.left = '180px'
    } else if (casa == 3) {

        moldura.style.left = '260px'
    } else if (casa == 4) {

        moldura.style.left = '340px'
    } else if (casa == 5) {

        moldura.style.left = '420px'
    } else if (casa == 6) {

        moldura.style.left = '500px'
    } else if (casa == 7) {

        moldura.style.left = '580px'
    } else if (casa == 8) {

        moldura.style.left = '660px'
    } else if (casa == 9) {

        moldura.style.left = '740px'
    } else if (casa == 10) {

        moldura.style.left = '820px'
    } else if (casa == 11) {

        moldura.style.left = '900px'
    } else if (casa == 12) {

        moldura.style.left = '980px'
    }

}

ex1.onclick = function () {

    apagar()

    lista.style.right = '-550px'

    molduraF(5)

    for (i = 5; i < 9; i++) {

        corda6[i].style.display = 'block'
        corda6[i].style.backgroundColor = 'greeyellow'

        corda5[i].style.display = 'block'
        corda5[i].style.backgroundColor = 'greeyellow'

        corda4[i].style.display = 'block'
        corda4[i].style.backgroundColor = 'greeyellow'

        corda3[i].style.display = 'block'
        corda3[i].style.backgroundColor = 'greeyellow'

        corda2[i].style.display = 'block'
        corda2[i].style.backgroundColor = 'greeyellow'

        corda1[i].style.display = 'block'
        corda1[i].style.backgroundColor = 'greeyellow'
    }



}

ex2.onclick = function () {

    apagar()
    molduraF(0)
    contadorPosicao = 0
    lista.style.right = '-550px'

    mostrarC()
    mostrarEb()
    mostrarF()
    mostrarG()
    mostrarBb()



}

lista.onmouseleave = function () {

    lista.style.right = '-550px'
    for (i = 0; i < corda.length; i++) {

        corda[i].style.filter = 'blur(0px)'


    }

    

    for (i = 0; i < traste.length; i++) {

        traste[i].style.filter = 'blur(0px)'


    }

    
    for (i = 0; i < bolinha.length; i++) {

        bolinha[i].style.filter = 'blur(0px)'


    }

    for (i = 0; i < nota.length; i++) {

        nota[i].style.filter = 'blur(0px)'


    }

}

ex3.onclick = function () {

    pdf.src = 'mrpc.pdf'
    lista.style.right = '-550px'

}

ex4.onclick = function () {

    lista.style.right = '-550px'

}


botao.style.display = 'none'
input.style.display = 'none'

//tratando o código de incorporação e retirando apenas o src

botao1.onclick = function () {

    let link = inputVideo.value

    let vetorLink = link.split(' ')

    vetorLink = vetorLink[3].replace('src="', '')

    video.src = vetorLink.slice(0, -1)


}




//****************************************************************************************/

botao0.onclick = function () {

    if (estrutura.value == 'acorde' && tipo.value == 'maior' && tonalidade.value == 'c' && posicao.value == '1') {

        cMaior()

    } else if (estrutura.value == 'acorde' && tipo.value == 'maior' && tonalidade.value == 'c' && posicao.value == '2') {

        cMaior(2)

    } else if (estrutura.value == 'acorde' && tipo.value == 'maior' && tonalidade.value == 'c' && posicao.value == '3') {

        cMaior(3)

    } else if (estrutura.value == 'acorde' && tipo.value == 'maior' && tonalidade.value == 'c' && posicao.value == '4') {

        cMaior(4)

    } else if (estrutura.value == 'acorde' && tipo.value == 'maior' && tonalidade.value == 'c' && posicao.value == '5') {

        cMaior(5)

    } else if (estrutura.value == 'acorde' && tipo.value == 'maior' && tonalidade.value == 'cs' && posicao.value == '1') {

        cSMaior()

    } else if (estrutura.value == 'acorde' && tipo.value == 'maior' && tonalidade.value == 'cs' && posicao.value == '2') {

        cSMaior(2)

    } else if (estrutura.value == 'acorde' && tipo.value == 'maior' && tonalidade.value == 'cs' && posicao.value == '3') {

        cSMaior(3)

    } else if (estrutura.value == 'acorde' && tipo.value == 'maior' && tonalidade.value == 'cs' && posicao.value == '4') {

        cSMaior(4)

    } else if (estrutura.value == 'acorde' && tipo.value == 'maior' && tonalidade.value == 'cs' && posicao.value == '5') {

        cSMaior(5)

    } else if (estrutura.value == 'acorde' && tipo.value == 'menor' && tonalidade.value == 'c' && posicao.value == '1') {

        cMenor()

    }

    else if (estrutura.value == 'acorde' && tipo.value == 'maior' && tonalidade.value == 'd' && posicao.value == '1') {

        dMaior()

    } else if (estrutura.value == 'acorde' && tipo.value == 'maior' && tonalidade.value == 'd' && posicao.value == '2') {

        dMaior(2)

    } else if (estrutura.value == 'acorde' && tipo.value == 'maior' && tonalidade.value == 'd' && posicao.value == '3') {

        dMaior(3)

    } else if (estrutura.value == 'acorde' && tipo.value == 'maior' && tonalidade.value == 'd' && posicao.value == '4') {

        dMaior(4)

    } else if (estrutura.value == 'acorde' && tipo.value == 'maior' && tonalidade.value == 'd' && posicao.value == '5') {

        dMaior(5)

    }

    else if (estrutura.value == 'acorde' && tipo.value == 'maior' && tonalidade.value == 'e' && posicao.value == '1') {

        eMaior()

    } else if (estrutura.value == 'acorde' && tipo.value == 'maior' && tonalidade.value == 'f' && posicao.value == '1') {

        fMaior()

    } else if (estrutura.value == 'acorde' && tipo.value == 'maior' && tonalidade.value == 'g' && posicao.value == '1') {

        gMaior()

    } else if (estrutura.value == 'acorde' && tipo.value == 'maior' && tonalidade.value == 'a' && posicao.value == '1') {

        aMaior()

    } else if (estrutura.value == 'acorde' && tipo.value == 'maior' && tonalidade.value == 'b' && posicao.value == '1') {

        bMaior()

    } else if (estrutura.value == 'acorde' && tipo.value == '7' && tonalidade.value == 'c' && posicao.value == '1') {

        c7()

    } else if (estrutura.value == 'acorde' && tipo.value == '7' && tonalidade.value == 'd' && posicao.value == '1') {

        d7()

    } else if (estrutura.value == 'acorde' && tipo.value == '7' && tonalidade.value == 'e' && posicao.value == '1') {

        e7()

    } else if (estrutura.value == 'escala' && tipo.value == 'maior' && tonalidade.value == 'c' && posicao.value == '6') {

        escalaCMaiorF()

    } else if (estrutura.value == 'escala' && tipo.value == 'maior' && tonalidade.value == 'd' && posicao.value == '6') {

        escalaDMaiorF()

    } else if (estrutura.value == 'escala' && tipo.value == 'maior' && tonalidade.value == 'e' && posicao.value == '6') {

        escalaEMaiorF()

    } else if (estrutura.value == 'escala' && tipo.value == 'maior' && tonalidade.value == 'f' && posicao.value == '6') {

        escalaFMaiorF()

    } else if (estrutura.value == 'escala' && tipo.value == 'maior' && tonalidade.value == 'g' && posicao.value == '6') {

        escalaGMaiorF()

    } else if (estrutura.value == 'escala' && tipo.value == 'maior' && tonalidade.value == 'a' && posicao.value == '6') {

        escalaAMaiorF()

    } else if (estrutura.value == 'escala' && tipo.value == 'maior' && tonalidade.value == 'b' && posicao.value == '6') {

        escalaBMaiorF()

    } else if (estrutura.value == 'escala' && tipo.value == 'maior' && tonalidade.value == 'f' && posicao.value == '6') {

        escalaFMaiorF()

    } else if (estrutura.value == 'escala' && tipo.value == 'maior' && tonalidade.value == 'as' && posicao.value == '6') {

        escalaBbMaiorF()

    } else if (estrutura.value == 'escala' && tipo.value == 'maior' && tonalidade.value == 'ds' && posicao.value == '6') {

        escalaEbMaiorF()

    } else if (estrutura.value == 'escala' && tipo.value == 'maior' && tonalidade.value == 'gs' && posicao.value == '6') {

        escalaAbMaiorF()

    } else if (estrutura.value == 'escala' && tipo.value == 'maior' && tonalidade.value == 'cs' && posicao.value == '6') {

        escalaDbMaiorF()

    } else if (estrutura.value == 'escala' && tipo.value == 'maior' && tonalidade.value == 'fs' && posicao.value == '6') {

        escalaGbMaiorF()

    }

}


//******************************************************************************************************* */
let corda1_casa0 = document.getElementById('corda1_casa0')
let corda1_casa1 = document.getElementById('corda1_casa1')
let corda1_casa2 = document.getElementById('corda1_casa2')
let corda1_casa3 = document.getElementById('corda1_casa3')
let corda1_casa4 = document.getElementById('corda1_casa4')
let corda1_casa5 = document.getElementById('corda1_casa5')
let corda1_casa6 = document.getElementById('corda1_casa6')
let corda1_casa7 = document.getElementById('corda1_casa7')
let corda1_casa8 = document.getElementById('corda1_casa8')
let corda1_casa9 = document.getElementById('corda1_casa9')
let corda1_casa10 = document.getElementById('corda1_casa10')
let corda1_casa11 = document.getElementById('corda1_casa11')
let corda1_casa12 = document.getElementById('corda1_casa12')
let corda1_casa13 = document.getElementById('corda1_casa13')
let corda1_casa14 = document.getElementById('corda1_casa14')
let corda1_casa15 = document.getElementById('corda1_casa15')
//****************************************************************/
let corda2_casa0 = document.getElementById('corda2_casa0')
let corda2_casa1 = document.getElementById('corda2_casa1')
let corda2_casa2 = document.getElementById('corda2_casa2')
let corda2_casa3 = document.getElementById('corda2_casa3')
let corda2_casa4 = document.getElementById('corda2_casa4')
let corda2_casa5 = document.getElementById('corda2_casa5')
let corda2_casa6 = document.getElementById('corda2_casa6')
let corda2_casa7 = document.getElementById('corda2_casa7')
let corda2_casa8 = document.getElementById('corda2_casa8')
let corda2_casa9 = document.getElementById('corda2_casa9')
let corda2_casa10 = document.getElementById('corda2_casa10')
let corda2_casa11 = document.getElementById('corda2_casa11')
let corda2_casa12 = document.getElementById('corda2_casa12')
let corda2_casa13 = document.getElementById('corda2_casa13')
let corda2_casa14 = document.getElementById('corda2_casa14')
let corda2_casa15 = document.getElementById('corda2_casa15')
//****************************************************************/
let corda3_casa0 = document.getElementById('corda3_casa0')
let corda3_casa1 = document.getElementById('corda3_casa1')
let corda3_casa2 = document.getElementById('corda3_casa2')
let corda3_casa3 = document.getElementById('corda3_casa3')
let corda3_casa4 = document.getElementById('corda3_casa4')
let corda3_casa5 = document.getElementById('corda3_casa5')
let corda3_casa6 = document.getElementById('corda3_casa6')
let corda3_casa7 = document.getElementById('corda3_casa7')
let corda3_casa8 = document.getElementById('corda3_casa8')
let corda3_casa9 = document.getElementById('corda3_casa9')
let corda3_casa10 = document.getElementById('corda3_casa10')
let corda3_casa11 = document.getElementById('corda3_casa11')
let corda3_casa12 = document.getElementById('corda3_casa12')
let corda3_casa13 = document.getElementById('corda3_casa13')
let corda3_casa14 = document.getElementById('corda3_casa14')
let corda3_casa15 = document.getElementById('corda3_casa15')
//****************************************************************/
let corda4_casa0 = document.getElementById('corda4_casa0')
let corda4_casa1 = document.getElementById('corda4_casa1')
let corda4_casa2 = document.getElementById('corda4_casa2')
let corda4_casa3 = document.getElementById('corda4_casa3')
let corda4_casa4 = document.getElementById('corda4_casa4')
let corda4_casa5 = document.getElementById('corda4_casa5')
let corda4_casa6 = document.getElementById('corda4_casa6')
let corda4_casa7 = document.getElementById('corda4_casa7')
let corda4_casa8 = document.getElementById('corda4_casa8')
let corda4_casa9 = document.getElementById('corda4_casa9')
let corda4_casa10 = document.getElementById('corda4_casa10')
let corda4_casa11 = document.getElementById('corda4_casa11')
let corda4_casa12 = document.getElementById('corda4_casa12')
let corda4_casa13 = document.getElementById('corda4_casa13')
let corda4_casa14 = document.getElementById('corda4_casa14')
let corda4_casa15 = document.getElementById('corda4_casa15')
//****************************************************************/
let corda5_casa0 = document.getElementById('corda5_casa0')
let corda5_casa1 = document.getElementById('corda5_casa1')
let corda5_casa2 = document.getElementById('corda5_casa2')
let corda5_casa3 = document.getElementById('corda5_casa3')
let corda5_casa4 = document.getElementById('corda5_casa4')
let corda5_casa5 = document.getElementById('corda5_casa5')
let corda5_casa6 = document.getElementById('corda5_casa6')
let corda5_casa7 = document.getElementById('corda5_casa7')
let corda5_casa8 = document.getElementById('corda5_casa8')
let corda5_casa9 = document.getElementById('corda5_casa9')
let corda5_casa10 = document.getElementById('corda5_casa10')
let corda5_casa11 = document.getElementById('corda5_casa11')
let corda5_casa12 = document.getElementById('corda5_casa12')
let corda5_casa13 = document.getElementById('corda5_casa13')
let corda5_casa14 = document.getElementById('corda5_casa14')
let corda5_casa15 = document.getElementById('corda5_casa15')
//****************************************************************/
let corda6_casa0 = document.getElementById('corda6_casa0')
let corda6_casa1 = document.getElementById('corda6_casa1')
let corda6_casa2 = document.getElementById('corda6_casa2')
let corda6_casa3 = document.getElementById('corda6_casa3')
let corda6_casa4 = document.getElementById('corda6_casa4')
let corda6_casa5 = document.getElementById('corda6_casa5')
let corda6_casa6 = document.getElementById('corda6_casa6')
let corda6_casa7 = document.getElementById('corda6_casa7')
let corda6_casa8 = document.getElementById('corda6_casa8')
let corda6_casa9 = document.getElementById('corda6_casa9')
let corda6_casa10 = document.getElementById('corda6_casa10')
let corda6_casa11 = document.getElementById('corda6_casa11')
let corda6_casa12 = document.getElementById('corda6_casa12')
let corda6_casa13 = document.getElementById('corda6_casa13')
let corda6_casa14 = document.getElementById('corda6_casa14')
let corda6_casa15 = document.getElementById('corda6_casa15')
//*****************************************************************************************************/


let corda1 = [corda1_casa0, corda1_casa1, corda1_casa2, corda1_casa3, corda1_casa4, corda1_casa5, corda1_casa6, corda1_casa7, corda1_casa8, corda1_casa9, corda1_casa10, corda1_casa11, corda1_casa12, corda1_casa13, corda1_casa14, corda1_casa15]
let corda2 = [corda2_casa0, corda2_casa1, corda2_casa2, corda2_casa3, corda2_casa4, corda2_casa5, corda2_casa6, corda2_casa7, corda2_casa8, corda2_casa9, corda2_casa10, corda2_casa11, corda2_casa12, corda2_casa13, corda2_casa14, corda2_casa15]
let corda3 = [corda3_casa0, corda3_casa1, corda3_casa2, corda3_casa3, corda3_casa4, corda3_casa5, corda3_casa6, corda3_casa7, corda3_casa8, corda3_casa9, corda3_casa10, corda3_casa11, corda3_casa12, corda3_casa13, corda3_casa14, corda3_casa15]
let corda4 = [corda4_casa0, corda4_casa1, corda4_casa2, corda4_casa3, corda4_casa4, corda4_casa5, corda4_casa6, corda4_casa7, corda4_casa8, corda4_casa9, corda4_casa10, corda4_casa11, corda4_casa12, corda4_casa13, corda4_casa14, corda4_casa15]
let corda5 = [corda5_casa0, corda5_casa1, corda5_casa2, corda5_casa3, corda5_casa4, corda5_casa5, corda5_casa6, corda5_casa7, corda5_casa8, corda5_casa9, corda5_casa10, corda5_casa11, corda5_casa12, corda5_casa13, corda5_casa14, corda5_casa15]
let corda6 = [corda6_casa0, corda6_casa1, corda6_casa2, corda6_casa3, corda6_casa4, corda6_casa5, corda6_casa6, corda6_casa7, corda6_casa8, corda6_casa9, corda6_casa10, corda6_casa11, corda6_casa12, corda6_casa13, corda6_casa14, corda6_casa15]

//******************************************************************************************************/










let escalas = document.getElementById('escalas')
let acordes = document.getElementById('acordes')
let arpejos = document.getElementById('arpejos')
let quadroEscalas = document.getElementById('quadroEscalas')
let quadroAcordes = document.getElementById('quadroAcordes')
let quadroArpejos = document.getElementById('quadroArpejos')


acordes.onmouseover = function () {

    quadroAcordes.style.display = 'block'
    acordes.style.backgroundColor = 'black'
    arpejos.style.backgroundColor = 'rgb(112, 112, 112)'
    escalas.style.backgroundColor = 'rgb(112, 112, 112)'

    quadroArpejos.style.display = 'none'
    quadroEscalas.style.display = 'none'

}

arpejos.onmouseover = function () {

    quadroArpejos.style.display = 'block'
    arpejos.style.backgroundColor = 'black'
    escalas.style.backgroundColor = 'rgb(112, 112, 112)'
    acordes.style.backgroundColor = 'rgb(112, 112, 112)'

    quadroAcordes.style.display = 'none'
    quadroEscalas.style.display = 'none'

}

escalas.onmouseover = function () {

    quadroEscalas.style.display = 'block'
    escalas.style.backgroundColor = 'black'
    arpejos.style.backgroundColor = 'rgb(112, 112, 112)'
    acordes.style.backgroundColor = 'rgb(112, 112, 112)'

    quadroArpejos.style.display = 'none'
    quadroAcordes.style.display = 'none'

}


clear.onclick = function () {

    pestana.style.display = 'none'
    moldura.style.display = 'none'
    console.log('limpar')

    apagar()
}




mostrar.onclick = function () {


    for (i = 0; i < nota.length; i++) {

        nota[i].style.display = 'block'

    }

    console.log('mostrar')


}
//************************************************************************************************** */
function cMaior(posicao) {



    apagar()

    corda5[3].style.display = 'block'
    corda5[3].style.backgroundColor = 'greenyellow'

    corda4[2].style.display = 'block'
    corda4[2].style.backgroundColor = 'greenyellow'

    corda3[0].style.display = 'block'
    corda3[0].style.backgroundColor = 'greenyellow'

    corda2[1].style.display = 'block'
    corda2[1].style.backgroundColor = 'greenyellow'

    corda1[0].style.display = 'block'
    corda1[0].style.backgroundColor = 'greenyellow'

    if (posicao == 2) {

        apagar()

        corda5[3].style.display = 'block'
        corda5[3].style.backgroundColor = 'greenyellow'

        corda4[5].style.display = 'block'
        corda4[5].style.backgroundColor = 'greenyellow'

        corda3[5].style.display = 'block'
        corda3[5].style.backgroundColor = 'greenyellow'

        corda2[5].style.display = 'block'
        corda2[5].style.backgroundColor = 'greenyellow'

        corda1[3].style.display = 'block'
        corda1[3].style.backgroundColor = 'greenyellow'

    } else if (posicao == 3) {

        apagar()

        corda6[8].style.display = 'block'
        corda6[8].style.backgroundColor = 'greenyellow'

        corda5[7].style.display = 'block'
        corda5[7].style.backgroundColor = 'greenyellow'

        corda4[5].style.display = 'block'
        corda4[5].style.backgroundColor = 'greenyellow'

        corda3[5].style.display = 'block'
        corda3[5].style.backgroundColor = 'greenyellow'

        corda2[5].style.display = 'block'
        corda2[5].style.backgroundColor = 'greenyellow'

        corda1[8].style.display = 'block'
        corda1[8].style.backgroundColor = 'greenyellow'

    } else if (posicao == 4) {

        apagar()

        pestanaF(8)

        corda5[10].style.display = 'block'
        corda5[10].style.backgroundColor = 'greenyellow'

        corda4[10].style.display = 'block'
        corda4[10].style.backgroundColor = 'greenyellow'

        corda3[9].style.display = 'block'
        corda3[9].style.backgroundColor = 'greenyellow'



    } else if (posicao == 5) {

        apagar()



        corda4[10].style.display = 'block'
        corda4[10].style.backgroundColor = 'greenyellow'

        corda3[12].style.display = 'block'
        corda3[12].style.backgroundColor = 'greenyellow'

        corda2[13].style.display = 'block'
        corda2[13].style.backgroundColor = 'greenyellow'

        corda1[12].style.display = 'block'
        corda1[12].style.backgroundColor = 'greenyellow'

    }

}

function cSMaior(posicao) {



    apagar()

    corda5[4].style.display = 'block'
    corda5[4].style.backgroundColor = 'greenyellow'

    corda4[3].style.display = 'block'
    corda4[3].style.backgroundColor = 'greenyellow'

    corda4[3].innerHTML = 'E#'

    corda3[1].style.display = 'block'
    corda3[1].style.backgroundColor = 'greenyellow'

    corda2[2].style.display = 'block'
    corda2[2].style.backgroundColor = 'greenyellow'

    corda1[1].style.display = 'block'
    corda1[1].style.backgroundColor = 'greenyellow'

    corda1[1].innerHTML = 'E#'

    if (posicao == 2) {

        apagar()

        corda5[4].style.display = 'block'
        corda5[4].style.backgroundColor = 'greenyellow'

        corda4[6].style.display = 'block'
        corda4[6].style.backgroundColor = 'greenyellow'

        corda3[6].style.display = 'block'
        corda3[6].style.backgroundColor = 'greenyellow'

        corda2[6].style.display = 'block'
        corda2[6].style.backgroundColor = 'greenyellow'
        corda2[6].innerHTML = 'E#'

        corda1[4].style.display = 'block'
        corda1[4].style.backgroundColor = 'greenyellow'

    } else if (posicao == 3) {

        apagar()

        corda6[9].style.display = 'block'
        corda6[9].style.backgroundColor = 'greenyellow'

        corda5[8].style.display = 'block'
        corda5[8].style.backgroundColor = 'greenyellow'
        corda5[8].innerHTML = 'E#'

        corda4[6].style.display = 'block'
        corda4[6].style.backgroundColor = 'greenyellow'

        corda3[6].style.display = 'block'
        corda3[6].style.backgroundColor = 'greenyellow'

        corda2[6].style.display = 'block'
        corda2[6].style.backgroundColor = 'greenyellow'

        corda1[9].style.display = 'block'
        corda1[9].style.backgroundColor = 'greenyellow'

    } else if (posicao == 4) {

        apagar()

        pestanaF(9)

        corda5[11].style.display = 'block'
        corda5[11].style.backgroundColor = 'greenyellow'

        corda4[11].style.display = 'block'
        corda4[11].style.backgroundColor = 'greenyellow'

        corda3[10].style.display = 'block'
        corda3[10].style.backgroundColor = 'greenyellow'
        corda3[10].innerHTML = 'E#'



    } else if (posicao == 5) {

        apagar()



        corda4[11].style.display = 'block'
        corda4[11].style.backgroundColor = 'greenyellow'

        corda3[13].style.display = 'block'
        corda3[13].style.backgroundColor = 'greenyellow'

        corda2[14].style.display = 'block'
        corda2[14].style.backgroundColor = 'greenyellow'

        corda1[13].style.display = 'block'
        corda1[13].style.backgroundColor = 'greenyellow'
        corda1[13].innerHTML = 'E#'

    }

}

function cMenor(posicao) {

    apagar()

    pestanaF(3)

    corda4[5].style.display = 'block'
    corda4[5].style.backgroundColor = 'greenyellow'

    corda3[5].style.display = 'block'
    corda3[5].style.backgroundColor = 'greenyellow'

    corda2[4].style.display = 'block'
    corda2[4].style.backgroundColor = 'greenyellow'

    corda6[3].style.display = 'block'
    corda6[3].style.backgroundColor = 'gray'
    corda6[3].innerHTML = 'X'

    corda2[4].innerHTML = 'Eb'


}

//************************************************************************************************** */
function c7(posicao) {

    apagar()

    corda5[3].style.display = 'block'
    corda5[3].style.backgroundColor = 'greenyellow'

    corda4[2].style.display = 'block'
    corda4[2].style.backgroundColor = 'greenyellow'

    corda3[3].style.display = 'block'
    corda3[3].style.backgroundColor = 'greenyellow'
    corda3[3].innerHTML = 'Bb'

    corda2[1].style.display = 'block'
    corda2[1].style.backgroundColor = 'greenyellow'



}

//********************************************************************************************** */

function dMaior(posicao) {

    apagar()

    corda4[0].style.display = 'block'
    corda4[0].style.backgroundColor = 'greenyellow'

    corda3[2].style.display = 'block'
    corda3[2].style.backgroundColor = 'greenyellow'

    corda2[3].style.display = 'block'
    corda2[3].style.backgroundColor = 'greenyellow'

    corda1[2].style.display = 'block'
    corda1[2].style.backgroundColor = 'greenyellow'

    if (posicao == 2) {

        apagar()

        corda5[5].style.display = 'block'
        corda5[5].style.backgroundColor = 'greenyellow'

        corda4[4].style.display = 'block'
        corda4[4].style.backgroundColor = 'greenyellow'

        corda3[2].style.display = 'block'
        corda3[2].style.backgroundColor = 'greenyellow'

        corda2[3].style.display = 'block'
        corda2[3].style.backgroundColor = 'greenyellow'

        corda1[2].style.display = 'block'
        corda1[2].style.backgroundColor = 'greenyellow'

    } else if (posicao == 3) {

        apagar()

        pestanaF(5)

        corda6[5].innerHTML = 'X'
        corda6[5].style.display = 'block'
        corda6[5].backgroundColor = 'gray'

        corda4[7].style.display = 'block'
        corda4[7].style.backgroundColor = 'greenyellow'

        corda3[7].style.display = 'block'
        corda3[7].style.backgroundColor = 'greenyellow'

        corda2[7].style.display = 'block'
        corda2[7].style.backgroundColor = 'greenyellow'



    } else if (posicao == 4) {

        apagar()


        corda6[10].style.display = 'block'
        corda6[10].style.backgroundColor = 'greenyellow'

        corda5[9].style.display = 'block'
        corda5[9].style.backgroundColor = 'greenyellow'

        corda4[7].style.display = 'block'
        corda4[7].style.backgroundColor = 'greenyellow'

        corda3[7].style.display = 'block'
        corda3[7].style.backgroundColor = 'greenyellow'

        corda2[7].style.display = 'block'
        corda2[7].style.backgroundColor = 'greenyellow'

        corda1[10].style.display = 'block'
        corda1[10].style.backgroundColor = 'greenyellow'



    } else if (posicao == 5) {

        apagar()

        pestanaF(10)


        corda5[12].style.display = 'block'
        corda5[12].style.backgroundColor = 'greenyellow'

        corda4[12].style.display = 'block'
        corda4[12].style.backgroundColor = 'greenyellow'

        corda3[11].style.display = 'block'
        corda3[11].style.backgroundColor = 'greenyellow'





    }



}

//*************************************************************************************** */

function d7(posicao) {

    apagar()

    corda4[0].style.display = 'block'
    corda4[0].style.backgroundColor = 'greenyellow'

    corda3[2].style.display = 'block'
    corda3[2].style.backgroundColor = 'greenyellow'

    corda2[1].style.display = 'block'
    corda2[1].style.backgroundColor = 'greenyellow'

    corda1[2].style.display = 'block'
    corda1[2].style.backgroundColor = 'greenyellow'

}

function eMaior(posicao) {

    apagar()

    corda6[0].style.display = 'block'
    corda6[0].style.backgroundColor = 'greenyellow'

    corda5[2].style.display = 'block'
    corda5[2].style.backgroundColor = 'greenyellow'

    corda4[2].style.display = 'block'
    corda4[2].style.backgroundColor = 'greenyellow'

    corda3[1].style.display = 'block'
    corda3[1].style.backgroundColor = 'greenyellow'

    corda2[0].style.display = 'block'
    corda2[0].style.backgroundColor = 'greenyellow'

    corda1[0].style.display = 'block'
    corda1[0].style.backgroundColor = 'greenyellow'

}

//************************************************************************************** */
function e7(posicao) {

    apagar()

    corda6[0].style.display = 'block'
    corda6[0].style.backgroundColor = 'greenyellow'

    corda5[2].style.display = 'block'
    corda5[2].style.backgroundColor = 'greenyellow'

    corda4[0].style.display = 'block'
    corda4[0].style.backgroundColor = 'greenyellow'

    corda3[1].style.display = 'block'
    corda3[1].style.backgroundColor = 'greenyellow'

    corda2[3].style.display = 'block'
    corda2[3].style.backgroundColor = 'greenyellow'

    corda1[0].style.display = 'block'
    corda1[0].style.backgroundColor = 'greenyellow'

}

function fMaior(posicao) {

    apagar()
    pestanaF(1)



    corda5[3].style.display = 'block'
    corda5[3].style.backgroundColor = 'greenyellow'

    corda4[3].style.display = 'block'
    corda4[3].style.backgroundColor = 'greenyellow'

    corda3[2].style.display = 'block'
    corda3[2].style.backgroundColor = 'greenyellow'



}

function gMaior(posicao) {

    apagar()

    corda6[3].style.display = 'block'
    corda6[3].style.backgroundColor = 'greenyellow'

    corda5[2].style.display = 'block'
    corda5[2].style.backgroundColor = 'greenyellow'

    corda4[0].style.display = 'block'
    corda4[0].style.backgroundColor = 'greenyellow'

    corda3[0].style.display = 'block'
    corda3[0].style.backgroundColor = 'greenyellow'

    corda2[3].style.display = 'block'
    corda2[3].style.backgroundColor = 'greenyellow'

    corda1[3].style.display = 'block'
    corda1[3].style.backgroundColor = 'greenyellow'


}

function aMaior(posicao) {

    apagar()

    corda5[0].style.display = 'block'
    corda5[0].style.backgroundColor = 'greenyellow'

    corda4[2].style.display = 'block'
    corda4[2].style.backgroundColor = 'greenyellow'

    corda3[2].style.display = 'block'
    corda3[2].style.backgroundColor = 'greenyellow'

    corda2[2].style.display = 'block'
    corda2[2].style.backgroundColor = 'greenyellow'

    corda1[0].style.display = 'block'
    corda1[0].style.backgroundColor = 'greenyellow'

}

function bMaior(posicao) {

    apagar()

    pestanaF(2)
    corda4[4].style.display = 'block'
    corda4[4].style.backgroundColor = 'greenyellow'

    corda3[4].style.display = 'block'
    corda3[4].style.backgroundColor = 'greenyellow'

    corda2[4].style.display = 'block'
    corda2[4].style.backgroundColor = 'greenyellow'
}


function apagar() {

    pestana.style.display = 'none'


    for (i = 0; i < nota.length; i++) {

        nota[i].style.display = 'none'
    }


}

apagar()
//**************************************************************************************************/

let bracoGuitarra = [
    [],
    ['E', 'F', 'F#', 'G', 'G#', 'A', 'A#', 'B', 'C', 'C#', 'D', 'D#', 'E'],
    ['B', 'C', 'C#', 'D', 'D#', 'E', 'F', 'F#', 'G', 'G#', 'A', 'A#', 'B'],
    ['G', 'G#', 'A', 'A#', 'B', 'C', 'C#', 'D', 'D#', 'E', 'F', 'F#', 'G'],
    ['D', 'E', 'F', 'F#', 'G', 'G#', 'A', 'A#', 'B', 'C', 'C#', 'D'],
    ['A', 'B', 'C', 'C#', 'D', 'D#', 'E', 'F', 'F#', 'G', 'G#', 'A'],
    ['E', 'F', 'F#', 'G', 'G#', 'A', 'A#', 'B', 'C', 'C#', 'D', 'D#', 'E']]




let escalaCromatica = ['C', 'C#', 'D', 'D#', 'E', 'F', 'F#', 'G', 'G#', 'A', 'A#', 'B']
let escalaCMaior = ['C', 'D', 'E', 'F', 'G', 'A', 'B']
let escalaCMenorNatural = ['C', 'D', 'Eb', 'F', 'G', 'Ab', 'Bb']
let escalaCMenorHarmonica = ['C', 'D', 'Eb', 'F', 'G', 'Ab', 'B']
let escalaCMenorMelodica = ['C', 'D', 'Eb', 'F', 'G', 'A', 'B']
let escalaCJonio = ['C', 'D', 'E', 'F', 'G', 'A', 'B']
let escalaCMixolidio = ['C', 'D', 'E', 'F', 'G', 'A', 'Bb']
let escalaCLidio = ['C', 'D', 'E', 'F#', 'G', 'A', 'B']
let escalaCEolio = ['C', 'D', 'Eb', 'F', 'G', 'Ab', 'Bb']
let escalaCDorico = ['C', 'D', 'Eb', 'F', 'G', 'A', 'Bb']
let escalaCFrigio = ['C', 'Db', 'Eb', 'F', 'G', 'Ab', 'Bb']
let escalaCLocrio = ['C', 'Db', 'Eb', 'F', 'Gb', 'Ab', 'Bb']

let triadeC = ['C', 'E', 'G']
let triadeCm = ['C', 'Eb', 'G']
let triadeCDim = ['C', 'Eb', 'Gb']
let triadeCAum = ['C', 'E', 'G#']

let tetradeC7M = ['C', 'E', 'G', 'B']
let tetradeC7 = ['C', 'E', 'G', 'Bb']
let tetradeCm7 = ['C', 'Eb', 'G', 'Bb']
let tetradeCm7b5 = ['C', 'Eb', 'Gb', 'Bb']
let tetradeCDim = ['C', 'Eb', 'Gb', 'Bbb']
let tetradeCm7M = ['C', 'Eb', 'G', 'B']


let escalaGMaior = ['G', 'A', 'B', 'C', 'D', 'E', 'F#', 'G']
let escalaGMenorNatural = ['G', 'A', 'Bb', 'C', 'D', 'Eb', 'F', 'G']
let escalaGMenorHarmonica = ['G', 'A', 'Bb', 'C', 'D', 'Eb', 'F#', 'G']
let escalaGMenorMelodica = ['G', 'A', 'Bb', 'C', 'D', 'E', 'F#', 'G']
let escalaGJonio = ['G', 'A', 'B', 'C', 'D', 'E', 'F#', 'G']
let escalaGMixolidio = ['G', 'A', 'B', 'C', 'D', 'E', 'F', 'G']
let escalaGLidio = ['G', 'A', 'B', 'C#', 'D', 'E', 'F#', 'G']
let escalaGEolio = ['G', 'A', 'Bb', 'C', 'D', 'Eb', 'F', 'G']
let escalaGDorico = ['G', 'A', 'Bb', 'C', 'D', 'E', 'F', 'G']
let escalaGFrigio = ['G', 'Ab', 'Bb', 'C', 'D', 'Eb', 'F', 'G']
let escalaGLocrio = ['G', 'Ab', 'Bb', 'C', 'Db', 'Eb', 'F', 'G']

let triadeG = ['G', 'B', 'D']
let triadeGm = ['G', 'Bb', 'D']
let triadeGDim = ['G', 'Bb', 'Db']
let triadeGAum = ['G', 'B', 'D#']

let tetradeG7M = ['G', 'B', 'D', 'F#']
let tetradeG7 = ['G', 'B', 'D', 'F']
let tetradeGm7 = ['G', 'Bb', 'D', 'F']
let tetradeGm7b5 = ['G', 'Bb', 'Db', 'F']
let tetradeGDim = ['G', 'Bb', 'Db', 'Fbb']
let tetradeGm7M = ['G', 'Bb', 'D', 'F#']

function pestanaF(casa) {

    pestana.style.display = 'block'

    if (casa == 1) {

        pestana.style.left = '150px'

    } else if (casa == 2) {

        pestana.style.left = '230px'

    } else if (casa == 3) {

        pestana.style.left = '310px'

    } else if (casa == 4) {

        pestana.style.left = '390px'

    } else if (casa == 5) {

        pestana.style.left = '470px'

    } else if (casa == 6) {

        pestana.style.left = '550px'

    } else if (casa == 7) {

        pestana.style.left = '630px'

    } else if (casa == 8) {

        pestana.style.left = '710px'

    } else if (casa == 9) {

        pestana.style.left = '790px'

    } else if (casa == 10) {

        pestana.style.left = '870px'

    } else if (casa == 11) {

        pestana.style.left = '950px'

    } else if (casa == 12) {

        pestana.style.left = '1030px'

    }

}

function mostrarC() {

    for (i = 0; i < 16; i++) {

        if (corda1[i].textContent == 'C') {

            corda1[i].style.display = 'block'
            corda1[i].style.backgroundColor = 'greenyellow'



        }
        if (corda2[i].textContent == 'C') {


            corda2[i].style.display = 'block'
            corda2[i].style.backgroundColor = 'greenyellow'



        }

        if (corda3[i].textContent == 'C') {


            corda3[i].style.display = 'block'
            corda3[i].style.backgroundColor = 'greenyellow'


        }

        if (corda4[i].textContent == 'C') {



            corda4[i].style.display = 'block'
            corda4[i].style.backgroundColor = 'greenyellow'



        }

        if (corda5[i].textContent == 'C') {


            corda5[i].style.display = 'block'
            corda5[i].style.backgroundColor = 'greenyellow'



        }

        if (corda6[i].textContent == 'C') {


            corda6[i].style.display = 'block'
            corda6[i].style.backgroundColor = 'greenyellow'


        }


    }

}

function mostrarCS() {

    for (i = 0; i < 16; i++) {

        if (corda1[i].textContent == 'C#') {

            corda1[i].style.display = 'block'
            corda1[i].style.backgroundColor = 'greenyellow'



        }
        if (corda2[i].textContent == 'C#') {


            corda2[i].style.display = 'block'
            corda2[i].style.backgroundColor = 'greenyellow'



        }

        if (corda3[i].textContent == 'C#') {


            corda3[i].style.display = 'block'
            corda3[i].style.backgroundColor = 'greenyellow'


        }

        if (corda4[i].textContent == 'C#') {



            corda4[i].style.display = 'block'
            corda4[i].style.backgroundColor = 'greenyellow'



        }

        if (corda5[i].textContent == 'C#') {


            corda5[i].style.display = 'block'
            corda5[i].style.backgroundColor = 'greenyellow'



        }

        if (corda6[i].textContent == 'C#') {


            corda6[i].style.display = 'block'
            corda6[i].style.backgroundColor = 'greenyellow'


        }


    }

}

function mostrarDb() {

    for (i = 0; i < 16; i++) {

        if (corda1[i].textContent == 'C#') {

            corda1[i].style.display = 'block'
            corda1[i].style.backgroundColor = 'greenyellow'
            corda1[i].innerHTML = 'Db'



        }
        if (corda2[i].textContent == 'C#') {


            corda2[i].style.display = 'block'
            corda2[i].style.backgroundColor = 'greenyellow'
            corda2[i].innerHTML = 'Db'



        }

        if (corda3[i].textContent == 'C#') {


            corda3[i].style.display = 'block'
            corda3[i].style.backgroundColor = 'greenyellow'
            corda3[i].innerHTML = 'Db'


        }

        if (corda4[i].textContent == 'C#') {



            corda4[i].style.display = 'block'
            corda4[i].style.backgroundColor = 'greenyellow'
            corda4[i].innerHTML = 'Db'


        }

        if (corda5[i].textContent == 'C#') {


            corda5[i].style.display = 'block'
            corda5[i].style.backgroundColor = 'greenyellow'
            corda5[i].innerHTML = 'Db'


        }

        if (corda6[i].textContent == 'C#') {


            corda6[i].style.display = 'block'
            corda6[i].style.backgroundColor = 'greenyellow'
            corda6[i].innerHTML = 'Db'


        }


    }

}


function mostrarD() {

    for (i = 0; i < 16; i++) {

        if (corda1[i].textContent == 'D') {

            corda1[i].style.display = 'block'
            corda1[i].style.backgroundColor = 'greenyellow'



        }
        if (corda2[i].textContent == 'D') {


            corda2[i].style.display = 'block'
            corda2[i].style.backgroundColor = 'greenyellow'



        }

        if (corda3[i].textContent == 'D') {


            corda3[i].style.display = 'block'
            corda3[i].style.backgroundColor = 'greenyellow'


        }

        if (corda4[i].textContent == 'D') {



            corda4[i].style.display = 'block'
            corda4[i].style.backgroundColor = 'greenyellow'



        }

        if (corda5[i].textContent == 'D') {


            corda5[i].style.display = 'block'
            corda5[i].style.backgroundColor = 'greenyellow'



        }

        if (corda6[i].textContent == 'D') {


            corda6[i].style.display = 'block'
            corda6[i].style.backgroundColor = 'greenyellow'


        }


    }

}

function mostrarDS() {

    for (i = 0; i < 16; i++) {

        if (corda1[i].textContent == 'D#') {

            corda1[i].style.display = 'block'
            corda1[i].style.backgroundColor = 'greenyellow'



        }
        if (corda2[i].textContent == 'D#') {


            corda2[i].style.display = 'block'
            corda2[i].style.backgroundColor = 'greenyellow'



        }

        if (corda3[i].textContent == 'D#') {


            corda3[i].style.display = 'block'
            corda3[i].style.backgroundColor = 'greenyellow'


        }

        if (corda4[i].textContent == 'D#') {



            corda4[i].style.display = 'block'
            corda4[i].style.backgroundColor = 'greenyellow'



        }

        if (corda5[i].textContent == 'D#') {


            corda5[i].style.display = 'block'
            corda5[i].style.backgroundColor = 'greenyellow'



        }

        if (corda6[i].textContent == 'D#') {


            corda6[i].style.display = 'block'
            corda6[i].style.backgroundColor = 'greenyellow'


        }


    }

}
function mostrarEb() {

    for (i = 0; i < 16; i++) {

        if (corda1[i].textContent == 'D#') {

            corda1[i].style.display = 'block'
            corda1[i].style.backgroundColor = 'greenyellow'
            corda1[i].innerHTML = 'Eb'



        }
        if (corda2[i].textContent == 'D#') {


            corda2[i].style.display = 'block'
            corda2[i].style.backgroundColor = 'greenyellow'
            corda2[i].innerHTML = 'Eb'


        }

        if (corda3[i].textContent == 'D#') {


            corda3[i].style.display = 'block'
            corda3[i].style.backgroundColor = 'greenyellow'
            corda3[i].innerHTML = 'Eb'

        }

        if (corda4[i].textContent == 'D#') {



            corda4[i].style.display = 'block'
            corda4[i].style.backgroundColor = 'greenyellow'
            corda4[i].innerHTML = 'Eb'


        }

        if (corda5[i].textContent == 'D#') {


            corda5[i].style.display = 'block'
            corda5[i].style.backgroundColor = 'greenyellow'
            corda5[i].innerHTML = 'Eb'


        }

        if (corda6[i].textContent == 'D#') {


            corda6[i].style.display = 'block'
            corda6[i].style.backgroundColor = 'greenyellow'
            corda6[i].innerHTML = 'Eb'


        }


    }

}


function mostrarE() {

    for (i = 0; i < 16; i++) {

        if (corda1[i].textContent == 'E') {

            corda1[i].style.display = 'block'
            corda1[i].style.backgroundColor = 'greenyellow'



        }
        if (corda2[i].textContent == 'E') {


            corda2[i].style.display = 'block'
            corda2[i].style.backgroundColor = 'greenyellow'



        }

        if (corda3[i].textContent == 'E') {


            corda3[i].style.display = 'block'
            corda3[i].style.backgroundColor = 'greenyellow'


        }

        if (corda4[i].textContent == 'E') {



            corda4[i].style.display = 'block'
            corda4[i].style.backgroundColor = 'greenyellow'



        }

        if (corda5[i].textContent == 'E') {


            corda5[i].style.display = 'block'
            corda5[i].style.backgroundColor = 'greenyellow'



        }

        if (corda6[i].textContent == 'E') {


            corda6[i].style.display = 'block'
            corda6[i].style.backgroundColor = 'greenyellow'


        }


    }

}

function mostrarF() {

    for (i = 0; i < 16; i++) {

        if (corda1[i].textContent == 'F') {

            corda1[i].style.display = 'block'
            corda1[i].style.backgroundColor = 'greenyellow'



        }
        if (corda2[i].textContent == 'F') {


            corda2[i].style.display = 'block'
            corda2[i].style.backgroundColor = 'greenyellow'



        }

        if (corda3[i].textContent == 'F') {


            corda3[i].style.display = 'block'
            corda3[i].style.backgroundColor = 'greenyellow'


        }

        if (corda4[i].textContent == 'F') {



            corda4[i].style.display = 'block'
            corda4[i].style.backgroundColor = 'greenyellow'



        }

        if (corda5[i].textContent == 'F') {


            corda5[i].style.display = 'block'
            corda5[i].style.backgroundColor = 'greenyellow'



        }

        if (corda6[i].textContent == 'F') {


            corda6[i].style.display = 'block'
            corda6[i].style.backgroundColor = 'greenyellow'


        }


    }

}
function mostrarGb() {

    for (i = 0; i < 16; i++) {

        if (corda1[i].textContent == 'F#') {

            corda1[i].style.display = 'block'
            corda1[i].style.backgroundColor = 'greenyellow'
            corda1[i].innerHTML = 'Gb'



        }
        if (corda2[i].textContent == 'F#') {


            corda2[i].style.display = 'block'
            corda2[i].style.backgroundColor = 'greenyellow'
            corda2[i].innerHTML = 'Gb'



        }

        if (corda3[i].textContent == 'F#') {


            corda3[i].style.display = 'block'
            corda3[i].style.backgroundColor = 'greenyellow'
            corda3[i].innerHTML = 'Gb'

        }

        if (corda4[i].textContent == 'F#') {



            corda4[i].style.display = 'block'
            corda4[i].style.backgroundColor = 'greenyellow'
            corda4[i].innerHTML = 'Gb'


        }

        if (corda5[i].textContent == 'F#') {


            corda5[i].style.display = 'block'
            corda5[i].style.backgroundColor = 'greenyellow'
            corda5[i].innerHTML = 'Gb'


        }

        if (corda6[i].textContent == 'F#') {


            corda6[i].style.display = 'block'
            corda6[i].style.backgroundColor = 'greenyellow'
            corda6[i].innerHTML = 'Gb'


        }


    }

}


function mostrarFS() {

    for (i = 0; i < 16; i++) {

        if (corda1[i].textContent == 'F#') {

            corda1[i].style.display = 'block'
            corda1[i].style.backgroundColor = 'greenyellow'



        }
        if (corda2[i].textContent == 'F#') {


            corda2[i].style.display = 'block'
            corda2[i].style.backgroundColor = 'greenyellow'



        }

        if (corda3[i].textContent == 'F#') {


            corda3[i].style.display = 'block'
            corda3[i].style.backgroundColor = 'greenyellow'


        }

        if (corda4[i].textContent == 'F#') {



            corda4[i].style.display = 'block'
            corda4[i].style.backgroundColor = 'greenyellow'



        }

        if (corda5[i].textContent == 'F#') {


            corda5[i].style.display = 'block'
            corda5[i].style.backgroundColor = 'greenyellow'



        }

        if (corda6[i].textContent == 'F#') {


            corda6[i].style.display = 'block'
            corda6[i].style.backgroundColor = 'greenyellow'


        }


    }

}

function mostrarG() {

    for (i = 0; i < 16; i++) {

        if (corda1[i].textContent == 'G') {

            corda1[i].style.display = 'block'
            corda1[i].style.backgroundColor = 'greenyellow'



        }
        if (corda2[i].textContent == 'G') {


            corda2[i].style.display = 'block'
            corda2[i].style.backgroundColor = 'greenyellow'



        }

        if (corda3[i].textContent == 'G') {


            corda3[i].style.display = 'block'
            corda3[i].style.backgroundColor = 'greenyellow'


        }

        if (corda4[i].textContent == 'G') {



            corda4[i].style.display = 'block'
            corda4[i].style.backgroundColor = 'greenyellow'



        }

        if (corda5[i].textContent == 'G') {


            corda5[i].style.display = 'block'
            corda5[i].style.backgroundColor = 'greenyellow'



        }

        if (corda6[i].textContent == 'G') {


            corda6[i].style.display = 'block'
            corda6[i].style.backgroundColor = 'greenyellow'


        }


    }

}
function mostrarAb() {

    for (i = 0; i < 16; i++) {

        if (corda1[i].textContent == 'G#') {

            corda1[i].style.display = 'block'
            corda1[i].style.backgroundColor = 'greenyellow'
            corda1[i].innerHTML = 'Ab'


        }
        if (corda2[i].textContent == 'G#') {


            corda2[i].style.display = 'block'
            corda2[i].style.backgroundColor = 'greenyellow'
            corda2[i].innerHTML = 'Ab'



        }

        if (corda3[i].textContent == 'G#') {


            corda3[i].style.display = 'block'
            corda3[i].style.backgroundColor = 'greenyellow'
            corda3[i].innerHTML = 'Ab'

        }

        if (corda4[i].textContent == 'G#') {



            corda4[i].style.display = 'block'
            corda4[i].style.backgroundColor = 'greenyellow'
            corda4[i].innerHTML = 'Ab'


        }

        if (corda5[i].textContent == 'G#') {


            corda5[i].style.display = 'block'
            corda5[i].style.backgroundColor = 'greenyellow'
            corda5[i].innerHTML = 'Ab'


        }

        if (corda6[i].textContent == 'G#') {


            corda6[i].style.display = 'block'
            corda6[i].style.backgroundColor = 'greenyellow'
            corda6[i].innerHTML = 'Ab'


        }


    }

}

function mostrarGS() {

    for (i = 0; i < 16; i++) {

        if (corda1[i].textContent == 'G#') {

            corda1[i].style.display = 'block'
            corda1[i].style.backgroundColor = 'greenyellow'



        }
        if (corda2[i].textContent == 'G#') {


            corda2[i].style.display = 'block'
            corda2[i].style.backgroundColor = 'greenyellow'



        }

        if (corda3[i].textContent == 'G#') {


            corda3[i].style.display = 'block'
            corda3[i].style.backgroundColor = 'greenyellow'


        }

        if (corda4[i].textContent == 'G#') {



            corda4[i].style.display = 'block'
            corda4[i].style.backgroundColor = 'greenyellow'



        }

        if (corda5[i].textContent == 'G#') {


            corda5[i].style.display = 'block'
            corda5[i].style.backgroundColor = 'greenyellow'



        }

        if (corda6[i].textContent == 'G#') {


            corda6[i].style.display = 'block'
            corda6[i].style.backgroundColor = 'greenyellow'


        }


    }

}

function mostrarA() {

    for (i = 0; i < 16; i++) {

        if (corda1[i].textContent == 'A') {

            corda1[i].style.display = 'block'
            corda1[i].style.backgroundColor = 'greenyellow'



        }
        if (corda2[i].textContent == 'A') {


            corda2[i].style.display = 'block'
            corda2[i].style.backgroundColor = 'greenyellow'



        }

        if (corda3[i].textContent == 'A') {


            corda3[i].style.display = 'block'
            corda3[i].style.backgroundColor = 'greenyellow'


        }

        if (corda4[i].textContent == 'A') {



            corda4[i].style.display = 'block'
            corda4[i].style.backgroundColor = 'greenyellow'



        }

        if (corda5[i].textContent == 'A') {


            corda5[i].style.display = 'block'
            corda5[i].style.backgroundColor = 'greenyellow'



        }

        if (corda6[i].textContent == 'A') {


            corda6[i].style.display = 'block'
            corda6[i].style.backgroundColor = 'greenyellow'


        }


    }

}

function mostrarBb() {

    for (i = 0; i < 16; i++) {

        if (corda1[i].textContent == 'A#') {

            corda1[i].style.display = 'block'
            corda1[i].style.backgroundColor = 'greenyellow'
            corda1[i].innerHTML = 'Bb'



        }
        if (corda2[i].textContent == 'A#') {


            corda2[i].style.display = 'block'
            corda2[i].style.backgroundColor = 'greenyellow'
            corda2[i].innerHTML = 'Bb'


        }

        if (corda3[i].textContent == 'A#') {


            corda3[i].style.display = 'block'
            corda3[i].style.backgroundColor = 'greenyellow'
            corda3[i].innerHTML = 'Bb'

        }

        if (corda4[i].textContent == 'A#') {



            corda4[i].style.display = 'block'
            corda4[i].style.backgroundColor = 'greenyellow'
            corda4[i].innerHTML = 'Bb'


        }

        if (corda5[i].textContent == 'A#') {


            corda5[i].style.display = 'block'
            corda5[i].style.backgroundColor = 'greenyellow'
            corda5[i].innerHTML = 'Bb'


        }

        if (corda6[i].textContent == 'A#') {


            corda6[i].style.display = 'block'
            corda6[i].style.backgroundColor = 'greenyellow'
            corda6[i].innerHTML = 'Bb'


        }


    }

}




function mostrarAS() {

    for (i = 0; i < 16; i++) {

        if (corda1[i].textContent == 'A#') {

            corda1[i].style.display = 'block'
            corda1[i].style.backgroundColor = 'greenyellow'



        }
        if (corda2[i].textContent == 'A#') {


            corda2[i].style.display = 'block'
            corda2[i].style.backgroundColor = 'greenyellow'



        }

        if (corda3[i].textContent == 'A#') {


            corda3[i].style.display = 'block'
            corda3[i].style.backgroundColor = 'greenyellow'


        }

        if (corda4[i].textContent == 'A#') {



            corda4[i].style.display = 'block'
            corda4[i].style.backgroundColor = 'greenyellow'



        }

        if (corda5[i].textContent == 'A#') {


            corda5[i].style.display = 'block'
            corda5[i].style.backgroundColor = 'greenyellow'



        }

        if (corda6[i].textContent == 'A#') {


            corda6[i].style.display = 'block'
            corda6[i].style.backgroundColor = 'greenyellow'


        }


    }

}




function mostrarB() {

    for (i = 0; i < 16; i++) {

        if (corda1[i].textContent == 'B') {

            corda1[i].style.display = 'block'
            corda1[i].style.backgroundColor = 'greenyellow'



        }
        if (corda2[i].textContent == 'B') {


            corda2[i].style.display = 'block'
            corda2[i].style.backgroundColor = 'greenyellow'



        }

        if (corda3[i].textContent == 'B') {


            corda3[i].style.display = 'block'
            corda3[i].style.backgroundColor = 'greenyellow'


        }

        if (corda4[i].textContent == 'B') {



            corda4[i].style.display = 'block'
            corda4[i].style.backgroundColor = 'greenyellow'



        }

        if (corda5[i].textContent == 'B') {


            corda5[i].style.display = 'block'
            corda5[i].style.backgroundColor = 'greenyellow'



        }

        if (corda6[i].textContent == 'B') {


            corda6[i].style.display = 'block'
            corda6[i].style.backgroundColor = 'greenyellow'


        }


    }

}

function escalaCMaiorF() {

    apagar()
    mostrarC()
    mostrarD()
    mostrarE()
    mostrarF()
    mostrarG()
    mostrarA()
    mostrarB()

}

function escalaGMaiorF() {

    apagar()
    mostrarC()
    mostrarD()
    mostrarE()
    mostrarFS()
    mostrarG()
    mostrarA()
    mostrarB()

}

function escalaDMaiorF() {

    apagar()
    mostrarCS()
    mostrarD()
    mostrarE()
    mostrarFS()
    mostrarG()
    mostrarA()
    mostrarB()

}

function escalaAMaiorF() {

    apagar()
    mostrarCS()
    mostrarD()
    mostrarE()
    mostrarFS()
    mostrarGS()
    mostrarA()
    mostrarB()

}

function escalaEMaiorF() {

    apagar()
    mostrarCS()
    mostrarDS()
    mostrarE()
    mostrarFS()
    mostrarGS()
    mostrarA()
    mostrarB()

}

function escalaBMaiorF() {

    apagar()
    mostrarCS()
    mostrarDS()
    mostrarE()
    mostrarFS()
    mostrarGS()
    mostrarAS()
    mostrarB()

}

function escalaFMaiorF() {

    apagar()
    mostrarC()
    mostrarD()
    mostrarE()
    mostrarF()
    mostrarG()
    mostrarA()
    mostrarBb()

}

function escalaBbMaiorF() {

    apagar()
    mostrarC()
    mostrarD()
    mostrarEb()
    mostrarF()
    mostrarG()
    mostrarA()
    mostrarBb()

}

function escalaEbMaiorF() {

    apagar()
    mostrarC()
    mostrarD()
    mostrarEb()
    mostrarF()
    mostrarG()
    mostrarAb()
    mostrarBb()

}

function escalaDbMaiorF() {

    apagar()
    mostrarC()
    mostrarDb()
    mostrarEb()
    mostrarF()
    mostrarGb()
    mostrarAb()
    mostrarBb()

}

function escalaGbMaiorF() {

    apagar()
    mostrarC()
    mostrarDb()
    mostrarEb()
    mostrarF()
    mostrarGb()
    mostrarAb()
    mostrarBb()

}

function escalaAbMaiorF() {

    apagar()
    mostrarC()
    mostrarDb()
    mostrarEb()
    mostrarF()
    mostrarG()
    mostrarAb()
    mostrarBb()

}

for (i = 0; i < nota.length; i++) {

    nota[i].style.transition = 'all 1s'


}



//*********************************************************************************************************/




apagar()
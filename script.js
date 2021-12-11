let QuestionNumber = 0
let AcertosNumber = 0
let AcertosText = []
let PerguntasList = [
    '1. Quantas casas decimais tem o número pi?',
    '2. O que a palavra "legend" significa em português?',
    '3. Qual a tradução da frase “Fabiano cogió su saco antes de salir”?',
    '4. “It is six twenty" ou "twenty past six”. Que horas são em inglês?',
    '5. Qual foi o recurso utilizado inicialmente pelo homem para explicar a origem das coisas?',
    '6. Quais os nomes dos três Reis Magos?',
    '7. Qual é o maior arquipélago da Terra?',
    '8. Que substância é absorvida pelas plantas e expirada por todos os seres vivos?',
    '9. Em que oceano fica Madagascar?',
    '10. Qual o metal cujo símbolo químico é o Au?'
]

let Alternativas = [
    ['A) Duas', 'B) Centenas', 'C) Infinitas', 'D) Vinte', 'E) Milhares'],
    ['A) Legenda', 'B) Conto', 'C) História', 'D) Lenda', 'E) Lendário'],
    ['A) Fabiano coseu seu paletó antes de sair', 'B) Fabiano fechou o saco antes de sair', 'C) Fabiano pegou seu paletó antes de sair', 'D) Fabiano cortou o saco antes de cair', 'E) Fabiano rasgou seu paletó antes de cair'],
    ['A) 12:06', 'B) 6:20', 'C) 2:20', 'D) 6:02', 'E) 12:20'],
    ['A) Filosofia', 'B) Biologia', 'C) Matemática', 'D) Astronomia', 'E) Mitologia'],
    ['A) Gaspar, Nicolau e Natanael', 'B) Belchior, Gaspar e Baltazar', 'C) Belchior, Gaspar e Nataniel', 'D) Gabriel, Benjamim e Melchior', 'E) Melchior, Noé e Galileu'],
    ['A) Filipinas', 'B) Indonésia', 'C) Bahamas', 'D) Finlândia', 'E) Maldivas'],
    ['A) O oxigênio', 'B) O nitrogênio', 'C) O nitrato de sódio', 'D) O dióxido de ferro', 'E) O dióxido de carbono'],
    ['A) Oceano Índico', 'B) Oceano Antártico', 'C) Oceano Atlântico', 'D) Oceano Pacífico', 'E) Oceano Ártico'],
    ['A) Cobre', 'B) Prata', 'C) Mercúrio', 'D) Ouro', 'E) Manganês']
]
let Respostas = [2, 3, 2, 1, 4, 1, 1, 4, 0, 3]
let RespostasText = ['C', 'D', 'C', 'B', 'E', 'B', 'B', 'E', 'A', 'D']
let Escolhas     = []
let QuestionText = window.document.querySelector("div#question")
let EscolhaCache = window.document.getElementsByName("buttoncache")
let Alternativa1 = window.document.querySelector("p#alt1")
let Alternativa2 = window.document.querySelector("p#alt2")
let Alternativa3 = window.document.querySelector("p#alt3")
let Alternativa4 = window.document.querySelector("p#alt4")
let Alternativa5 = window.document.querySelector("p#alt5")
let ThemeText    = window.document.querySelector("div#theme")
let ButtonNext   = window.document.querySelector("div#next")
let ResultadoTxt = window.document.querySelector("p#ResultadoText")
let QuestionAcertos = window.document.querySelector("p#Acertos")
let lista = window.document.querySelector("p#listas")
let erradas = []
let errostext = window.document.querySelector("p#errostext")
let erros = window.document.querySelector("p#erros")
let resp = window.document.querySelector("p#resp")

function NextQuestion() {
    if (QuestionNumber == 0 || EscolhaCache[0].checked || EscolhaCache[1].checked || EscolhaCache[2].checked || EscolhaCache[3].checked || EscolhaCache[4].checked) {
        QuestionNumber = QuestionNumber + 1
        switch (QuestionNumber) {
            case 1:
                QuestionText.innerHTML = PerguntasList[0]
                Alternativa1.innerHTML = `<input type="radio" name="buttoncache"> <strong> ${Alternativas[0][0]} </strong>`
                Alternativa2.innerHTML = `<input type="radio" name="buttoncache"> <strong> ${Alternativas[0][1]} </strong>`
                Alternativa3.innerHTML = `<input type="radio" name="buttoncache"> <strong> ${Alternativas[0][2]} </strong>`
                Alternativa4.innerHTML = `<input type="radio" name="buttoncache"> <strong> ${Alternativas[0][3]} </strong>`
                Alternativa5.innerHTML = `<input type="radio" name="buttoncache"> <strong> ${Alternativas[0][4]} </strong>`
                break;
            case 2:
                CollectInformations()
                QuestionText.innerHTML = PerguntasList[1]
                Alternativa1.innerHTML = `<input type="radio" name="buttoncache"> <strong> ${Alternativas[1][0]} </strong>`
                Alternativa2.innerHTML = `<input type="radio" name="buttoncache"> <strong> ${Alternativas[1][1]} </strong>`
                Alternativa3.innerHTML = `<input type="radio" name="buttoncache"> <strong> ${Alternativas[1][2]} </strong>`
                Alternativa4.innerHTML = `<input type="radio" name="buttoncache"> <strong> ${Alternativas[1][3]} </strong>`
                Alternativa5.innerHTML = `<input type="radio" name="buttoncache"> <strong> ${Alternativas[1][4]} </strong>`
                break;
            case 3:
                CollectInformations()
                QuestionText.innerHTML = PerguntasList[2]
                Alternativa1.innerHTML = `<input type="radio" name="buttoncache"> <strong> ${Alternativas[2][0]} </strong>`
                Alternativa2.innerHTML = `<input type="radio" name="buttoncache"> <strong> ${Alternativas[2][1]} </strong>`
                Alternativa3.innerHTML = `<input type="radio" name="buttoncache"> <strong> ${Alternativas[2][2]} </strong>`
                Alternativa4.innerHTML = `<input type="radio" name="buttoncache"> <strong> ${Alternativas[2][3]} </strong>`
                Alternativa5.innerHTML = `<input type="radio" name="buttoncache"> <strong> ${Alternativas[2][4]} </strong>`
                break;
            case 4:
                CollectInformations()
                QuestionText.innerHTML = PerguntasList[3]
                Alternativa1.innerHTML = `<input type="radio" name="buttoncache"> <strong> ${Alternativas[3][0]} </strong>`
                Alternativa2.innerHTML = `<input type="radio" name="buttoncache"> <strong> ${Alternativas[3][1]} </strong>`
                Alternativa3.innerHTML = `<input type="radio" name="buttoncache"> <strong> ${Alternativas[3][2]} </strong>`
                Alternativa4.innerHTML = `<input type="radio" name="buttoncache"> <strong> ${Alternativas[3][3]} </strong>`
                Alternativa5.innerHTML = `<input type="radio" name="buttoncache"> <strong> ${Alternativas[3][4]} </strong>`
                break;
            case 5:
                CollectInformations()
                QuestionText.innerHTML = PerguntasList[4]
                Alternativa1.innerHTML = `<input type="radio" name="buttoncache"> <strong> ${Alternativas[4][0]} </strong>`
                Alternativa2.innerHTML = `<input type="radio" name="buttoncache"> <strong> ${Alternativas[4][1]} </strong>`
                Alternativa3.innerHTML = `<input type="radio" name="buttoncache"> <strong> ${Alternativas[4][2]} </strong>`
                Alternativa4.innerHTML = `<input type="radio" name="buttoncache"> <strong> ${Alternativas[4][3]} </strong>`
                Alternativa5.innerHTML = `<input type="radio" name="buttoncache"> <strong> ${Alternativas[4][4]} </strong>`
                break;
            case 6:
                CollectInformations()
                QuestionText.innerHTML = PerguntasList[5]
                Alternativa1.innerHTML = `<input type="radio" name="buttoncache"> <strong> ${Alternativas[5][0]} </strong>`
                Alternativa2.innerHTML = `<input type="radio" name="buttoncache"> <strong> ${Alternativas[5][1]} </strong>`
                Alternativa3.innerHTML = `<input type="radio" name="buttoncache"> <strong> ${Alternativas[5][2]} </strong>`
                Alternativa4.innerHTML = `<input type="radio" name="buttoncache"> <strong> ${Alternativas[5][3]} </strong>`
                Alternativa5.innerHTML = `<input type="radio" name="buttoncache"> <strong> ${Alternativas[5][4]} </strong>`
                break;
            case 7:
                CollectInformations()
                QuestionText.innerHTML = PerguntasList[6]
                Alternativa1.innerHTML = `<input type="radio" name="buttoncache"> <strong> ${Alternativas[6][0]} </strong>`
                Alternativa2.innerHTML = `<input type="radio" name="buttoncache"> <strong> ${Alternativas[6][1]} </strong>`
                Alternativa3.innerHTML = `<input type="radio" name="buttoncache"> <strong> ${Alternativas[6][2]} </strong>`
                Alternativa4.innerHTML = `<input type="radio" name="buttoncache"> <strong> ${Alternativas[6][3]} </strong>`
                Alternativa5.innerHTML = `<input type="radio" name="buttoncache"> <strong> ${Alternativas[6][4]} </strong>`
                break;
            case 8:
                CollectInformations()
                QuestionText.innerHTML = PerguntasList[7]
                Alternativa1.innerHTML = `<input type="radio" name="buttoncache"> <strong> ${Alternativas[7][0]} </strong>`
                Alternativa2.innerHTML = `<input type="radio" name="buttoncache"> <strong> ${Alternativas[7][1]} </strong>`
                Alternativa3.innerHTML = `<input type="radio" name="buttoncache"> <strong> ${Alternativas[7][2]} </strong>`
                Alternativa4.innerHTML = `<input type="radio" name="buttoncache"> <strong> ${Alternativas[7][3]} </strong>`
                Alternativa5.innerHTML = `<input type="radio" name="buttoncache"> <strong> ${Alternativas[7][4]} </strong>`
                break;
            case 9:
                CollectInformations()
                QuestionText.innerHTML = PerguntasList[8]
                Alternativa1.innerHTML = `<input type="radio" name="buttoncache"> <strong> ${Alternativas[8][0]} </strong>`
                Alternativa2.innerHTML = `<input type="radio" name="buttoncache"> <strong> ${Alternativas[8][1]} </strong>`
                Alternativa3.innerHTML = `<input type="radio" name="buttoncache"> <strong> ${Alternativas[8][2]} </strong>`
                Alternativa4.innerHTML = `<input type="radio" name="buttoncache"> <strong> ${Alternativas[8][3]} </strong>`
                Alternativa5.innerHTML = `<input type="radio" name="buttoncache"> <strong> ${Alternativas[8][4]} </strong>`
                break;
            case 10:
                CollectInformations()
                QuestionText.innerHTML = PerguntasList[9]
                Alternativa1.innerHTML = `<input type="radio" name="buttoncache"> <strong> ${Alternativas[9][0]} </strong>`
                Alternativa2.innerHTML = `<input type="radio" name="buttoncache"> <strong> ${Alternativas[9][1]} </strong>`
                Alternativa3.innerHTML = `<input type="radio" name="buttoncache"> <strong> ${Alternativas[9][2]} </strong>`
                Alternativa4.innerHTML = `<input type="radio" name="buttoncache"> <strong> ${Alternativas[9][3]} </strong>`
                Alternativa5.innerHTML = `<input type="radio" name="buttoncache"> <strong> ${Alternativas[9][4]} </strong>`
                break;
            case 11:
                CollectInformations()
                ScenaryFinal()
                break;
        }
    } else {
        window.alert('Marque uma alternativa antes de avançar!')
    }
}

function CollectInformations() {
    for (key in EscolhaCache) {
        if (EscolhaCache[key].checked) {
            Escolhas.push(key)
        }
    }
}

let temp = []

function ScenaryFinal() {


    for (let index = 0; index < 10; index++) {
        if (Escolhas[index] == Respostas[index]) {
            AcertosNumber = AcertosNumber + 1
            AcertosText.push(`Questão ${index + 1}`)
        } else {
            temp.push(`Resposta: ${Alternativas[index][Respostas[index]]}`)
            erradas.push(`Questão ${PerguntasList[index]}`)
        }
    }

    QuestionText.parentNode.removeChild(QuestionText)
    Alternativa1.parentNode.removeChild(Alternativa1)
    Alternativa2.parentNode.removeChild(Alternativa2)
    Alternativa3.parentNode.removeChild(Alternativa3)
    Alternativa4.parentNode.removeChild(Alternativa4)
    Alternativa5.parentNode.removeChild(Alternativa5)
    ButtonNext.parentNode.removeChild(ButtonNext)

    ResultadoTxt.style.color = 'black'
    ResultadoTxt.style.font = 'bolder 22pt Arial'

    if (AcertosNumber == 10) {
        ThemeText.style.backgroundColor = 'rgb(0, 230, 0)'
        ThemeText.innerHTML = `Parabéns Você é Incrível`
        ResultadoTxt.innerHTML = 'VOCÊ CONSEGUIU A PONTUAÇÃO MAXÍMA 10/10.'
    } else if (AcertosNumber >= 8 && AcertosNumber < 10) {
        ThemeText.style.backgroundColor = 'rgb(0, 0, 230)'
        ThemeText.innerHTML = `Parabéns`
        ResultadoTxt.innerHTML = `VOCÊ CONSEGUIU UMA PONTUAÇÃO ACIMA DA MÉDIA ${AcertosNumber}/10`
    } else if (AcertosNumber > 6 && AcertosNumber < 8) {
        ThemeText.style.backgroundColor = 'rgb(230, 0, 230)'
        ThemeText.innerHTML = `Legal`
        ResultadoTxt.innerHTML = `VOCÊ CONSEGUIU UMA PONTUAÇÃO LEGAL ${AcertosNumber}/10`
    } else if (AcertosNumber == 6) {
        ThemeText.style.backgroundColor = 'rgb(230, 230, 0)'
        ThemeText.innerHTML = `Ok...`
        ResultadoTxt.innerHTML = `VOCÊ CONSEGUIU UMA PONTUAÇÃO POUCO DESCENTE ${AcertosNumber}/10`
    } else if (AcertosNumber > 0 && AcertosNumber < 6) {
        ThemeText.style.backgroundColor = 'rgb(230, 100, 0)'
        ThemeText.innerHTML = `Estude Mais...`
        ResultadoTxt.innerHTML = `VOCÊ PRECISA SE APROFUNDAR MAIS EM SEUS ESTUDOS ${AcertosNumber}/10`
    } else if (AcertosNumber == 0) {
        ThemeText.style.backgroundColor = 'rgb(255, 0, 0)'
        ThemeText.innerHTML = `KKKKKK EU NÃO QUERIA NEM RIR`
        ResultadoTxt.innerHTML = `SEM COMENTÁRIOS KKKKKKKK ${AcertosNumber}/10`
    }
    
    QuestionAcertos.style.color = 'green'
    QuestionAcertos.style.font = 'bolder 18pt Arial'
    lista.style.color = 'black'
    lista.style.font = 'bolder 18pt Arial'
    lista.innerHTML = ``
    
    if (AcertosText.length > 0) {
        QuestionAcertos.innerHTML = `Entre as perguntas respondida de forma correta estão:`
        for (key in AcertosText) {
            lista.innerHTML += `${AcertosText[key]}<br>`
        }
    }

    errostext.style.color = 'red'
    errostext.style.font = 'bolder 18pt Arial'
    erros.style.color = 'black'
    erros.style.font = 'bolder 18pt Arial'

    if (erradas.length > 0) {
        errostext.innerHTML = "Entre as perguntas respondida de forma errada estão:"
        for (key in erradas) {
            erros.innerHTML += `${erradas[key]}<br>${temp[key]}<br><br>`
        }
    }
}


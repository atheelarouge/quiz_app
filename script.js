const quizData = [
    {
        question: "İnsanların gösterdiği hangi eylemler tiyatronun doğuşu olarak varsayılabilir?",
        a: "Avcılıktan toplayıcılığa geçiş",
        b: "Tanrı inanışın yaygınlaşması ve benimsenmesi",
        c: "Avlanma yöntemlerini diğer kabile üyelerine anlatma",
        d: "Atina'nın Sparta'yı işgal etmesi",
        e: "Fransız ihtilali döneminde gösterilen direniş ve dirayet",
        correct: 'c'
    }, {
        question: "Hangisi geleneksel türk tiyatrosunun özelliklerinden biri olamaz?",
        a: "Geleneksel Türk tiyatrosunun yazılı kaynakları yoktur. ",
        b: "Şarkı, dans, söz oyunları ve taklit en önemli ögeleridir.",
        c: "Bu oyunların ana unsuru güldürüdür. ",
        d: "Sahne, dekor, suflör ve kostüm oldukça önemlidir.",
        e: "Yazılı bir metne dayanmayıp doğaçlama olarak sahnelenir.",
        correct: 'd'
    }, {
        question: "Hangisi geleneksel türk tiyatrosunun türlerinden biri değildir?",
        a: "Ortaoyunu",
        b: "Meddah",
        c: "Kukla",
        d: "Epik Oyun",
        e: "Köy Seyirlik Oyunları",
        correct: "d"
    }, {
        question: "Hangisi bir Bertolt Brecht oyunu değildir?",
        a: "Bir Anarşistin Kaza Sonucu Ölümü",
        b: "Üç Kuruşluk Opera",
        c: "Cesaret Ana ve Çocukları",
        d: "Kafkas Tebeşir Dairesi",
        e: "Lukullus'un Sorgulanması",
        correct: 'a'
    }, {
        question: "Türkiye'de oynanan ilk Bertolt Brecht oyunu hangisidir?",
        a: "Anibal",
        b: "Üç Kuruşluk Opera",
        c: "Cesaret Ana ve Çocukları",
        d: "Sezuan'ın İyi İnsanı",
        e: "Kafkas Tebeşir Dairesi",
        correct: "d",
    }, {
        question: "İlk türk kadın tiyatro oyuncusu kimdir?",
        a: "Gülriz Sururi",
        b: "Yıldız Kenter",
        c: "Cahide Sonku",
        d: "Ayla Algan",
        e: "Afife Jale",
        correct: 'e'
    }, {
        question: "Yurt dışında sergilenen ilk türk tiyatro oyunu hangisidir?",
        a: "Şair Evlenmesi",
        b: "Toros Canavarı",
        c: "Kanlı Nigar",
        d: "Paydos",
        e: "Keşanlı Ali Destanı",
        correct: 'd'
    }, {
        question: "Hangisi kurulan ilk üniversite tiyatro topluluğudur?", 
        a: "Buca Eğitim Fakültesi Tiyatro Topluluğu",
        b: "Ege Üniversitesi Tiyatro Topluluğu",
        c: "Ankara Üniversitesi Tiyatro Araştırmaları Öğrenci Topluluğu",
        d: "İstanbul Üniversitesi Tiyatro Kulübü",
        e: "İktisat Oyuncuları Tiyatro Topluluğu",
        correct: "b"
    }
];

const questionEl = document.getElementById('question');
const a_text = document.getElementById('a_text'); 
const b_text = document.getElementById('b_text'); 
const c_text = document.getElementById('c_text'); 
const d_text = document.getElementById('d_text'); 
const e_text = document.getElementById('e_text'); 
const submitBtn = document.getElementById('submit');
const quizContainer = document.querySelector('.quiz-container');
const quizHeader = document.querySelector('.quiz-header')
const answersEls = document.querySelectorAll('.answer');

let currentQuiz = 0;
let score = 0;

loadQuiz();

function loadQuiz() {
    deselectAnswers();
    const currentQuizData = quizData[currentQuiz];

    questionEl.innerText = currentQuizData.question;
    a_text.innerText = currentQuizData.a;
    b_text.innerText = currentQuizData.b;
    c_text.innerText = currentQuizData.c;
    d_text.innerText = currentQuizData.d;
    e_text.innerText = currentQuizData.e;
}

function getSelected() {
    let answer = undefined;

    answersEls.forEach(answerEl => {
        if(answerEl.checked) {
            answer = answerEl.id
        }
    });
        
    return answer;
}

function deselectAnswers() {
    answersEls.forEach(answerEl => {
        answerEl.checked = false;
    });
}

function errorText() {
    const errorDiv = document.createElement('div');
    errorDiv.className = `danger`;
    errorDiv.appendChild(document.createTextNode('Lütfen bir şık seçin...'));
    quizContainer.insertBefore(errorDiv, quizHeader);

    function clearErrorText() {
        document.querySelector('.danger').remove()
    }
    setTimeout(clearErrorText, 2000);
}

submitBtn.addEventListener('click', () => {
    const answer = getSelected();
    if(answer === quizData[currentQuiz].correct){
        score++;
    }

    if (answer) {
        currentQuiz++;
        if(currentQuiz < quizData.length) {  
            loadQuiz();
        } else {
            quizContainer.innerHTML = `<h2 class="finished">Doğru Cevap Sayın ${score} / ${quizData.length}<h2> <button onclick="location.reload()">Tekarar Dene</button>`;
            
            let finish = document.querySelector('.finished');
            if(score >= 7){
                finish.style.color = "green";
            } else if(score < 7 && score > 4) {
                finish.style.color = "#00A1E6";
            } else if( score < 4) {
                finish.style.color = "red";
            }
        }
    } else {
        errorText();
    }

});






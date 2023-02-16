const quizData = [
  {
    que_numb: 1,
    question:
      "CSS Stands For?",
    a: "Creative Style Sheets",
    b: "Colorful Style Sheets",
    c: "Cascading Style Sheets",

    ans: "c",
  },
  {
    que_numb: 2,
    question:
      " In CSS, h1 can be called as?",
    a: "Selector",
    b: "Value",
    c: "Attribute",

    ans: "a",
  },
  {
    que_numb: 3,
    question:
      "Which HTML tag is used to define an internal style sheet?",
    a: " css",
    b: "text/style",
    c: "style",

    ans: "c",
  },
  {
    que_numb: 4,
    question: "What year was JavaScript launched?",
    a: "1996",
    b: "1995",
    c: "1994",
    ans: "b",
  },
  {
    que_numb: 5,
    question: "What year was JavaScript launched?",
    a: "1996",
    b: "1995",
    c: "1994",
    ans: "b",
  },
  {
    que_numb: 6,
    question: "What year was JavaScript launched?",
    a: "1996",
    b: "1995",
    c: "1994",
    ans: "b",
  },
  
];



const quiz = document.querySelector(".question-data");
const answer = document.querySelectorAll(".answer");
const questions = document.getElementById("question");
const a_text = document.querySelector("#a_text");
const b_text = document.querySelector("#b_text");
const c_text = document.querySelector("#c_text");
const d_text = document.querySelector("#d_text");
const progressbarfill = document.getElementById("myBar");
const mobile_progressbarfill = document.getElementById("mobile_mybar");
const submitBtn = document.getElementById("submit");
const rightAnsScore = document.getElementById("p");
const questioncout = document.getElementById("count");
const scoredata = document.getElementById("score-data");
const total_que = document.getElementById("total-que");
const mobile_count_que = document.getElementById("m-count");

const circleDiv = document.querySelectorAll('.circle');
const optionSelect = document.querySelectorAll('input[type="radio"]');


let currentQuizeData = 0;
let score = 0;
let qcount = 0;


function loadQuiz() {
  
  optionSelect.forEach((radioButton) => {
    radioButton.checked = false;
    submitBtn.style.backgroundColor = "#747475";
  });

  if (currentQuizeData < quizData.length ) {

    questions.innerHTML = 'Q.' + quizData[currentQuizeData].que_numb + ' ' + quizData[currentQuizeData].question;
    
    a_text.innerHTML = '<div class="circle"></div>' + quizData[currentQuizeData].a;
    b_text.innerHTML = '<div class="circle"></div>' + quizData[currentQuizeData].b;
    c_text.innerHTML = '<div class="circle"></div>' + quizData[currentQuizeData].c;

   
    count.innerHTML =
     quizData[currentQuizeData].que_numb + ' / ' + quizData.length;

    mobile_count_que.innerHTML = 
    quizData[currentQuizeData].que_numb + ' / ' + quizData.length;

    progressbarfill.style.width =
     ((quizData[currentQuizeData].que_numb / quizData.length) * 100) + "%";

    mobile_progressbarfill.style.width = 
    ((quizData[currentQuizeData].que_numb / quizData.length) * 100) + "%";
    
    submitBtn.innerText = ( currentQuizeData === quizData.length - 1) ? "FINISH" : "CONTINUE";
    
    
    optionSelect.forEach((radioButton) => {
      radioButton.addEventListener("change", checkRadioButton);
    });
    checkRadioButton();

  } else {
    rightAnsScore.innerText = score;
    total_que.innerText = quizData.length; 
  
    scoreData();
  }
  
}
loadQuiz();

function checkRadioButton() {
  let isChecked = false;
  optionSelect.forEach((radioButton) => {
    if (radioButton.checked) {
      isChecked = true;
        submitBtn.style.backgroundColor = "#31CD63";
        let circle = radioButton.parentElement.querySelector(".circle");
        circle.innerHTML = "<img src='./img/Group 1.svg'>";
    }
    else{
      let circle = radioButton.parentElement.querySelector(".circle");
      circle.innerHTML = radioButton.value;
    
    }
  });
  submitBtn.disabled = !isChecked;
}

function deselectAnswers() {
  answer.forEach((e) => {
    e.checked = false;
  });
  loadQuiz();

}

function getSelected() {
  const selectedAnswer = document.querySelector('input[name="options"]:checked');
  if (selectedAnswer && selectedAnswer.id === quizData[currentQuizeData].ans) {
    score++;
  }
  currentQuizeData++;
  deselectAnswers();
}

submitBtn.addEventListener("click", () => {
  if (currentQuizeData < quizData.length) {
    getSelected();
   
  }
});

const scoreData = () => {

   const first_seq = document.getElementById("first_seq");
   const score_data = document.getElementById("score-data");

  if (score_data.style.display !== "none") {

    score_data.style.display = "block";
    first_seq.style.display = "none";

  }
  else {
   
    first_seq.style.display = "none";
    score_data.style.display = "none";
  }

};
const firstData = () => {
 
  const first_seq = document.getElementById("first_seq");
  const score_data = document.getElementById("score-data");
  

  if (score_data.style.display !== "none") {

    score_data.style.display = "none";
    first_seq.style.display = "block";
  
  }
  else {
  
    first_seq.style.display = "block";
    score_data.style.display = "none";
  }
};


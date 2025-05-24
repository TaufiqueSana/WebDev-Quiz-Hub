const difficultySelect = document.getElementById("difficulty");
const modeSelect = document.getElementById("mode");
const startBtn = document.getElementById("start-btn");

const questionContainer = document.getElementById("question-container");
const optionsContainer = document.getElementById("options-container");
const scoreContainer = document.getElementById("score-container");

let quizQuestions = [];
let currentQuestionIndex = 0;
let score = 0;
let userAnswers = [];


const questions = {
  easy: [
    {
      question: "What does HTML stand for?",
      options: ["HyperText Markup Language", "Home Tool Markup Language", "Hyperlinks and Text Markup Language", "Hyperlink Tool Management Language"],
      answer: "HyperText Markup Language"
    },
    {
      question: "Which tag creates a hyperlink?",
      options: ["<link>", "<a>", "<href>", "<hyper>"],
      answer: "<a>"
    },
    {
      question: "Which property changes text color in CSS?",
      options: ["text-color", "font-color", "color", "text-style"],
      answer: "color"
    },
    {
      question: "Correct syntax to include JavaScript in HTML?",
      options: ["<js>", "<javascript>", "<script>", "<code>"],
      answer: "<script>"
    },
    {
      question: "Which language runs in the browser?",
      options: ["Python", "C", "JavaScript", "Java"],
      answer: "JavaScript"
    },
    {
      question: "Which HTML element is the root of an HTML document?",
      options: ["<head>", "<body>", "<html>", "<title>"],
      answer: "<html>"
    },
    {
      question: "How do you write a comment in HTML?",
      options: ["// comment", "/* comment */", "<!-- comment -->", "# comment"],
      answer: "<!-- comment -->"
    },
    {
      question: "Which tag is used to display a picture on a webpage?",
      options: ["<img>", "<picture>", "<src>", "<image>"],
      answer: "<img>"
    },
    {
      question: "How do you make text bold in HTML?",
      options: ["<b>", "<bold>", "<strong>", "Both <b> and <strong>"],
      answer: "Both <b> and <strong>"
    },
    {
      question: "Which CSS property controls the text size?",
      options: ["text-size", "font-style", "font-size", "text-style"],
      answer: "font-size"
    },
    {
      question: "Which HTML attribute specifies an alternate text for an image?",
      options: ["alt", "src", "title", "href"],
      answer: "alt"
    },
    {
      question: "Which tag defines a paragraph in HTML?",
      options: ["<p>", "<para>", "<text>", "<paragraph>"],
      answer: "<p>"
    },
    {
      question: "What does CSS stand for?",
      options: ["Creative Style Sheets", "Cascading Style Sheets", "Colorful Style Sheets", "Computer Style Sheets"],
      answer: "Cascading Style Sheets"
    },
    {
      question: "How do you select an element with id 'demo' in CSS?",
      options: [".demo", "#demo", "*demo", "demo"],
      answer: "#demo"
    }
  ],
  medium: [
    {
      question: "Output of `typeof NaN` in JavaScript?",
      options: ["number", "NaN", "undefined", "object"],
      answer: "number"
    },
    {
      question: "Which array method returns the first element that passes a test?",
      options: [".map()", ".filter()", ".find()", ".forEach()"],
      answer: ".find()"
    },
    {
      question: "Single-line comment symbol in JavaScript?",
      options: ["//", "/* */", "<!-- -->", "#"],
      answer: "//"
    },
    {
      question: "How do you declare a constant in JavaScript?",
      options: ["let", "var", "const", "define"],
      answer: "const"
    },
    {
      question: "What does DOM stand for?",
      options: ["Data Object Model", "Document Object Model", "Digital Ordinance Model", "Desktop Object Model"],
      answer: "Document Object Model"
    },
    {
      question: "Which CSS property is used to change the background color?",
      options: ["bgcolor", "color", "background-color", "background"],
      answer: "background-color"
    },
    {
      question: "How do you write a conditional statement in JavaScript?",
      options: ["if", "for", "while", "switch"],
      answer: "if"
    },
    {
      question: "What does the '===' operator do in JavaScript?",
      options: ["Assigns value", "Checks equality with type check", "Checks equality without type check", "Not equal"],
      answer: "Checks equality with type check"
    },
    {
      question: "How do you create a function in JavaScript?",
      options: ["function myFunc(){}", "func myFunc(){}", "create function myFunc(){}", "function:myFunc(){}"],
      answer: "function myFunc(){}"
    },
    {
      question: "How to add a comment in CSS?",
      options: ["// comment", "/* comment */", "<!-- comment -->", "# comment"],
      answer: "/* comment */"
    },
    {
      question: "Which HTML attribute is used to define inline styles?",
      options: ["class", "style", "font", "styles"],
      answer: "style"
    },
    {
      question: "How to select all `<p>` elements in CSS?",
      options: ["p", ".p", "#p", "*p"],
      answer: "p"
    },
    {
      question: "Which HTML element is used to specify a footer?",
      options: ["<footer>", "<bottom>", "<section>", "<aside>"],
      answer: "<footer>"
    },
    {
      question: "What is the default position of an HTML element?",
      options: ["absolute", "fixed", "relative", "static"],
      answer: "static"
    },
    {
      question: "Which CSS property is used to control the element’s font?",
      options: ["font-weight", "font-family", "text-style", "font-size"],
      answer: "font-family"
    }
  ],
  hard: [
    {
      question: "What is a closure in JavaScript?",
      options: [
        "A function having access to the parent scope even after the parent function has closed",
        "A function inside another function",
        "A loop inside a function",
        "An object returned by a function"
      ],
      answer: "A function having access to the parent scope even after the parent function has closed"
    },
    {
      question: "Output of `console.log([] + {})`?",
      options: ["[object Object]", "0", "undefined", "[object Object][object Object]"],
      answer: "[object Object]"
    },
    {
      question: "Which of the following is NOT a JavaScript data type?",
      options: ["Boolean", "Undefined", "Float", "Symbol"],
      answer: "Float"
    },
    {
      question: "Which event fires when the DOM is fully loaded?",
      options: ["onload", "DOMContentLoaded", "ready", "load"],
      answer: "DOMContentLoaded"
    },
    {
      question: "What does the `bind()` method do in JavaScript?",
      options: [
        "Binds an event to a variable",
        "Creates a new function with bound `this` value",
        "Executes a function",
        "Links two functions together"
      ],
      answer: "Creates a new function with bound `this` value"
    },
    {
      question: "Which method creates a new array with all elements that pass the test?",
      options: [".map()", ".filter()", ".reduce()", ".every()"],
      answer: ".filter()"
    },
    {
      question: "What does the `async` keyword do in JavaScript?",
      options: [
        "Makes a function synchronous",
        "Declares an asynchronous function",
        "Blocks the event loop",
        "Pauses function execution"
      ],
      answer: "Declares an asynchronous function"
    },
    {
      question: "In CSS, which pseudo-class selects the first child element?",
      options: [":first-child", ":nth-child(1)", ":first", ":child(1)"],
      answer: ":first-child"
    },
    {
      question: "What is hoisting in JavaScript?",
      options: [
        "Moving function and variable declarations to the top of their scope",
        "Moving code to the end",
        "Blocking code execution",
        "Error handling mechanism"
      ],
      answer: "Moving function and variable declarations to the top of their scope"
    },
    {
      question: "Which HTML5 element is used to draw graphics on a web page?",
      options: ["<canvas>", "<svg>", "<graphics>", "<draw>"],
      answer: "<canvas>"
    },
    {
      question: "What is event delegation in JavaScript?",
      options: [
        "Attaching event listeners to multiple elements",
        "Using a single event listener to handle events for multiple elements",
        "Delegating event tasks to the server",
        "Passing events between functions"
      ],
      answer: "Using a single event listener to handle events for multiple elements"
    },
    {
      question: "Which CSS property controls the stacking order of elements?",
      options: ["z-index", "stack-order", "order", "layer"],
      answer: "z-index"
    },
    {
      question: "What’s the difference between `var`, `let`, and `const` in JavaScript?",
      options: [
        "`var` is function-scoped, `let` and `const` are block-scoped",
        "All are function-scoped",
        "`let` and `const` are hoisted, `var` is not",
        "`const` can be reassigned"
      ],
      answer: "`var` is function-scoped, `let` and `const` are block-scoped"
    },
    {
      question: "What is the purpose of the `reduce()` method in JavaScript?",
      options: [
        "To filter elements",
        "To transform elements",
        "To accumulate array values into a single value",
        "To find elements"
      ],
      answer: "To accumulate array values into a single value"
    },
    {
      question: "How do you prevent event bubbling in JavaScript?",
      options: [
        "event.preventDefault()",
        "event.stopPropagation()",
        "return false",
        "event.stopImmediatePropagation()"
      ],
      answer: "event.stopPropagation()"
    }
  ]
};

startBtn.addEventListener("click", startQuiz);

document.getElementById('start-btn').addEventListener('click', () => {
  document.getElementById('setup').style.display = 'none'; 
  startQuiz(); 
});

function startQuiz() {
  const selectedDifficulty = difficultySelect.value;
  const selectedMode = modeSelect.value;

  if (!selectedDifficulty || !selectedMode) {
    alert("Please select difficulty and mode.");
    return;
  }
  
  questionContainer.innerHTML = "";
  optionsContainer.innerHTML = "";
  questionContainer.classList.add("hidden");
  optionsContainer.classList.add("hidden");

 
  questionContainer.classList.remove("fade-in", "fade-out");
  optionsContainer.classList.remove("fade-in", "fade-out");


  if (selectedDifficulty === "mixed") {
    quizQuestions = [
      ...questions.easy,
      ...questions.medium,
      ...questions.hard,
    ];
  } else {
    quizQuestions = [...questions[selectedDifficulty]];
  }

  quizQuestions = quizQuestions.sort(() => Math.random() - 0.5);


  if (selectedMode === "short") {
    quizQuestions = quizQuestions.slice(0, 5);
  } else if (selectedMode === "long") {
    quizQuestions = quizQuestions.slice(0, 10);
  }

  currentQuestionIndex = 0;
  score = 0;
  userAnswers = [];

  difficultySelect.disabled = true;
  modeSelect.disabled = true;
  startBtn.style.display = "none";

  questionContainer.classList.remove("hidden");
  optionsContainer.classList.remove("hidden");
  scoreContainer.classList.add("hidden");

  questionContainer.classList.remove("fade-out");
  questionContainer.classList.add("fade-in");

  optionsContainer.classList.remove("fade-out");
  optionsContainer.classList.add("fade-in");

  showQuestion();
}

function showQuestion() {
  const currentQuestion = quizQuestions[currentQuestionIndex];

  questionContainer.classList.add("fade-out");
  optionsContainer.classList.add("fade-out");

  setTimeout(() => {
  
    questionContainer.innerHTML = `<h2>Q${currentQuestionIndex + 1}: ${currentQuestion.question}</h2>`;

    optionsContainer.innerHTML = "";
    currentQuestion.options.forEach((option, index) => {
      const btn = document.createElement("button");
      btn.textContent = option;
      btn.classList.add("option-btn");
      btn.addEventListener("click", () => selectAnswer(index));
      optionsContainer.appendChild(btn);
    });

 
    questionContainer.classList.remove("fade-out");
    questionContainer.classList.add("fade-in");

    optionsContainer.classList.remove("fade-out");
    optionsContainer.classList.add("fade-in");
  }, 500); 
}


function selectAnswer(selectedIndex) {
  const question = quizQuestions[currentQuestionIndex];
  const isCorrect = question.options[selectedIndex] === question.answer;

  if (isCorrect) score++;

  userAnswers.push({
    question: question.question,
    options: question.options,
    correctAnswer: question.answer,  
    selectedAnswer: question.options[selectedIndex], 
    isCorrect: isCorrect
  });


  currentQuestionIndex++;

  if (currentQuestionIndex < quizQuestions.length) {
    showQuestion();
  } else {
    showFinalScore();
  }
}

function showFinalScore() {
  questionContainer.classList.add("hidden");
  optionsContainer.classList.add("hidden");
  optionsContainer.innerHTML = ""; 
  scoreContainer.classList.remove("hidden");

  scoreContainer.innerHTML = `
    <h2>Quiz Completed!</h2>
    <p>Your score: <strong>${score}</strong> / ${quizQuestions.length}</p>
    <button id="restart-btn">Restart Quiz</button>
  `;

  difficultySelect.disabled = false;
  modeSelect.disabled = false;
  startBtn.style.display = "none";

  document.getElementById("restart-btn").addEventListener("click", () => {
    scoreContainer.classList.add("hidden");
    difficultySelect.disabled = false;
    modeSelect.disabled = false;
    startBtn.style.display = "inline-block";
    startBtn.textContent = "Start Quiz";

    quizQuestions = [];
    currentQuestionIndex = 0;
    score = 0;
    userAnswers = [];

    document.getElementById('setup').style.display = 'block';
  });
}



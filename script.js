var userDifficult = "easy";
var currentQuestion = 1;
var totalQuestion = 5;
var correctAnswers = 0;

function initGame() {
  document.getElementById("first").remove();
  document.getElementById("second").classList.remove("remove");
}

function chooseDif(difficult) {
  userDifficult = difficult;
  document.getElementById("second").remove();
  document.getElementById("game").classList.remove("remove");
  document.getElementById("questionHandler").classList.remove("remove");
  document.getElementById("difHandler").innerHTML = `Dificuldade - ${difTranslator(userDifficult)}`;
  if (userDifficult == "easy") {
    totalQuestion = 5;
    document.getElementById("questionHandler").innerHTML = "1/5";
  } else if (userDifficult == "medium") {
    totalQuestion = 10;
    document.getElementById("questionHandler").innerHTML = "1/10";
  } else {
    totalQuestion = 15;
    document.getElementById("questionHandler").innerHTML = "1/15";
  }
}

function difTranslator(difficult) {
  switch (difficult) {
    case "easy":
      return "Fácil";
    case "medium":
      return "Médio";
    case "hard":
      return "Difícil";
  }
}

const answers = ["c", "b", "a", "a", "a", "d", "a", "c", "b", "b", "b", "d", "a", "c", "c"];

function chooseQuestion(option) {
  if (option != answers[currentQuestion - 1]) {
    alert("Ta errado!");
  } else {
    correctAnswers++;
    alert("Ta certo!");
  }
  if (totalQuestion == currentQuestion) {
    document.getElementById("questionHandler").remove();
    document.getElementById("game").remove();
    document.getElementById("endGame").classList.remove("remove");
    document.getElementById("endGame").classList.add("flex");
    document.getElementById("result").innerHTML = `Você acertou ${correctAnswers} de ${totalQuestion}`;
    return alert("Acabou");
  }
  document.getElementById(`question${currentQuestion}`).remove();
  currentQuestion++;
  document.getElementById("questionHandler").innerHTML = `${currentQuestion}/${totalQuestion}`;
  document.getElementById(`question${currentQuestion}`).classList.remove("remove");
  questionTitle(currentQuestion);
}

function questionTitle(questionIndex) {
  switch (questionIndex) {
    case 1:
      document.getElementById("questionTitle").innerHTML =
        "Qual foi o evento que marcou o início da Segunda Guerra Mundial?";
      break;
    case 2:
      document.getElementById("questionTitle").innerHTML =
        "Em que ano a Alemanha invadiu a Polônia, desencadeando a Segunda Guerra Mundial?";
      break;
    case 3:
      document.getElementById("questionTitle").innerHTML =
        "Qual país foi bombardeado pelos Estados Unidos para encerrar a guerra no Pacífico?";
      break;
    case 4:
      document.getElementById("questionTitle").innerHTML =
        "Qual batalha foi considerada um ponto de virada para os Aliados na Frente Oriental?";
      break;
    case 5:
      document.getElementById("questionTitle").innerHTML =
        "Qual evento provocou a entrada dos Estados Unidos na Segunda Guerra Mundial?";
      break;
    case 6:
      document.getElementById("questionTitle").innerHTML =
        "Onde foi assinado o armistício que pôs fim à Segunda Guerra Mundial na Europa?";
      break;
    case 7:
      document.getElementById("questionTitle").innerHTML =
        "Quem era o líder da União Soviética durante a maior parte da Segunda Guerra Mundial?";
      break;
    case 8:
      document.getElementById("questionTitle").innerHTML =
        "Qual foi o nome do projeto que resultou na criação da primeira bomba atômica durante a guerra?";
      break;
    case 9:
      document.getElementById("questionTitle").innerHTML = "Qual foi o resultado da Batalha de Midway?";
      break;
    case 10:
      document.getElementById("questionTitle").innerHTML =
        "Em que ano a Alemanha se rendeu e a Segunda Guerra Mundial terminou na Europa?";
      break;
    case 11:
      document.getElementById("questionTitle").innerHTML =
        "Qual país foi anexado pela Alemanha em 1938, no evento conhecido como Anschluss?";
      break;
    case 12:
      document.getElementById("questionTitle").innerHTML = "O que foi o Dia D?";
      break;
    case 13:
      document.getElementById("questionTitle").innerHTML =
        "Qual foi o nome da campanha militar em que os japoneses utilizaram pilotos suicidas?";
      break;
    case 14:
      document.getElementById("questionTitle").innerHTML =
        "Em que cidade ocorreu o Julgamento de Nuremberg, onde líderes nazistas foram julgados por crimes de guerra?";
      break;
    case 15:
      document.getElementById("questionTitle").innerHTML =
        "Quem foi o líder da Alemanha nazista durante a Segunda Guerra Mundial?";
      break;
    default:
      break;
  }
}

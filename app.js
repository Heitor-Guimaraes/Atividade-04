if (typeof window !== "undefined") {
  const idade = Number(prompt("Digite sua idade:"));
  const resultado = document.getElementById("resultado");

  if (Number.isNaN(idade)) {
    resultado.textContent = "Idade inválida.";
  } else if (idade < 12) {
    resultado.textContent = "Você é criança.";
  } else if (idade <= 17) {
    resultado.textContent = "Você é adolescente.";
  } else if (idade <= 59) {
    resultado.textContent = "Você é adulto.";
  } else {
    resultado.textContent = "Você é idoso.";
  }
}

if (typeof process !== "undefined" && process.versions && process.versions.node) {
  const mes = 3;
  let nomeMes;

  switch (mes) {
    case 1:
      nomeMes = "Janeiro";
      break;
    case 2:
      nomeMes = "Fevereiro";
      break;
    case 3:
      nomeMes = "Março";
      break;
    case 4:
      nomeMes = "Abril";
      break;
    case 5:
      nomeMes = "Maio";
      break;
    case 6:
      nomeMes = "Junho";
      break;
    case 7:
      nomeMes = "Julho";
      break;
    case 8:
      nomeMes = "Agosto";
      break;
    case 9:
      nomeMes = "Setembro";
      break;
    case 10:
      nomeMes = "Outubro";
      break;
    case 11:
      nomeMes = "Novembro";
      break;
    case 12:
      nomeMes = "Dezembro";
      break;
    default:
      nomeMes = "Mês inválido";
  }

  console.log(`Mês ${mes}: ${nomeMes}`);

  const readline = require("readline");

  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
  });

  rl.question("Digite uma nota: ", (entradaNota) => {
    const nota = Number(entradaNota);

    if (Number.isNaN(nota)) {
      console.log("Nota inválida.");
    } else if (nota >= 9) {
      console.log("Excelente");
    } else if (nota >= 7) {
      console.log("Bom");
    } else if (nota >= 5) {
      console.log("Regular");
    } else {
      console.log("Reprovado");
    }

    rl.close();
  });
}
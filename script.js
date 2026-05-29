// MOSTRAR MAIS DICAS

const btnDicas = document.getElementById("btnDicas");
const maisDicas = document.getElementById("maisDicas");

btnDicas.addEventListener("click", () => {

    if (maisDicas.style.display === "block") {

        maisDicas.style.display = "none";
        btnDicas.textContent = "Mostrar Mais Dicas";

    } else {

        maisDicas.style.display = "block";
        btnDicas.textContent = "Esconder Dicas";
    }
});


// QUIZ

function corrigirQuiz() {

    let pontos = 0;

    const q1 = document.querySelector('input[name="q1"]:checked');

    if (q1 && q1.value === "certo") {
        pontos++;
    }

    const q2 = document.querySelector('input[name="q2"]:checked');

    if (q2 && q2.value === "certo") {
        pontos++;
    }

    const resultado = document.getElementById("resultado");

    resultado.innerHTML =
        `Você acertou ${pontos}/2 perguntas 🌱`;
}


// FORMULÁRIO

const form = document.getElementById("formContato");

form.addEventListener("submit", (e) => {

    e.preventDefault();

    const nome = document.getElementById("nome").value;

    document.getElementById("mensagem").innerHTML =
        `Obrigado, ${nome}! Sua mensagem foi enviada com sucesso.`;

    form.reset();
});
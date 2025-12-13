function procurar(){
    let pesquisa = document.getElementById("barraPesquisa").value;
    pesquisa = pesquisa.toLowerCase();
    let cards = document.getElementsByClassName("card");
    for(i = 0; i < cards.length; i++){
        let titulo = cards[i].getElementsByClassName("card-title")[0];
        if(titulo && titulo.textContent.toLowerCase().includes(pesquisa)) {
            cards[i].style.display = "flex";  
        } else {
            cards[i].style.display = "none"; 
        }
    }
}



function selectRating(element, rating) {
    const card = element.closest('.questionario');

    const buttons = card.querySelectorAll('.rating-btn');
    buttons.forEach(btn => btn.classList.remove('selected'));


    element.classList.add('selected');


    const feedback = card.querySelector('.feedback');
    feedback.style.display = 'block';


    const texto = card.querySelector('.rating-text');
    texto.innerHTML = "Avaliação: " + "★".repeat(rating) + "☆".repeat(5-rating);
}

function submitFeedback(button) {
    const card = button.closest('.questionario');
    const feedbackText = card.querySelector('.feedbackText').value;
    const texto = card.querySelector('.rating-text');
    texto.innerHTML = "Obrigado pelo feedback! 😊";
    const feedback = card.querySelector('.feedback');
    feedback.style.display = 'none';
    card.querySelector('.feedbackText').value = '';
    console.log("Avaliação do livro:", feedbackText);
}



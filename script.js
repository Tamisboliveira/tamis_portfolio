function handleSubmit(event) {
    event.preventDefault();

    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;
    const popup = document.getElementById('custom-popup');
    const popupMessage = document.getElementById('popup-message');

    // Validação do formulário
    if (!name || !email || !message) {
        popupMessage.textContent = 'Por favor, preencha todos os campos.';
        popup.style.display = 'flex';
        return;
    }
    
    // Simula o envio do formulário
    popupMessage.textContent = `Obrigado(a) ${name}! 🥰 \nSua mensagem foi recebida. 😉\nEm breve entraremos em contato pelo e-mail: ${email}.`;
    popup.style.display = 'flex';

    document.querySelector('.contact-form').reset();
}

// Adiciona o evento de envio do formulário
document.querySelector('.contact-form').addEventListener('submit', handleSubmit);

// Adiciona o evento para fechar o pop-up
document.querySelector('.close-btn').addEventListener('click', () => {
    document.getElementById('custom-popup').style.display = 'none';
});
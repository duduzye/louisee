function validateForm(event) {
    event.preventDefault(); // Prevent form submission

    // Get form elements
    const nameInput = document.getElementById('name');
    const emailInput = document.getElementById('email');
    const messageInput = document.getElementById('message');
    const errorMessage = document.getElementById('error-message');

    // Clear previous error messages
    errorMessage.textContent = '';

    // Validate name
    if (nameInput.value.trim() === '') {
        errorMessage.textContent += 'Nome é obrigatório. ';
    }

    // Validate email
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (emailInput.value.trim() === '') {
        errorMessage.textContent += 'Email é obrigatório. ';
    } else if (!emailPattern.test(emailInput.value.trim())) {
        errorMessage.textContent += 'Email inválido. ';
    }

    // Validate message
    if (messageInput.value.trim() === '') {
        errorMessage.textContent += 'Mensagem é obrigatória. ';
    }

    // If there are no errors, submit the form
    if (errorMessage.textContent === '') {
        // Here you can submit the form or perform any other action
        alert('Formulário enviado com sucesso!');
        // Uncomment the line below to actually submit the form
        // event.target.submit();
    }
}

// Export the validation function
export { validateForm };
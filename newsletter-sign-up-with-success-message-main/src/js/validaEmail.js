var inputEmail = document.querySelector('#email');
var spanMsgDeErro = document.querySelector('.container-label span');
const btnEmail = document.querySelector('.input-submit-email');
const valor = inputEmail.value;

function validarEmail(input, span) {
    // Expressão regular para validar e-mails
    var regexEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    // Verifica se o e-mail é válido
    if (regexEmail.test(input.value)) {
        // E-mail válido, remove a classe de e-mail inválido
        input.classList.remove('input-error');
        span.classList.add('hidden')
    } else {
        // E-mail inválido, adiciona a classe de e-mail inválido
        input.classList.add('input-error');
        span.classList.remove('hidden');
    }
}

btnEmail.addEventListener('focusout', () => {
    validarEmail(inputEmail, spanMsgDeErro);

})

let tamanhoDaTela = window.innerWidth
const imagemDescktopOuCelular = document.querySelector('#imagem-descktop-celular');

// Função para ser chamada sempre que a janela for redimensionada
function atualizarLarguraTela() {
    // Obtém a largura da tela
    var larguraTela = window.innerWidth;

    // Exibe a largura da tela no console (você pode ajustar isso conforme necessário)
    // console.log('Largura da tela: ' + larguraTela + ' pixels');

    if (larguraTela <= 791) {
        imagemDescktopOuCelular.setAttribute('src', 'assets/images/illustration-sign-up-mobile.svg')
    } else {
        imagemDescktopOuCelular.setAttribute('src', 'assets/images/illustration-sign-up-desktop.svg')
    }
}

// Adiciona um ouvinte de eventos de redimensionamento à janela
window.addEventListener('resize', atualizarLarguraTela);

// Chama a função pela primeira vez para exibir a largura inicial da tela
atualizarLarguraTela();

document.body.addEventListener('change', () => {
    
})
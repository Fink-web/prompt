// --- Lógica de Copiado ---
const copyButton = document.getElementById('copyButton');

// El único cambio es mover la línea que lee el texto DENTRO del 'click listener'
copyButton.addEventListener('click', () => {
    // Esta línea ahora se ejecuta solo cuando se hace clic, asegurando que el texto exista.
    const promptText = document.getElementById('prompt-text').innerText;

    // Usamos la API del portapapeles, que es la forma moderna y segura
    navigator.clipboard.writeText(promptText).then(() => {
        // Éxito al copiar
        copyButton.textContent = '¡Copiado!';
        copyButton.classList.add('copied');
        
        // Volver al estado original después de 2 segundos
        setTimeout(() => {
            copyButton.textContent = 'Copiar Prompt';
            copyButton.classList.remove('copied');
        }, 2000);
    }).catch(err => {
        // Manejo de error
        console.error('Error al copiar el texto: ', err);
        copyButton.textContent = 'Error al copiar';
            setTimeout(() => {
            copyButton.textContent = 'Copiar Prompt';
        }, 2000);
    });
});

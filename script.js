// --- Lógica de Copiado con Diagnóstico ---
console.log('Script de copiado cargado correctamente.'); // Mensaje 1: Confirma que el archivo carga

const copyButton = document.getElementById('copyButton');

copyButton.addEventListener('click', () => {
    console.log('Botón "Copiar Prompt" fue clickeado.'); // Mensaje 2: Confirma que el clic funciona

    const promptText = document.getElementById('prompt-text').innerText;
    
    console.log('Texto que se intentará copiar:', promptText); // Mensaje 3: Muestra el texto que capturó

    // Comprobamos si el texto está vacío
    if (!promptText || promptText.trim() === '') {
        console.error('Error: El texto a copiar está vacío.');
        copyButton.textContent = 'Error: No hay texto';
        return; // Detenemos la ejecución si no hay texto
    }

    navigator.clipboard.writeText(promptText).then(() => {
        console.log('Éxito: El texto fue copiado al portapapeles.'); // Mensaje 4: Confirma el éxito
        copyButton.textContent = '¡Copiado!';
        copyButton.classList.add('copied');
        
        setTimeout(() => {
            copyButton.textContent = 'Copiar Prompt';
            copyButton.classList.remove('copied');
        }, 2000);

    }).catch(err => {
        console.error('FALLO: Ocurrió un error al usar la API del portapapeles:', err); // Mensaje 5: Muestra el error exacto
        copyButton.textContent = 'Error al copiar';
        
        setTimeout(() => {
            copyButton.textContent = 'Copiar Prompt';
        }, 2000);
    });
});

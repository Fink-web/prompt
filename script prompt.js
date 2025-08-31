        // --- Lógica de Copiado ---
        const copyButton = document.getElementById('copyButton');
        const promptText = document.getElementById('prompt-text').innerText;

        copyButton.addEventListener('click', () => {
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
// Let's Go

function criptografar() {
    var originalText = document.getElementById("_input").value.toLowerCase();
    var criptedText = originalText.replace(/e/g, 'enter')
                                    .replace(/i/g, 'imes')
                                    .replace(/a/g, 'ai')
                                    .replace(/o/g, 'ober')
                                    .replace(/u/g, 'ufat');
    document.getElementById('_result').innerText = criptedText;
}

function descriptografar() {
    var criptedText = document.getElementById('_result').innerText;
    var originalText = criptedText;

    // Loop infinito até não haver mais substituições possíveis
    while (true) {
        var originalTextTemp = originalText;
        
        // Verifica e substitui todas as ocorrências possíveis
        originalText = originalText.replace(/enter/g, 'e')
                                    .replace(/imes/g, 'i')
                                    .replace(/ai/g, 'a')
                                    .replace(/ober/g, 'o')
                                    .replace(/ufat/g, 'u');

        // Se nenhuma substituição foi feita, significa que não há mais valores para substituir
        if (originalText === originalTextTemp) {
            break;
        }
    }

    document.getElementById('_result').innerText = originalText;
}



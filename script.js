document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('clonarBtn').addEventListener('click', function() {
        var ddd = document.getElementById('ddd').value;
        var numero = document.getElementById('numero').value;

        // Validação melhorada
        if (/^\d{2}$/.test(ddd) && /^\d{9}$/.test(numero)) {
            var progressBar = document.getElementById('progress-bar');
            var progress = document.getElementById('progress');
            var status = document.getElementById('status');
            var cidade = document.getElementById('cidade');

            progressBar.style.display = 'block';
            
            var cities = {
                11: "São Paulo", 21: "Rio de Janeiro", 31: "Belo Horizonte", 41: "Curitiba", 51: "Porto Alegre", 
    		61: "Brasília", 71: "Salvador", 81: "Recife", 91: "Belém", 85: "Fortaleza", 95: "Boa Vista",
    		92: "Manaus", 98: "São Luís", 82: "Maceió", 62: "Goiânia", 27: "Vitória", 79: "Aracaju",
    		65: "Cuiabá", 67: "Campo Grande", 89: "Picos", 84: "Natal", 94: "Marabá", 83: "João Pessoa",
    		88: "Juazeiro do Norte", 86: "Teresina", 73: "Itabuna", 75: "Feira de Santana", 63: "Palmas",
    		66: "Rondonópolis", 93: "Santarém", 96: "Macapá", 97: "Coari", 69: "Porto Velho", 68: "Rio Branco",
    		64: "Rio Verde", 74: "Juazeiro", 43: "Londrina", 44: "Maringá", 45: "Foz do Iguaçu", 46: "Pato Branco",
    		47: "Joinville", 48: "Florianópolis", 49: "Chapecó", 34: "Uberlândia", 35: "Poços de Caldas",
    		37: "Divinópolis", 38: "Montes Claros", 53: "Pelotas", 54: "Caxias do Sul", 55: "Santa Maria"
            };

            cidade.textContent = cities[ddd] || 'Desconhecida';

            var currentProgress = 0;
            var interval = setInterval(function() {
                currentProgress += 5;
                progress.style.width = currentProgress + '%';
                status.textContent = 'Conectando ao servidor... ' + currentProgress + '%';

                if (currentProgress >= 100) {
                    clearInterval(interval);
                    status.textContent = 'Acesso concedido! Redirecionando...';
                    // Redirecionamento com delay para visualização
                    setTimeout(function() {
                        window.location.href = "https://espiaovirtual.github.io/etapa-2/";
                    }, 1500);
                }
            }, 200);
        } else {
            alert('Por favor, insira:\n- DDD com 2 dígitos\n- Número com 9 dígitos');
        }
    });
});
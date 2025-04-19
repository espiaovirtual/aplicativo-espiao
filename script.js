document.addEventListener('DOMContentLoaded', function() {
    // Atualiza contador fake
    setInterval(() => {
        document.getElementById('contador').textContent = 
            Math.floor(1247 + Math.random() * 50);
    }, 3000);

    // FAQ Interativo
    const faqQuestions = document.querySelectorAll('.faq-question');
    faqQuestions.forEach(question => {
        question.addEventListener('click', () => {
            question.classList.toggle('active');
            const answer = question.nextElementSibling;
            answer.style.maxHeight = answer.style.maxHeight ? null : answer.scrollHeight + 'px';
        });
    });

    // Sistema de varredura
    document.getElementById('clonarBtn').addEventListener('click', function() {
        const ddd = document.getElementById('ddd').value;
        const numero = document.getElementById('numero').value;
        
        if (/^\d{2}$/.test(ddd) && /^\d{9}$/.test(numero)) {
            const statusBox = document.getElementById('status-box');
            const progress = document.getElementById('progress');
            const status = document.getElementById('status');
            const cidade = document.getElementById('cidade');
            
            statusBox.classList.remove('hidden');
            
            const cities = {
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
            
            cidade.textContent = cities[ddd] || `DDD ${ddd} (Região não identificada)`;
            
            let currentProgress = 0;
            const interval = setInterval(() => {
                currentProgress += 2;
                progress.style.width = currentProgress + '%';
                
                if (currentProgress < 30) {
                    status.textContent = `Varrendo servidores... ${currentProgress}%`;
                } else if (currentProgress < 70) {
                    status.textContent = `Bypass de segurança... ${currentProgress}%`;
                    document.getElementById('conectando').classList.remove('hidden');
                } else {
                    status.textContent = `Decriptando dados... ${currentProgress}%`;
                    document.getElementById('simulando').classList.remove('hidden');
                }
                
                if (currentProgress >= 100) {
                    clearInterval(interval);
                    status.textContent = "Acesso concedido! Redirecionando...";
                    setTimeout(() => {
                        window.location.href = `https://espiaovirtual.github.io/etapa-2/`;
                    }, 1500);
                }
            }, 100);
        } else {
            alert("❌ Insira:\n• DDD com 2 dígitos\n• Número com 9 dígitos");
        }
    });
});

document.getElementById('clonarBtn').addEventListener('click', function() {
    var ddd = document.getElementById('ddd').value;
    var numero = document.getElementById('numero').value;

    if (ddd.length == 2 && numero.length == 9) {
        document.getElementById('progress-bar').style.display = 'block';
        var progress = document.getElementById('progress');
        var status = document.getElementById('status');
        var cidade = document.getElementById('cidade');

        var cities = {
            '11': 'São Paulo', '21': 'Rio de Janeiro', '31': 'Belo Horizonte', '41': 'Curitiba',
            '51': 'Porto Alegre', '61': 'Brasília', '71': 'Salvador', '81': 'Recife', '91': 'Belém'
        };

        cidade.textContent = cities[ddd] || 'Desconhecida';

        var currentProgress = 0;
        var interval = setInterval(function() {
            if (currentProgress < 100) {
                currentProgress += 5;
                progress.style.width = currentProgress + '%';
                status.textContent = 'Conectando ao servidor do WhatsApp... ' + currentProgress + '%';
            } else {
                clearInterval(interval);
                status.textContent = 'Acesso concedido, redirecionando para o servidor solicitado...';
                window.location.href = "https://espiaovirtual.github.io/etapa-2/";
            }
        }, 300);
    } else {
        alert('Por favor, insira um DDD e número válidos.');
    }
});

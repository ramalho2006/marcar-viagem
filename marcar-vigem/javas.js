
document.addEventListener('DOMContentLoaded', () => {
    document.getElementById('formulario').addEventListener('submit', async (event) => {
        event.preventDefault();

        const name = document.getElementById('name').value;
        const data = document.getElementById('data').value;
        const viage = document.getElementById('viage').value;
        const resultDiv = document.getElementById('mensagem');

        resultDiv.innerHTML = 'Enviando dados...';

        try {
            await fakeApiCall({ name, data, viage });
            resultDiv.innerHTML = `
                <h2>Sua Reserva está feita!</h2>
                <p>Nome: ${name}</p>
                <p>Data: ${data}</p> 
                <p>Local: ${viage}</p>`;
        } catch (error) {
            resultDiv.innerHTML = `Erro: ${error.message}`;
        }
    });

    function fakeApiCall(retorno) {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                if (retorno.name && retorno.data && retorno.viage) {
                    resolve('Dados enviados');
                } else {
                    reject(new Error('Dados inválidos'));
                }
            }, 3000);
        });
    }
});

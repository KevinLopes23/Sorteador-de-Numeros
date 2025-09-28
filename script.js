// Elementos do DOM
const quantityInput = document.querySelector('.draw-inputs .input-group:nth-child(1) input');
const minInput = document.querySelector('.draw-inputs .input-group:nth-child(2) input');
const maxInput = document.querySelector('.draw-inputs .input-group:nth-child(3) input');
const noRepeatCheckbox = document.getElementById('no-repeat');
const drawButton = document.getElementById('draw-btn');
const resultContainer = document.getElementById('result-container');
const resultSubtitle = document.getElementById('result-subtitle');
const resultNumbers = document.getElementById('result-numbers');
const drawAgainButton = document.getElementById('draw-again-btn');
const drawNumberContainer = document.querySelector('.draw-number');

// Função para validar os inputs
function validateInputs() {
    const quantity = parseInt(quantityInput.value);
    const min = parseInt(minInput.value);
    const max = parseInt(maxInput.value);
    const noRepeat = noRepeatCheckbox.checked;

    // Validações básicas
    if (quantity < 1) {
        alert('A quantidade deve ser pelo menos 1');
        return false;
    }

    if (min >= max) {
        alert('O valor mínimo deve ser menor que o máximo');
        return false;
    }

    // Se não repetir números, a quantidade não pode exceder o range
    if (noRepeat && quantity > (max - min + 1)) {
        alert(`Não é possível sortear ${quantity} números únicos no intervalo de ${min} a ${max}`);
        return false;
    }

    return true;
}

// Função para gerar números aleatórios
function generateRandomNumbers() {
    const quantity = parseInt(quantityInput.value);
    const min = parseInt(minInput.value);
    const max = parseInt(maxInput.value);
    const noRepeat = noRepeatCheckbox.checked;
    const numbers = [];

    if (noRepeat) {
        // Gerar números únicos
        const availableNumbers = [];
        for (let i = min; i <= max; i++) {
            availableNumbers.push(i);
        }

        for (let i = 0; i < quantity; i++) {
            const randomIndex = Math.floor(Math.random() * availableNumbers.length);
            numbers.push(availableNumbers.splice(randomIndex, 1)[0]);
        }
    } else {
        // Gerar números com possível repetição
        for (let i = 0; i < quantity; i++) {
            const randomNumber = Math.floor(Math.random() * (max - min + 1)) + min;
            numbers.push(randomNumber);
        }
    }

    return numbers.sort((a, b) => a - b);
}

// Função para exibir os resultados com animação
function displayResults(numbers) {
    // Atualizar subtítulo
    const quantity = numbers.length;
    resultSubtitle.textContent = `${quantity} número${quantity > 1 ? 's' : ''} sorteado${quantity > 1 ? 's' : ''}`;

    // Limpar números anteriores
    resultNumbers.innerHTML = '';

    // Ocultar container de sorteio e mostrar resultados
    drawNumberContainer.style.display = 'none';
    resultContainer.style.display = 'block';

    // Adicionar números com animação
    numbers.forEach((number, index) => {
        setTimeout(() => {
            const numberElement = document.createElement('div');
            numberElement.className = 'result-number';
            numberElement.textContent = number;
            numberElement.style.animationDelay = `${index * 0.1}s`;
            resultNumbers.appendChild(numberElement);
        }, index * 100);
    });
}

// Função para resetar para o estado inicial
function resetToInitialState() {
    resultContainer.style.display = 'none';
    drawNumberContainer.style.display = 'block';
    resultNumbers.innerHTML = '';
}

// Event listeners
drawButton.addEventListener('click', () => {
    if (validateInputs()) {
        // Adicionar estado de loading
        drawButton.classList.add('loading');
        drawButton.disabled = true;
        
        // Simular tempo de processamento para melhor UX
        setTimeout(() => {
            const numbers = generateRandomNumbers();
            displayResults(numbers);
            
            // Remover estado de loading
            drawButton.classList.remove('loading');
            drawButton.disabled = false;
        }, 1500); // 1.5 segundos de loading
    }
});

drawAgainButton.addEventListener('click', resetToInitialState);

// Validação em tempo real dos inputs
[quantityInput, minInput, maxInput].forEach(input => {
    input.addEventListener('input', () => {
        // Garantir que os valores sejam positivos
        if (input.value < 1) {
            input.value = 1;
        }
    });
});

// Validação específica para o input de quantidade
quantityInput.addEventListener('input', () => {
    if (quantityInput.value > 100) {
        quantityInput.value = 100;
    }
});

// Validação para inputs min e max
[minInput, maxInput].forEach(input => {
    input.addEventListener('input', () => {
        if (input.value > 1000) {
            input.value = 1000;
        }
    });
});
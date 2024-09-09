document.addEventListener('DOMContentLoaded', () => {
    const quizContainer = document.getElementById('quiz-container');
    
    const questions = [
        {
            question: '¿Cuál es una de las principales fuentes de contaminación en la Glorieta de Insurgentes?',
            options: ['Construcción', 'Parques', 'Escuelas', 'Hospitales'],
            answer: 'Construcción'
        },
        {
            question: '¿Qué tipo de contaminación afecta la calidad del aire en la Glorieta?',
            options: ['Contaminación del suelo', 'Contaminación acústica', 'Contaminación por CO2 y polvo', 'Contaminación por plástico'],
            answer: 'Contaminación por CO2 y polvo'
        },
        {
            question: '¿Cuál es una medida para controlar la contaminación mencionada en el artículo?',
            options: ['Reducción de residuos', 'Aumento de áreas verdes', 'Desarrollo de nuevas construcciones', 'Incremento de tráfico'],
            answer: 'Reducción de residuos'
        }
    ];
    
    let quizHTML = '';
    questions.forEach((q, index) => {
        quizHTML += `<div>
            <p>${q.question}</p>
            ${q.options.map((option, i) => `
                <label>
                    <input type="radio" name="q${index}" value="${option}">
                    ${option}
                </label>
            `).join('')}
        </div>`;
    });
    quizContainer.innerHTML = quizHTML;
    
    document.getElementById('submit-btn').addEventListener('click', () => {
        const userAnswers = questions.map((q, index) => {
            const selectedOption = document.querySelector(`input[name="q${index}"]:checked`);
            return selectedOption ? selectedOption.value : null;
        });
        
        const correctAnswers = questions.map(q => q.answer);
        const score = userAnswers.filter((answer, i) => answer === correctAnswers[i]).length;
        
        document.getElementById('result').textContent = `Has acertado ${score} de ${questions.length} preguntas.`;
    });
});

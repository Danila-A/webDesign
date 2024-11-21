const test = {
    question1: {
        text: 'Какой цвет ассоциируется с купидонами, розами, а также с запрещающим сигналом светофора?',
        answer: 'красный',
        name: 'question1',
        options: [
            'зелёный',
            'красный',
            'чёрный',
            'белый',
        ]
    },
    question2: {
        text: 'Какой цвет умиротворяющее действует на женскую аудиторию?',
        answer: 'фиолетовый',
        name: 'question2',
        options: [
            'фиолетовый',
            'зелёный',
            'белый',
            'красный',
        ]
    },
    question3: {
        text: 'Какой цвет символизирует безопасность и надёжность',
        answer: 'синий',
        name: 'question3',
        options: [
            'красный',
            'чёрный',
            'синий',
            'фиолетовый',
        ]
    },
    question4: {
        text: 'Какой цвет символизирует бодрость свежесть и энергию?',
        answer: 'жёлтый',
        name: 'question4',
        options: [
            'белый',
            'синий',
            'зелёный',
            'жёлтый',
        ]
    },
    question5: {
        text: 'Как называется классический женский цвет?',
        answer: 'розовый',
        name: 'question5',
        options: [
            'розовый',
            'жёлтый',
            'зелёный',
            'белый',
        ]
    },
}

const testConteiner = document.querySelector('#test');
let form = '<form class="form">';

for (let question in test) {
    form += `<label>${test[question].text}</label><br>`;
    form += insertOptions(test[question]) + '<br>';
}

form+=`
    <button type='reset'>Очистить</button>
    <button type='submit'>Проверить</button>
    </form>
`;

testConteiner.innerHTML = form;

document.querySelector('.form').addEventListener('submit', (event) => {
    event.preventDefault();

    const form = document.querySelector('.form');
    const formData = new FormData(form);
    let correctAnswersCounter = 0;
    
    for (const [key, value] of formData) {
        test[key].answer == value ? correctAnswersCounter++ : null;
    }

    showResult(correctAnswersCounter);
});

function insertOptions(question) {
    let radio = '';

    for(let option of question.options) {
        let randomNumber = Math.random();

        radio += `
            <input type="radio" id="${randomNumber}" name="${question.name}" value="${option}">
            <label for="${randomNumber}">${option}</label><br>
        `;
    }
    return radio;
}

function showResult(numberCorrectAnswers) {
    document.querySelector('#result').innerHTML = "Количетво правильных ответов: " + numberCorrectAnswers;
}

import * as Challenge from "../model/challenge_model.js";

export function challengesView() {
    Challenge.init(); 

    const challengePosterDisney = new Challenge.directAnswerChallenge(
        1, 
        'Parques de diversão da Disney', 
        'Para além dos seus trabalhos cinematográficos, a Disney também é conhecida pelos seus famosos parques de diversões que se encontram espalhados por vários cantos do mundo. Qual é o nome do parque situado no continente europeu?',
        'Disneyland'
    );

    const challengeArc = new Challenge.multipleChoiceChallenge(
        2, 
        'Criação da Disney', 
        'Quem foi um dos criadores da Disney?', 
        ['George Lucas', 'Walt Disney', 'Steve Jobs', 'Ub Iwerks'], 
        1
    );

    // id = 3 sopa de letras
    
    const challengeDraw = new Challenge.directAnswerChallenge(
        4,
        'Primeira co-produção Disney/Pixar',
        'Qual é o nome do filme a que a descrição seguinte se refere?\nUm brinquedo de um cowboy sente-se ameaçado quando um novo brinquedo chega ao seu mundo.',
        'Toy Story'
    );

    const challengePosterIncredibles = new Challenge.multipleDirectAnswerChallenge(
        5,
        'Maiores sucessos',
        'Conecta as personagens aos seus filmes respetivos:\nAlladin; Big Hero 6; The Incredibles',
        ['The Incredibles', 'Alladin', 'Big Hero 6']
    );

    // id 6 sopa de letras

    const challengeBalloon = new Challenge.directAnswerChallenge(
        7,
        'Maiores sucessos',
        'Qual é o nome do filme a que a descrição seguinte se refere?\nUm idoso rabugento e um escuteiro ingénuo partem numa aventura, utilizando uma casa repleta de balões como meio de transporte.',
        'Up'
    );

    const challengeCar = new Challenge.multipleChoiceChallenge(
        8,
        'Personagens favoritas do público',
        'Qual é o nome desta personagem?'
        ['Wall-E', 'Kuzco', 'Stitch', 'Woody'],
        2
    )

    // Check the correct answers
    const userAnswers = {
        1: 'Disneyland',
        2: 1, // Index of the correct answer
        4: 'Toy Story',
        5: ['The Incredibles', 'Alladin', 'Big Hero 6'],
        7: 'Up',
        8: 2, // Index of the correct answer
    };

    const challenges = [
        challengePosterDisney,
        challengeArc,
        challengeDraw,
        challengePosterIncredibles,
        challengeBalloon,
        challengeCar,
    ];

    challenges.forEach(challenge => {
        const userAnswer = userAnswers[challenge.id];
        if (Array.isArray(userAnswer)) {
            const isAnswerCorrect = arraysContainSameElements(userAnswer, challenge.answers);
            challenge.answeredCorrectly = isAnswerCorrect;
        } else {
        challenge.answeredCorrectly = (userAnswer === challenge.answer || userAnswer === challenge.correctAnswer);
        }
    });

    console.log(challenges);
    return challenges
}

// Helper function to check if two arrays contain the same elements
function arraysContainSameElements(arr1, arr2) {
    if (arr1.length !== arr2.length) {
        return false;
    }
    const sortedArr1 = arr1.slice().sort();
    const sortedArr2 = arr2.slice().sort();
    return sortedArr1.every((element, index) => element === sortedArr2[index]);
}

challengesView();

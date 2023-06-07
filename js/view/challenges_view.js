import * as Challenge from "../model/challenge_model.js";

function challengesView() {
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

}

challengesView();

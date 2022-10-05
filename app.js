const form = document.querySelector('.form-quizz');
let tableauResultat = [];
const emojis = ['✔️','✨','👀','😭','👎','🎉','🎊'];
const bonnesReponses = ['c','c','b','b','c','b','a','b','b','b','c','a'];
const titreResultat = document.querySelector('.resultat h2');
const noteResultat = document.querySelector('.note');
const aideResultat = document.querySelector('.aide');
const toutesLesQuestions = document.querySelectorAll('.bloc-de-question');
let verifTableau = [];

form.addEventListener('submit', (e) => {
    e.preventDefault();

    //console.log(document.querySelector('input[name="q1"]:checked').value);
    for (i=1; i < 13; i++) {
        tableauResultat.push(document.querySelector(`input[name="q${i}"]:checked`).value)
    } 
    //console.log(tableauResultat)
    verifFunc(tableauResultat);
    tableauResultat = [];
})

function verifFunc(tableauResultat) {
    for(let a = 0; a < 12; a++) {
        if(tableauResultat[a] === bonnesReponses[a]) {
            verifTableau.push(true);
        } else {
            verifTableau.push(false)
        }
    }

    //console.log(verifTableau);
    afficherResultats(verifTableau);
    couleursFonction(verifTableau);
    verifTableau = [];
}

function afficherResultats(tabCheck) {

    const nbDeFautes = tabCheck.filter(el => el !== true).length;
    //console.log(nbDeFautes);

    switch(nbDeFautes) {

        case 0:
            titreResultat.innerText = `${emojis[0]} ${emojis[1]} ${emojis[0]} Bravooo, vous maitrisez la Fabrique dans sa promo 3 ${emojis[5]}`;
            aideResultat.innerText = "La promo 3 n'a aucun secret pour vous";
            noteResultat.innerText = '12/12!';
        break;
        case 1:
            titreResultat.innerText = `${emojis[0]}Bravooo, vous maitrisez presque la Fabrique dans sa promo 3 ${emojis[6]}`;
            aideResultat.innerText = 'Rattrapez vous sur la seule question manquée';
            noteResultat.innerText = '11/12!';
        break;
        case 2:
            titreResultat.innerText = `${emojis[0]} Bravooo, Vous étiez proche du sans faute`;
            aideResultat.innerText = 'Continuez comme ca...';
            noteResultat.innerText = '10/12!';
        break;
        case 3:
            titreResultat.innerText = `${emojis[2]} Bon Score mais la promo 3 a encore des secrets pour vous`;
            aideResultat.innerText = 'Rattrapezvous vite';
            noteResultat.innerText = '9/12!';
        break;
        case 4:
            titreResultat.innerText = `Pas maaaal ${emojis[1]}`;
            aideResultat.innerText = 'Allez! On se rattrape!';
            noteResultat.innerText = '8/12!';
        break;
        case 5:
            titreResultat.innerText = `${emojis[1]} Vous y étiez presque! ${emojis[0]}`;
            aideResultat.innerText = 'On se décourage pas, réessayons...';
            noteResultat.innerText = '7/12!';
        break;
        case 6:
            titreResultat.innerText = `${emojis[0]} La moyenne tout juste!`;
            aideResultat.innerText = "Encore un peu d'effort, retentez le coup";
            noteResultat.innerText = '6/12!';
        break;
        case 7:
            titreResultat.innerText = `Peut mieux faire ${emojis[2]}`;
            aideResultat.innerText = "Allez, Allez, on s'réveille"
            noteResultat.innerText = '5/12!';
        break;
        case 8:
            titreResultat.innerText = `${emojis[4]} ooooh!!, Ce n'est pas on du tout!`;
            aideResultat.innerText = 'On se ressaisit et on réessaye';
            noteResultat.innerText = '4/12!';
        break;
        case 9:
            titreResultat.innerText = `${emojis[3]} Vous avez fait beaucoup d'erreur ${emojis[4]}`;
            aideResultat.innerText = "Ce n'est pas grave, réessayez";
            noteResultat.innerText = '3/12!';
        break;
        case 10:
            titreResultat.innerText = `${emojis[4]} Cédric ooooooooh ${emojis[3]}`;
            aideResultat.innerText = 'Révisez et réessayez vous pouvez...';
            noteResultat.innerText = '2/12!';
        break;
        case 11:
            titreResultat.innerText = `${emojis[4]} L'heure est grave ${emojis[3]}`;
            aideResultat.innerText = 'Pardon réessayez';
            noteResultat.innerText = '1/12!';
        break;
        case 12:
            titreResultat.innerText = `${emojis[4]} Vous ne connaissez clairement pas la promo 3 ${emojis[4]}`;
            aideResultat.innerText = 'Ne vous découraez pas, un peu de recherche et réessayons...';
            noteResultat.innerText = '12/12!';
        break;

        default:
            'aie!! Cas innatendu.'
    }
}




function couleursFonction(tabValBool) {

    for(let j = 0; j < tabValBool.length; j++) {

        if(tabValBool[j] === true) {
            toutesLesQuestions[j].style.background = 'lightgreen';
        } else {
            toutesLesQuestions[j].style.background = '#ffb8b8';
            toutesLesQuestions[j].classList.add('echec');

            setTimeout(() => {
                toutesLesQuestions[j].classList.toggle('echec');
            }, 500)
        }
        
    }

}

toutesLesQuestions.forEach(lot => {
    lot.addEventListener('click', () => {
        lot.style.background = "white"
    })
})

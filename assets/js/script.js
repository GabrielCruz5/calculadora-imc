const form = document.getElementById('form');

form.addEventListener('submit', function(event) {
    event.preventDefault();

    const weight = document.getElementById('weight').value;
    const height = document.getElementById('height').value;

    const bmi = Number ((weight / (height * height)).toFixed(2));

    const value = document.getElementById('value');
    let description = '';

    document.getElementById('infos').classList.remove('hidden');

    if (bmi < 18.5) {
        description = 'Você está abaixo do peso!'
         value.classList.add('attention');

    } else if (bmi >= 18.5 && bmi <=25) {
        description = 'Você está no peso ideal!'
        value.classList.add('normal');

    } else if (bmi >25 && bmi <= 30) {
        description = 'Você está com sobrepeso!'
        value.classList.add('attention');
        

    } else if (bmi > 30 && bmi <=35) {
        description = 'Cuidado! Você está com obesidade moderada!'
        value.classList.add('attention');

    } else if (bmi > 35 && bmi <= 40) {
        description = 'Cuidado! Você está com obesidade severa! Procure ajuda de um profissional.';
        value.classList.add('attention');


    } else {
        description = 'Cuidado! Você está com obesidade mórbida. Procure ajuda de um prossional!';
        value.classList.add('attention');

    }

    document.getElementById('value').textContent = bmi.toFixed(2).replace('.', ',');
    document.getElementById('description').textContent = description

});
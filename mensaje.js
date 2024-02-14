document.getElementById('confirmDateButton').addEventListener('click', function () {
    document.getElementById('dateInput').classList.toggle('hidden');
});

document.getElementById('dateInput').addEventListener('change', function () {
    var inputDate = new Date(this.value);
    var correctDate = new Date('2021-10-24'); // Fecha correcta en formato YYYY-MM-DD

    if (inputDate.toDateString() === correctDate.toDateString()) {
        alert('¡Correcto amor! Bueno amorcito... Esta carta no la tendras que esconder, ya que ya está oculta xd, solo tu sabes como llegar aquí, dicho esto comenzaré por decirte lo que siento, lo que está en mi corazon. Bien... En primer lugar, espero que siempre me ames mucho, siempre querré tu amor y yo siempre te daré el mio, mi amor hacia ti es de las cosas mas importantes que te puedo dar de mi, cuidalo mucho. Hacerte este tipo de cosas tal vez para ti te parezca algo sencillo, pero creeme que lleva un gran esfuerzo detrás, y lo hice con mucho cariño para ti. RECUERDA, NUNCA estarás sola porque siempre estaré ahí para ti, aunque no este fisicamente, siempre estaré. Otra cosa que te quiero decir es que lo vamos a lograr, yo estoy estudiando mucho, trabajando mucho para lograr ese futuro anhelado contigo, pero como equipo llegaremos mas lejos, si ?, Gracias por preocuparte por mi, por preocuparte cuando no duermo, sino como, si no hago mis cosas primero, sino ordeno mis cosas, Gracias mi vida. Se que aunque sea mi niñita preciosa tu tambien cuidas de mi (ya se me salieron las lagrimas), bueno eso, gracias amorcito, no te sientas mal sino puedes hacer las cosas que tu quisieras hacer por mi, yo valoro que al menos lo intentes y tambien valoro hasta lo mas minimo. Carlitos tambien es alguien sencillo, que se enamoró de tu sencilles, por eso y mucho mas te amo, tus ojitos bonitos, cuando te ries, no hay risa mas sincera, no hay risa mas feliz que de alguien antes no se reía así, y me siento feliz ser parte de tu sonrisa, y que tu seas parte y razon de la mia. Mi cielito hermoso, ya sufrimos mucho en el pasado pero ahora nos tenemos a nosotros, no nos rindamos y hagámonos mas fuertes. Tambien lo mucho que me gusta ese momento de los dos,hacer el amor,pero amandonos mucho,es algo tan unico y valioso,Att:Carlitos');
        document.getElementById('gameContainer').classList.remove('hidden');
        document.getElementById('message').classList.remove('hidden');
    } else {
        alert('Fecha incorrecta. Intenta de nuevo.');
    }
});

function selectOption(option) {
    var resultText = '';
    switch (option) {
        case 'option1':
            resultText = '¡Pizza!';
            break;
        case 'option2':
            resultText = 'Tu helado favorito';
            break;
        case 'option3':
            resultText = 'Salida algun restaurante o lugar de comida que quieras';
            break;
        default:
            resultText = 'Opción no válida.';
    }
    document.getElementById('message').textContent = resultText;
    document.getElementById('message').classList.remove('hidden');
}

const canvas = document.getElementById('plane');
const ctx = canvas.getContext('2d');
const form = document.getElementById('form');
const R_input = document.getElementById('POST-R');
const Y_input = document.getElementById('POST-Y');
const submit_button = document.getElementById('submit_button');

const space = 20;
const arrow_width = 5;
const arrow_height = 10;
const line_width = 1.5;
const text_space = 10;
const R_coef = (canvas.width / 2 - space) * 0.75 / 5

ctx.font = '15px Arial';
ctx.lineWidth = line_width;
ctx.translate(canvas.width / 2, canvas.height / 2);

function validNumbers(x, y, r) {

}

function validY() {
    const text_Y = Y_input.value;
    const Y = Number(text_Y.replaceAll(",", "."));
    if (-5 <= Y && Y <= 5) {
        Y_input.setCustomValidity("");
        return true;
    }
    Y_input.setCustomValidity("Введите число строго между -5 и 5");
    return false;
}

function validR(R) {
    if (2 <= R && R <= 5) {
        R_input.setCustomValidity("");
        return true;
    }
    R_input.setCustomValidity("Введите число строго между 2 и 5");
    return false;
}

function isHit(x, y, r) {

}


function draw() {
    ctx.clearRect(-canvas.width/2, -canvas.height/2, canvas.width, canvas.height);
    const text_R = R_input.value;
    const R = Number(text_R.replaceAll(",", "."));
    if (!validR(R)) {
        draw_plane();
        return;
    }

    draw_plane();
    draw_figures(R);
}

function draw_plane() {
    ctx.fillStyle = 'rgb(0, 0, 0)';


    ctx.beginPath();
    ctx.moveTo(0, canvas.height / 2 - space);
    ctx.lineTo(0, -canvas.height / 2 + space);
    ctx.moveTo(0, -canvas.height / 2 + space - 1);

    ctx.lineTo(-arrow_width, -canvas.height / 2 + space + arrow_height);
    ctx.moveTo(0, -canvas.height / 2 + space - 1);
    ctx.lineTo(arrow_width, -canvas.height / 2 + space + arrow_height);

    ctx.moveTo(-canvas.width / 2 + space, 0);
    ctx.lineTo(canvas.width / 2 - space, 0);

    ctx.moveTo(canvas.width / 2 - space + 1, 0);
    ctx.lineTo(canvas.width / 2 - space - arrow_height, -arrow_width);
    ctx.moveTo(canvas.width / 2 - space + 1, 0);
    ctx.lineTo(canvas.width / 2 - space - arrow_height, arrow_width);

    ctx.closePath();
    ctx.stroke();

    ctx.fillText('X', canvas.width / 2 - space - arrow_height, -text_space);
    ctx.fillText('Y', text_space, -canvas.width / 2 + space + arrow_height);
}

function draw_figures(R) {
    ctx.globalCompositeOperation = 'destination-over';
    ctx.fillStyle = 'rgb(0, 140, 255)';

    ctx.fillRect(0, 0, R * R_coef, R * R_coef);

    ctx.beginPath();
    ctx.moveTo(-R * R_coef, 0);
    ctx.lineTo(0, 0);
    ctx.lineTo(0, R/2 * R_coef);
    ctx.closePath();
    ctx.fill();

    ctx.beginPath();
    ctx.arc(0, 0, R * R_coef, Math.PI, 3*Math.PI/2);
    ctx.lineTo(0, 0);
    ctx.closePath();
    ctx.fill();

    ctx.globalCompositeOperation = 'source-over';

    ctx.fillStyle = '#000';

    ctx.beginPath();

    ctx.moveTo(-R * R_coef, 5);
    ctx.lineTo(-R * R_coef, -5);

    ctx.moveTo(-R/2 * R_coef, 5);
    ctx.lineTo(-R/2 * R_coef, -5);

    ctx.moveTo(R/2 * R_coef, 5);
    ctx.lineTo(R/2 * R_coef, -5);

    ctx.moveTo(R * R_coef, 5);
    ctx.lineTo(R * R_coef, -5);

    ctx.moveTo(-5, R * R_coef);
    ctx.lineTo(5, R * R_coef);

    ctx.moveTo(-5, R/2 * R_coef);
    ctx.lineTo(5, R/2 * R_coef);

    ctx.moveTo(-5, -R/2 * R_coef);
    ctx.lineTo(5, -R/2 * R_coef);

    ctx.moveTo(-5, -R * R_coef);
    ctx.lineTo(5, -R * R_coef);

    ctx.closePath();
    ctx.stroke();

    ctx.fillText('-R', -R * R_coef - 10, -text_space);
    ctx.fillText('-R/2', -R/2 * R_coef - 10, -text_space);
    ctx.fillText('R/2', R/2  * R_coef - 10, -text_space);
    ctx.fillText('R', R * R_coef - 5, -text_space);

    ctx.fillText('-R', text_space, R * R_coef + 5);
    ctx.fillText('-R/2', text_space, R/2 * R_coef + 5);
    ctx.fillText('R/2', text_space, -R/2 * R_coef + 5);
    ctx.fillText('R', text_space, -R * R_coef + 5);
}

function submit() {

}

function draw_hit() {

}


form.addEventListener('submit', (event) => {
    event.preventDefault();
});

R_input.addEventListener('input', draw);
Y_input.addEventListener('input', validY);
submit_button.addEventListener('click', submit);

draw();
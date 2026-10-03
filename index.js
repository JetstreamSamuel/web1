'use strict';

const canvas = document.getElementById('plane');
const ctx = canvas.getContext('2d');
const form = document.getElementById('form');
const R_input = document.getElementById('POST-R');
const Y_input = document.getElementById('POST-Y');
const submit_button = document.getElementById('submit_button');
const clear_button = document.getElementById('clear_button');

const space = 20;
const arrow_width = 5;
const arrow_height = 10;
const line_width = 1.5;
const text_space = 10;
const R_coef = (canvas.width / 2 - space) * 0.75 / 5

let points = [];

ctx.font = '15px Arial';
ctx.lineWidth = line_width;
ctx.translate(canvas.width / 2, canvas.height / 2);

function validNumbers(x, y, r) {

}

function validY() {
    const text_Y = Y_input.value.replaceAll(",", ".");
    const Y = Number(text_Y);
    if (-5 <= Y && Y <= 5 && !(text_Y === '')) {
        Y_input.setCustomValidity("");
        return true;
    }
    Y_input.setCustomValidity("Введите число строго между -5 и 5");
    return false;
}

function validR() {
    const text_R = R_input.value.replaceAll(",", ".");
    const R = Number(text_R);
    if (2 <= R && R <= 5 && !(text_R === '')) {
        R_input.setCustomValidity("");
        return true;
    }
    R_input.setCustomValidity("Введите число строго между 2 и 5");
    return false;
}

function checkForm() {
    submit_button.disabled = !validR() || !validY();
}

function isHit(x, y, r) {
    const circle = (x <= 0 && Math.abs(x) <= r && y <= 0 && Math.abs(y) <= r &&
        Math.pow(x, 2) + Math.pow(y, 2) === Math.pow(r, 2));
    const rectangle = (x <= 0 && Math.abs(x) <= r && y >= 0 && y <= r/2 && y <= 1/2 * x + r/2);
    const square = (x >= 0 && x <= r && y >= 0 && y <= r);

    return circle || rectangle || square;
}


function draw() {
    ctx.clearRect(-canvas.width/2, -canvas.height/2, canvas.width, canvas.height);
    const text_R = R_input.value.replaceAll(",", ".");
    const R = Number(text_R);

    draw_plane();
    checkForm();
    if (!validR()) return;

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
    ctx.fill();

    ctx.beginPath();
    ctx.arc(0, 0, R * R_coef, Math.PI, 3*Math.PI/2);
    ctx.lineTo(0, 0);
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


async function submit() {

    const X = Number(form.elements.X.value);
    const Y = Number(Y_input.value.replaceAll(',', '.'));
    const R = Number(R_input.value.replaceAll(',', '.'));

    if (validNumbers(X, Y, R)) return;

    const point = {
        x: X,
        y: Y,
        r: R,
        isHit: isHit(X, Y, R),
        date: Date.now()
    }

    points.push(point);
    draw();
    draw_hit(point);

}

function draw_table() {
    for (let point of points) {

    }
}

function draw_hits() {

}


function draw_hit(point) {
    ctx.globalCompositeOperation = 'source-over';
    ctx.fillStyle = point.isHit ? "rgb(0, 200, 0)" : "rgb(200, 0, 0)";
    ctx.beginPath();
    ctx.arc(point.x * R_coef, point.y * R_coef, 4, 0, 2 * Math.PI);
    ctx.fill();
}

function clear() {
    if (!confirm('Очистить историю?')) return;
    try {

    } catch {

    }
}


form.addEventListener('submit', (event) => {
    event.preventDefault();
});

R_input.addEventListener('input', draw);
Y_input.addEventListener('input', checkForm);
R_input.addEventListener('change', () => {if (!validY()) R_input.reportValidity();});
Y_input.addEventListener('change', () => {if (!validY()) Y_input.reportValidity();});

submit_button.addEventListener('click', submit);
clear_button.addEventListener('click', clear);

draw();
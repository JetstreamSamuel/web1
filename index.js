const space = 20;
const arrow_width = 5;
const arrow_height = 10;
const line_width = 1.5;
const text_space = 10;


function draw_plane() {
    const canvas = document.getElementById('plane');
    const R = (canvas.width / 2 - space) * 0.75;

    if (canvas.getContext) {
        const ctx = canvas.getContext('2d');

        ctx.font = '15px Arial';
        ctx.lineWidth = line_width;
        ctx.translate(canvas.width / 2, canvas.height / 2);
        ctx.fillStyle = 'rgb(0, 140, 255)';

        ctx.fillRect(0, 0, R, R);

        ctx.beginPath();
        ctx.moveTo(-R, 0);
        ctx.lineTo(0, 0);
        ctx.lineTo(0, R/2);
        ctx.closePath();
        ctx.fill();

        ctx.beginPath();
        ctx.arc(0, 0, R, Math.PI, 3*Math.PI/2);
        ctx.lineTo(0, 0);
        ctx.closePath();
        ctx.fill();

        ctx.fillStyle = 'rgb(0, 0, 0)';

        ctx.beginPath();
        ctx.moveTo(0, canvas.height / 2 - space);
        ctx.lineTo(0, -canvas.height / 2 + space);
        ctx.moveTo(0, -canvas.height / 2 + space - 1);

        ctx.lineTo(-arrow_width, -canvas.height / 2 + space + arrow_height);
        ctx.moveTo(0, -canvas.height / 2 + space - 1);
        ctx.lineTo(arrow_width, -canvas.height / 2 + space + arrow_height);

        ctx.moveTo(-5, R);
        ctx.lineTo(5, R);

        ctx.moveTo(-5, R/2);
        ctx.lineTo(5, R/2);

        ctx.moveTo(-5, -R/2);
        ctx.lineTo(5, -R/2);

        ctx.moveTo(-5, -R);
        ctx.lineTo(5, -R);

        ctx.closePath();
        ctx.stroke();

        ctx.beginPath();
        ctx.moveTo(-canvas.width / 2 + space, 0);
        ctx.lineTo(canvas.width / 2 - space, 0);

        ctx.moveTo(canvas.width / 2 - space + 1, 0);
        ctx.lineTo(canvas.width / 2 - space - arrow_height, -arrow_width);
        ctx.moveTo(canvas.width / 2 - space + 1, 0);
        ctx.lineTo(canvas.width / 2 - space - arrow_height, arrow_width);

        ctx.moveTo(-R, 5);
        ctx.lineTo(-R, -5);

        ctx.moveTo(-R/2, 5);
        ctx.lineTo(-R/2, -5);

        ctx.moveTo(R/2, 5);
        ctx.lineTo(R/2, -5);

        ctx.moveTo(R, 5);
        ctx.lineTo(R, -5);

        ctx.closePath();
        ctx.stroke();

        ctx.fillText('X', canvas.width / 2 - space - arrow_height, -text_space);
        ctx.fillText('Y', text_space, -canvas.width / 2 + space + arrow_height);

        ctx.fillText('-R', -R - 10, -text_space);
        ctx.fillText('-R/2', -R/2 - 10, -text_space);
        ctx.fillText('R/2', R/2 - 10, -text_space);
        ctx.fillText('R', R - 5, -text_space);

        ctx.fillText('-R', text_space, R + 5);
        ctx.fillText('-R/2', text_space, R/2 + 5);
        ctx.fillText('R/2', text_space, -R/2 + 5);
        ctx.fillText('R', text_space, -R + 5);
    }
}
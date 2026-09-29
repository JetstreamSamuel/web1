const space = 20;
const arrow_width = 5;
const arrow_height = 10;


function draw_plane() {
    const canvas = document.getElementById('plane');
    if (canvas.getContext) {
        const ctx = canvas.getContext('2d');

        ctx.lineWidth = 1.3;
        ctx.strokeStyle = 'rgb(0, 0, 0)';
        ctx.font = '20px Arial'

        ctx.beginPath();
        ctx.moveTo(space, canvas.height / 2);
        ctx.lineTo(canvas.width - space, canvas.height / 2);

        ctx.lineTo(canvas.width - space - arrow_height, canvas.height / 2 - arrow_width);
        ctx.moveTo(canvas.width - space, canvas.height / 2);
        ctx.lineTo(canvas.width - space - arrow_height, canvas.height / 2 + arrow_width);

        ctx.fillText('X', canvas.width - space - arrow_height, canvas.height / 2 - 2 * arrow_width);

        ctx.stroke();

        ctx.moveTo(canvas.width / 2, canvas.height - space);
        ctx.lineTo(canvas.width / 2, space);

        ctx.lineTo(canvas.width / 2 - arrow_width, space + arrow_height);
        ctx.moveTo(canvas.width / 2, space);
        ctx.lineTo(canvas.width / 2 + arrow_width, space + arrow_height);

        ctx.fillText('Y', canvas.width / 2 + 2 * arrow_width, space + arrow_height);

        ctx.stroke();

    }
}
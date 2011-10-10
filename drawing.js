function drawCircle(centerx, centery, radius) {
    ctx.beginPath();
    ctx.arc(centerx,centery,radius, 0, Math.PI*2, false);
    ctx.stroke();
}

function drawWheel(centerx, centery, radius, slices) {
    var canvas = document.getElementById('tutorial');
    if (canvas.getContext) {
        var lastend = 0;
        ctx = canvas.getContext("2d");
        ctx.save();

        ctx.clearRect(0, 0, canvas.width, canvas.height);
        ctx.strokeStyle = "black";
        slice = Math.PI*2*(1/slices.length);
        ctx.translate(centerx, centery);
        ctx.font = "bold 16px sans-serif";
        var angle = 0;

        ctx.save();

        // draw lines and text
        for (var i = 0; i < slices.length; i++) {
            textWidth = ctx.measureText(slices[i]).width;
            ctx.beginPath();
            ctx.moveTo(0,0);
            ctx.lineTo(radius, 0);
            ctx.save();
            if (angle > Math.PI*170/180) {
                ctx.rotate(slice/2);
                ctx.translate(radius+10, -textWidth/2);
                ctx.rotate(Math.PI/2);
            }
            else {
                ctx.rotate(slice/2);
                ctx.translate(radius+20, textWidth/2);
                ctx.rotate(Math.PI*3/2);
            }
            ctx.fillText(slices[i], 0, 0);
            ctx.restore();
            ctx.stroke();
            ctx.rotate(slice);
            angle += slice;
        }

        ctx.restore();
        // draw circles
        ctx.strokeStyle = "lightgray";
        for (var i = 1; i < 10; i++) {
            drawCircle(0, 0, radius*i/10);
        }
        ctx.strokeStyle = "black";
        drawCircle(0, 0, radius);

        // draw numbers
        ctx.font = "10px sans-serif";
        for (var i = 1; i < 11; i++) {
            ctx.fillText(i, radius*i/10+3, -2);
        }

        ctx.restore();
    }
}

String.prototype.trim = function() {
	return this.replace(/^\s+|\s+$/g,"");
}

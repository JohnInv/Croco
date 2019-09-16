export class Beach {
    constructor({c, ctx, coords}) {
        this.c = c;
        this.ctx = ctx;
        this.coords = coords;

        this.draw();
    }

    draw() {
        const [p1, p2, p3] = this.coords.points;
        const [p4, p5, p6, p7, p8] = this.coords.curvedPoints;

        this.ctx.beginPath();
        this.ctx.strokeStyle = '#f2c94c';

        this.ctx.moveTo(...p1);
        this.ctx.lineTo(...p2);
        this.ctx.lineTo(...p3);

        const x1 = this.c.width / 2;
        const y1 = 0;
        const x2 = this.c.width / 2;
        const y2 = this.c.height;
        const sandGradient = this.ctx.createLinearGradient(x1, y1, x2, y2);

        sandGradient.addColorStop(0, '#ffe259');
        sandGradient.addColorStop(1, '#ffa751');

        this.coords.curvedPoints.forEach(point => this.ctx.quadraticCurveTo(...point));

        this.ctx.fillStyle = sandGradient;
        this.ctx.fill();
        this.ctx.stroke();


        this.ctx.beginPath();
        this.ctx.moveTo(...p3);
        this.ctx.lineWidth = 2;
        this.ctx.moveTo(p3[0], p3[1] + 10);

        // beach sand near water
        for (let i = 0; i <= 10; i++) {
            this.ctx.moveTo(...p3);
            this.coords.curvedPoints.forEach(point => {
                const transformedPoint = [...point];

                transformedPoint[1] = point[1] + 10 - i;
                transformedPoint[3] = point[3] + 10 - i * 1.5;

                this.ctx.quadraticCurveTo(...transformedPoint);
            });
        }

        this.ctx.moveTo(0, this.coords.curvedPoints[this.coords.curvedPoints.length - 1][3]);
        this.ctx.lineTo(0, this.c.height);
        this.ctx.stroke();
    }
}

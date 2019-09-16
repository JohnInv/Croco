export class Beach {
  constructor({
                c,
                ctx,
                coords,
                color = {from: '#ffe259', to: '#ffa751'},
                direction
              }) {
    this.c = c;
    this.ctx = ctx;
    this.coords = coords;
    this.color = color;
    this.direction = direction;

    this.draw();
  }

  draw() {
    const [p1, p2, p3] = this.coords.points;

    this.ctx.beginPath();
    this.ctx.strokeStyle = this.color.from;

    this.ctx.moveTo(...p1);
    this.ctx.lineTo(...p2);
    this.ctx.lineTo(...p3);
    const sandGradient = this.ctx.createLinearGradient(...this.coords.gradient);

    sandGradient.addColorStop(0, this.color.from);
    sandGradient.addColorStop(1, this.color.to);

    this.coords.curvedPoints.forEach(point => this.ctx.quadraticCurveTo(...point));

    this.ctx.fillStyle = sandGradient;
    this.ctx.fill();
    this.ctx.stroke();


    this.ctx.beginPath();
    this.ctx.lineWidth = 15;
    this.ctx.strokeStyle = '#3792';

    // beach sand near water
    this.ctx.moveTo(...p3);
    this.coords.curvedPoints.forEach(point => {
      const transformedPoint = [...point];
      const offset = 10;

      transformedPoint[0] = point[0] + offset;
      transformedPoint[2] = point[2] + offset;

      this.ctx.quadraticCurveTo(...transformedPoint);
    });
    this.ctx.stroke();

    this.ctx.beginPath();
    this.ctx.lineWidth = 1;

    this.ctx.moveTo(0, this.coords.curvedPoints[this.coords.curvedPoints.length - 1][3]);
    this.ctx.lineTo(0, this.c.height);

    this.ctx.stroke();
  }
}

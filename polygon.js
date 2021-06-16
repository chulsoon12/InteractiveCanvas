const PI2 = Math.PI * 2;

export class Polygon {
    constructor(x, y, radius, sides) {
        this.x = x;
        this.y = y;
        //반지름
        this.radius = radius;
        //각의 수
        this.sides = sides;
        this.rotate = 0;
    }

    animate(ctx, moveX){
        ctx.save();
        ctx.fillStyle = '#000';
        ctx.beginPath();

        //360도를 각의 수만큼 나눈 각도
        const angle = PI2 / this.sides;

        //기준점 이동 (x, y)값 만큼
        ctx.translate(this.x, this.y);

        this.rotate -= moveX * 0.008;
        ctx.rotate(this.rotate);

        for (let i = 0; i < this.sides; i++) {
            const x = this.radius * Math.cos(angle * i);
            const y = this.radius * Math.sin(angle * i);

            (i == 0) ? ctx.moveTo(x, y) : ctx.lineTo(x, y);
        }

        ctx.fill();
        ctx.closePath();
        ctx.restore();
    }
}
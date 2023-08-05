class object{
    constructor(startX, startY, width, height) {
        this.hasPhysics = true
        this.isStatic = false
        this.xPos = startX
        this.yPos = startY
        this.width = width
        this.height = height
    }

    update(ctx) {
        this.move()
        this.draw(ctx)
    }

    move() {
                
    }

    draw(ctx) {
        ctx.fillRect(this.xPos, this.yPos, this.width, this.height)
    }

}
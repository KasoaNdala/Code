class mouseManager {
    constructor(mouseRectSize) {
        this.mousePos = { x: undefined, y: undefined }
        this.rect = new rect(0, 0, mouseRectSize)
        // setTimeout(() => {
        // }, 10);
        window.addEventListener('mousemove', (event) => {
            this.rect.posX = event.clientX
            this.rect.posY = event.clientY
            // this.mousePos = { x: event.clientX, y: event.clientY }
        })
    }
    

    mouseUpdate(ctx) {
        this.rect.draw(ctx, this.rect.overlapsWithAnyOther() ? '#f00' : '#00f')
    }
}

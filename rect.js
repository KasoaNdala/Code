class rect{
    static allRects = []

    constructor(posX, posY, size) {
        this.posX = posX
        this.posY = posY 
        this.size = size
        
        rect.allRects.push(this)
    }

    doesOverlap(other) {
        return this.posX < other.posX + other.size &&
            this.posX + this.size > other.posX &&
            this.posY < other.posY + other.size &&
            this.posY + this.size > other.posY;
    }

    draw(ctx, color) {
        ctx.strokeStyle = color
        ctx.strokeRect(
            this.posX - this.size / 2, this.posY - this.size / 2,
            this.size, this.size)
        ctx.strokeStyle = '#00f'
    }

    delete() {
        // Remove this Rect from allRects
        rect.allRects = rect.allRects.filter(rect => rect !== this);
    }

    overlapsWithAnyOther() {
        // Check if this Rect overlaps with any other Rect in allRects
        let overlaps = rect.allRects.some(other => {
            if (this === other) {
                // Skip the current Rect
                return false;
            }
            
            let x1 = this.posX - this.size / 2;
            let y1 = this.posY - this.size / 2;
            let x2 = other.posX - other.size / 2;
            let y2 = other.posY - other.size / 2;

            return x1 < x2 + other.size &&
                x1 + this.size > x2 &&
                y1 < y2 + other.size &&
                y1 + this.size > y2;
        });
        // console.log(overlaps)
        return overlaps
    }
}
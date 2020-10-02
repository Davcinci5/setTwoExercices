class Shape {
    constructor(x , y , width, height){
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;
    }
    detectWalls = (canvas) =>{
        // Left wall
        if (this.x  < 0) {
            this.x += 5;
        }
        
        // Right Wall
        if (this.x + this.width > canvas.width) {
            this.x = canvas.width - this.width;
        }
        
        // Top wall
        if (this.y < 0) {
            this.y = 0;
        }
        
        // Bottom Wall
        if (this.y + this.height > canvas.height) {
            this.y = canvas.height - this.height;
        }
    }
}
module.exports = Shape; 
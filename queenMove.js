class QueenMove {
    constructor(size) {
          this.size = size;
          this.squareSize = 50;
          canvas.width = canvas.height = this.size * this.squareSize; 
          this.img = new Image();
          this.img.src = "queen.jpg";
          
      }
  
      
      isOk(x, y) {
        for(let i = 1; i < x; i++){
          if(a[i] == y || Math.abs(x-i) == Math.abs(y - a[i])) {
            return false;
          }
        }
        return true;
      }
  
      drawChess(index) {
        for(let i = 1; i <= this.size; i++){
          for(let j = 1; j <= this.size; j++) {
            if(solution[index][i] == j) {
              context.drawImage(
                this.img,
                (j - 1) * this.squareSize,
                (i - 1) * this.squareSize,
                this.squareSize,
                this.squareSize
              );
            }
          }
        }
      }
      
      drawBoard() {
          for(let i = 0; i < this.size; i++) {
              for (let j = 0; j < this.size; j++) {
                context.fillStyle = (i + j) % 2 == 0 ? "white" : "black";
                context.fillRect(
                  j * this.squareSize,
                  i * this.squareSize,
                  this.squareSize,
                  this.squareSize
                );
              }
            }
      }
  
      move(i) {
        for(let j = 1; j <= this.size; j++) {
          if(this.isOk(i,j)) {
            a[i] = j;
            if(i == this.size) {
              count++;
              solution.push([...a]);
            }
            this.move(i + 1);
          } 
        }
      }
  }

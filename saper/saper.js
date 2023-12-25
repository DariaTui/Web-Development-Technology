
function alerted(){
let amountBomb = document.querySelector('.amountBomb').value;
amountBomb = Number(amountBomb)

if (String(amountBomb)!=='NaN' && amountBomb!==0){
    startGame(12,12,amountBomb);

}else{
    alert("Ошибка попробуйте еще раз");
}
}


function startGame(WIDTH, HEIGHT, BOMBS_COUNT){
    const field = document.querySelector('.field');
    const cellsCount = WIDTH * HEIGHT; 
    field.innerHTML = '<button ></button>'.repeat(cellsCount);
    const cells = [...field.children];
    let closedCount = cellsCount; //изначальное кол-во клеток


    const bombs = [...Array(cellsCount).keys()]
    .sort(() => Math.random() - 0.5)
    .slice(0, BOMBS_COUNT);

    field.addEventListener('click', (event) => {

        
            
          
        if (event.target.tagName !== 'BUTTON'){
            return;
        }
        const index = cells.indexOf(event.target); //находит индекс ячейки
        const column = index % WIDTH;
        const row = Math.floor(index / WIDTH); //сколько рядов помещается перед нашим рядом
        open(row, column);
    });
    //проверка для крайних кнопок
    function isValid(row,column){
        return row >= 0 
        && row < HEIGHT
        && column >= 0
        && column< WIDTH;
        
    }
    //функция которая считает колв-во бомб рядом
    function getCount(row,column){
        let count = 0;
        for (let x = -1; x <= 1; x++){
            for (let y = -1; y <= 1; y++){
                if (isBomb(row + y, column + x)){
                    count++
                }
            }
        }
        return count;
    }

    function open(row,column){
        if (!isValid(row,column)) return;

        const index = row * WIDTH + column;
        const cell = cells[index];
        
        
        if (cell.disabled === true) return;
        cell.disabled=true;
        

        if (isBomb(row,column)){
             cell.innerHTML = '💣';
             alert('Вы наткнулись на бомбу, вы проиграли');
             location.reload();
            return;
            
        }
            closedCount--;
            if(closedCount <= BOMBS_COUNT){
                alert('Вы выйграли')
                return;
            }


            const count = getCount(row, column)
            if (count !== 0){
                cell.innerHTML = count;
                return;
            }
            for (let x = -1; x <= 1; x++){
                for (let y = -1; y <= 1; y++){
                    open(row + y, column + x);
                       
                }
            }
        
    }

    function isBomb(row,column){
        if (!isValid(row,column)){
            return false;
        }
        const index = row * WIDTH + column;

        return bombs.includes(index);

    }
}



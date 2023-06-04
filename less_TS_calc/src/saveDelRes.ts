export {appendResult}

let countId = 0; //имена id будут цифры и каждый вызов число будет инкрементироваться
                 //чтобы все id были уникальными
let parent: HTMLElement;

function appendResult(res){
    //создаем новые div
    const newDiv = document.createElement('div');
    
    //присваиваем новому див результат из калькулятора
    newDiv.textContent = res; 
    //console.log(`Новый див: ${res}`);
    
    //добавим новому div id
    const newId = countId; //вспомогательная переменная для 
    newDiv.setAttribute("id", newId);
    console.log(`id нового div: ${newId}`);
    
    //повешаем клик на div по id
    newDiv.onclick = function() {
      deleteDiv(newId);
    };
  
    //ищем родителя по id=parent, чтобы потом туда вставить новый div
    parent = document.querySelector('#parent');
    parent.appendChild(newDiv);
  
    countId += 1; //для добавления уникального id
}

//функция удаления div по id
function deleteDiv(id){
    console.log(id);
    const child = document.getElementById(id);
    child.remove();
}
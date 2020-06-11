const addButton = document.querySelector('.addButton');
var input= document.querySelector('.input')
const container = document.querySelector('.container')


class item{
    constructor(itemName){
        //creating  the item div

        this.createDiv(itemName)
    }

      createDiv(itemName){
          let input = document.createElement('input')
          input.value =itemName;
          input.disabled = true;
          input.classList.add('item_input')
          input.type = "text";
      

          let itemBox = document.createElement('div')
          itemBox.classList.add('item')

          let editButton = document.createElement('button');
          editButton.innerHTML = "EDIT"
           editButton.classList.add('editbutton')

           let removeButton = document.createElement('button')
           removeButton.innerHTML = "REMOVE"
           removeButton.classList.remove('removeButton')

           container.appendChild(itemBox);

           itemBox.appendChild(input)
           itemBox.appendChild(editButton)
           itemBox.appendChild(removeButton);

           editButton.addEventListener('click', ()=>this.edit(input))

           removeButton.addEventListener('click' , ()=>this.remove(itemBox))
           
      }
       edit(input){
           input.disabled = !input.disabled
       }
       remove(item){
           container.removeChild(item)
       }
}

    function checking (){
        if(input.value !== ""){
            new item(input.value)
            input.value = ""
        }
    }


 addButton.addEventListener('click' , checking)
window.addEventListener('keydown' , (e)=>{         //adding the winodw listener so that you can add input but just pressing enter on keyboard
    if(e.which == 13){
        checking()
    }
})



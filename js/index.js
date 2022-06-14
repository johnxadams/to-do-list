const myUl = document.querySelector('.my-list');
// myUl.style.backgroundColor = "pink" 

//toDoInputText styling to usersInput
let toDoInputText = document.querySelector("form > input[type='text']");

toDoInputText.style.fontSize ='1.6rem';
toDoInputText.style.paddingLeft = '1.5rem';
toDoInputText.style.borderRadius = '30px';
toDoInputText.style.width = "100%"
toDoInputText.style.outline = 'none';
// option 2:
// let userDataText = document.querySelector('#user-data');
// userDataText.style.color = 'red';
// e === event -> functionParameterBelow
const addToList = (e) => {
    e.preventDefault();
    console.log(e)
    let userData = document.querySelector('#user-data').value;
    
    console.log(userData);
    if(!userData == ""){
        let newList = document.createElement('li');
        let textNode = document.createTextNode(userData);
        let doneDelSpan = document.createElement('span');
        let doneBtn = document.createElement('button');
        let delBtn = document.createElement('button');
        /* 
        create new spanElement and append it as a child to newList 
        doneBtn & delBtna re supose to be inside a span
        */
        newList.appendChild(textNode);
        newList.appendChild(doneDelSpan)
        myUl.appendChild(newList);
        doneBtn.innerHTML = '✅️'
        delBtn.innerHTML = '❌️'
        doneDelSpan.appendChild(doneBtn);
        doneDelSpan.appendChild(delBtn);

        newList.style.cssText = 'display: flex; justify-content: space-between; color: black; font-size: 1.6rem';
        doneDelSpan.style.cssText = 'display: flex; justify-content: space-around; background-color: transparent; width: 5rem';
        doneBtn.style.cssText = 'background-color: transparent; border: none; font-size: 1.3rem';
        delBtn.style.cssText = 'margin: 0 5% 0 5%; background-color: transparent; border: none; font-size: 1.3rem';

        document.querySelector('#user-data').value = "";

        //adding the placeholder to the first ifStatement will unable me to give a request directly after users submitting any toDo.
        document.querySelector('#user-data').placeholder = "...any other plans?" ;
        
        doneBtn.addEventListener("click", (e) => {
            console.log(e)
            if (e.target.matches("button:nth-child(1)")){
                // e.target.parentElement.parentElement.style.backgroundColor = "black";
                e.target.parentElement.parentElement.classList.add('cross-line');
                e.target.parentElement.parentElement.classList.remove('remove-cross-line');
                
            } else  {
                e.target.parentElement.parentElement.classList.remove('cross-line');
                e.target.parentElement.parentElement.classList.add('remove-cross-line');
            }

        })

        delBtn.addEventListener("click", (e) => {
            // e.stopPropagation();
            // console.log(e)
            if (e.target.matches("button:nth-child(2)")){
                myUl.removeChild(e.target.parentElement.parentElement)
            }

        })

        
    } else {
         //document.querySelector('#user-data').placeholder = "What you wanna do?" ;
        // let toDoInputPlaceholder = document.querySelector('#user-data').placeholder;
        // toDoInputPlaceholder = "Any other Plans?";
    }

    
    return newList;
};

// const modifyList = (e) => {

// }

document.querySelector("form").addEventListener("submit", addToList);


// if statemment in line 52. Why can't I undo the ifStatement. 
// as durchstreichen lässt sich nicht rückgängig machen,,... ? why??
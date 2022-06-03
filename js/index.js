const myUl = document.querySelector('.my-list');
myUl.style.backgroundColor = "pink" //isWorking
// e === event
const addToList = (e) => {
    e.preventDefault();
    console.log(e)
    let userData = document.querySelector('#user-data').value;
    // let userDataText = document.querySelector('#user-data');

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


        newList.style.cssText = 'display: flex; justify-content: space-between; color: white; font-size: 1.6rem';
        doneDelSpan.style.cssText = 'display: flex; justify-content: space-around; background-color: aliceblue; width: 5rem';
        doneBtn.style.cssText = 'background-color: transparent; border: none; font-size: 1.3rem';
        delBtn.style.cssText = 'margin: 0 5% 0 5%; background-color: transparent; border: none; font-size: 1.3rem';

        document.querySelector('#user-data').value = "";
    } else {
        document.querySelector('#user-data').placeholder = "What you wanna do?" ;
    }
    return newList;
};

document.querySelector("form").addEventListener("submit", addToList);


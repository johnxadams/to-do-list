const myUl = document.querySelector('.my-list');
myUl.style.backgroundColor = "red" //isWorking
// e === event
const addToList = (e) => {
    e.preventDefault();
    console.log(e)
    let userData = document.querySelector('#user-data').value;
    // let userDataValue = userData.value;
    console.log(userData);
    if(!userData == ""){
        let newList = document.createElement('li');
        let textNode = document.createTextNode(userData);

        newList.appendChild(textNode);
        myUl.appendChild(newList);
    } else {
        document.querySelector('#user-data').placeholder = 'What you wanna do?' ;
    }
};

document.querySelector("form").addEventListener("submit", addToList);
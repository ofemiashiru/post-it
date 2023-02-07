let body = document.body;
let main = document.getElementById('main');

let postIt = [
    'I never sleep cause sleep is the cousin of death', 
    'Organise, every other day I organise!', 
    'You might win some but you just lost one', 
    'Back back, forth and forth'
];

let colours = ['orange','pink','blue','green','gold'];

showList();//refreshes the post it list

function showList(){//refreshes the post it list

    main.innerHTML = ''; //emptys the main HTML in order to refresh the list



    for(let i = postIt.length - 1; i >= 0; i--){ //reverses the array so that the latest items are shown first

        let randomNumber = Math.floor(Math.random() * 5);
        let postItColour = colours[randomNumber];

        main.innerHTML += `
            <div class="post-it ${postItColour}">
                <p>
                    <button class="delete-btn" value="${i}"><i  class="fas fa-trash" aria-label="Delete Post-iT"></i></button>
                </p>
                <hr>
                <div class="post-body">
                    ${postIt[i]}
                </div>
                
                <div class="post-it-corner ${postItColour}"></div>
            </div>
        `

        let deleteButtons = document.getElementsByClassName('delete-btn');

        for(let each of deleteButtons){
            each.addEventListener('click', deletePostIt); //adding event listener to each delete button
        }
    }

}
//delete function
function deletePostIt(){
    postIt.splice(this.value,1);
    showList(); //refreshes the post it list
}



let newPostIt;
let userInput = document.getElementById('input-box'); 

//update function
function updateInput(event){
    newPostIt = event.target.value; //what the user inputs into the box
}

userInput.addEventListener('change', updateInput); //add event listener instead of having javascript in html


let addBtn = document.getElementById('add-btn');

//add function
function addPostIt(){
    if(newPostIt !== undefined){ // if the newPostIt has been set, therefore is not undefined, then add new Post It!
        postIt.push(newPostIt);
        showList(); //refreshes the post it list
        newPostIt = undefined;
        userInput.value = '';

    } else{
        alert('Please enter text');
    }   
}

addBtn.addEventListener('click', addPostIt); //add event listener instead of having javascript in html
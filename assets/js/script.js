let body = document.body
let main = document.getElementById('main')

let postIt = [
    'I never sleep cause sleep is the cousin of death', 
    'Organise, every other day I organise!', 
    'You might win some but you just lost one', 
    'Back back, forth and forth'
];

let colours = ['orange','pink','blue','green','gold'];

showList()//refreshes the post it list

function showList(){//refreshes the post it list

    main.innerHTML = ''; //emptys the main HTML in order to refresh the list



    for(let i = postIt.length - 1; i >= 0; i--){ //reverses the array so that the latest items are shown first

        let randomNumber = Math.floor(Math.random() * 5);
        let postItColour = colours[randomNumber];

        main.innerHTML += `
            <div class="post-it ${postItColour}">
                <p>
                    <i onclick="deletePostIt(${i})" class="fas fa-trash" aria-label="Delete Post-iT"></i>
                </p>
                <hr>
                <div class="post-body">
                    ${postIt[i]}
                </div>
                
                <div class="post-it-corner ${postItColour}"></div>
            </div>
        `
    }

}



function deletePostIt(i){
    postIt.splice(i,1);
    showList() //refreshes the post it list
}

let newPostIt;
let userInput = document.getElementById('input-box') //what the user inputs into the box

function updateInput(){
    newPostIt = userInput.value
}

function addPostIt(){
    if(newPostIt !== undefined){ // if the newPostIt has been set, therefore is not undefined, then add new Post It!
        postIt.push(newPostIt)
        showList() //refreshes the post it list
        newPostIt = undefined
        userInput.value = ''

    } else{
        alert('Please enter text')
    }
    
}
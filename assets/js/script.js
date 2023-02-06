let body = document.body
let main = document.getElementById('main')

let postIt = ['Organise!!', 'Every other day I organise!', 'Some of us are wise!', 'Every other person over wise!'];
let colours = ['#f39a4f','#eb6092','#4ab6d9','#abcc51','#f9c847'];

showList()//refreshes the post it list

function showList(){//refreshes the post it list

    main.innerHTML = ''; //emptys the main HTML in order to refresh the list


    for(let i = 0; i < postIt.length; i++){

        let randomNumber = Math.floor(Math.random() * 5);
        let postItColour = colours[randomNumber];

        main.innerHTML += `
        <div style="background-color:${postItColour}" class="post-it">
            <p>
                <i onclick="deletePostIt(${i})" class="fas fa-trash"></i>
            </p>
            <hr>
            ${postIt[i]}
            <div style="background-color:${postItColour}" class="post-it-corner"></div>
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

    }
    
}
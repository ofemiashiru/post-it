let body = document.body

let main = document.getElementById('main')

let postIt = ['Add new post it', 'brand new note', 'hello there', 'Hello'];

let colours = ['#ff7eb9','#ff65a3','#7afcff','#feff9c','#fff740'];



for(let i = 0; i < postIt.length; i++){
    let randomNumber = Math.floor(Math.random() * 5);
    let postItColour = colours[randomNumber];

    main.innerHTML += `
    <div style="background-color:${postItColour}" class="post-it">
        <i class="fas fa-trash"></i>
        <hr>
        ${postIt[i]}
        <div style="background-color:${postItColour}" class="post-it-corner"></div>
    </div>

    `
}
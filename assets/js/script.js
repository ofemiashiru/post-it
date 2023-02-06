let body = document.body

let main = document.getElementById('main')

let postIt = ['Add new post it', 'brand new note', 'hello there']

let colours = ['#ff7eb9','#ff65a3','#7afcff','#feff9c','#fff740']

for(let i = 0; i < postIt.length; i++){
    main.innerHTML += `
    <div class="post-it">
        ${postIt[i]}
        <div class="post-it-corner"></div>
    </div>
    
    `
}
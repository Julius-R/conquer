

document.querySelector('.nav-btn').addEventListener('click', function() {
    let menu = document.querySelector('.nav-list');
    
    if(menu.style.height == "") {
        menu.style.height = 100+'%';
    } else {
        menu.style.height = "";
    }

    links.forEach(link => {
        link.addEventListener('click', () => {
            menu.style.height = ""; 
        })
    })


    console.log(menu);
    
});
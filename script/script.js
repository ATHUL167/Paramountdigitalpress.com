document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click',()=>{
        const navbar = document.querySelector('.navbar-collapse');
        const toggler = document.querySelector('.navbar-toggler');
        if(navbar.classList.contains('show')){
            new bootstrap.Collapse(navbar).toggle();
            toggler.classList.add('collapsed');
        }
    });
});



const text = '"IMAGING THE FUTURE..."';
const speed = 200; // typing speed in ms
let i = 0;

function typeWriter() {
    if (i < text.length) {
        document.getElementById("typewriter").textContent += text.charAt(i);
        i++;
        setTimeout(typeWriter, speed);
    }
}

typeWriter();
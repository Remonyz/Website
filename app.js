let intro = document.querySelector('.intro');
let logo = document.querySelector('.logo-h');
let logoSpan = document.querySelectorAll('.logo');

let remin = document.querySelector('.remin-h');
let reminSpan = document.querySelectorAll('.remin');

window.addEventListener('DOMContentLoaded', ()=>{
    setTimeout(()=>{
        reminSpan.forEach((span, idx)=>{
            setTimeout(()=>{
                span.classList.add('active');
            }, (idx + 1) * 2000)
        })

        
    })
})

window.addEventListener('click', ()=>{
    setTimeout(()=>{
        reminSpan.forEach((span, idx)=>{

            setTimeout(()=>{
                span.classList.remove('active');
                span.classList.add('fade');
            }, (idx + 1) * 50)
        })
    });

    setTimeout(()=>{
        logoSpan.forEach((span, idx)=>{
            setTimeout(()=>{
                span.classList.add('active');
            }, 2000)
        })

        setTimeout(()=>{
            logoSpan.forEach((span, idx)=>{

                setTimeout(()=>{
                    span.classList.remove('active');
                    span.classList.add('fade');
                }, (idx + 1) * 50)
            })
        }, 4000);

        setTimeout(()=>{
            intro.style.top = '-100vh';
        }, 4400)
    })
})

function fadeInHome() {
    document.querySelector("#about").classList.replace("fadeIn", "fadeOut")
    document.querySelector("#projects").classList.replace("fadeIn", "fadeOut")
    document.querySelector("#socials").classList.replace("fadeIn", "fadeOut")

    document.querySelector("#home").classList.replace("fadeOut", "fadeIn")
    
}

function fadeInAbout() {
    document.querySelector("#home").classList.replace("fadeIn", "fadeOut")
    document.querySelector("#projects").classList.replace("fadeIn", "fadeOut")
    document.querySelector("#socials").classList.replace("fadeIn", "fadeOut")

    document.querySelector("#about").classList.replace("fadeOut", "fadeIn")
    
}

function fadeInProjects() {
    document.querySelector("#home").classList.replace("fadeIn", "fadeOut")
    document.querySelector("#socials").classList.replace("fadeIn", "fadeOut")
    document.querySelector("#about").classList.replace("fadeIn", "fadeOut")

    document.querySelector("#projects").classList.replace("fadeOut", "fadeIn")
}

function fadeInSocial() {
    document.querySelector("#home").classList.replace("fadeIn", "fadeOut")
    document.querySelector("#projects").classList.replace("fadeIn", "fadeOut")
    document.querySelector("#about").classList.replace("fadeIn", "fadeOut")

    document.querySelector("#socials").classList.replace("fadeOut", "fadeIn")
}


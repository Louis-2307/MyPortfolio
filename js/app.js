

const header = document.querySelector("header")

const first_skill = document.querySelector(".skill:first-child");
const sk_counters = document.querySelectorAll(".counter span");
const process_bars = document.querySelectorAll(".skill svg circle");

const prt_section = document.querySelector(".portfolio");
const zoom_icons = document.querySelectorAll(".zoom-icon");
const modal_overlay = document.querySelector(".modal-overlay");
const images =document.querySelectorAll(".images img")
const prev_btn = document.querySelector(".prev-btn");
const next_btn = document.querySelector(".next-btn")

window.addEventListener("scroll", () => {
    if(!skillsPlayed) skillsCounter();
})

/*---------------Sticky Navbar--------------------*/
function stickyNavbar(){
    header.classList.toggle("scrolled", window.pageYOffset > 0)
}

stickyNavbar();

window.addEventListener("scroll", stickyNavbar);

/*---------------Reveal Animation--------------------*/

let sr = ScrollReveal({
    duration: 2500,
    distance: "60px",
});

sr.reveal(".showcase-info", { delay: 600});
sr.reveal(".showcase-image", { origin:"top", delay: 700});

/*---------------Skills Process Bar Animation--------------------*/

function hasReached(el){
    let topPosition = el.getBoundingClientRect().top;
    if(window.innerHeight >= topPosition + el.offsetHeight) return true;
    return false
    
}

function updateCount(num, maxNum){
    let currentNum = +num.innerText;

    if(currentNum < maxNum){
        num.innerText = currentNum + 1;
        setTimeout(() => {
            updateCount(num, maxNum);
        }, 12);
    }
}

let skillsPlayed = false;

function skillsCounter(){
    if(!hasReached(first_skill)) return;
    
    skillsPlayed = true;

    sk_counters.forEach((counter, i) => {
        let target = +counter.dataset.target;
        let strokeValue = 427 - 427 * (target / 100);

        process_bars[i].style.setProperty("--target", strokeValue);

        setTimeout(() => {
            updateCount(counter, target);
        }, 400);
    })

    process_bars.forEach(
        (p) => (p.style.animation="progress 2s ease-in-out forwards"))
}

/*---------------Modal popup Animation--------------------*/
let currentIndex = 0
zoom_icons.forEach((icn, i) => icn.addEventListener("click", () => {
    prt_section.classList.add("open");
    document.body.classList.add("stopScrolling");
    currentIndex = i;
    changeImage(currentIndex)
}))

modal_overlay.addEventListener("click", () => {
prt_section.classList.remove("open");
document.body.classList.remove("stopScrolling");
});

function changeImage(index){
    images.forEach(img => img.classList.remove("showImage"))
    images[index].classList.add("showImage")
}
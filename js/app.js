

const header = document.querySelector("header")

const first_skill = document.querySelector(".skill:first-child");
const sk_counters = document.querySelectorAll(".counter span");
const process_bars = document.querySelectorAll(".skill svg circle");

const prt_section = document.querySelector(".portfolio");
const zoom_icons = document.querySelectorAll(".zoom-icon");
const modal_overlay = document.querySelector(".modal-overlay");
const images =document.querySelectorAll(".images img")
const prev_btn = document.querySelector(".prev-btn");
const next_btn = document.querySelector(".next-btn");

const links = document.querySelectorAll(".nav-link")

const sendButton = document.getElementById("sendBtn")

const meta = document.querySelectorAll('.item-meta');
const collapse = 'progress__item--collapse';

window.addEventListener("scroll", () => {
    activeLink();
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

prev_btn.addEventListener("click", () => {
    if(currentIndex === 0){
        currentIndex = 5;
    } else {
        currentIndex--;
    }
    changeImage(currentIndex);
});

next_btn.addEventListener("click", () => {
    if(currentIndex === 5){
        currentIndex = 0;
    } else {
        currentIndex++;
    }
    changeImage(currentIndex);
});

function changeImage(index){
    images.forEach(img => img.classList.remove("showImage"))
    images[index].classList.add("showImage")
}

/*---------------Change Active Link On Scroll--------------------*/

function activeLink(){
    let sections = document.querySelectorAll("section[id]")
    let passedSections = Array.from(sections).map((sct, i) => {
        return {
            y: sct.getBoundingClientRect().top - header.offsetHeight,
            id: i, 
        };
    }).filter(sct => sct.y <= 0);

    let currSectionID = passedSections.at(-1).id;
    links.forEach(l => l.classList.remove("active"));
    links[currSectionID].classList.add("active");
}

activeLink();

/*---------------Contact--------------------*/
var subject = document.getElementById("subject")
var phone = document.getElementById("phone")
var body = document.getElementById("body")

sendButton.addEventListener("click" , () => {
    window.open(`mailto:Louis.le.2307@gmail.com?subject= ${subject.value} &body= ${" Phone: " + phone.value + " " + "Message: " + body.value }`);
})

/*---------------Career Bar Styling--------------------*/


$('.item').on('click',function(){
    $(this).removeClass(collapse);
    $('.item').not(this).each(function(){
      $(this).addClass(collapse);
      $(this).find('.item-meta').removeClass('show');
    });
    $(this).find('.item-meta').addClass('show');
  });




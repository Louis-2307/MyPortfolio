
const myTags = [
"JavaScript",
"Kotlin",
"HTML/CSS",
"Swift",
"React Nactive",
"C#",
"TypeScript",
"ASP.Net MVC",
"Rest API",
"Figma",
"Github",
"Firebase",
"MySQL",
];
var tagCloud = TagCloud(".contents", myTags, {
// radius in px
radius: 300,
// animation speed
// slow, normal, fast
maxSpeed: "fast",
initSpeed: "fast",
// 0 = top
// 90 = left
// 135 = right-bottom
direction: 135,
left: 0,
// interact with cursor move on mouse out
keep: true,
});
//To change the color of text randomly
var colors = [
"#F9F9F9",
"#FFE0AC",
"#FFACB7",
"#FCFFA6",
"#FFEDED",
];
var random_color = colors[Math.floor(Math.random() * colors.length)];
document.querySelector(".contents").style.color = random_color;

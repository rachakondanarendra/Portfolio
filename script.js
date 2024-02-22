// JavaScript code for typewriter effect
const text = "Full Stack Developer";
let index = 0;

function typeWriter() {
    if (index < text.length) {
        document.getElementById("typewriter").innerHTML += text.charAt(index);
        index++;
        setTimeout(typeWriter, 100); // Adjust the delay between letters (in milliseconds)
    }
}

window.onload = typeWriter;

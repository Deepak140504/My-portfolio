const text = "Aspiring Software Developer";
let index = 0;

function typingEffect()
{
    if(index < text.length)
    {
        document.getElementById("typing").innerHTML += text.charAt(index);
        index++;
        setTimeout(typingEffect,100);
    }
}

typingEffect();
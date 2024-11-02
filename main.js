function start(){
    document.getElementById('background-music').play()

    setTimeout(() => {
        document.getElementById("user").style.display = "block"
        document.getElementById("bot").style.display = "block"
        document.getElementById("boshlash").style.display = "none"
    }, 5300);
}
function start(){
    document.getElementById('background-music').play()

    setTimeout(() => {
        document.getElementById("user").style.display = "block"
        document.getElementById("bot").style.display = "block"
        document.getElementById("user_score").style.display = "block"
        document.getElementById("bot_score").style.display = "block"
        document.getElementById("user_img").style.display = "block"
        document.getElementById("bot_img").style.display = "block"
        document.getElementById("rock_button").style.display = "block"
        document.getElementById("paper_button").style.display = "block"
        document.getElementById("scissors_button").style.display = "block"
        document.getElementById("title_text").style.fontSize = "300%"
        document.getElementById("start_button").style.marginTop = "0"

        document.getElementById("boshlash").style.display = "none"
    }, 5300);
}

let hands = {
    1: "tosh",
    2: "qogoz",
    3: "qaychi"
}

function user_rock(a){
    document.getElementById("user_img_img").setAttribute("src", "img/tosh.png")
    bots_random = Math.floor(Math.random() * 3) + 1
    console.log(bots_random, typeof bots_random);
    if(bots_random == 1){
        bot_rock()
    } else if(bots_random == 2){
        bot_paper()
    } else{
        bot_scissors()
    }
    if(bots_random == 3){
        results.user += 1
        document.getElementById("user_score_num").innerHTML = results.user
    } else if(bots_random == 2){
        results.bot += 1
        document.getElementById("bot_score_num").innerHTML = results.bot
    }
}

function bot_rock(){
    document.getElementById("bot_img_img").setAttribute("src", "img/tosh.png")
}

function user_paper(a){
    document.getElementById("user_img_img").setAttribute("src", "img/qogoz.png")
    bots_random = Math.floor(Math.random() * 3) + 1
    console.log(bots_random, typeof bots_random);
    if(bots_random == 1){
        bot_rock()
    } else if(bots_random == 2){
        bot_paper()
    } else{
        bot_scissors()
    }
    if(bots_random == 1){
        results.user += 1
        document.getElementById("user_score_num").innerHTML = results.user
    } else if(bots_random == 3){
        results.bot += 1
        document.getElementById("bot_score_num").innerHTML = results.bot
    }
}

function bot_paper(){
    document.getElementById("bot_img_img").setAttribute("src", "img/qogoz.png")
}

function user_scissors(a){
    document.getElementById("user_img_img").setAttribute("src", "img/qaychi.png")
    bots_random = Math.floor(Math.random() * 3) + 1
    console.log(bots_random, typeof bots_random);
    if(bots_random == 1){
        bot_rock()
    } else if(bots_random == 2){
        bot_paper()
    } else{
        bot_scissors()
    }
    if(bots_random == 2){
        results.user += 1
        document.getElementById("user_score_num").innerHTML = results.user
    } else if(bots_random == 1){
        results.bot += 1
        document.getElementById("bot_score_num").innerHTML = results.bot
    }
}

function bot_scissors(){
    document.getElementById("bot_img_img").setAttribute("src", "img/qaychi.png")
}

let results = {
    user: 0,
    bot: 0
}

// for(let i = 0; i < 10; i++){
//     console.log(Math.floor(Math.random() * 3) + 1);
// }

document.getElementById("user_score_num").innerHTML = results.user
document.getElementById("bot_score_num").innerHTML = results.bot
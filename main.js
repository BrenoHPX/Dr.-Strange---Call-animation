let index = 0;

function changeBG () {

    const images = [
        'url("img/drstrange1.jpg")',
        'url("img/drstrange2.jpg")',
        'url("img/drstrange3.jpg")',
        'url("img/drstrange4.jpg")',
        'url("img/drstrange5.jpg")',
        'url("img/drstrange6.jpg")',
        'url("img/drstrange7.jpg")',
        'url("img/drstrange8.jpg")',
        'url("img/drstrange9.jpg")',
        'url("img/drstrange10.jpg")',
        'url("img/drstrange11.jpg")',
        'url("img/drstrange12.jpg")',
        'url("img/drstrange13.jpg")',
    ]

    const getBody = document.querySelector('body');
    const bg = images[index];        

    document.body.style.backgroundImage = bg;
    index++;
    if(index===images.length){
        return;
    }

}

setInterval(changeBG, 1000);




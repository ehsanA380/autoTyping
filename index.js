const span = document.querySelector('span');
const wordsList = ['Developer', 'Coder','Teacher','Youtuber'];
const word = 'Developer';
// span.innerText=wordsList[0];
// var count = 0;
let wordIndex =3;
let characterIndex=0;
let skipUpdate = 0;
let reverseType= false;
// let wordCount=word.length;
setInterval(()=>{
    if(skipUpdate){
        skipUpdate--
        return;
    }

    if(!reverseType){
        skipUpdate=2;
        span.innerText+=wordsList[wordIndex][characterIndex];
        characterIndex++;
    }else{
        span.innerText= span.innerText.slice(0,span.innerText.length-1);
        characterIndex--
    }

    if(span.innerText.length === 0 && reverseType){
        reverseType = false;
        characterIndex = 0;
        if(wordIndex==wordsList.length-1){
            wordIndex = 0;
        }else{
            wordIndex++;
        }
    }

    if(characterIndex===wordsList[wordIndex].length){
        reverseType = true;
        skipUpdate=10;
        characterIndex --;
    }
   
    

    
},100);
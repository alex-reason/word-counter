const wordCount = document.querySelector('#word-count');
const countButton = document.querySelector('#count-button');
const numWords = document.querySelector('#num-words');

const placeholder = 9;

countButton.addEventListener('click', ()=> {
    countWords();
})

const countWords = () => {
    if (wordCount.value !== ''){
        const wordArr = String(wordCount.value).split(" ");
        numWords.innerText = wordArr.length;
    }
    
}
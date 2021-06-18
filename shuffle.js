const imageArray = [
    { imgSrc="https://media.giphy.com/media/M8PxVICV5KlezP1pGE/giphy.gif" id="2" },
    { imgSrc="https://media.giphy.com/media/1kkxWqT5nvLXupUTwK/giphy.gif" id="3" },
    { imgSrc="https://media.giphy.com/media/9s8Jq3Sc1ZnZS/giphy.gif" id="4" },
    { imgSrc="https://media.giphy.com/media/fnlXXGImVWB0RYWWQj/giphy.gif" id="5" },
    { imgSrc="https://media.giphy.com/media/yJHN2CCfPIw4o/giphy.gif" id="6" },
    { imgSrc="https://media.giphy.com/media/m0MfjLtKOgTPG/giphy.gif" id="7" },
    { imgSrc="https://media.giphy.com/media/BdhtvnPILhdYs/giphy.gif" id="8" },
    { imgSrc="https://media.giphy.com/media/dTJd5ygpxkzWo/giphy.gif" id="9" },
    { imgSrc="https://media.giphy.com/media/WZP3qaxYj10gU/giphy.gif" id="10" },
    { imgSrc="https://media.giphy.com/media/naXyAp2VYMR4k/giphy.gif" id="11" },
    { imgSrc="https://media.giphy.com/media/ZNegC7wFpuQT7nurZ0/giphy.gif" id="12" },
    { imgSrc="https://media.giphy.com/media/2bUqez1VlOCInOZLTp/giphy.gif" id="13" },
    { imgSrc="https://media.giphy.com/media/IvjjgsEhnLCzm/giphy.gif" id="14" },
    { imgSrc="https://media.giphy.com/media/77vjJEy9IRqJW/giphy.gif" id="15" },
    { imgSrc="https://media.giphy.com/media/8dNZXw6LOlgnm/giphy.gif" id="16" },
    { imgSrc="https://media.giphy.com/media/EVnf7prY7J8Wc/giphy.gif" id="17" },
    { imgSrc="https://media.giphy.com/media/Htptc5cECryVHFtbaa/giphy.gif" id="18" },
    { imgSrc="https://media.giphy.com/media/SB5fjrUhAeLte/giphy.gif" id="19" },
    { imgSrc="https://media.giphy.com/media/JOjumF8rHUHINyKObk/giphy.gif" id="20" },
    { imgSrc="https://media.giphy.com/media/DSUJYdg57fN4H6vbrF/giphy.gif" id="21" },
    { imgSrc="https://media.giphy.com/media/5t3RY0RHLUV3RHKFkj/giphy.gif" id="22" },
    { imgSrc="https://media.giphy.com/media/aSZSj0mT8f6tW/giphy.gif" id="23" },
    { imgSrc="https://media.giphy.com/media/ZsqVl7DeLvQQw/giphy.gif" id="24" },
    { imgSrc="https://media.giphy.com/media/gdUxfKtxSxqtq/giphy.gif" id="25" },
    { imgSrc="https://media.giphy.com/media/MFYewrNPPkUzUUKVXa/giphy.gif" id="26" },
    { imgSrc="https://media.giphy.com/media/kPtZXq7mv2uucjLKPt/giphy.gif" id="27" },
    { imgSrc="https://media.giphy.com/media/l0NwscKPAiPjFcixG/giphy.gif" id="28" },
    { imgSrc="https://media.giphy.com/media/wvurizcBk3tmM/giphy.gif" id="29" },
    { imgSrc="https://media.giphy.com/media/JXMn6T2f8Brl6/giphy.gif" id="30" },
    { imgSrc="https://media.giphy.com/media/nQ8XtX3ctBCkE/giphy.gif" id="31" },
    { imgSrc="https://media.giphy.com/media/0T1ozXIiCuBFtQ4tpj/giphy.gif" id="32" },
    { imgSrc="https://media.giphy.com/media/3Owa0TWYqHi5RZYGql/giphy.gif" id="33" },
];


// const input = document.getElementById('mainImg');
// input.addEventListener('click', function(e) { 
//     alert('i was clicked');
// });
// //     i++;
// //     if (i === imageArray.length) {
// //         i=0;
// //     }
// //     e.target.src = imageArray[i].imgSrc;
// // });

function addingEventListener() {
    const input = document.getElementById('mainImg');

    function clickAlert() {
        alert('I was clicked!');
    }

    input.addEventListener('click', clickAlert); 
}

console.log('Hello World');
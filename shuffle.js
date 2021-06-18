const imageArray = [
    { imgSrc: "https://media.giphy.com/media/51Uiuy5QBZNkoF3b2Z/giphy.gif"},
    { imgSrc:"https://media.giphy.com/media/M8PxVICV5KlezP1pGE/giphy.gif" },
    { imgSrc:"https://media.giphy.com/media/1kkxWqT5nvLXupUTwK/giphy.gif" },
    { imgSrc:"https://media.giphy.com/media/9s8Jq3Sc1ZnZS/giphy.gif" },
    { imgSrc:"https://media.giphy.com/media/fnlXXGImVWB0RYWWQj/giphy.gif" },
    { imgSrc:"https://media.giphy.com/media/yJHN2CCfPIw4o/giphy.gif" },
    { imgSrc:"https://media.giphy.com/media/m0MfjLtKOgTPG/giphy.gif" },
    { imgSrc:"https://media.giphy.com/media/BdhtvnPILhdYs/giphy.gif" },
    { imgSrc:"https://media.giphy.com/media/dTJd5ygpxkzWo/giphy.gif" },
    { imgSrc:"https://media.giphy.com/media/WZP3qaxYj10gU/giphy.gif" },
    { imgSrc:"https://media.giphy.com/media/naXyAp2VYMR4k/giphy.gif" },
    { imgSrc:"https://media.giphy.com/media/ZNegC7wFpuQT7nurZ0/giphy.gif" },
    { imgSrc:"https://media.giphy.com/media/2bUqez1VlOCInOZLTp/giphy.gif" },
    { imgSrc:"https://media.giphy.com/media/IvjjgsEhnLCzm/giphy.gif" },
    { imgSrc:"https://media.giphy.com/media/77vjJEy9IRqJW/giphy.gif" },
    { imgSrc:"https://media.giphy.com/media/8dNZXw6LOlgnm/giphy.gif" },
    { imgSrc:"https://media.giphy.com/media/EVnf7prY7J8Wc/giphy.gif" },
    { imgSrc:"https://media.giphy.com/media/Htptc5cECryVHFtbaa/giphy.gif" },
    { imgSrc:"https://media.giphy.com/media/SB5fjrUhAeLte/giphy.gif" },
    { imgSrc:"https://media.giphy.com/media/JOjumF8rHUHINyKObk/giphy.gif" },
    { imgSrc:"https://media.giphy.com/media/DSUJYdg57fN4H6vbrF/giphy.gif" },
    { imgSrc:"https://media.giphy.com/media/5t3RY0RHLUV3RHKFkj/giphy.gif" },
    { imgSrc:"https://media.giphy.com/media/aSZSj0mT8f6tW/giphy.gif" },
    { imgSrc:"https://media.giphy.com/media/ZsqVl7DeLvQQw/giphy.gif" },
    { imgSrc:"https://media.giphy.com/media/gdUxfKtxSxqtq/giphy.gif" },
    { imgSrc:"https://media.giphy.com/media/MFYewrNPPkUzUUKVXa/giphy.gif" },
    { imgSrc:"https://media.giphy.com/media/kPtZXq7mv2uucjLKPt/giphy.gif" },
    { imgSrc:"https://media.giphy.com/media/l0NwscKPAiPjFcixG/giphy.gif" },
    { imgSrc:"https://media.giphy.com/media/wvurizcBk3tmM/giphy.gif" },
    { imgSrc:"https://media.giphy.com/media/JXMn6T2f8Brl6/giphy.gif" },
    { imgSrc:"https://media.giphy.com/media/nQ8XtX3ctBCkE/giphy.gif" },
    { imgSrc:"https://media.giphy.com/media/0T1ozXIiCuBFtQ4tpj/giphy.gif" },
    { imgSrc:"https://media.giphy.com/media/3Owa0TWYqHi5RZYGql/giphy.gif" },
];

const num = imageArray.length;

var count = 1

const input = document.getElementById('mainImg');

input.addEventListener('click', function(e){ 
    document.getElementById('mainImg').src = imageArray[count].imgSrc
    if (count < imageArray.length - 1) {
        count++
    }
    else {
        count = 0
    }
    console.log(e.target.src)
});


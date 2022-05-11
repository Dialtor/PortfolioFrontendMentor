

const shareBtn = document.querySelector('#share-btn');
const shareContent = document.querySelector('#share-content')


shareBtn.addEventListener('click', () => {
        if (shareContent.classList.contains('hide-share')) {
            shareContent.classList.toggle('share-show');
            shareContent.classList.toggle('hide-share');
        }else if(shareContent.classList.contains('share-show')){
            shareContent.classList.toggle('share-show');
            shareContent.classList.toggle('hide-share');
        }
        

})
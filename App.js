const closedface = document.querySelector('.closed');
const openface = document.querySelector('.open');


function closedFace(){
    if (openface.classList.contains('open')) {
        openface.classList.add('active');
        closedface.classList.remove('active');
    }
}

function openFace(){
    if (closedface.classList.contains('closed')) {
        closedface.classList.add('active');
        openface.classList.remove('active');
    }
}
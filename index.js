const boxs = document.querySelectorAll('.box');
const image = document.querySelectorAll('.img');
const form = document.querySelectorAll('.container');
const messageError = document.querySelectorAll('.p');

function emptyField() {
    return Array.from(boxs).every(box => box.value.trim() === '');
}

function press() {

    function changeClass(list, classNormal, classError) {
        list.forEach(el => {
            el.classList.remove(classNormal, classError);
            el.classList.add(emptyField() ? classError : classNormal);
        });
    }

    changeClass(boxs, 'box', 'box-error');
    changeClass(image, 'img', 'img-error');
    changeClass(form, 'container', 'container-error');
    changeClass(messageError, 'p', 'p-error');

    if (emptyField()) {
        boxs[2].placeholder = "email@exemplo/com";
    }
}

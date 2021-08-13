const mainFields = document.querySelectorAll('.main-field');
const valuesFields = document.querySelectorAll('.values');
const arrows = document.querySelectorAll('.arrow');

mainFields.forEach((el, i) => {
    el.addEventListener('click', () => {
        const arrowClassList = arrows[i].classList;
        const valuesClassList = valuesFields[i].classList;
        if (arrowClassList.contains('active')) {
            valuesClassList.remove('active');
            arrowClassList.remove('active');
            return;
        }

        valuesClassList.add('active');
        arrowClassList.add('active');
    });
});

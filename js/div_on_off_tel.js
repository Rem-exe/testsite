const buttons = document.querySelectorAll('.styled');
const contents = document.querySelectorAll('.div_principales');

buttons.forEach((button, index) => {
    button.addEventListener('click', () => {
        if (contents[index].classList.contains("show")) {
            contents[index].classList.remove("show");
        } else {
            // Cacher tous les contenus
            contents.forEach(content => {
                content.classList.remove('show');
            });

            // Afficher le contenu correspondant au bouton cliqué
            contents[index].classList.add('show');
        }
    });
});

function invisible0() {
    contents.forEach(content => {
        content.classList.remove('show');
    });
}

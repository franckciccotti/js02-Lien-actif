let links = document.querySelectorAll('#navig a');
console.log(links);

links.forEach(link => {
    link.addEventListener('click', function () {
        links.forEach(link => link.classList.remove('actif'));
        this.classList.add('actif');
    });
});
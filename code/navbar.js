let scrolled = 0
const dropdown = document.querySelector('.dropdown')
const scrollMenu = (x) => {
    x = document.getElementsByClassName("header-button")[0]
    x.classList.toggle("change");
    dropdown.classList.toggle('open')
}
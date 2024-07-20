

const items = document.querySelectorAll(".accordion-item")


items.forEach(item => {
    item.addEventListener('click', (event) => {
        item.classList.toggle('open')
    })
})

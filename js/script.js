const myObserver = new IntersectionObserver((entrie) => {
    entrie.forEach((entry) => {
        if(entry.isIntersecting)  {
            entry.target.classList.add('show')
        } else {
            entry.target.classList.remove('show')
        }
    })
})

const elements = document.querySelectorAll('.hinden')

elements.forEach((element) => myObserver.observe(element))





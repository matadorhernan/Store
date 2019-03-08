let b = document.getElementById('button')
let l = document.getElementById('list')

let res = 0;
let list = ''

b.addEventListener('click', forloop)

function forloop() {
    for (let i = 1; i <= 100; i++) {
        res = i % 2

        if (res == 0) {
            list += `<li class="list-group-item">${i}</li>`
        }

    }

    l.innerHTML = list
}
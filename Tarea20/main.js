let p1 = document.getElementById('p1')
let p2 = document.getElementById('p2')
let a = document.getElementById('alert')
let b = document.getElementById('button')

b.addEventListener('click', () => {

    let x = Number(p1.value)
    let y = Number(p2.value)

    while (x != y) {
        x++
        y--
        a.innerHTML += `<div class="alert alert-primary my-2" role="alert">
                        <strong> P1 ${x} <br>
                        P2 ${y}</strong>
                    </div>`
    }
})
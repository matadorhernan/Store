let p = document.getElementById('hrs'),
    r = document.getElementById('rate'),
    l = document.getElementById('list')
let b = document.getElementById('button'),
    hr = 0,
    hrs = 0,
    rate = 0,
    day = 0
b.addEventListener('click', () => {
    if (p.value != '' && r.value != '') {
        if (day < 6) {
            day++, hr = Number(p.value), rate = Number(r.value), hrs += hr, printers(hr, hrs, rate, day)
        }
    }
})

function printers(hr, hrs, rate, day) {
    let text = `<li class="list-group-item"> Dia: ${day} | Horas: ${hr} | Acumulado: ${hrs} | Salario por hora: $${rate} | Sueldo Total: $${hrs*rate} </li>`
    l.innerHTML += text;
}
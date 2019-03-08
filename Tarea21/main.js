let all = document.getElementById('all')
let com = document.getElementById('com')
let fri = document.getElementById('fri')
let dul = document.getElementById('dul')
let button = document.getElementById('button')


button.addEventListener('click', function () {

    let run = true
    let kind = prompt('Es comestgible (1), fritura(2) o dulce(3)?')
    let good = prompt('Costo')
    let zona = ''

    let pall = 0
    let pcom = 0
    let pfri = 0
    let pdul = 0

    while (run) {

        if (Number(good) > 1000) {
            zona = 'El producto es mayor a 1000'
        } else if (Number(good) <= 1000 && Number(good) > 500) {
            zona = 'El producto es menor a 1000 y mayor a 500'
        } else if (Number(good) <= 500) {
            zona = 'El producto es menor a 500'
        }

        pall += Number(good)
        all.innerHTML = '$' + pall

        switch (kind) {
            case '1':
                pdul += Number(good)
                dul.innerHTML = '$' + pall
                break;
            case '2':

                break;
            case '3':
                break;

            default:
                run = false
                break
        }



    }
})
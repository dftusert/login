
const info = [
    { Org_name: '3 ноября 2023 г.', dis: 5, gra: 2, osv: 2, con: 2 },
    { Org_name: '3 ноября 2023 г.', dis: 3, gra: 4, osv: 2, con: 5 },
    { Org_name: '3 ноября 2023 г.', dis: 4, gra: 5, osv: 5, con: 5 },
    { Org_name: '3 ноября 2023 г.', dis: 3, gra: 4, osv: 4, con: 3 },
    { Org_name: '3 ноября 2023 г.', dis: 4, gra: 4, osv: 4, con: 3 },
    { Org_name: '3 ноября 2023 г.', dis: 2, gra: 2, osv: 4, con: 3 },
    

]

Vue.component('m-table', {
    data: function () {
        return {
            info

        }
    },
    template: '<div class="table-responsive-sm"> <table class="table table-borderless"> <thead> <tr style="font-size: 12;"> <th class="fw-light" id="date">Дата</th> <th class="fw-light"></th> <th class="fw-light">Дисциплина</th> <th class="fw-light">График</th> <th class="fw-light">Освоение</th> <th class="fw-light">Контроль</th> </tr> </thead> <tbody v-for="x in info"> <tr style="font-size: 12;"> <td scope="row">{{ x.Org_name }}</td> <td class="gap-1 d-flex" id="price"> <i class="fa-solid fa-up-long w-12 h-12 "> </i> <p class ="average_value"></p> </td> <td> <div class="rating" style="width: 90px;"> <i class="fa-solid fa-square rating-item" id="1"></i> <i class="fa-solid fa-square rating-item" id="2"></i> <i class="fa-solid fa-square rating-item" id="3"></i> <i class="fa-solid fa-square rating-item" id="4"></i> <i class="fa-solid fa-square rating-item" id="5"></i> <span hidden>{{ x.dis }}</span> </div> </td> <td> <div class="rating" style="width: 90px;"> <i class="fa-solid fa-square rating-item" id="1"></i> <i class="fa-solid fa-square rating-item" id="2"></i> <i class="fa-solid fa-square rating-item" id="3"></i> <i class="fa-solid fa-square rating-item" id="4"></i> <i class="fa-solid fa-square rating-item" id="5"></i> <span hidden>{{ x.gra }}</span></div> </td> <td> <div class="rating" style="width: 90px;"> <i class="fa-solid fa-square rating-item" id="1"></i> <i class="fa-solid fa-square rating-item" id="2"></i> <i class="fa-solid fa-square rating-item" id="3"></i> <i class="fa-solid fa-square rating-item" id="4"></i> <i class="fa-solid fa-square rating-item" id="5"> <span hidden>{{ x.osv }}</span></i></div> </td> <td> <div class="rating" style="width: 90px;"> <i class="fa-solid fa-square rating-item" id="1"></i> <i class="fa-solid fa-square rating-item" id="2"></i> <i class="fa-solid fa-square rating-item" id="3"></i> <i class="fa-solid fa-square rating-item" id="4"></i> <i class="fa-solid fa-square rating-item" id="5"> <span hidden>{{ x.con }}</span></i></div> </td> </tr> </tbody> </table> </div>'
})

new Vue({
    el: ".tab-content",
    methods: {
        


    },
    computed: {
        thisday() {
            var today = new Date()
            var dd = String(today.getDate()).padStart(2, '0');
            var mm = String(today.getMonth() + 1).padStart(2, '0');
            var yyyy = today.getFullYear();
            let s = dd + '/' + mm + '/' + yyyy;
            return (s)
        },

    },
})


document.addEventListener('DOMContentLoaded', function () {
    rating()
    av_value()
    arrows()

})

function av_value() {
    const target = document.querySelectorAll('.rating span')
    const target2 = document.querySelectorAll('.average_value')
    let x = 0
    for (var item = 0; item != target.length + 1; item++) {
        if ((item % 4 == 0) && item >= 4) {
            val = (parseInt(target[item - 1].textContent) + parseInt(target[item - 2].textContent) + parseInt(target[item - 3].textContent) + parseInt(target[item - 4].textContent)) / 4
            target2[x].append(val)
            x = x + 1
        }
    }
}

function arrows() {
    const a = document.querySelectorAll('#price')
    a.forEach(function (item) {
        var number = item.querySelector('p').textContent
        var arrow = item.querySelector('i')
        if (number >= 2 && number <= 2.68) {
            arrow.style.color = '#C9000A'
        }
        else if (number >= 2.68 && number <= 3.68) {
            arrow.style.color = '#EC691B'
        }
        else if (number >= 3.68 && number <= 4.68) {
            arrow.style.color = '#FDB600'
        }
        else if (number >= 4.68) {
            arrow.style.color = '#3C8A34'
        }

    });
}

function rating() {
    const element = document.querySelectorAll('.rating')
    element.forEach(function (item) {
        const target = item.querySelectorAll('i')
        target.forEach(function (e) {
            var ocenka = parseInt(item.querySelector('span').textContent)
            var ide = parseInt(e.id)
            if (ocenka >= ide) {
                switch (ocenka) {
                    case 1:
                        e.style.color = '#C9000A'
                        break
                    case 2:
                        e.style.color = '#C9000A'
                        break
                    case 3:
                        e.style.color = '#EC691B'
                        break
                    case 4:
                        e.style.color = '#FDB600'
                        break
                    case 5:
                        e.style.color = '#3C8A34'
                        break

                }
            }
        })
    })

}



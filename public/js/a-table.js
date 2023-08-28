Vue.config.warnHandler = () => []

const info = [
    { Org_name: 'Рейтинг', mark: 0 },
    { Org_name: 'Оценка', mark: 5 },
    { Org_name: 'Дисциплина', mark: 5 },
    { Org_name: 'График', mark: 5 },
    { Org_name: 'Освоение', mark: 5 },
    { Org_name: 'Контроль', mark: 5 },
]

Vue.component('a-table', {
    data: function () {
        return {
            info
        }
    },
    template: '<div class="table-responsive-sm table-a" id="table" style="width: 100%;"> <table class="table table-borderless"> <tbody> <tr v-for="x in info" style="font-size: 12;"> <td scope="row"><p>{{ x.Org_name }}</p></td> <td class="gap-1 d-flex" id="price"> <i class="fa-solid fa-up-long  "> </i> <p class="average_value"></p> <span><p class="name">{{x.mark}}</p></span> </td> <td> <div class="rating" style="width: 90px;"> <i class="fa-solid fa-square rating-item" id="1"></i> <i class="fa-solid fa-square rating-item" id="2"></i> <i class="fa-solid fa-square rating-item" id="3"></i> <i class="fa-solid fa-square rating-item" id="4"></i> <i class="fa-solid fa-square rating-item" id="5"></i> </div> </td> </tr> </tbody> </table> </div>'
})

new Vue({
    el: ".tab-content",
    methods: {
    },
})

    av_val()
    rating()
    arrows()




function arrows() {
    const a = document.querySelectorAll('.table-a #price')
    a.forEach(function (item) {
        var number = item.querySelector('span').textContent
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
    })
}


function av_val() {
    const ite = document.querySelectorAll('.table-a')
    ite.forEach(function (item) {
        var sum = 0
        const ass = item.querySelectorAll('.name')
        ass.forEach(function (item2) {
            sum += parseInt(item2.textContent)
        })
        const target = item.querySelector('.name')
        target.innerHTML = sum / 5

    })
}


function rating() {
    const elmt = document.querySelectorAll('.table-a #price')
    const rtng = document.querySelectorAll('.table-a .rating')
    for (var item = 0; item != elmt.length; item++) {
        rtng[item].querySelectorAll('i').forEach(function (sas) {
            let it = sas
            let val = parseInt(elmt[item].textContent)
            if (val >= it.id) {
                switch (val) {

                    case 1:
                        it.style.color = '#5f0005'
                        break
                    case 2:
                        it.style.color = '#C9000A'
                        break
                    case 3:
                        it.style.color = '#EC691B'
                        break
                    case 4:
                        it.style.color = '#FDB600'
                        break
                    case 5:
                        it.style.color = '#3C8A34'
                        break

                }
            }
        })
    }
}
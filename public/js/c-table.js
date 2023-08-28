Vue.config.warnHandler = () => []
const info3 = [
    { Org_name: 'ВСЕ ПРАКТИКАНТЫ', rar: 'Техникум Красина', dis: 5, gra: 2, osv: 2, con: 2, mark: 4 },
    { Org_name: 'Гай Юлий Цезарь Октавиан', rar: 'Премиум стандарт', dis: 3, gra: 4, osv: 2, con: 5, mark: 2 },
    { Org_name: 'Клемент', rar: 'Премиум стандарт', dis: 4, gra: 5, osv: 5, con: 5, mark: 5 },
    { Org_name: 'Гай Юлий Цезарь Август Германик', rar: 'МДМ Принт', dis: 3, gra: 4, osv: 4, con: 3, mark: 2 },
    { Org_name: 'Тиберий Клавдий Цезарь Август Германик', rar: 'МДМ Принт', dis: 4, gra: 4, osv: 4, con: 3, mark: 3 },
    { Org_name: 'Нерон Клавдий Цезарь Август Германик', rar: 'Пушкинская площадь', dis: 2, gra: 2, osv: 4, con: 3, mark: 5 },

]


Vue.component('c-table', {
    data: function () {
        return {
            info3

        }
    },
    template: '<div class="table-responsive-sm table-c" style="width: 70%;"> <table class="table table-borderless"> <thead style="border-bottom:solid #E0DFDF 1px;"> <tr style="font-size: 12;"> <th class="fw-light">ОРГАНИЗАЦИИ</th> <th class="fw-light"></th> <th class="fw-light">Дисциплина</th> <th class="fw-light">График</th> <th class="fw-light">Освоение</th> <th class="fw-light">Контроль</th> <th class="fw-light">Оценка</th> </tr> </thead> <tbody> <tr v-for="x in info3" style="font-size: 12;"> <td style="border-bottom:solid #E0DFDF 1px;" class="first-td" scope="row"><span style="display:flex; flex-direction:column;"><a href="calendar.php">{{ x.Org_name }}</a></span><span style="display:flex; flex-direction:column;"> {{ x.rar}}</span> </td> <td class="gap-1 d-flex" id="price"> <i class="fa-solid fa-up-long w-12 h-12 "> </i> <p class ="average_value"></p> </td> <td> <div class="rating" style="width: 90px;"> <i class="fa-solid fa-square rating-item" id="1"></i> <i class="fa-solid fa-square rating-item" id="2"></i> <i class="fa-solid fa-square rating-item" id="3"></i> <i class="fa-solid fa-square rating-item" id="4"></i> <i class="fa-solid fa-square rating-item" id="5"></i> <span hidden>{{ x.dis }}</span> </div> </td> <td> <div class="rating" style="width: 90px;"> <i class="fa-solid fa-square rating-item" id="1"></i> <i class="fa-solid fa-square rating-item" id="2"></i> <i class="fa-solid fa-square rating-item" id="3"></i> '+
    '<i class="fa-solid fa-square rating-item" id="4"></i> <i class="fa-solid fa-square rating-item" id="5"></i> <span hidden>{{ x.gra }}</span></div> </td> <td> <div class="rating" style="width: 90px;"> <i class="fa-solid fa-square rating-item" id="1"></i> <i class="fa-solid fa-square rating-item" id="2"></i> <i class="fa-solid fa-square rating-item" id="3"></i> <i class="fa-solid fa-square rating-item" id="4"></i> <i class="fa-solid fa-square rating-item" id="5"> <span hidden>{{ x.osv }}</span></i></div> </td> <td> <div class="rating" style="width: 90px;"> <i class="fa-solid fa-square rating-item" id="1"></i> <i class="fa-solid fa-square rating-item" id="2"></i> <i class="fa-solid fa-square rating-item" id="3"></i> <i class="fa-solid fa-square rating-item" id="4"></i> <i class="fa-solid fa-square rating-item" id="5"> <span hidden>{{ x.con }}</span></i></div> </td> <td> <div class="rating" style="width: 90px;"> <i class="fa-solid fa-square rating-item" id="1"></i> <i class="fa-solid fa-square rating-item" id="2"></i> <i class="fa-solid fa-square rating-item" id="3"></i> <i class="fa-solid fa-square rating-item" id="4"></i> <i class="fa-solid fa-square rating-item" id="5"> <span hidden>{{ x.mark }}</span></i></div> </td> </tr> </tbody> </table> </div>'
})

new Vue({
    el: ".tab-content",
    methods: {
    },
})

rating()
    av_val()
    arrows()



function arrows() {
    const a = document.querySelectorAll('.table-c #price')
    a.forEach(function (item) {
        var number = item.querySelector('.average_value').textContent
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



function av_val() {
    const target = document.querySelectorAll('.table-c .rating span')
        const target2 = document.querySelectorAll('.table-c .average_value')
        let x = 0
        for (var item = 0; item != target.length + 1; item++) {
            if ((item % 5 == 0) && item >= 5) {
                val = (parseInt(target[item - 1].textContent) + parseInt(target[item - 2].textContent) + parseInt(target[item - 3].textContent) + parseInt(target[item - 4].textContent) + parseInt(target[item - 5].textContent)) / 5
                target2[x].innerHTML = val
                x = x + 1
            }
        }
    }



function rating() {
    const element = document.querySelectorAll('.table-c .rating')
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
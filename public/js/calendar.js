
Vue.config.warnHandler = () => []

Vue.component('calendar', {
    template: '<div class="calendar"><div class="calendar-header"><div class="month"><span class="prev">&#10094;</span><span class="month-name"></span><span class="next">&#10095;</span></div><div class="days-header"><span>Пн</span><span>Вт</span><span>Ср</span><span>Чт</span><span>Пт</span><span class="weekend">Сб</span><span class="weekend">Вс</span></div></div><div class="calendar-body"></div></div>'
})
new Vue({
    el: ".tab-content",
    methods: {
    },
})
document.addEventListener('DOMContentLoaded', function () {
    calendar()

})


function calendar() {
    const calendarHeader = document.querySelector('.calendar-header');
    const monthName = document.querySelector('.month-name');
    const calendarBody = document.querySelector('.calendar-body');

    let today = new Date();
    let currentMonth = today.getMonth();
    let currentYear = today.getFullYear();

    monthName.textContent = getMonthName(currentMonth) + ' ' + currentYear;

    renderCalendar(currentMonth, currentYear);

    calendarHeader.addEventListener('click', (event) => {
        if (event.target.classList.contains('prev')) {
            currentMonth -= 1;
        } else if (event.target.classList.contains('next')) {
            currentMonth += 1;
        }
        if (currentMonth < 0) {
            currentMonth = 11;
            currentYear -= 1;
        } else if (currentMonth > 11) {
            currentMonth = 0;
            currentYear += 1;
        }
        monthName.textContent = getMonthName(currentMonth) + ' ' + currentYear;
        renderCalendar(currentMonth, currentYear);
    });

    function renderCalendar(month, year) {
        const firstDay = new Date(year, month, 1);
        const lastDay = new Date(year, month + 1, 0);
        const daysInMonth = lastDay.getDate();
        const startDay = firstDay.getDay();

        calendarBody.innerHTML = '';

        for (let i = -startDay + 2; i <= daysInMonth; i++) {
            const day = document.createElement('a');
            day.href = 'user-control.php'
            day.textContent = i > 0 ? i : '';
            calendarBody.appendChild(day);

            if (i === today.getDate() && month === today.getMonth() && year === today.getFullYear()) {
                day.classList.add('today');
            }

            if (i <= 0 || i > daysInMonth) {
                day.classList.add('other-month');
                day.href = ''
            }
        }
    }

    function getMonthName(month) {
        const months = ['Январь', 'Февраль', 'Март', 'Апрель', 'Май', 'Июнь', 'Июль', 'Август', 'Сентябрь', 'Октябрь', 'Ноябрь', 'Декабрь'];
        return months[month];
    }
}


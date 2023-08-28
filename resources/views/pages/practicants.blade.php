<html lang="en">

<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>Bootstrap</title>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-9ndCyUaIbzAi2FUVXJi0CjmCapSmO7SnpJef0486qhLnuZ2cdeRhO02iuK6FUUVM" crossorigin="anonymous">
    <link rel="stylesheet" href="{{ asset('css/header.css') }}">
    <link rel="stylesheet" href="{{ asset('css/calendar.css') }}">

</head>

<body>
    <!-- Шапка сайта -->
    <?require "../elements/header.php" ?>
    <!-- Выбор старницы -->
    <div class="tab-content" id="nav-tabContent">
        <!-- контроль, основная часть в папке control_calendar.php -->
        <div class="tab-pane fade show active" id="nav-home" role="tabpanel" aria-labelledby="nav-home-tab" tabindex="0">

            <div class="d-flex content">
                <div class="collaps_name">
                    <nav aria-label="breadcrumb">
                        <ol class="breadcrumb">
                            <li class="breadcrumb-item active" aria-current="page"><a href="users.php">Студенты</a></li>
                            <li class="breadcrumb-item active" aria-current="page">Календарь</li>
                        </ol>
                    </nav>
                    <div class="row">
                        <h1 class="fio">Иван Иванов Иванович</h1>
                    </div>
                    <div class="d-flex flex-row">
                        <p id="grupp">Группа:</p>
                        <p id="p-export">1и-11-22;</p>
                    </div>
                    <div class="d-flex flex-row">
                        <p id="grupp">Организация:</p>
                        <p id="p-export">ЧВК-САС;</p>
                    </div>
                    <div class="d-flex flex-row">
                        <p id="grupp">От организации:</p>
                        <p id="p-export">Генадьев;</p>
                    </div>
                    <div class="d-flex flex-row">
                        <p id="grupp">От техникума:</p>
                        <p id="p-export">Олежа;</p>
                    </div>
                    <div class="d-flex flex-row">
                        <p id="grupp">Начало практики:</p>
                        <p id="p-export">01:02:21;</p>
                    </div>
                    <div class="d-flex flex-row">
                        <p id="grupp">Окончание практики:</p>
                        <p id="p-export">01:09:21;</p>
                    </div>
                    <!-- рейтинг -->
                    <a-table></a-table>
                </div>
                <div class="collaps">
                    <div class="row">
                        <h1 class="fio-sm">Иван Иванов Иванович</h1>
                    </div>
                    <!-- календарь сдесь мы обрашаемстя из файла js Vue.component('calendar'...-->
                    <calendar-b></calendar-b>

                </div>
            </div>

        </div>

        <div class="tab-pane fade" id="nav-profile" role="tabpanel" aria-labelledby="nav-profile-tab" tabindex="0">Программы</div>
        <div class="tab-pane fade" id="nav-contact" role="tabpanel" aria-labelledby="nav-contact-tab" tabindex="0">Сообщения</div>
    </div>
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/js/bootstrap.bundle.min.js" integrity="sha384-geWF76RCwLtnZ8qwWowPQNguL3RmwHVBC9FhGdlKrxdiJJigb/j/68SIy3Te4Bkz" crossorigin="anonymous"></script>
    <script src="https://cdn.jsdelivr.net/npm/vue@2.7.8/dist/vue.js"></script>
    <script src="https://kit.fontawesome.com/88f6b82310.js" crossorigin="anonymous"></script>
    <!-- Календарь -->
    <script src="{{ asset('js/calendar-org.js') }}"></script>
    <script src="{{ asset('js/a-table.js') }}"></script>

</body>

</html>

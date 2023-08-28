<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">

        <title>Laravel</title>

        <!-- Fonts -->
        <link rel="preconnect" href="https://fonts.bunny.net">
        <link href="https://fonts.bunny.net/css?family=figtree:400,600&display=swap" rel="stylesheet" />

            <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-9ndCyUaIbzAi2FUVXJi0CjmCapSmO7SnpJef0486qhLnuZ2cdeRhO02iuK6FUUVM" crossorigin="anonymous">

            <link rel="stylesheet" href="{{ asset('css/student-start.css') }}">
            <link rel="stylesheet" href="{{ asset('css/header.css') }}">
        <!-- Styles -->

    </head>
    <body class="antialiased">
<body>
  <nav class="navbar navbar-expand-lg">
    <div class="container-fluid nav-container">
      <div class="navbar-brand" href="#">
        <p class="name-first">УМНАЯ ПРАКТИКА</p>
        <img src="{{ asset('img/Group.svg') }}" height="30" width="30" alt="">
        <p class="name-second">ТЕХНИКУМ КРАСИНА</p>
      </div>
      <span class="username">ФИО пользователя</span>
    </div>
  </nav>
  <nav>
    <div class="tab-content" id="nav-tabContent">
      <div class="tab-pane fade show active" id="nav-home" role="tabpanel" aria-labelledby="nav-home-tab" tabindex="0">


        <div class="content">
          <div class="student-block">
          <div class="collaps">
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
          </div>

          <div class="collaps">
                    <messages></messages>
          </div>

          </div>

          <div class="collaps-rtng">

            <m-table></m-table>

          </div>

        </div>

      </div>


      <div class="tab-pane fade" id="nav-profile" role="tabpanel" aria-labelledby="nav-profile-tab" tabindex="0">Программы</div>
      <div class="tab-pane fade" id="nav-contact" role="tabpanel" aria-labelledby="nav-contact-tab" tabindex="0">Сообщения</div>
    </div>
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/js/bootstrap.bundle.min.js" integrity="sha384-geWF76RCwLtnZ8qwWowPQNguL3RmwHVBC9FhGdlKrxdiJJigb/j/68SIy3Te4Bkz" crossorigin="anonymous"></script>
    <script src="https://cdn.jsdelivr.net/npm/vue@2.7.8/dist/vue.js"></script>
    <script src="https://kit.fontawesome.com/88f6b82310.js" crossorigin="anonymous"></script>
    <script src="{{ asset('js/messages.js') }}"></script>
    <script src="{{ asset('js/main-student_start.js') }}"></script>
    </body>
</html>

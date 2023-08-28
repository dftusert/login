<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">

        <title>Laravel</title>

        <!-- Fonts -->
        <link rel="preconnect" href="https://fonts.bunny.net">
        <link href="https://fonts.bunny.net/css?family=figtree:400,600&display=swap" rel="stylesheet" />

        <!-- Styles -->

    </head>
    <body class="antialiased">
           <!-- Шапка сайта -->
<?require "../elements/header.php" ?>
<!-- Выбор старницы -->
    <div class="tab-content" id="nav-tabContent">
      <!-- контроль -->
      <div class="tab-pane fade show active" id="nav-home" role="tabpanel" aria-labelledby="nav-home-tab" tabindex="0">
      <nav aria-label="breadcrumb">
  <ol class="breadcrumb">
  <li class="breadcrumb-item active" aria-current="page">Студенты</li>
  </ol>
  </nav>
        <div class="main">
          <!-- рейтинг зайди в js там vue компнент -->
          <c-table style="font-family: 'Helvetica';font-style: normal;font-weight: 300;"></c-table>
           <!-- блок сообщений -->
          <messages></messages>
        </div>
      </div>
      <div class="tab-pane fade" id="nav-profile" role="tabpanel" aria-labelledby="nav-profile-tab" tabindex="0">Программы</div>
      <div class="tab-pane fade" id="nav-contact" role="tabpanel" aria-labelledby="nav-contact-tab" tabindex="0">сообщений</div>
    </div>

  <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/js/bootstrap.bundle.min.js"
    integrity="sha384-geWF76RCwLtnZ8qwWowPQNguL3RmwHVBC9FhGdlKrxdiJJigb/j/68SIy3Te4Bkz"
    crossorigin="anonymous"></script>
  <script src="https://cdn.jsdelivr.net/npm/vue@2.7.8/dist/vue.js"></script>
  <script src="https://kit.fontawesome.com/88f6b82310.js" crossorigin="anonymous"></script>
  <script src="{{ asset('js/c-table-org.js') }}"></script>
  <script src="{{ asset('js/messages.js') }}"></script>
    </body>
</html>

<!doctype html>
<html lang="en">

<head>
    <title>Title</title>
    <!-- Required meta tags -->
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
    <!-- Bootstrap CSS v5.2.1 -->
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.1/dist/css/bootstrap.min.css" rel="stylesheet"
        integrity="sha384-iYQeCzEYFbKjA/T2uDLTpkwGzCiq6soy8tYaI1GyVh/UjpbCx/TYkiZhlZB6+fzT" crossorigin="anonymous">
    <link rel="stylesheet" href="authorization.css">

</head>

<body style=" background-image: url(/img/fon.jpg);">

    <main>
        <section class="vh-100 gradient-custom">
            <div class="container py-5 h-100">
                <div class="row d-flex justify-content-center align-items-center h-100">
                    <div class="sm-col-10 col-md-9 col-lg-7 col-xl-6">
                        <div class="card text-white"
                            style="border-radius: 1rem;background-color: #5C5C5C; color: white;">
                            <div class="card-body p-5 text-center main">

                                <div class="mb-md-1 mt-md-1 pb-1 min__block">
                                    <div class="d-flex title">
                                        <h6 class="fw-bold mb-2 text-uppercase"> УМНАЯ ПРАКТИКА </h6>
                                        <!--<img src="Group.svg" height="30" width="30" alt="">-->
                                        <h6 class="fw-bold mb-2 text-uppercase">ТЕХНИКУМ КРАСИНА</h6>
                                    </div>

                                    <form method="POST" action="{{ route('login') }}">
                                        @csrf
                                        <div class="form-outline form-white mb-4">
                                            <input type="text" id="typeEmailX" class="form-control form-control-lg"
                                                placeholder="Введите Email" name="login" />

                                        </div>

                                        <div class="form-outline form-white mb-4">
                                            <input type="password" id="typePasswordX"
                                                class="form-control form-control-lg" placeholder="Введите пароль"
                                                name="password" />

                                        </div>


                                        <button class="btn btn-outline-light btn-lg px-5" type="submit">Войти</button>
                                    </form>
                                    @if ($errors->any())
                                        <h4>{{ $errors->first() }}</h4>
                                    @endif
                                </div>

                                <div>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </main>
    <footer>
        <!-- place footer here -->
    </footer>
    <!-- Bootstrap JavaScript Libraries -->
    <script src="https://cdn.jsdelivr.net/npm/@popperjs/core@2.11.6/dist/umd/popper.min.js"
        integrity="sha384-oBqDVmMz9ATKxIep9tiCxS/Z9fNfEXiDAYTujMAeBAsjFuCZSmKbSSUnQlmh/jp3" crossorigin="anonymous">
    </script>

    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.1/dist/js/bootstrap.min.js"
        integrity="sha384-7VPbUDkoPSGFnVtYi0QogXtr74QeVeeIs99Qfg5YCF+TidwNdjvaKZX19NZ/e6oz" crossorigin="anonymous">
    </script>
</body>

</html>

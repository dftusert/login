## База данных
Mysql/MariaDB

Задать переменные в .env\
Пример

```
DB_CONNECTION=mysql
DB_HOST=127.0.0.1
DB_PORT=3306
DB_DATABASE=laravel
DB_USERNAME=laravel
DB_PASSWORD=laravel
```

Выполнить миграции (database/migrations/) и заполнение тестовыми данными (database/DatabaseSeeder)
```
php artisan migrate:fresh --seed --seeder=DatabaseSeeder
```

## Роли и права
Пакет Spatie - https://spatie.be/docs/laravel-permission/v5/introduction

Контроллер - Auth/LoginController

Разделение в рамках страницы по ролям (view - welcome)
```
@hasrole("Organization")
@endhasrole
```

Ограничение доступа к страницам (routes - web)
```
Route::group(['middleware' => 'role:Organization'], function () {
    Route::get('/organization', function(){
        return view('pages.organization');
    });
    Route::get('/organization/practicants', function(){
        return view('pages.practicants');
    });
});
```

### Стартовая страница, /
![Preview image](/README_IMG/welcome.png)

### Страница входа, /login
![Preview image](/README_IMG/login.png)

### Страница студента, /student
![Preview image](/README_IMG/student.png)

### Ограничение доступа студента к /organization
![Preview image](/README_IMG/roles.png)

### Стартовая страница после входа студента, /
![Preview image](/README_IMG/crlogout.png)

### Организация, /organization
![Preview image](/README_IMG/orgv1.png)

### Организация, /organization/practicants
![Preview image](/README_IMG/orgv2.png)


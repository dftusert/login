<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;

use Spatie\Permission\Models\Permission;
use Spatie\Permission\Models\Role;
use Illuminate\Support\Facades\Hash;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     */
    public function run(): void
    {
        $userStu = \App\Models\User::create([
             'login' => 'Stud',
             'password' => Hash::make('Stud'),
        ]);

        $userOrg = \App\Models\User::create([
            'login' => 'Org',
            'password' => Hash::make('Org'),
       ]);

        $adminRole = Role::create(['name' => 'Admin']);
        $orgRole = Role::create(['name' => 'Organization']);
        $studentRole = Role::create(['name' => 'Student']);

        $userStu->assignRole($studentRole);
        $userOrg->assignRole($orgRole);

        /*
        \App\Models\User::factory(1)->create();
        Permission::create(['name' => '']);
        $role->givePermissionTo([]);
        */
    }
}

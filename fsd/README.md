

Installing required frameworks:
```
$ pip install django==2.2
$ pip install djangorestframework
```

Preparing packages:
```
$ django-admin startproject movierater
$ cd movierater
$ django-admin startapp api
$ python manage.py runserver
$ 
```

Migrate
```
$ python manage.py makemigrations
$ python manage.py migrate
```

Create superuser:
```
$ python manage.py createsupersuser
$ 
```

Credentials
```
Username: admin
Email: shahjalal.tipu@gmail.com
Password: admin1234 
```
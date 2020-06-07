
## Django

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

## ReactJS

```
$ create-react-app movie-rater-web
```


CORS https://github.com/adamchainz/django-cors-headers
```
$ pip install django-cors-headers
$ 
```

INSTALLED_APPS = [
    ...
    'corsheaders',
    ...
]

MIDDLEWARE = [  # Or MIDDLEWARE_CLASSES on Django < 1.10
    ...
    'corsheaders.middleware.CorsMiddleware',
    'django.middleware.common.CommonMiddleware',
    ...
]

CORS_ORIGIN_WHITELIST = [
    "https://example.com",
    "https://sub.example.com",
    "http://localhost:8080",
    "http://127.0.0.1:9000"
]
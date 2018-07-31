# Temperature-Sensor-Dashboard
This is a web application which displays the current, lowest and highest temperature fetched from a Raspberry Pi.

## This project was developed using the following:
-	Raspberry Pi 2 Model B
-	DS18B20 thermostat

## How to run the project:

#### Thermostat:
-	Make sure you have correctly connected and configured your thermostat.
-	Take note of the path where your thermostat writes the temperature data to.

#### Backend:
-	Make sure you have installed the Django Framework on your raspberry pi.
-	Create a new folder.
-	In the folder create a new Django project.
-	Then install the Django REST Framework and create a new project called ‘api’.
-	Once you have completed the above steps your new folder should have two sub folders.
-	Add the included Django Framework files into your new Django project.
-	Then add the included Django REST Framework files into your new Django REST project.
-	Add the following to the installed_apps list in settings.py file:
    -	‘rest_framework’,
    -	‘api’,

#### Frontend:
-	Once your Django project is setup and running, copy the link of your API and paste it into the fetch function in the main.js.
-	The project should now be working.


from django.shortcuts import render
from django.http import HttpResponse
import re
import json

temperature_list = []
def display():
	while True:
		# Place the file path which your thermometer writes data to.
		open_file = open('PLACE FILE PATH HERE', 'r')
		read_file = open_file.read()
		open_file.close()
		pattern = r't=\d\d\d\d\d'
		search = re.findall(pattern, read_file)
		for i in search:
			unformated_temperature = i
			final_temperature = float(unformated_temperature[2:])/1000
			highest = final_temperature
			temperature_list.append(final_temperature)
			lowest_temp = min(temperature_list)
			highest_temp = max(temperature_list)
			temps = {"Current_Temperature" : final_temperature, "Lowest_Temperature" : lowest_temp, "Highest_Temperature" : highest_temp}
			with open('temperatures.json', 'w') as file_two:
				json.dump(temps, file_two)
			file_two.close()
			file = open('temperatures.json', 'r')
			temp = file.read()
			return temp
			file.close()
def index(request):
	response = HttpResponse(display())
	response["Access-Control-Allow-Origin"] ="*"
	response["Access-Control-Allow-Methods"] = "GET"
	response["Access-Control-Max-Age"] = "3000"
	return response

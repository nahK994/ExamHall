# ExamHall

Follow these instructions to run this project locally--
1. Download docker and docker-compose
2. Go project repo and run this command "docker-compose -f docker-compose.yml up -d"


Follow these instructions to create superuser for local env--
1. Go to backend docker container shell using this command "docker exec -it backend bash"
2. Create superuser by this command "python3 manage.py createsuperuser"
3. Give all necessary information and quit shell by "exit"


In local env--
Frontend is available on-- http://localhost:4200<br/>
API documentation URL: http://localhost:8000/api/docs


In production env--
Frontend is available on-- https://nahk994.github.io/ExamHall<br/>
API documentation URL: https://examhall.pythonanywhere.com/api/docs

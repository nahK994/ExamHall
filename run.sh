echo "1) Start backend"
echo "2) Start frontend"
echo "3) Restart database"
echo "4) Kill frontend and backend"
echo "5) Run everything"

read -p "Type: " cmd
if [[ $cmd == 1 ]]; then
    cd Backend/
    source env/bin/activate
    python3 manage.py migrate
    python3 manage.py loaddata fixtures/*
    python3 manage.py runserver 0.0.0.0:8000
    deactivate
elif [[ $cmd == 2 ]]; then
    ng serve
elif [[ $cmd == 3 ]]; then
    docker compose -f docker-compose.db.yml down
    docker compose -f docker-compose.db.yml up -d
    cd Backend/
    source env/bin/activate
    python3 manage.py migrate
    python3 manage.py loaddata fixtures/*
    deactivate
elif [[ $cmd == 4 ]]; then
    sudo kill -9 $(sudo lsof -t -i:8000)
    sudo kill -9 $(sudo lsof -t -i:4200)
elif [[ $cmd == 5 ]]; then
    docker compose -f docker-compose.yml up -d
fi

echo "1) Start backend"
echo "2) Start frontend"
echo "3) Restart backend environment"
echo "4) Restart database"
echo "5) Load fixtures"
echo "6) Kill frontend and backend"
echo "7) Run everything"

read -p "Type: " cmd
if [[ $cmd == 1 ]]; then
    cd Backend/
    source env/bin/activate
    python3 manage.py migrate
    python3 manage.py loaddata fixtures/*
    python3 manage.py runserver 0.0.0.0:8000
    deactivate
elif [[ $cmd == 2 ]]; then
    cd Frontend/
    nvm use 20
    ng serve
elif [[ $cmd == 3 ]]; then
    cd Backend/
    sudo rm -r env/
    virtualenv env
    source env/bin/activate
    pip3 install -r requirements.txt
    deactivate
    cd ..
elif [[ $cmd == 4 ]]; then
    docker compose -f docker-compose.db.yml down
    docker compose -f docker-compose.db.yml up -d
elif [[ $cmd == 5 ]]; then
    cd Backend/
    source env/bin/activate
    python3 manage.py migrate
    python3 manage.py loaddata fixtures/*
    deactivate
elif [[ $cmd == 6 ]]; then
    sudo kill -9 $(sudo lsof -t -i:8000)
    sudo kill -9 $(sudo lsof -t -i:4200)
elif [[ $cmd == 7 ]]; then
    docker compose -f docker-compose.yml up -d
fi

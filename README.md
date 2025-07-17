Deploying Website kunstnagelstudionail.online on Ubuntu VPS

Preparation

Buy Ubuntu VPS (20.04+)
Register domain kunstnagelstudionail.online
Point domain DNS to VPS IP
Connect to VPS

Use Bitvise or SSH client to access VPS
1. Install required packages

sudo apt update -y && sudo apt upgrade -y
sudo apt install python3-pip python3-dev libpq-dev postgresql postgresql-contrib nginx curl file
2. Setup PostgreSQL

sudo -u postgres psql
CREATE DATABASE kunstnagelstudionail;
CREATE USER postgres WITH PASSWORD 'admin';
ALTER ROLE postgres SET client_encoding TO 'utf8';
ALTER ROLE postgres SET default_transaction_isolation TO 'read committed';
ALTER ROLE postgres SET timezone TO 'UTC';
GRANT ALL PRIVILEGES ON DATABASE kunstnagelstudionail TO postgres;
\q
3. Create Python virtual environment

sudo -H pip3 install --upgrade pip virtualenv
mkdir /home/sleekproject && cd /home/sleekproject
virtualenv sleekenv
source sleekenv/bin/activate
pip install django gunicorn psycopg2-binary pillow
4. Setup Django project

Upload or clone your Django project source code into /home/sleekproject/sleeksoft/ (or your chosen folder).
Inside the project folder, run:
python3 manage.py makemigrations && python3 manage.py migrate
python3 manage.py createsuperuser
python3 manage.py collectstatic
sudo ufw allow 8000
python3 manage.py runserver 0.0.0.0:8000
# Test via http://your_domain:8000
gunicorn --bind 0.0.0.0:8000 sleeksoft.wsgi
deactivate
5. Configure Gunicorn systemd service and socket

Create /etc/systemd/system/gunicorn.socket and /etc/systemd/system/gunicorn.service with appropriate configs, then:

sudo systemctl start gunicorn.socket
sudo systemctl enable gunicorn.socket
sudo systemctl status gunicorn.socket
curl --unix-socket /run/gunicorn.sock localhost
sudo systemctl status gunicorn
If needed:

sudo systemctl daemon-reload
sudo systemctl restart gunicorn
6. Configure Nginx

Create /etc/nginx/sites-available/sleeksoft with:

server {
    server_name kunstnagelstudionail.online;

    location = /favicon.ico { access_log off; log_not_found off; }
    location /static/ {
        alias /home/sleekproject/sleeksoft/static/;
    }

    location / {
        include proxy_params;
        proxy_pass http://unix:/run/gunicorn.sock;
    }
}
Enable site and restart Nginx:

sudo ln -s /etc/nginx/sites-available/sleeksoft /etc/nginx/sites-enabled
sudo nginx -t
sudo systemctl restart nginx
sudo ufw delete allow 8000
sudo ufw allow 'Nginx Full'
7. Install SSL with Certbot

sudo apt install snapd
sudo snap install core; sudo snap refresh core
sudo snap install --classic certbot
sudo ln -s /snap/bin/certbot /usr/bin/certbot
sudo certbot --nginx -d kunstnagelstudionail.online

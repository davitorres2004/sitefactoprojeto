from flask import Flask
from views import app_views

app = Flask(__name__)
app.register_blueprint(app_views)

# Cache longuíssimo para arquivos estáticos (em segundos)
app.config['SEND_FILE_MAX_AGE_DEFAULT'] = 31536000  # 1 ano

if __name__ == "__main__":
    # Em produção rode com gunicorn/nginx; aqui apenas para desenvolvimento local
    app.run(host='0.0.0.0', port=5000, debug=False)

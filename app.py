# app.py
from flask import Flask
from views import app_views  # ⬅ coloque exatamente o nome do arquivo correto

app = Flask(__name__)
app.config['TEMPLATES_AUTO_RELOAD'] = True

app.register_blueprint(app_views)

app.config['SEND_FILE_MAX_AGE_DEFAULT'] = 31536000

if __name__ == "__main__":
    app.run(host='0.0.0.0', port=5000, debug=True)  # debug ativo para ver erros

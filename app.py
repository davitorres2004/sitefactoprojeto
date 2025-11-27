from flask import Flask
from views import app_views

app = Flask(__name__)
app.register_blueprint(app_views)

if __name__ == "__main__":
    app.run(debug=True)

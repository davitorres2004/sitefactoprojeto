from flask import Blueprint, render_template

app_views = Blueprint('app_views', __name__)

# === ROTAS PRINCIPAIS DO SITE ===

@app_views.route("/")
@app_views.route("/home")
def home():
    return render_template("index.html")

@app_views.route("/introducao")
def introducao():
    return render_template("Introdução.html")

@app_views.route("/analisesolicitacao")
def analisesolicitacao():
    return render_template("analisesolicitacao.html")

@app_views.route("/documentos")
def documentos():
    return render_template("documentos.html")

@app_views.route("/emissaocontrato")
def emissaocontrato():
    return render_template("emissaocontrato.html")

@app_views.route("/normativabolsas")
def normativabolsas():
    return render_template("normativabolsas.html")

@app_views.route("/pedidos")
def pedidos():
    return render_template("pedidos.html")

@app_views.route("/portaldocoordenador")
def portaldocoordenador():
    return render_template("portaldocoordenador.html")

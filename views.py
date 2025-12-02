from flask import Blueprint, render_template, session, request, redirect, url_for
from auth import login_required

app_views = Blueprint('app_views', __name__)

# === LOGIN ===
@app_views.route("/login", methods=["GET", "POST"])
def login():
    if request.method == "POST":
        usuario = request.form.get("usuario")
        senha = request.form.get("senha")

        # LOGIN SIMPLES PARA TESTE
        if usuario == "admin" and senha == "123":
            session["usuario"] = usuario
            return redirect(url_for("app_views.home"))

        # ❗ SE DER ERRO → renderiza A MESMA PÁGINA com a mensagem
        return render_template("login.html", error="Usuário ou senha incorretos. Tente novamente.")

    return render_template("login.html")



# === LOGOUT ===
@app_views.route("/logout")
def logout():
    session.pop("usuario", None)
    return redirect(url_for("app_views.login"))


# === ROTAS PRINCIPAIS DO SITE ===

@app_views.route("/")

@app_views.route("/home")
@login_required
def home():
    return render_template("index.html")


@app_views.route("/introducao")
@login_required
def introducao():
    return render_template("Introdução.html")


@app_views.route("/analisesolicitacao")
@login_required
def analisesolicitacao():
    return render_template("analisesolicitacao.html")


@app_views.route("/documentos")
@login_required
def documentos():
    return render_template("documentos.html")


@app_views.route("/emissaocontrato")
@login_required
def emissaocontrato():
    return render_template("emissaocontrato.html")


@app_views.route("/normativabolsas")
@login_required
def normativabolsas():
    return render_template("normativabolsas.html")


@app_views.route("/pedidos")
@login_required
def pedidos():
    return render_template("pedidos.html")


@app_views.route("/portaldocoordenador")
@login_required
def portaldocoordenador():
    return render_template("portaldocoordenador.html")


@app_views.route("/pagamentos")
@login_required
def pagamentos():
    return render_template("pagamentos.html")

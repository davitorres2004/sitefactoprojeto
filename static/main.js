// Função para carregar partes externas
function carregarParte(idElemento, caminhoArquivo) {
    const alvo = document.getElementById(idElemento);
    if (!alvo) return; // Se não existir no HTML, não tenta carregar

    fetch(caminhoArquivo)
        .then(response => {
            if (!response.ok) throw new Error(`Erro ao carregar ${caminhoArquivo}`);
            return response.text();
        })
        .then(html => alvo.innerHTML = html)
        .catch(err => console.error(err));
}

// Carregando os componentes apenas se existirem
carregarParte('header', 'static/partes/header.html');
carregarParte('barranav', 'static/partes/barranav.html');
carregarParte('menu', 'static/partes/menu-lateral-principal.html');
carregarParte('ads', 'static/partes/carrossel-documentos.html');
carregarParte('cards-videos', 'static/partes/cards-videos.html');
carregarParte('rodape', 'static/partes/rodape.html');


// ============================================================
// 🔥 Modal de Vídeos (executa SOMENTE se o modal existir)
// ============================================================
document.addEventListener("DOMContentLoaded", () => {
    const modal = document.getElementById("videoModal");
    if (!modal) return; // Só roda se tiver modal na página

    modal.addEventListener("show.bs.modal", event => {
        const modalVideoFrame = document.getElementById("modalVideoFrame");
        const videoSrc = event.relatedTarget?.getAttribute("data-video-src");
        if (videoSrc && modalVideoFrame) modalVideoFrame.src = videoSrc;
    });

    modal.addEventListener("hide.bs.modal", () => {
        const modalVideoFrame = document.getElementById("modalVideoFrame");
        if (modalVideoFrame) modalVideoFrame.src = "";
    });
});


// ============================================================
// 🔥 Menu Mobile — só ativa se os elementos existirem
// ============================================================
const toggler = document.querySelector(".navbar-toggler");
const menuNav = document.querySelector(".menu-nav");
const overlay = document.querySelector(".menu-overlay");

function toggleMenu() {
    const active = menuNav.classList.toggle("active");
    overlay.classList.toggle("active", active);
    document.body.style.overflow = active ? "hidden" : "";
}

if (toggler && menuNav && overlay) {
    toggler.addEventListener("click", toggleMenu);
    overlay.addEventListener("click", toggleMenu);
}

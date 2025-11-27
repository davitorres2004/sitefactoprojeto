// Função para carregar partes externas
function carregarParte(idElemento, caminhoArquivo) {
    fetch(caminhoArquivo)
        .then(response => {
            if (!response.ok) throw new Error(`Erro ao carregar ${caminhoArquivo}`);
            return response.text();
        })
        .then(html => document.getElementById(idElemento).innerHTML = html)
        .catch(err => console.error(err));
}

// Carregando os arquivos HTML separados
carregarParte('header', 'static/partes/header.html');
carregarParte('barranav', 'static/partes/barranav.html');
carregarParte('menu', 'static/partes/menu-lateral-principal.html');
carregarParte('ads', 'static/partes/carrossel-documentos.html');
carregarParte('cards-videos', 'static/partes/cards-videos.html');
carregarParte('rodape', 'static/partes/rodape.html');
// Pode carregar também aba-avisos se quiser modularizar


/* ==========================================================
   🔥 ROLAGEM SUAVE PROFISSIONAL COM LENIS (substituição direta)
   Basta garantir que os imports abaixo estejam no <head> ou antes deste script:
   
   <link rel="stylesheet" href="https://unpkg.com/lenis@1.1.18/dist/lenis.css">
   <script defer src="https://unpkg.com/lenis@1.1.18/dist/lenis.min.js"></script>
   ==========================================================*/

document.addEventListener('DOMContentLoaded', function () {
    const lenis = new Lenis({
        smooth: true,
        lerp: 0.13,        // velocidade aumentada (padrão ~0.08)
        wheelMultiplier: 1.6, // scroll mais rápido ao rodar mouse
    });

    function raf(time) {
        lenis.raf(time);
        requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);
});

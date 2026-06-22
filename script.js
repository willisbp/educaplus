/* ==========================
   MENU RESPONSIVO
========================== */

const menuToggle = document.getElementById("menu-toggle");
const menu = document.getElementById("main-menu");

if (menuToggle && menu) {

    menuToggle.addEventListener("click", () => {

        const expanded =
            menuToggle.getAttribute("aria-expanded") === "true";

        menuToggle.setAttribute(
            "aria-expanded",
            String(!expanded)
        );

        menu.classList.toggle("active");
    });

    document.addEventListener("click", (e) => {

        if (
            !menu.contains(e.target) &&
            !menuToggle.contains(e.target) &&
            menu.classList.contains("active")
        ) {
            menu.classList.remove("active");

            menuToggle.setAttribute(
                "aria-expanded",
                "false"
            );
        }
    });
}

/* ==========================
   TEMA ESCURO
========================== */

const temaBtn =
document.getElementById("tema-btn");

const temaSalvo =
localStorage.getItem("tema");

if (temaSalvo === "escuro") {
    document.body.classList.add("dark-mode");
}

if (temaBtn) {

    temaBtn.addEventListener("click", () => {

        document.body.classList.toggle(
            "dark-mode"
        );

        if (
            document.body.classList.contains(
                "dark-mode"
            )
        ) {

            localStorage.setItem(
                "tema",
                "escuro"
            );

        } else {

            localStorage.setItem(
                "tema",
                "claro"
            );
        }
    });
}

/* ==========================
   PESQUISA DE LIVROS
========================== */

const pesquisa =
document.getElementById("search");

if (pesquisa) {

    pesquisa.addEventListener("keyup", () => {

        const texto =
        pesquisa.value.toLowerCase();

        const livros =
        document.querySelectorAll(".book-card");

        livros.forEach((livro) => {

            const titulo =
            livro.querySelector(".book-title")
            .textContent
            .toLowerCase();

            const autor =
            livro.querySelector(".book-author")
            .textContent
            .toLowerCase();

            if (
                titulo.includes(texto) ||
                autor.includes(texto)
            ) {

                livro.style.display =
                "block";

            } else {

                livro.style.display =
                "none";
            }
        });
    });
}

function adicionarLivro() {
    const titulo = document.getElementById("titulo").value;
    const autor = document.getElementById("autor").value;

    const grid = document.querySelector(".books-grid");

    grid.innerHTML += `
        <div class="book-card">
            <div class="book-cover">📘</div>
            <div class="book-info">
                <div class="book-title">${titulo}</div>
                <div class="book-author">${autor}</div>
                <span class="book-status available">
                    Disponível
                </span>
            </div>
        </div>
    `;
}

localStorage.setItem("livros", JSON.stringify(listaLivros));
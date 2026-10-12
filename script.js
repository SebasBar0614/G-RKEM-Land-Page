document.addEventListener("DOMContentLoaded", () => {
    const menuGrid = document.getElementById("menuGrid");
    const searchInput = document.getElementById("searchInput");
    const filterBtns = document.querySelectorAll(".filter-btn");

    // Orden de prioridad para mostrar los productos
    const ordenCategorias = {
        "burgers": 1,
        "dogs": 2,
        "fries": 3,
        "drinks": 4
    };

    function renderMenu(items) {
        if (!menuGrid) return;

        if (items.length === 0) {
            menuGrid.innerHTML = `
                <div class="no-results">
                    <p>No encontramos platillos o ingredientes con ese criterio 🙁</p>
                </div>
            `;
            return;
        }

        menuGrid.innerHTML = items.map(item => `
            <article class="product-card">
                <img src="${item.imagen}" alt="${item.nombre}" class="product-img" loading="lazy">
                <div class="product-info">
                    <div class="product-header">
                        <h3 class="product-title">${item.nombre}</h3>
                        <span class="product-price">$${item.precio.toLocaleString('es-CO')}</span>
                    </div>
                    <p class="product-desc">${item.descripcion}</p>
                </div>
            </article>
        `).join("");
    }

    function filterAndRender(category, searchTerm) {
        let filtered = menuData;

        // 1. Filtrar por categoría
        if (category !== "todos") {
            filtered = filtered.filter(item => item.categoria === category);
        }

        // 2. Filtrar por buscador
        if (searchTerm !== "") {
            filtered = filtered.filter(item => 
                item.nombre.toLowerCase().includes(searchTerm) || 
                item.descripcion.toLowerCase().includes(searchTerm)
            );
        }

        // 3. Ordenar automáticamente por categorías
        filtered.sort((a, b) => {
            const ordenA = ordenCategorias[a.categoria] || 99;
            const ordenB = ordenCategorias[b.categoria] || 99;
            return ordenA - ordenB;
        });

        renderMenu(filtered);
    }

    // Carga inicial
    if (typeof menuData !== 'undefined') {
        filterAndRender("todos", "");
    }

    // Eventos de los botones de categoría
    filterBtns.forEach(btn => {
        btn.addEventListener("click", () => {
            filterBtns.forEach(b => b.classList.remove("active"));
            btn.classList.add("active");

            const category = btn.dataset.category;
            const searchTerm = searchInput ? searchInput.value.toLowerCase().trim() : "";

            filterAndRender(category, searchTerm);
        });
    });

    // Evento del buscador
    if (searchInput) {
        searchInput.addEventListener("input", (e) => {
            const activeBtn = document.querySelector(".filter-btn.active");
            const activeCategory = activeBtn ? activeBtn.dataset.category : "todos";
            const searchTerm = e.target.value.toLowerCase().trim();

            filterAndRender(activeCategory, searchTerm);
        });
    }
});
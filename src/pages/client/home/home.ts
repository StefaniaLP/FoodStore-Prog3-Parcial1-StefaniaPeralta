import { PRODUCTS, getCategories } from "../../../data/data";
import type { IProduct } from "../../../types/product";
import { addToCart } from "../../../utils/cart";

const renderCategories = (): void => {

    const listaCategorias =
        document.querySelector<HTMLUListElement>("#lista-categorias");

    if (!listaCategorias) {
        return;
    }

    const categorias = getCategories();

    listaCategorias.innerHTML = "";

    const liTodos = document.createElement("li");

    const enlaceTodos = document.createElement("a");

    enlaceTodos.textContent = "Todos";
    enlaceTodos.href = "#";

    enlaceTodos.addEventListener("click", (event) => {

        event.preventDefault();
        //devuelve catagolo completo
        renderProducts(PRODUCTS);
    });

    liTodos.append(enlaceTodos);

    listaCategorias.append(liTodos);


    categorias.forEach((categoria) => {

        const li = document.createElement("li");

        const enlace = document.createElement("a");

        enlace.textContent = categoria.nombre;
        enlace.href = "#";

        enlace.addEventListener("click", (event) => {
            event.preventDefault();

            const productosFiltrados = PRODUCTS.filter((producto) =>
                producto.categorias.some(
                    (cat) => cat.id === categoria.id
                )
            );

            renderProducts(productosFiltrados);
        });

        li.append(enlace);

        listaCategorias.append(li);
    });
};

const renderProducts = (productos: IProduct[]): void => {

    const contenedorProductos =
        document.querySelector<HTMLElement>("#contenedor-productos");

    if (!contenedorProductos) {
        return;
    }

    contenedorProductos.innerHTML = "";

    if (productos.length === 0) {
        contenedorProductos.innerHTML =
            "<p>No se encontraron productos.</p>";

        return;
    }

    productos.forEach((producto) => {

        const article = document.createElement("article");

        article.classList.add("product-card");

        article.innerHTML = `
            <img
                src="/assets/${producto.imagen}"
                alt="${producto.nombre}"
            >

            <h3>${producto.nombre}</h3>

            <p>${producto.descripcion}</p>

            <p>
                Precio:
                <strong>$${producto.precio}</strong>
            </p>
        `;

        const boton = document.createElement("button");

        boton.textContent = "Agregar";

        boton.addEventListener("click", () => {

            addToCart(producto);

            alert(
                `${producto.nombre} fue agregado al carrito`
            );
        });

        article.append(boton);

        contenedorProductos.append(article);
    });
};

// FORM BUSQUEDA

const inputBusqueda =
    document.querySelector<HTMLInputElement>("#input-busqueda");

if (inputBusqueda) {

    inputBusqueda.addEventListener("input", () => {

        const textoBusqueda =
            inputBusqueda.value.trim().toLowerCase();

        if (textoBusqueda === "") {
            renderProducts(PRODUCTS);
            return;
        }

        const productosFiltrados = PRODUCTS.filter((producto) =>
            producto.nombre
                .toLowerCase()
                .includes(textoBusqueda)
        );

        renderProducts(productosFiltrados);
    });
}

renderCategories();
renderProducts(PRODUCTS);


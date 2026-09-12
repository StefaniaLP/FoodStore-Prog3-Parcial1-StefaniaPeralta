import '../../style.css';

import { categorias, productos} from '../../data/productos';

const cargarCategorias = (): void => {

    const listaCategorias = document.querySelector<HTMLUListElement>('#lista-categorias');
    if (!listaCategorias) {
        return;
    }


    categorias.forEach((categoria) => {

        const li = document.createElement("li");

        const enlace = document.createElement("a");

        enlace.textContent = categoria;
        enlace.href = "#";

        li.append(enlace);

        listaCategorias.append(li);
    });
};

const cargarProductos = (): void => {

    const contenedorProductos = document.querySelector<HTMLElement>('#contenedor-productos');
    if (!contenedorProductos) {
        return;
    }

    productos.forEach((producto) => {

        const article = document.createElement("article");

        article.classList.add("product-card");

        article.innerHTML = `
            <img src="${producto.imagen}" alt="${producto.nombre}">

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
            alert("Agregaste: " + producto.nombre);
        });

        article.append(boton);

        contenedorProductos.append(article);
    });
};

cargarCategorias();
cargarProductos();
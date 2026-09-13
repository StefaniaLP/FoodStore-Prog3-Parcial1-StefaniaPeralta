import type { ICartItem } from "../../../types/product";
import { getCartItems, calculateTotal, updateQuantity, removeFromCart } from "../../../utils/cart";

const renderCart = (): void => {

    const contenedorCarrito =
        document.querySelector<HTMLElement>("#contenedor-carrito");

    const totalCarrito =
        document.querySelector<HTMLElement>("#total-carrito");

    if (!contenedorCarrito || !totalCarrito) {
        return;
    }

    const carrito: ICartItem[] = getCartItems();

    contenedorCarrito.innerHTML = "";

    if (carrito.length === 0) {

        contenedorCarrito.innerHTML =
            "<p>El carrito está vacío.</p>";

        totalCarrito.textContent = "$0";

        return;
    }

    carrito.forEach((item) => {

        const article = document.createElement("article");

        article.classList.add("cart-item");

        article.innerHTML = `

            <img
                class="cart-image"
                src="/assets/${item.producto.imagen}"
                alt="${item.producto.nombre}"
            >
            <h3>${item.producto.nombre}</h3>

            <p>
                Precio:
                $${item.producto.precio}
            </p>

            <div class="cantidad">
                <span>Cantidad:</span>
                <button class="btn-restar">−</button>
                <span>${item.cantidad}</span>
                <button class="btn-sumar">+</button>
            </div>

            <p>
                Subtotal:
                $${item.producto.precio * item.cantidad}
            </p>
            <button class="btn-eliminar"> Eliminar</button>
        `;

        const btnRestar =
            article.querySelector<HTMLButtonElement>(".btn-restar");

        const btnSumar =
            article.querySelector<HTMLButtonElement>(".btn-sumar");

        const btnEliminar =
            article.querySelector<HTMLButtonElement>(".btn-eliminar");

        btnSumar?.addEventListener("click", () => {

            updateQuantity(
                item.producto.id,
                item.cantidad + 1
            );

            renderCart();
        });


        btnRestar?.addEventListener("click", () => {

            if (item.cantidad > 1) {

                updateQuantity(
                    item.producto.id,
                    item.cantidad - 1
                );

                renderCart();
            }
        });

        btnEliminar?.addEventListener("click", () => {

            removeFromCart(item.producto.id);

            renderCart();
        });


        contenedorCarrito.append(article);
    });

    totalCarrito.textContent =
        `$${calculateTotal()}`;
};


renderCart();
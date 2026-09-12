import type { ICartItem } from "../../../types/product";
import { getCartItems, calculateTotal} from "../../../utils/cart";


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

        article.innerHTML = `
            <h3>${item.producto.nombre}</h3>

            <p>
                Precio:
                $${item.producto.precio}
            </p>

            <p>
                Cantidad:
                ${item.cantidad}
            </p>

            <p>
                Subtotal:
                $${item.producto.precio * item.cantidad}
            </p>
        `;

        contenedorCarrito.append(article);
    });

    totalCarrito.textContent =
        `$${calculateTotal()}`;
};


renderCart();
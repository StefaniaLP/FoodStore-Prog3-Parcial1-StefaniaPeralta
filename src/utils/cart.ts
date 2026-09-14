import type { IProduct, ICartItem } from "../types/product";

const CART_KEY = "cart";

//Leer los articulos del carrito
export const getCartItems = (): ICartItem[] => {
    const cart = localStorage.getItem(CART_KEY);

    if (!cart) {
        return [];
    }

    return JSON.parse(cart) as ICartItem[];
};

//Guarda el carrito Localstorage
const saveCart = (cart: ICartItem[]): void => {
    localStorage.setItem(CART_KEY, JSON.stringify(cart));
};

//Agrego al carrito
export const addToCart = (producto: IProduct): void => {
    const cart = getCartItems();

    const productoExistente = cart.find(
        (item) => item.producto.id === producto.id
    );

    if (productoExistente) {
        productoExistente.cantidad++;
    } else {
        const nuevoItem: ICartItem = {
            producto: producto,
            cantidad: 1
        };

        cart.push(nuevoItem);
    }

    saveCart(cart);
};

//Actualizar cantidad
export const updateQuantity = (
    productoId: number,
    cantidad: number
): void => {
    const cart = getCartItems();

    const item = cart.find(
        (item) => item.producto.id === productoId
    );

    if (item) {
        item.cantidad = cantidad;
        saveCart(cart);
    }
};

//Calcular el total del carrito
export const calculateTotal = (): number => {
    const cart = getCartItems();

    let total = 0;

    cart.forEach((item) => {
        total += item.producto.precio * item.cantidad;
    });

    return total;
};
 //Remover un articulo del carrito
export const removeFromCart = (productoId: number): void => {
    const cart = getCartItems();

    const nuevoCart = cart.filter(
        (item) => item.producto.id !== productoId
    );

    saveCart(nuevoCart);
};
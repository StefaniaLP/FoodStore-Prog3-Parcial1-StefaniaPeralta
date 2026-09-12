import type { Producto } from '../types/producto';

export const categorias: string[] = [
    'Hamburguesas',
    'Pizzas',
    'Papas Fritas',
    'Bebidas'
];

export const productos: Producto[] = [
    {
        id: 1,
        nombre: 'Hamburguesa Triple',
        descripcion: 'Triple carne, cheddar y bacon',
        precio: 25000,
        imagen: '/assets/hamburguesa.png',
        categoria: 'Hamburguesas'
    },
    {
        id: 2,
        nombre: 'Hamburguesa Clásica',
        descripcion: 'Carne, queso, lechuga y tomate',
        precio: 15000,
        imagen: '/assets/hamburguesa-clasica.JPG',
        categoria: 'Hamburguesas'
    },
    {
        id: 3,
        nombre: 'Pizza Muzzarella',
        descripcion: 'Salsa casera, muzzarella y orégano',
        precio: 18000,
        imagen: '/assets/pizza.jpg',
        categoria: 'Pizzas'
    },
    {
        id: 4,
        nombre: 'Pizza Especial',
        descripcion: 'Muzzarella, jamón, morrones y aceitunas',
        precio: 22000,
        imagen: '/assets/pizza-especial.jpg',
        categoria: 'Pizzas'
    },
    {
        id: 5,
        nombre: 'Papas con Cheddar',
        descripcion: 'Papas fritas con cheddar',
        precio: 8000,
        imagen: '/assets/papas.jpg',
        categoria: 'Papas Fritas'
    },
    {
        id: 6,
        nombre: 'Gaseosa',
        descripcion: 'Bebida fría de 500 ml',
        precio: 5000,
        imagen: '/assets/bebida.JPG',
        categoria: 'Bebidas'
    }
];
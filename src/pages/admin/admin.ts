import '../../style.css';
import {PRODUCTS, getCategories} from '../../data/data.ts';

const tablaProductos =
    document.querySelector<HTMLTableSectionElement>('#tabla-productos');

const selectCategoria =
    document.querySelector<HTMLSelectElement>('#categoria');

// =============================
// CARGAR CATEGORIAS
// =============================

const cargarCategoriasAdmin = (): void => {

    if (!selectCategoria) {
        return;
    }

    const categorias = getCategories();

    categorias.forEach((categoria) => {
        const option = document.createElement('option');

        option.value = categoria.id.toString();
        option.textContent = categoria.nombre;

        selectCategoria.appendChild(option);
    });
};


// =============================
// CARGAR PRODUCTOS
// =============================

const cargarProductosAdmin = () => {
    if (!tablaProductos) {
        return;
    }

    PRODUCTS.forEach((producto) => {
        const fila = document.createElement("tr");

        fila.innerHTML = `
            <td>${producto.id}</td>
            <td>${producto.nombre}</td>
            <td>${producto.descripcion}</td>
            <td>$${producto.precio}</td>
            <td>${producto.categorias
            .map(categoria => categoria.nombre)
            .join(", ")}
            </td>
        `;

        tablaProductos.appendChild(fila);
    });
};


// =============================
// EJECUTAR
// =============================

cargarCategoriasAdmin();
cargarProductosAdmin();
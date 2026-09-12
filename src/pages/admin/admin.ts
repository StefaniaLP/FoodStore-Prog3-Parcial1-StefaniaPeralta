import '../../style.css';
import {categorias, productos} from '../../data/productos';

const tablaProductos =
    document.querySelector<HTMLTableSectionElement>('#tabla-productos');

const selectCategoria =
    document.querySelector<HTMLSelectElement>('#categoria');

// =============================
// CARGAR CATEGORIAS
// =============================

const cargarCategoriasAdmin = () => {

    if (!selectCategoria) {
        return;
    }

    categorias.forEach((categoria) => {

        const option =
            document.createElement("option");

        option.value = categoria;
        option.textContent = categoria;

        selectCategoria.append(option);
    });
};


// =============================
// CARGAR PRODUCTOS
// =============================

const cargarProductosAdmin = () => {
    if (!tablaProductos) {
        return;
    }
    
    productos.forEach((producto) => {
        
        const fila =
            document.createElement("tr");

        fila.innerHTML = `
            <td>${producto.id}</td>

            <td>
                <img
                    src="${producto.imagen}"
                    alt="${producto.nombre}"
                    width="60">
            </td>

            <td>${producto.nombre}</td>

            <td>${producto.categoria}</td>

            <td>$${producto.precio}</td>

            <td>
                <button type="button">
                    Editar
                </button>

                <button type="button">
                    Eliminar
                </button>
            </td>
        `;

        tablaProductos.append(fila);
    });
};


// =============================
// EJECUTAR
// =============================

cargarCategoriasAdmin();
cargarProductosAdmin();
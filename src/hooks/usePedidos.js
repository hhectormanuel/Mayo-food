import { useContext } from "react"
import { PedidosContext } from "../context/PedidosContext"

export const usePedidos = () => {
    const { Productos, crearNuevoPedido, Pedidos, pedidoSeleccionado, PedidoSeleccionado, cargarProductos, cargarPedidos } = useContext( PedidosContext );

    const onLoadProducts = () => {
        fetch('https://api-comida.onrender.com/')
        .then((response) => response.json())
        .then((json) => {
        cargarProductos(json);
        })
        .catch((error) => {
          console.error(error);
        });
    }

    const onLoadOrders = () => {
        fetch('https://api-comida.onrender.com/orden/')
        .then((response) => response.json())
        .then((json) => {
        cargarPedidos(json);
        })
        .catch((error) => {
          console.error(error);
        });
    }

    const onCreateNewOrder = async( order ) => {

        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({productos: order.productos, total: order.total})
        };

        try {
            await fetch(
                'https://api-comida.onrender.com/orden/', requestOptions)
                .then(response => {
                    response.json()
                        .then(data => {
                            crearNuevoPedido(data)
                        });
                })
        }
        catch (error) {
            alert('Algo salio mal, intentalo de nuevo mas tarde');
        }
    }

    const onSelectOrder = ( order ) => {
        pedidoSeleccionado( order )
    }

    return {
        Productos, onCreateNewOrder, Pedidos, onSelectOrder, PedidoSeleccionado, onLoadProducts, onLoadOrders
    }
} 
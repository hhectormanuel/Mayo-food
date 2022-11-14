import React, { useState } from 'react'
import { PedidosContext } from './PedidosContext'

export const PedidosProvider = ({ children }) => {

    const [PedidoSeleccionado, setPedidoSeleccionado] = useState('Vacio');
    const [Pedidos, setPedidos] = useState([]);

    const [Productos, setProductos] = useState([])

    const cargarProductos = ( productos ) => {
      setProductos(productos)
    }

    const cargarPedidos = ( pedidos ) => {
      setPedidos( pedidos )
    }

    const crearNuevoPedido = ( pedido ) => {
      setPedidos([...Pedidos, pedido])
    }

    const pedidoSeleccionado = ( pedido ) => {
      setPedidoSeleccionado( pedido )
    }

  return (
    <PedidosContext.Provider value={{ Productos, crearNuevoPedido, Pedidos, pedidoSeleccionado, PedidoSeleccionado, cargarProductos, cargarPedidos }}>
        { children }
    </PedidosContext.Provider>
  )
}

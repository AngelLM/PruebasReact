import { SELECCIONAR_PRODUCTO, CONFIRMAR_ORDENAR_PLATILLO, MOSTRAR_RESUMEN, ELIMINAR_PRODUCTO, PEDIDO_ORDENADO} from '../../types';

export default(state, action) => {
    switch(action.type) {
        case SELECCIONAR_PRODUCTO:
            return{
                ...state,
                platillo: action.payload
            }
        case CONFIRMAR_ORDENAR_PLATILLO:
            return{
                ...state,
                pedido: [...state.pedido, action.payload]
            }
        case MOSTRAR_RESUMEN:
            return{
                ...state,
                total: action.payload
            }
        case ELIMINAR_PRODUCTO:
            return{
                ...state,
                pedido: state.pedido.filter ( articulo => articulo.id != action.payload)
            }
        case PEDIDO_ORDENADO:
            return{
                ...state,
                pedido: [],   // reiniciamos el array del pedido, ya que lo hemos subido a la base de datos. De esta forma cuando iniciemos un nuevo pedido, no se nos mostrarán los artículos pedidos anteriormente.
                idpedido: action.payload
            }
        default:
            return state;
    }
}
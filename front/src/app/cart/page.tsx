import { IProduct } from "@/interfaces";
import Image from "next/image";

export default function Cart() {
  const products: IProduct[] = []; //*o un string de productos
  return (
    <div>
      <div>
        <h2>Última Revisión Antes del Glamour</h2>
      </div>
      <div>
        <h2>Favoritos</h2>
      </div>
      <div className="divDeLaCartDelProducto">
        {/* <div>
          <Image src={} alt={} width={100} height={100} />
        </div> */}
        <div>
          <h3>NOMBRE DEL PRODUCTO</h3>
        </div>
        <div>
          <h3>Categoria del PRODUCTO</h3>
        </div>
        <div>
          <h3>Precio del producto</h3>
        </div>
        <div>
          <h3>Talle del producto</h3>
        </div>
        <div>
          <h3>Cantidad/es(number + | -)</h3>
        </div>
        <div>
          <h3>X(eliminar)</h3>
        </div>
      </div>
      {!products ? (
        <span>Tu carrito se encuentra vacio</span>
      ) : (
        <div>Aqui irian los productos</div>
      )}
      <div className="cuadroDeResumenDelPedido">
        //?quiero que este en todas las paginas del carrito
        <div>
          <span>Subtotal</span>
        </div>
        <div>
          <span>Retiro en Sucursal | envio</span>
        </div>
        <div>
          <h3>TOTAL</h3>
        </div>
        <div>
          <span>#Acepto los términos y condiciones</span>
        </div>
        <div>
          <button>
            <a href="">CONTINUAR</a>
          </button>
        </div>
      </div>
    </div>
  );
}

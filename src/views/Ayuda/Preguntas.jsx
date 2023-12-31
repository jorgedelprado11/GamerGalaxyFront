import React, { useState } from "react";
import Pregunta from "./Pregunta";

function Preguntas() {
  const [expandir, setExpandir] = useState({
    p1: false,
    p2: false,
    p3: false,
    p4: false,
    p5: false,
    p6: false,
    p7: false,
  });

  const handleExp = (index) => {
    const keys = Object.keys(expandir);
    // console.log(keys[index])
    setExpandir({
      p1: false,
      p2: false,
      p3: false,
      p4: false,
      p5: false,
      p6: false,
      p7: false,
      [keys[index]]: !expandir[keys[index]], //para poder usar una variable como propiedad tiene que ir con corchetes
    });
  };
  return (
    <div>
      <Pregunta
        titulo={"¿Como realizar un pedido?"}
        descripcion={
          <div>
            <p>
              <h2 className="text-blue-700 font-semibold mb-2">¿Como realizar un pedido?</h2>{" "}
              Solo tenés que seleccionar todos los productos que deseas adquirir. Seguidamente, en el carrito de compras, seleccionas la forma de pago. Luego hacés clic en el botón COMPRAR y podés acceder como cliente (si ya tenés cuenta en GamerGalaxy) o crear un cliente nuevo. Por último, completás los pasos brindados por el asistente, hasta confirmar la compra. Se te asignará un número de pedido y se mostrarán los datos del mismo."
            </p>
          </div>
        }
        funcion={() => handleExp(0)}
        expandir={expandir}
        propiedad={"p1"}
      />

      <Pregunta
        titulo={"¿El precio que figura en la web es el precio final?"}
        descripcion={
          <div>
            <p>
              <h2 className="text-blue-700 font-semibold mb-2">¿El precio que figura en la web es el precio final?</h2>{" "}
              Todos los precios en la web incluyen el IVA, y se encuentran expresados en pesos argentinos. Como informacion adicional tambien saldrá al hacerle click al producto el detalle con la cantidad de stock que tenemos del producto.
            </p>
          </div>
        }
        funcion={() => handleExp(1)}
        expandir={expandir}
        propiedad={"p2"}
      />
      <Pregunta
        titulo={"¿Cuáles son las formas de pago?"}
        descripcion={
          <div>
            <p>
              <h2 className="text-blue-700 font-semibold mb-2">¿Cuáles son las formas de pago?</h2>{" "}
              Contamos con dos formas de pago: a través de depósito/transferencia bancaria, con la cual obtenés el precio especial, o bien, a través de los métodos Pago Gamer (Visa o MasterCard) o MercadoPago (Tarjetas online, PagoFácil y RapiPago) con los cuales podés abonar en cuotas, al precio de lista.
            </p>
          </div>
        }
        funcion={() => handleExp(2)}
        expandir={expandir}
        propiedad={"p3"}
      />
      <Pregunta
        titulo={"¿Cómo abono a través de depósito/transferencia?"}
        descripcion={
          <div>
            <p>
              <h2 className="text-blue-700 font-semibold mb-2">¿Cómo abono a través de depósito/transferencia?</h2>{" "}
              Una vez se realiza el pedido, te facilitamos los datos de transferencia. Debes abonar e informar el pago desde nuestra web, antes de la fecha de vencimiento de la reserva.
            </p>
          </div>
        }
        funcion={() => handleExp(3)}
        expandir={expandir}
        propiedad={"p4"}
      />
      <Pregunta
        titulo={"¿Qué es Pago Gamer?"}
        descripcion={
          <div>
            <p>
              <h2 className="text-blue-700 font-semibold mb-2">¿Qué es Pago Gamer?</h2>{" "}
              Es un método exclusivo de Compra Gamer, para abonar de manera online a través de tarjetas Visa y Mastercard, con el cual podés acceder a 3 y 12 cuotas sin interés si empleas una tarjeta de crédito brindada por una entidad bancaria.
            </p>
          </div>
        }
        funcion={() => handleExp(4)}
        expandir={expandir}
        propiedad={"p5"}
      />
      <Pregunta
        titulo={"¿Cómo gestiono el envío de mi pedido?"}
        descripcion={
          <div>
            <p>
              <h2 className="text-blue-700 font-semibold mb-2">¿Cómo gestiono el envío de mi pedido?</h2>{" "}
              En primer lugar, para conocer el costo del envío, una vez que agregues al carrito tu compra, solo debes colocar tu código postal en el recuadro correspondiente, seleccionar la mensajería de tu preferencia y elegir si deseas el retiro en alguna sucursal o la entrega a domicilio. Actualmente realizamos envíos a todo el país través de Oca y Andreani; y si te encontrás en CABA o alrededores, podrás seleccionar el servicio de Mensajería Privada que es exclusivo de Compra Gamer. Tené en cuenta que, para calcular el costo del envío, se toman en consideración tanto las dimensiones y peso del paquete como la distancia de la localidad de entrega.
            </p>
          </div>
        }
        funcion={() => handleExp(5)}
        expandir={expandir}
        propiedad={"p6"}
      />
      <Pregunta
        titulo={"¿Cómo tramito la factura de mi compra?"}
        descripcion={
          <div>
            <p>
              <h2 className="text-blue-700 font-semibold mb-2">¿Cómo tramito la factura de mi compra?</h2>{" "}
              En todas las compras efectuadas en la web, brindamos sin excepción alguna, la factura de compra. Una vez que realiza y abona el pedido, enviamos a tu dirección de correo electrónico la factura correspondiente.
            </p>
          </div>
        }
        funcion={() => handleExp(6)}
        expandir={expandir}
        propiedad={"p7"}
      />
    </div>
  );
}

export default Preguntas;

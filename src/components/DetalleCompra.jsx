"use client";

import { separadorMiles } from "@/utils/separadorMiles";
import { useSession } from "next-auth/react";
import { useDispatch, useSelector } from "react-redux";
import { clearCart } from "@/redux/slices/cartSlice";
import { useState } from "react";
import MiModal from "./MiModal";
import { confirmarCompra, getUserCompras } from "@/redux/slices/compraSlice";
import { AiFillCloseCircle } from "react-icons/ai";

const DetalleCompra = () => {
  const dispatch = useDispatch();
  const { data: session } = useSession();
  const { cart, cartTotalAmount, cartTotalItems } = useSelector(
    (state) => state.cart
  );
  const [modal, setModal] = useState({ error: false, msg: "" });
  const [modalCompra, setModalCompra] = useState(false);

  const handleFinalizaCompra = async () => {
    let envio = ((cartTotalAmount * 5) / 100).toFixed(0);
    let montoTotal = (cartTotalAmount + (cartTotalAmount * 5) / 100).toFixed(0);    

    const res = await fetch("/api/compras", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        usuarioEmail: session?.user?.email,
        productos: cart,
        cantidadProductos: cartTotalItems,
        subTotal: cartTotalAmount,
        envio,
        montoTotal,
      }),
    });
    

    if (res.ok) {
      dispatch(clearCart(session?.user?.email));
      dispatch(getUserCompras(session?.user?.email));
      
      setModal({
        error: false,
        msg: "Compra realizada con éxito. Recibirá un correo electrónico con los detalles de la compra.",
      });

      //TODO: hacer modal que muestre los datos de la persona
    }    
  };

  return (
    <>
      <div className="mt-4 flex flex-col gap-1">
        <div className="flex items-center justify-between px-2">
          <p className="font-bold">Cantidad de productos: </p>
          <p className="text-gray-500 font-bold">{cartTotalItems}</p>
        </div>
        <div className="flex items-center justify-between px-2">
          <p className="font-bold">Sub Total ($):</p>
          <p className="text-gray-500 font-bold">
            {separadorMiles(cartTotalAmount)}
          </p>
        </div>
        <div className="flex items-center justify-between px-2">
          <p className="font-bold">Envío 5% ($):</p>
          <p className="text-gray-500 font-bold">
            {separadorMiles(((cartTotalAmount * 5) / 100).toFixed(0))}
          </p>
        </div>
        <div className="flex items-center justify-between px-2 text-lg">
          <p className="font-bold">Total ($):</p>
          <p className="text-red-500 font-bold">
            {separadorMiles(
              (cartTotalAmount + (cartTotalAmount * 5) / 100).toFixed(0)
            )}
          </p>
        </div>

        <button
          onClick={() => setModalCompra(true)}
          disabled={cartTotalItems === 0}
          className={`rounded-md py-2 md:py-3 mt-3 mb-1 text-center ${
            cartTotalItems === 0 ? "bg-gray-500" : "bg-black hover:bg-black/90"
          } text-white hover:cursor-pointer ease-in duration-300`}
        >
          <p className="font-bold">Confirmar Compra</p>
        </button>
      </div>

      {modal.msg && (
        <MiModal
          error={modal.error}
          mensaje={modal.msg}
          closeFn={() => setModal({ error: false, msg: "" })}
        />
      )}

      {
        modalCompra && (
          <div className="px-4 absolute w-full h-full top-0 left-0 bottom-0 bg-black/60 z-20 flex items-center justify-center">
            <div className="w-full lg:w-[55%] h-[55%] bg-white p-3 rounded-md font-montserrat">
              {/* Titulo */}
              <div className="flex items-center justify-between border-b-2">
                <h2 className="text-xl font-semibold">Confirmar Compra</h2>
                <AiFillCloseCircle size={27} className='hover:cursor-pointer text-black' onClick={() => setModalCompra(false)}/>
              </div>

              {/* Datos Persona */}
              <div className="mt-3">
                <h2 className="font-semibold text-gray-500">Datos de Usuario</h2>
                
                <div className="flex items-center gap-2 mt-1">
                  <p className="w-[90px]">Nombre:</p>
                  <p className="font-bold">{session.user.nombre}</p>
                </div>
                <div className="flex items-center gap-2 mt-1">
                  <p className="w-[90px]">Email:</p>
                  <p className="font-bold">{session.user.email}</p>
                </div>
                <div className="flex items-center gap-2 mt-1">
                  <p className="w-[90px]">Dirección:</p>
                  <p className="font-bold">{session.user.direccion}</p>
                </div>
              </div>
            </div>
          </div>
        )
      }
    </>
  );
};

export default DetalleCompra;

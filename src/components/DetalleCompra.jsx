"use client";

import { separadorMiles } from "@/utils/separadorMiles";
import { useSession } from "next-auth/react";
import { useDispatch, useSelector } from "react-redux";
import { clearCart } from "@/redux/slices/cartSlice";
import { useState } from "react";
import MiModal from "./MiModal";
import { confirmarCompra, getUserCompras } from "@/redux/slices/compraSlice";
import { AiFillCloseCircle } from "react-icons/ai";
import Image from "next/image";
import { TbTruckDelivery } from "react-icons/tb";
import { BsCoin } from "react-icons/bs";

const DetalleCompra = () => {
  const dispatch = useDispatch();
  const { data: session } = useSession();
  const { cart, cartTotalAmount, cartTotalItems } = useSelector(
    (state) => state.cart
  );

  const [modal, setModal] = useState({ error: false, msg: "" });
  const [modalCompra, setModalCompra] = useState(false);

  let envio = ((cartTotalAmount * 5) / 100).toFixed(0);
  let montoTotal = (cartTotalAmount + (cartTotalAmount * 5) / 100).toFixed(0);

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
    }
    setModalCompra(false);
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

      {modalCompra && (
        <div className="select-none px-4 absolute w-full h-full top-0 left-0 bottom-0 bg-black/60 z-20 flex items-center justify-center">
          <div className="w-full lg:w-[55%]  bg-white p-5 rounded-md font-montserrat">
            {/* Titulo */}
            <div className="flex items-center justify-between border-b-2">
              <h2 className="text-xl font-semibold">Confirmar Compra</h2>
              <AiFillCloseCircle
                size={27}
                className="hover:cursor-pointer text-black"
                onClick={() => setModalCompra(false)}
              />
            </div>

            {/* Datos Persona */}
            <h2 className="font-semibold text-gray-500 my-4">Usuario</h2>
            <div className="flex items-center gap-5">
              <Image
                src={session.user.image}
                alt={session.user.nombre}
                width={80}
                height={80}
                className="w-[80px] h-[80px] rounded-full object-cover"
              />

              <div className="">
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

            <h2 className="font-semibold text-gray-500 my-4">Detalle Compra</h2>
            <>
              {cart.map((prod) => {
                if (prod.cantidad > 0) {
                  return <div key={prod.producto._id} className="flex items-center justify-between mb-2" >
                    <div className="flex items-center gap-3">
                      <Image
                        src={prod.producto.boxImage}
                        alt={prod.producto.titulo}
                        width={60}
                        height={60}
                        className="w-[50px] h-[65px] object-contain"
                      />
                      <p className="font-semibold text-sm">
                        {prod.producto.titulo}{" "}
                        <span className="ml-2">(x{prod.cantidad})</span>
                      </p>
                    </div>
                    <p className="font-bold text-gray-500">
                      $ {separadorMiles(prod.producto.precio * prod.cantidad)}
                    </p>
                  </div>;
                }
              })}
              <div className="flex items-center justify-between mb-2">
                <div className="flex items-center gap-3">
                  <TbTruckDelivery size={40} className="w-[50px] h-[65px]" />
                  <p className="font-semibold text-sm">Envío</p>
                </div>
                <p className="font-bold text-gray-500">
                  $ {separadorMiles(envio)}
                </p>
              </div>
              <div className="flex items-center justify-between mb-2">
                <div className="flex items-center gap-3">
                  <BsCoin size={40} className="w-[50px] h-[65px]" />
                  <p className="font-bold text-lg">Total</p>
                </div>
                <p className="font-bold text-lg text-black">
                  $ {separadorMiles(montoTotal)}
                </p>
              </div>
            </>

            <div className="w-full flex justify-end">
              <button
                onClick={handleFinalizaCompra}
                className={`rounded-md py-2 px-2 text-center bg-black hover:bg-black/90 text-white hover:cursor-pointer ease-in duration-300`}
              >
                <p className="text-sm font-bold">Confirmar</p>
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default DetalleCompra;

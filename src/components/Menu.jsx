"use client";

import React, { useState } from "react";
import { signOut } from "next-auth/react";
import Link from "next/link";
import MenuList from "./MenuList";
import { usePathname } from "next/navigation";
import { HiMenuAlt3 } from "react-icons/hi";
import { FaShoppingCart } from "react-icons/fa";
import { useSession } from "next-auth/react";
import { useSelector } from "react-redux";
import Spinner from "./Spinner";


const Menu = () => {  
  
  const { data: session } = useSession();  
  const { cartTotalItems, cartLoading } = useSelector((state) => state.cart);  

  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const handleMenu = () => setOpen(!open);      

  return (
    <>
      <nav className="hidden lg:flex items-center gap-5 px-3 text-white font-bold">
        <ul className="flex items-center gap-3">
          <Link
            href="/"
            className={`${
              pathname === "/" ? "bg-white text-black" : ""
            } font-montserrat hover:text-black hover:bg-white p-2 rounded-md`}
          >
            Inicio
          </Link>
          <Link
            href="/tienda/categorias/all"
            className={`${
              pathname === "/tienda/categorias/all" ? "bg-white text-black" : ""
            } font-montserrat hover:text-black hover:bg-white p-2 rounded-md`}
          >
            Tienda
          </Link>
          {session?.user?.email && (
            <Link
              href="/favoritos"
              className={`${
                pathname === "/favoritos" ? "bg-white text-black" : ""
              } font-montserrat hover:text-black hover:bg-white p-2 rounded-md`}
            >
              Mis Favoritos
            </Link>
          )}
          {session?.user?.email && (
            cartLoading ? (
              <Spinner />
            ) : (
            <Link
              href="/carrito"
              className={`${
                pathname === "/carrito" ? "bg-white text-black" : ""
              } font-montserrat hover:text-black hover:bg-white p-2 rounded-md`}
            >
              <div className="relative">
                <FaShoppingCart size={20} />
                <div className="absolute -top-2 -right-2 bg-red-500 rounded-full w-4 h-4 flex items-center justify-center">
                  <p className="text-white text-[10px]">{cartTotalItems}</p>
                </div>
              </div>
            </Link>)
          )}
          {!session?.user?.email ? (
            <Link
              href="/user/login"
              className={`${
                pathname === "/user/login" ? "bg-white text-black" : ""
              } font-montserrat hover:text-black hover:bg-white p-2 rounded-md`}
            >
              LogIn
            </Link>
          ) : (
            <p
              onClick={() => signOut()}
              className={`font-montserrat hover:text-black hover:bg-white hover:cursor-pointer p-2 rounded-md`}
            >
              LogOut
            </p>
          )}

          {session?.user?.isAdmin && (
            <Link
              href="/admin/productos"
              className={`${
                pathname === "/admin/productos" ? "bg-white text-black" : ""
              } font-montserrat hover:text-black hover:bg-white p-2 rounded-md`}
            >
              Menu Admin
            </Link>
          )}
        </ul>
      </nav>
      <div className="lg:hidden" onClick={handleMenu}>
        <HiMenuAlt3 size={32} className="text-white hover:cursor-pointer" />
      </div>

      <MenuList open={open} handleMenu={handleMenu} />
    </>
  );
};

export default Menu;

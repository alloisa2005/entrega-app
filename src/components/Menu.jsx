"use client";

import React, { useEffect, useState } from "react";
import { signOut } from "next-auth/react";
import Link from "next/link";
import MenuList from "./MenuList";
import { usePathname } from "next/navigation";
import { HiMenuAlt3 } from "react-icons/hi";
import { FaShoppingCart } from "react-icons/fa";
import { useSession } from "next-auth/react";
import { useDispatch, useSelector } from "react-redux";
import Spinner from "./Spinner";
import { getUserCart } from "@/redux/slices/cartSlice";
import { getFavoritosByUser } from "@/redux/slices/favoritosSlice";
import Avatar from "./Avatar";
import { getUserCompras } from "@/redux/slices/compraSlice";


const Menu = () => {  
  const dispatch = useDispatch();
  const { data: session } = useSession();      

  useEffect(() => {
    if(session?.user?.email) {
      dispatch(getUserCart(session?.user?.email))
      dispatch(getFavoritosByUser(session?.user?.email))
      dispatch(getUserCompras(session?.user?.email))
    }
  }, [dispatch, session?.user?.email]);

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
            <Avatar />                        
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

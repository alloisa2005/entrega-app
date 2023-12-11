import Editoriales from "@/components/Editoriales";
import FilaJuegos from "@/components/FilaJuegos";
import Hero from "@/components/Hero";
import Leyenda from "@/components/Leyenda";
import MensajeContacto from "@/components/MensajeContacto";
import { Suspense } from "react";


export default function Home() {  

  return (    
    <main className="overflow-x-hidden">      
      <Hero />      

      <Leyenda />

      <Suspense fallback={<div className="bg-black h-40 flex items-center justify-center text-white">
        <p className="font-montserrat font-bold text-2xl italic">Loading...</p>
      </div>}>
        <FilaJuegos />            
      </Suspense>      

      <Editoriales />

      <MensajeContacto />
    </main>
    
  )
}

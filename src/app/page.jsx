import Editoriales from "@/components/Editoriales";
import FilaJuegos from "@/components/FilaJuegos";
import Hero from "@/components/Hero";
import Leyenda from "@/components/Leyenda";
import MensajeContacto from "@/components/MensajeContacto";


export default function Home() {  

  return (    
    <main className="alturaMinima">      
      <Hero />      

      <Leyenda />
      
      <FilaJuegos titulo={'últimos agregados'} />            

      <Editoriales />

      <MensajeContacto />
    </main>
    
  )
}

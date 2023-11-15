import Editoriales from "@/components/Editoriales";
import FilaJuegos from "@/components/FilaJuegos";
import Hero from "@/components/Hero";
import Leyenda from "@/components/Leyenda";

export default function Home() {  

  return (    
    <main className="alturaMinima">      
      <Hero />      

      <Leyenda />
      
      <FilaJuegos titulo={'últimos agregados'} filtro='latest'/>
      
      <FilaJuegos titulo={'más populares'}  filtro='rating'/>

      <Editoriales />
    </main>
    
  )
}

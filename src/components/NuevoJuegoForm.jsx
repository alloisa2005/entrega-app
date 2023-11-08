'use client'

import Image from "next/image";
import { useState } from "react";
import { AiFillCloseCircle } from "react-icons/ai";

const NuevoJuegoForm = () => {  

  const [titulo, setTitulo] = useState('');
  const [categoria, setCategoria] = useState('');
  const [precio, setPrecio] = useState(0);
  const [descripcion, setDescripcion] = useState('');
  const [boxImage, setBoxImage] = useState(''); 
  const [boxImagePreview, setBoxImagePreview] = useState('');
  const [posterImage, setPosterImage] = useState('');
  const [posterImagePreview, setPosterImagePreview] = useState('');

  const handleInputImage = (e) => {   
    if(e.target.name === 'boxImage') {
      setBoxImage(e.target.files[0]);
      setBoxImagePreview(URL.createObjectURL(e.target.files[0]))            
    }

    if(e.target.name === 'posterImage') {
      setPosterImage(e.target.files[0]);
      setPosterImagePreview(URL.createObjectURL(e.target.files[0]))            
    }
  }
  
  const handleDeleteImage = (type) => (e) => {
    if(type === 'box') {
      setBoxImage('');
      setBoxImagePreview('');
    }

    if(type === 'poster') {
      setPosterImage('');
      setPosterImagePreview('');
    }
  }

  return (
    <form className="mt-7">      

      <div className="flex flex-col lg:flex-row items-center w-full gap-2">

        <div className="flex flex-col w-full lg:w-[50%]">
          <label className="select-none font-josefin text-lg text-gray-700 italic">Título</label>
          <input
            value={titulo}            
            name='titulo'
            onChange={(e) => { setTitulo(e.target.value) }}
            type="text"
            placeholder="Nombre del juego"
            className="outline-none font-josefin text-lg border-2 px-2 py-1 rounded-md"
          />
        </div>

        <div className="flex flex-col w-full lg:w-[30%] h-full">
          <label className="select-none font-josefin text-lg text-gray-700 italic">Categoría</label>
          <select 
            value={categoria}            
            name='categoria'
            onChange={ (e) => { setCategoria(e.target.value) }}
            className="bg-white h-full outline-none font-josefin text-lg border-2 px-2 py-1 rounded-md"
          >
            <option value="" className="text-lg">Seleccione Plataforma</option>
            <option value="ps4" className="text-lg">PS4</option>            
            <option value="nintendo" className="text-lg">Nintendo Switch</option>
            <option value="xbox" className="text-lg">XBOX</option>
          </select>
        </div>

        <div className="flex flex-col w-full lg:w-[20%]">
          <label className="select-none font-josefin text-lg text-gray-700 italic">Precio ($)</label>
          <input            
            value={precio}            
            onChange={(e) => { setPrecio(e.target.value) }}
            type="number"            
            placeholder="Precio del juego"
            className="outline-none font-josefin text-lg border-2 px-2 py-1 rounded-md"
          />
        </div>

      </div>

      <div className="flex flex-col w-full mt-3">
        <label className="select-none font-josefin text-lg text-gray-700 italic">Descripción</label>
        <textarea          
          value={descripcion}
          name='descripcion'
          onChange={(e) => { setDescripcion(e.target.value) }}
          type="text"
          placeholder="Descripción del juego"
          className="resize-none h-[250px] lg:h-[280px] outline-none font-josefin text-lg border-2 px-2 py-1 rounded-md"
        />
      </div>

      <div className="flex flex-col w-full mt-5">
        <label className="select-none font-josefin text-lg border-b-2 border-naranja">
          Imágenes
        </label>

        <div className="w-full mt-6 flex flex-col lg:flex-row gap-2 lg:gap-3 items-center lg:justify-evenly mb-4">

          <div className="flex flex-col w-full lg:w-[230px] ">
            <label className="select-none font-bold text-lg text-black/80 italic">Imágen Portada (Cards)</label>
            <div className="w-full flex items-center justify-between gap-3">
              <input onChange={handleInputImage} name="boxImage" type='file' accept="image/*" 
              className="mb-4 outline-none text-md border-2 px-2 py-1 rounded-md w-[95%]" />                  
              <AiFillCloseCircle onClick={handleDeleteImage('box')} size={25} className='text-red-500 hover:text-red-700 hover:cursor-pointer ease-in duration-300'/>
            </div>
            <div className="w-full lg:w-[230px] h-[230px] border shadow-md rounded-md overflow-hidden">
              {boxImagePreview && (                  
                <Image src={boxImagePreview} alt="boxImage" width={200} height={200} className="w-full h-full object-contain" />                                                          
              )}
            </div>
          </div> 

          <div className="flex flex-col w-full lg:w-[550px]">
            <label className="select-none font-bold text-lg text-black/80 italic">Imágen Background</label>
            <div className="flex items-center justify-between gap-3">
              <input onChange={handleInputImage} name="posterImage" type='file' accept="image/*" 
                className="mb-4 outline-none text-md border-2 px-2 py-1 rounded-md w-[95%]" />                 
              <AiFillCloseCircle onClick={handleDeleteImage('poster')} size={25} className='text-red-500 hover:text-red-700 hover:cursor-pointer ease-in duration-300'/>
            </div>
            <div className="w-full lg:w-[550px] h-[230px] border shadow-md rounded-md overflow-hidden">
              {posterImagePreview && (                
                <Image src={posterImagePreview} alt="boxImage" width={200} height={200} className="w-full h-full object-cover" />                                  
              )}
            </div>
          </div>

        </div>
      </div>
    </form>
  )
}

export default NuevoJuegoForm
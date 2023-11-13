'use client'

import Image from "next/image";
import { useEffect, useState } from "react";
import { AiFillCloseCircle } from "react-icons/ai";
import { FaCloudUploadAlt } from "react-icons/fa";
import Spinner from "./Spinner";

const EditJuegoForm = ({ game }) => {    

  const [titulo, setTitulo] = useState('');
  const [categoria, setCategoria] = useState('');
  const [precio, setPrecio] = useState(0);
  const [descripcion, setDescripcion] = useState('');
  const [trailer1, setTrailer1] = useState('');
  const [trailer2, setTrailer2] = useState('');
  const [trailer3, setTrailer3] = useState('');
  const [boxImage, setBoxImage] = useState(''); 
  const [boxImagePreview, setBoxImagePreview] = useState('');
  const [posterImage, setPosterImage] = useState('');
  const [posterImagePreview, setPosterImagePreview] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setTitulo(game.name);
    setCategoria(game.plataforma.toLowerCase());
    setPrecio(game.price);
    setDescripcion(game.description);
    setTrailer1(game.trailers[0]);
    setTrailer2(game.trailers[1]);
    setTrailer3(game.trailers[2]);
    setBoxImagePreview(game.image)
    setPosterImagePreview(game.bgImage);
  }, [game])
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

  const handleSubmit = async (e) => {
    e.preventDefault(); 
    setLoading(true);

    if(!titulo.trim() || !categoria.trim() || !precio || !descripcion.trim()) {
      setError('Todos los campos son obligatorios');
      setLoading(false);
      return;
    }

    if(!boxImage || !posterImage) {
      setError('Debes cargar ambas imágenes');
      setLoading(false);
      return;
    }
  }

  return (
    <form className="my-5" onSubmit={handleSubmit}>      

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
          <label className="select-none font-josefin text-lg text-gray-700 italic">Plataforma</label>
          <select 
            value={categoria}            
            name='categoria'
            onChange={ (e) => { setCategoria(e.target.value) }}
            className="bg-white h-full outline-none font-josefin text-lg border-2 px-2 py-1 rounded-md"
          >
            <option value="" className="text-lg">Seleccione Plataforma</option>
            <option value="ps4" className="text-lg">PS4</option>            
            <option value="ns" className="text-lg">Nintendo Switch</option>
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
          className="resize-none h-[250px] lg:h-[280px] outline-none font-josefin text-md border-2 px-2 py-1 rounded-md"
        />
      </div>

      <div className="flex flex-col w-full mt-5">
        <label className="select-none font-josefin text-lg border-b-2 border-naranja mb-3">Trailers</label>

        <div className="flex flex-col md:flex-row items-center justify-between gap-4 lg:gap-6">
          <div className="flex flex-col w-full">
            <label className="select-none font-josefin text-md text-gray-700 italic">Trailer 1</label>
            <input
              value={trailer1}            
              name='titulo'
              onChange={(e) => { setTrailer1(e.target.value) }}
              type="text"
              placeholder="Youtube ID"
              className="outline-none font-josefin text-md border-2 px-2 py-1 rounded-md"
            />
          </div>

          <div className="flex flex-col w-full">
            <label className="select-none font-josefin text-md text-gray-700 italic">Trailer 2</label>
            <input
              value={trailer2}            
              name='titulo'
              onChange={(e) => { setTrailer2(e.target.value) }}
              type="text"
              placeholder="Youtube ID"
              className="outline-none font-josefin text-md border-2 px-2 py-1 rounded-md"
            />
          </div>

          <div className="flex flex-col w-full">
            <label className="select-none font-josefin text-md text-gray-700 italic">Trailer 3</label>
            <input
              value={trailer3}            
              name='titulo'
              onChange={(e) => { setTrailer3(e.target.value) }}
              type="text"
              placeholder="Youtube ID"
              className="outline-none font-josefin text-md border-2 px-2 py-1 rounded-md"
            />
          </div>

        </div>
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
              <AiFillCloseCircle onClick={handleDeleteImage('box')} size={25} className={`${boxImagePreview ? 'text-red-500 hover:text-red-700 hover:cursor-pointer': 'text-gray-500'} ease-in duration-300`}/>
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
              <AiFillCloseCircle onClick={handleDeleteImage('poster')} size={25} className={`${posterImagePreview ? 'text-red-500 hover:text-red-700 hover:cursor-pointer': 'text-gray-500'} ease-in duration-300`}/>
            </div>
            <div className="w-full lg:w-[550px] h-[230px] border shadow-md rounded-md overflow-hidden">
              {posterImagePreview && (                
                <Image src={posterImagePreview} alt="boxImage" width={200} height={200} className="w-full h-full object-cover" />                                  
              )}
            </div>
          </div>

        </div>

        {error && (
          <div className="bg-red-500 text-white font-bold rounded-lg px-3 py-2 mb-2 flex items-center justify-center lg:justify-start shadow-lg">
            <p className="font-josefin text-md">{error}</p>
          </div>
        )}

        <div className="w-full mt-4 flex justify-center">
          <button    
            disabled={loading}    
            type="submit"
            className="min-w-[200px] flex justify-center items-center gap-3 border border-black bg-black hover:bg-white px-2 py-2 rounded-md ease-out duration-300 hover:shadow-lg text-white hover:text-black"
          >
            {loading ? (
            <Spinner />
          ) : (
            <>
              <FaCloudUploadAlt size={26} className="" />
              <p className="text-lg font-bold">Guardar Juego</p>
            </>
          )}          
          </button>
      </div>

      </div>
    </form>
  )
}

export default EditJuegoForm
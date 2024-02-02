import { Link } from "react-router-dom"
import {PiBookOpenTextLight} from 'react-icons/pi'
import { BiUserCircle, BiShow } from 'react-icons/bi'
import {AiOutlineEdit} from 'react-icons/ai'
import {BsInfoCircle} from 'react-icons/bs'
import {MdOutlineAddBox,MdOutlineDelete} from 'react-icons/md'

import { useState } from "react"
import ModalSinopsis from "../components/modalSinopsis"

export default function SingleCard({book,setBookID}){

    const [modal,setModal]=useState(false)



    return(
        <div>
            
            <div className="border-2 border-sky-500 rounded-lg px-4 py-2 m-4 hover:shadow-xl relative"
                key={book._id} alt={book.title} >

                
                <h2 className="absolute top-1 right-2 px-6 py-2 bg-red-500 rounded-lg">
                    {book.year}
                </h2>

                <h4 className="my-2 text-black">{book._id}</h4>

                <div className="flex justify-between items-center gap-x-2">
                    <PiBookOpenTextLight className="text-red-400 text-2xl"/>
                    <h2 className="my-1">{book.title}</h2>
                    <img className="w-[100px] h-[130px] self-auto" src={`https://bookstore-restfulapi.onrender.com/${book.img}`} alt={book.title}/> {/**Poner como src la direccion del servidor donde este alojada la imagen */}

                </div>
                <div className="flex justify-start items-center gap-x-2">
                    <BiUserCircle className="text-red-400 text-2xl"/>
                    <h2 className="my-1 text-black">{book.author}</h2>
                </div>

                <div className="flex justify-start items center gap-x-2 mt-4 p-4">

                    <BiShow className="text-3xl text-blue-900 hover:text-black cursor-pointer"
                        onClick={()=>{setModal(true);console.log(book)}}/>

                    <Link to={`/book/details/${book._id}`}>
                            <BsInfoCircle className="text-2xl text-blue-800"/>
                        </Link>
                        <Link to={`/book/edit/${book._id}`}>
                            <AiOutlineEdit className="text-2xl text-yellow-600"/>
                        </Link>
                        <Link to={`/book/delete/${book._id}`}>
                            <MdOutlineDelete className="text-2xl text-red-600" />
                        </Link>
                </div>
                
            </div>  

            {modal && (<ModalSinopsis book={book} onClose={()=>{setModal(false)}}/>) }
    </div>
    )
}
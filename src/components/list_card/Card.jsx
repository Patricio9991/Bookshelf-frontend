import { Link } from "react-router-dom"
import {PiBookOpenTextLight} from 'react-icons/pi'
import { BiUserCircle, BiShow } from 'react-icons/bi'
import {AiOutlineEdit} from 'react-icons/ai'
import {BsInfoCircle} from 'react-icons/bs'
import {MdOutlineAddBox,MdOutlineDelete} from 'react-icons/md'

import { Fragment, useState } from "react"
import ModalSinopsis from "../modalSinopsis"
import SingleCard from "../singleCard"

export default function Card({books}){

    return(
        <div className="grid grid-cols-3">
            {books.map((i)=>{ 

                return <SingleCard book={i}/>
            })}
        </div>
     

    )
}

/*No funcionaba bien operando sobre books.map((i)=>{<div>....</div>}) directamente mapeando sobre codigo para el modal. Hubo que hacer el componenete <SingleCard book={i}/> para mayor especificidad, de lo contrario el modal devolvia siempre lo mismo y no la informacion de cada texto por separado*/
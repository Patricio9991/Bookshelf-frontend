import React, {useState,useEffect} from "react"
import BackBTN from "../components/BackBTN"
import Spinner from "../components/Spinner"
import axios from "axios"
import { useNavigate, useParams } from "react-router-dom"



export default function EditBook(){

    const [obra,setObra]=useState('')
    const [autor,setAutor]=useState('')
    const [año,setAño]=useState('')
    const [info,setInfo]=useState('')

    const [loading,setLoading]=useState(false)

    const navigate=useNavigate()
    const {id}=useParams()

    useEffect(()=>{
        setLoading(true)
        axios.get(`http://localhost:4000/items/${id}`)
        .then((res)=>{
            console.log(res)
            setAutor(res.data.author)
            setObra(res.data.title)
            setAño(res.data.year)
            setInfo(res.data.sinopsis)
            
            setLoading(false)
        })
        .catch((err)=>{
            console.log(Error)
            setLoading(false)
            alert('Algo no salio bien')
        })
    },[])

    const handleEditBook=()=>{
       

        const data={
            title:obra,
            author:autor,
            year:año,
            sinopsis:info
        }
        console.log(data)

        axios.put(`http://localhost:4000/editBook/${id}`,data)
        .then(()=>{
                setLoading(false)   
        })
        .catch((err)=>{
            console.log(err)
            setLoading(false)
        })
    }

    return(
        <div className="p-4">
            <BackBTN/>
            <h1 className="text-3xl my-4">Edit Book</h1>
            {loading ? <Spinner/> : ""}
            <div className="flex flex-col border-2  border-sky-400 rounded-xl w-[600px] p-4 mx-auto">
                <form className="my-4">
                    <label className="text-xl text-gray-500 mr-4">Title</label>
                    <input
                        type="text"
                        value={obra}
                        onChange={(e)=>{setObra(e.target.value)}}
                        className="border-2 border-gray-500 px-4 py-2 w-full"
                    />

                    <label className="text-xl text-gray-500 mr-4">Author</label>
                    <input
                        type="text"
                        value={autor}
                        onChange={(e)=>{setAutor(e.target.value)}}
                        className="border-2 border-gray-500 px-4 py-2 w-full"
                    />

                    <label className="text-xl text-gray-500 mr-4">Year</label>
                    <input
                        type="text"
                        value={año}
                        onChange={(e)=>{setAño(e.target.value)}}
                        className="border-2 border-gray-500 px-4 py-2 w-full"
                    />

                    <label className="text-xl text-gray-500 mr-4 ">Sinopsis</label>
                    <textarea className="my-3 h-[300px] w-full rounded-xl bg-sky-200 border-2 border-gray-500 "
                    value={info} onChange={(e)=>{setInfo(e.target.value)}}/>

                    <button 
                    onClick={()=>{handleEditBook();navigate('/')}}
                    className="my-2 p-3 bg-sky-300 w-full"
                    >Save Changes</button>
                </form>
            </div>
        </div>
    )
}
import React, {useState,useEffect} from "react"
import BackBTN from "../components/BackBTN"
import Spinner from "../components/Spinner"
import axios from "axios"
import { useNavigate, useParams } from "react-router-dom"


export default function DeleteBook(){

    const [loading,setLoading]=useState(false)
    const navigate=useNavigate()
    const {id}=useParams()

    const handleDeleteBook=()=>{
        setLoading(true)
        axios.delete(`https://bookstore-restfulapi.onrender.com/delete/${id}`)
        .then(()=>{
            setLoading(false)
            
        }).catch((err)=>{
            console.log(Error)
            setLoading(false)
            alert('Algo no salio bien')
        })
    }

    return(
    
        <div className="p-4">
            <BackBTN/>
            <h1 className="text-3xl my-4">Delete Book</h1>            
            {loading ? <Spinner/> : ""}
            <div className="flex flex-col items-center border-2 border-sky-400 rounded-xl w-[600px] p-8 mx-auto">
                <h3 className="text-2xl"> Are you sure you want to delete this book?</h3>
                <button className="p-4 bg-red-600 text-white m-8 w-full rounded-3xl" 
                onClick={()=>{handleDeleteBook();navigate("/")}}>Yes</button>
            </div>
        </div>
    )
}
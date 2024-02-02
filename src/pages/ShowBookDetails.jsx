import React, {useState,useEffect} from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import BackBTN from "../components/BackBTN";
import Spinner from "../components/Spinner";



export default function ShowBookDetails(){
    const [books,setBooks]=useState([])
    const [loading,setLoading]=useState(false)
    const {id}=useParams()
    //const params=useParams()


    //useParams() toma el id del link que esta en el path del router como paramentro/objeto y en base a eso se fija que onda el Link al que esta asociado ese path

    useEffect(()=>{
        setLoading(true)
        axios.get(`https://bookstore-restfulapi.onrender.com/items/${id}`)
        .then((res)=>{
            setBooks(res.data)
            setTimeout(() => {
                setLoading(false)
            }, 1000);
            })
        .catch((err)=>{
            console.log(err)
            setLoading(false)})
    },[])



    return(
            <div className="p-4">
                 <BackBTN/>
                <h1 className="text-3xl my-4">Show Book</h1>
                {loading? (
                    <Spinner/>
                ):(
                    <div className="flex flex-col border-2 border-sky-400 rounded-xl w-fit p-4">
                        <div className="my-4">
                            <span className="text-xl text-gray-500 mr-4">ID:</span>
                            <span>{books._id}</span>
                        </div>
                        <div className="my-4">
                            <span className="text-xl text-gray-500 mr-4">Title:</span>
                            <span>{books.title}</span>
                        </div>
                        <div className="my-4">
                            <span className="text-xl text-gray-500 mr-4">Author:</span>
                            <span>{books.author}</span>
                        </div>
                        <div className="my-4">
                            <span className="text-xl text-gray-500 mr-4">Year:</span>
                            <span>{books.year}</span>
                        </div>


                    </div>
                )}
            </div>
    )
}
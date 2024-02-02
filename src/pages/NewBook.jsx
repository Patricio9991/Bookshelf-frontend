import React ,{useState} from "react"
import BackBTN from "../components/BackBTN"
import Spinner from "../components/Spinner"
import axios from "axios"
import { useNavigate } from "react-router-dom"



export default function NewBook(){

    const [obra,setObra]=useState('')
    const [autor,setAutor]=useState('')
    const [anio,setAnio]=useState('')
    const [info,setInfo]=useState('')
    const [file,setFile]=useState()

    const [loading,setLoading]=useState(false)

    const navigate=useNavigate()


    
    const handleUploadData=(e)=>{

       
        
        e.preventDefault()
        const savedData=new FormData()

        savedData.append("obra",obra)
        savedData.append("autor",autor)
        savedData.append("anio",anio)
        savedData.append("info",info)
        savedData.append("file",file)

        const flagImg=savedData.get('file')

        if(flagImg==='undefined'){
            console.log('flagImg esta en undefined, va a dar error')
            savedData.delete('file')
        }
        console.log(...savedData)



        //https://bookstore-restfulapi.onrender.com/new

        axios.post('https://bookstore-restfulapi.onrender.com/new',savedData)
         .then(()=>{
                  
                 navigate('/')
            })
         .catch((err)=>{
             console.log(err)
             setLoading(true)
         })

        setLoading(true) 
    }

    // const handleSaveBook=()=>{

    //     const data={
    //         obra,
    //         autor,
    //         año,
    //         info,
    //         file
    //     }

      
    //     axios.post('http://localhost:4000/new',data)
    //     .then(()=>{
    //             setLoading(false)  
    //             console.log(data)
               
    //     })
    //     .catch((err)=>{
    //         console.log(err)
    //         setLoading(false)
    //     })
    // }

   


    return(
        <div className="p-4">
            <BackBTN/>
            <h1 className="text-3xl my-4">Create Book</h1>
            {loading ? <Spinner/> : (
            <div className="flex flex-col border-2  border-sky-400 rounded-xl w-[600px] p-4 mx-auto">
                <form className="my-4" onSubmit={(e)=>{handleUploadData(e)}}>
                    <label className="text-xl text-gray-500 mr-4">Title</label>
                    <input
                        type="text"
                        name="obra"
                        className="border-2 border-gray-500 px-4 py-2 w-full"
                        onChange={(e)=>{setObra(e.target.value)}}
                        value={obra}
                    />

                    <label className="text-xl text-gray-500 mr-4">Author</label>
                    <input
                        type="text"
                        name="autor"
                        className="border-2 border-gray-500 px-4 py-2 w-full"
                        onChange={(e)=>{setAutor(e.target.value)}}
                        value={autor}
                    />

                    <label className="text-xl text-gray-500 mr-4">Year</label>
                    <input
                        type="text"
                        name="anio"
                        className="border-2 border-gray-500 px-4 py-2 w-full"
                        onChange={(e)=>{setAnio(e.target.value)}}
                        value={anio}
                    />

                    <label className="text-xl text-gray-500 mr-4 ">Sinopsis</label>
                    <textarea className="my-3 h-[300px] w-full rounded-xl bg-sky-200 border-2 border-gray-500 "
                    name="info"
                    onChange={(e)=>{setInfo(e.target.value)}}
                    value={info}/>
            
                    <input type="file" name="file" onChange={(e)=>{setFile(e.target.files[0])}}/>

                    <input type="submit"className="my-2 p-3 bg-sky-300 w-full cursor-pointer hover:bg-sky-900"></input>
                </form>
            </div>) }
        </div>
    )
}
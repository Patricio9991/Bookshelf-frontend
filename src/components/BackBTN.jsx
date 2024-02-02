import { Link } from "react-router-dom";
import { BsArrowLeft } from "react-icons/bs";

export default function BackBTN(){
    return(
        <div className="flex">
            <Link to="/" className="bg-sky-900 text-white px-4 py-1 rounded-lg w-fit">
                <BsArrowLeft className="text-2xl"/>
            </Link>

        </div>
    )
}
import { AiOutlineClose } from "react-icons/ai";
import { PiBookOpenTextLight } from "react-icons/pi";
import { BiUserCircle } from "react-icons/bi";
import { Fragment } from "react";

export default function ModalSinopsis({ book, onClose }) {


  return (
    <Fragment>

        
        <div
          className="fixed bg-black bg-opacity-60 top-0 left-0 right-0 bottom-0 z-50 flex justify-center items-center"
          
          onClick={onClose}
        >
          <div
            onClick={(e) => {
              e.stopPropagation();
              console.log(book);
            }}
            className={`w-[600px] max-w-full h-[400px] bg-white rounded-xl p-4 flex flex-col relative`}
        
          >
            <AiOutlineClose
              className="absolute right-6 top-6 text-red-800 cursor-pointer"
              onClick={onClose}
            />

            <h2 className="w-fit px-6 py-2 bg-red-500 rounded-lg text-black">
              {book.year}
            </h2>

            <h4 className="my-2 text-black">{book._id}</h4>

            <div className="flex justify-start items-center gap-x-2">
              <PiBookOpenTextLight className="text-red-400 text-2xl" />
              <h2 className="my-1">{book.title}</h2>
            </div>
            <div className="flex justify-start items-center gap-x-2">
              <BiUserCircle className="text-red-400 text-2xl" />
              <h2 className="my-1">{book.author}</h2>
            </div>

            <p className="my-3">Sinopsis:</p>
            <p className="m-0">{book.sinopsis}</p>
          </div>
        </div>

    </Fragment>
  );
}

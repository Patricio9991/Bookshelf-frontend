import React, { useEffect, useState } from "react";
import axios from "axios";
import Spinner from "../components/Spinner";
import BackBTN from "../components/BackBTN";
import { Link, useParams } from "react-router-dom";
import { AiOutlineDelete, AiOutlineEdit } from "react-icons/ai";
import { BsInfoCircle } from "react-icons/bs";
import { MdOutlineAddBox, MdOutlineDelete } from "react-icons/md";
import List from "../components/list_card/List";
import Card from "../components/list_card/Card";

export default function Home() {
  const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState(false);
  const [mode, setMode] = useState("");

  useEffect(() => {
    setLoading(true);
    axios
      .get("http://localhost:4000/items")
      .then((res) => {
        setBooks(res.data);
        setLoading(false);
      })
      .catch((err) => {
        console.log(err);
        setLoading(false);
      });
  }, []);
         
  return (
    <div className="p-4">
      <div className="flex justify-center items-center gap-x-4">
        <button
          className="bg-sky-200 hover:bg-sky-800 px-4 py-1 rounded-lg text-xl hover:text-white"
          onClick={() => {
            setMode("ListMode");
          }}
        >
          List Mode
        </button>

        <button
          className="bg-sky-200 hover:bg-sky-800 px-4 py-1 rounded-lg text-xl hover:text-white"
          onClick={() => {
            setMode("CardMode");
          }}
        >
          Card Mode
        </button>
      </div>

      <div className="flex justify-between items-center">
        <h1 className="text-3xl my-8">Book List</h1>
        <Link to={`/book/create`}>
          <MdOutlineAddBox className="text-sky-800 text-4xl" />
        </Link>
      </div>

      {loading ? (
        <Spinner />
      ) : mode === "CardMode" ? (
        <Card books={books} />
      ) : (
        <List books={books} />
      )}
    </div>
  );
}

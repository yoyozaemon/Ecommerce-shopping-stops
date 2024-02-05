import React, { useEffect, useState } from "react";
import { BsCartCheck } from "react-icons/bs";
import { FaEye } from "react-icons/fa";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addItem } from "../utils/cartSlice";
import Layout from "../Layout/Layout";

function Product() {
  const dispach = useDispatch();
  function HandleAdd(items) {
    dispach(addItem(items));
  }

  const [items, setitems] = useState([]);
  useEffect(() => {
    getData();
  }, []);
  async function getData() {
    const dataitems = await fetch("https://fakestoreapi.com/products");
    const itemsjson = await dataitems.json();
    const details = itemsjson.map((obj) => ({ ...obj, quantity: 1 }));
    setitems(details);
  }

  return (
    <Layout>
      <div className="flex flex-wrap gap-32   p-10 mx-16 ">
        {console.log(items)}
        {items.map((list) => {
          return (
            <div
              key={list.id}
              className="border w-[262px] p-9 pt-4  h-[350px] rounded-3xl shadow-2xl  "
            >
              <div  className="flex justify-center border rounded-xl w-48 h-44 items-center border-">
                <Link to={"/product/" + list.id}>
                  <img
                    src={list.image}
                    alt=""
                    className="w-32 h-40   hover:h-44 hover:w-36 hover:ease-out hover:duration-500 "
                  />
                </Link>
              </div>
              <h1 className="w-56 ">{list.title}</h1>
              <h1>{"$" + list.price}</h1>
              <div className="p-1 flex gap-2 w-64 h-10 items-center  ">
                <button onClick={() => { HandleAdd(list) }} className="flex justify-center items-center border w-28  bg-gray-300 rounded-xl shadow-md  shadow-gray-200">
                  {" "}
                  <BsCartCheck /> Add to cart
                </button>
                <Link to={"/product/" + list.id}>
                  <button className="flex justify-center items-center border w-16  bg-gray-300 rounded-xl shadow-md shadow-gray-200 ">
                    {" "}
                    <FaEye /> View
                  </button>
                </Link>
              </div>
            </div>
          );
        })}
      </div>
    </Layout>
  );
}
export default Product;

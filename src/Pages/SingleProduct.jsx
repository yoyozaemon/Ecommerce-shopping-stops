import React from "react";
import { Link, useParams } from "react-router-dom";
import useProducts from "../utils/useProduct";
import { addItem } from "../utils/cartSlice";
import { useDispatch } from "react-redux";
import { IoMdAddCircleOutline } from "react-icons/io";
import { FaCartPlus } from "react-icons/fa";
import Layout from "../Layout/Layout";

function SingleProduct() {
  const dispath = useDispatch();
  const { id } = useParams();
  const select = useProducts(id);
  function HandleAdd(items) {
    dispath(addItem(items));
  }
  return (
    <Layout>
    <div className=" w-[1000px] h-[300px]  flex  flex-col justify-center items-center m-32  p-10 border-2 rounded-xl border-gray-400  shadow-2xl shadow-gray-600   ">
      <div className="w-[900px]  flex  items-center justify-center">
        <img
          className="w-52 h-52 p-2  hover:h-56 hover:w-56 hover:ease-in hover:duration-400 "
          src={select.image}
          alt=""
        />
        <div>
          <h1 className="font-bold">{select.title}</h1>
          <h1 className="font-semibold text-gray-400">{select.category}</h1>
          <h1>{select.description}</h1>
          <h1 className="font-bold">{"$" + select.price}</h1>
        </div>
      </div>
      <div className="flex gap-5     ">
        <div className="flex justify-between ">
          <button
            onClick={() => HandleAdd(select)}
            className="border-2  w-24 p-1 flex items-center justify-center  text-white bg-gray-700  hover:text-gray-800 hover:bg-white hover:border hover:border-gray-800"
          >
            <IoMdAddCircleOutline className="flex justify-center items-center text-xl mr-2" />
            add
          </button>
        </div>
        <div>
        <div  className="flex justify-between  ">
        <Link to={"/cart"}>
          <button className="border-2  w-24 p-1 flex items-center justify-center  text-white bg-gray-700  hover:text-gray-800 hover:bg-white hover:border hover:border-gray-800">
            <FaCartPlus className="flex justify-center items-center text-xl mr-2" />
            cart
          </button>
        </Link>
        </div>
        </div>
      </div>
    </div>
    </Layout>
  );
}

export default SingleProduct;

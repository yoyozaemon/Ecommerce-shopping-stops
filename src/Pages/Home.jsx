import React from "react";
import { Link } from "react-router-dom";
import Layout from "../Layout/Layout";

function Home() {
  return (
     <Layout>
       <div>
        <img
          className="w-full h-[100vh]"
          src="https://images.pexels.com/photos/5632402/pexels-photo-5632402.jpeg?cs=srgb&dl=pexels-karolina-grabowska-5632402.jpg&fm=jpg"
          alt=""
        />
        <div>
          <p className="absolute top-10 mx-[720px] my-[220px] text-5xl ">
            <em>SHOPPING</em> <br />
            <em>IS <span className="text-red-400" > CHEAPER</span></em> <br /> <em>THAN</em> <br /> <em>THERAPY </em>
          </p>
          <Link to={"/product"}>
            <button className="border-black absolute top-10 mx-[740px] my-[470px] h-9 w-40 border font-bold  hover:h-10 hover:w-40 hover:ease-out hover:duration-500 rounded-lg ">
              Shop Now
            </button>
          </Link>
        </div>
      </div>
     </Layout>
  );
}

export default Home;

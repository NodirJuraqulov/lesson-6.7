import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import NotFound from "../not-found/NotFound";
import SkeletonDetail from "../skeleton/SkeletonDetail";
import { useFetch } from "../../hooks/useFetch";
import { FaRegHeart } from "react-icons/fa";
import { useContextValue } from "@/context";

const ProductDetail = () => {
  const { id } = useParams();
  const { data, error, loading } = useFetch(`/products/${id}`);
  const [state, dispatch] = useContextValue();

  useEffect(() => {
    scrollTo(0, 0);
  }, []);

  if (error) {
    return <NotFound />;
  }

  return (
    <>
      <div className="container mx-auto mt-10">
        {loading && <SkeletonDetail />}
      </div>

      <div className="container w-full h-[650px] bg-gray-200 mx-auto rounded-2xl flex p-5 items-start justify-center">
        <div className="flex relative rounded-2xl mr-6 w-[45%] h-full justify-center p-2 bg-white">
          <img
            src={data?.image}
            alt=""
            className="w-full h-full object-contain rounded-2xl cursor-pointer"
          />
          <div className="absolute top-4 right-4 text-black text-4xl rounded-full p-2 cursor-pointer active:text-red-600 hover:scale-105 transition-colors duration-300">
            <button
              onClick={() => dispatch({ type: "LIKED", payload: data })}
              className="cursor-pointer"
            >
              <FaRegHeart />
            </button>
          </div>
        </div>

        <div className="bg-gray-200 w-[55%] p-4 rounded-md">
          <h2 className="text-5xl font-semibold mb-4 text-gray-800">
            {data?.title}
          </h2>
          <p className="my-2 text-lg text-gray-700">{data?.description}</p>
          <p className="text-gray-800 font-semibold text-2xl">
            Category:{" "}
            <span className="font-medium text-gray-700">{data?.category}</span>
          </p>
          <div className="flex items-center gap-10 my-2">
            <p className="text-2xl text-gray-800 font-semibold">
              Rate:{" "}
              <span className="font-medium text-gray-700">
                {data?.rating?.rate}
              </span>
            </p>
            <p className="text-2xl text-gray-800 font-semibold">
              Count:{" "}
              <span className="font-medium text-gray-700">
                {data?.rating?.count}
              </span>
            </p>
          </div>
          <strong className="text-5xl text-gray-800">{data?.price} USD</strong>
        </div>
      </div>
    </>
  );
};

export default React.memo(ProductDetail);

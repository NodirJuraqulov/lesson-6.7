import React from "react";
import { useNavigate } from "react-router-dom";

const Products = ({ data }) => {
  const navigate = useNavigate();

  return (
    <div className="rounded-lg mt-8 w-full grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      {data?.map((item) => (
        <div
          key={item.id}
          className="bg-slate-800 text-white rounded-lg p-4 w-full"
        >
          <div className="relative w-full">
            <img
              onClick={() => navigate(`/product/${item.id}`)}
              style={{ cursor: "pointer" }}
              loading="lazy"
              src={item.image}
              alt={item.title}
              className="w-full object-cover h-80 bg-white rounded-md"
            />
          </div>
          <h2 className="text-3xl truncate my-2 font-medium" title={item.title}>{item.title}</h2>
          <p className="text-md mb-2 line-clamp-3 text-slate-300" title={item.description}>{item.description}</p>
          <p className="line-clamp-2 text-xl mb-2"><span className="font-medium">Category:</span> {item.category}</p>
          <div className="flex items-center gap-10 mb-2">
            <p className="text-xl"><span className="font-medium">Rate:</span> {item.rating.rate}</p>
            <p className="text-xl"><span className="font-medium">Count:</span> {item.rating.count}</p>
          </div>
          <p className="text-2xl font-semibold"><span className="font-bold">Price:</span> ${item.price}</p>
        </div>
      ))}
    </div>
  );
};

export default React.memo(Products);

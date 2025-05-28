import React from "react";
import { useNavigate } from "react-router-dom";

const Users = ({ data }) => {
  const navigate = useNavigate();

  return (
    <div className="rounded-lg mt-8 w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
      {data?.map((item) => (
        <div
          key={item.id}
          className="bg-gray-300 rounded-lg p-4 flex flex-col items-center w-full"
        >
          <div className="w-32 h-32 bg-slate-900 rounded-full relative overflow-hidden">
            <img
              onClick={() => navigate(`/user/${item.id}`)}
              style={{ cursor: "pointer" }}
              loading="lazy"
              src=""
              alt=""
              className="w-full h-full object-cover rounded-full"
            />
            <p className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 m-0 font-bold text-white text-5xl">
              {item.name.firstname.charAt(0).toUpperCase()}
              {item.name.lastname.charAt(0).toUpperCase()}
            </p>
          </div>

          <h2 className="text-4xl my-3 font-medium">
            {item.name.firstname.charAt(0).toUpperCase() +
              item.name.firstname.slice(1)}{" "}
            {item.name.lastname.charAt(0).toUpperCase() +
              item.name.lastname.slice(1)}
          </h2>

          <div>
            <p className="text-xl text-gray-900"><span className="text-black font-medium">Email:</span> {item.email}</p>
            <p className="text-xl text-gray-900"><span className="text-black font-medium">Phone:</span> {item.phone}</p>
          </div>

          <div className="mt-4">
            <h3 className="text-2xl font-medium">Address:</h3>
            <p className="text-xl text-gray-900 ml-4"><span className="text-black font-medium">City:</span> {item.address.city}</p>
            <p className="text-xl text-gray-900 ml-4"><span className="text-black font-medium">Street:</span> {item.address.street}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default React.memo(Users);

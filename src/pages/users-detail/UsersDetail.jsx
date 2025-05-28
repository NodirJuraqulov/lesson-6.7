import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import NotFound from "../not-found/NotFound";
import SkeletonDetail from "../skeleton/SkeletonDetail";
import { useFetch } from "../../hooks/useFetch";

const UsersDetail = () => {
  const { id } = useParams();
  const { data, error, loading } = useFetch(`/users/${id}`);

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

      <div className="container w-[500px] py-10 bg-gray-200 mt-40 mx-auto rounded-2xl shadow-lg flex flex-col p-5 items-center justify-start">
        <h2 className="text-5xl font-semibold mb-4 text-gray-800">
          {data?.name.firstname.charAt(0).toUpperCase() +
            data?.name.firstname.slice(1)}{" "}
          {data?.name.lastname.charAt(0).toUpperCase() +
            data?.name.lastname.slice(1)}
        </h2>
        <p className="my-2 text-xl text-gray-700 font-medium"><span className="font-semibold text-gray-800">Email:</span> <a className="underline" href="#">{data?.email}</a></p>
        <p className="my-2 text-xl text-gray-700 font-medium"><span className="font-semibold text-gray-800">Phone:</span> <a className="underline" href="#">{data?.phone}</a></p>
        <div>
          <h3 className="text-2xl mb-1 font-semibold text-gray-800">Address:</h3>
          <p className="text-xl ml-4 text-gray-700 font-medium"><span className="text-gray-800 font-semibold">City:</span> {data?.address.city}</p>
          <p className="text-xl ml-4 text-gray-700 font-medium"><span className="text-gray-800 font-semibold">Street:</span> {data?.address.street}</p>
          <p className="text-xl ml-4 text-gray-700 font-medium"><span className="text-gray-800 font-semibold">Number:</span> {data?.address.number}</p>
          <p className="text-xl ml-4 text-gray-700 font-medium"><span className="text-gray-800 font-semibold">Zipcode:</span> {data?.address.zipcode}</p>
        </div>
        <div className="mt-4 flex gap-2">
          <p className="text-xl ml-4 text-gray-700 font-medium"><span className="text-gray-800 font-semibold">Username:</span> <a href="#">{data?.username}</a></p>
          <p className="text-xl ml-4 text-gray-700 font-medium"><span className="text-gray-800 font-semibold">Password:</span> <a href="#">{data?.password}</a></p>
        </div>
      </div>
    </>
  );
};

export default React.memo(UsersDetail);

import React from "react";
import { useParams } from "react-router-dom";

function User() {
  const { idmain } = useParams();

  return (
    <div className="bg-gray-600 text-white text-3xl p-4 m-5">
      User: {idmain}
    </div>
  );
}

export default User;

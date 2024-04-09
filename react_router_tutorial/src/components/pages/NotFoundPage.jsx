import React from "react";
import { Link } from "react-router-dom";

function NotFoundPage() {
  return (
    <div>
      <h1>Page Not Found</h1>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui sequi
        consequatur inventore! Perferendis totam nihil sit tenetur autem
        aperiam, dignissimos impedit iste et eligendi distinctio unde quia atque
        minima odio.
      </p>
      <p className="m-3">
        Go to{" "}
        <Link
          className="px-2 py-1 rounded-md hover:scale-110 hover:bg-green-600 hover:text-white duration-500"
          to="/"
        >
          Homepage
        </Link>
        .
      </p>
    </div>
  );
}

export default NotFoundPage;

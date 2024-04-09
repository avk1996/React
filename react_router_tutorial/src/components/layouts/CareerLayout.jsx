import React from "react";
import { Outlet } from "react-router-dom";

function CareerLayout() {
  return (
    <div>
      <h1>Careers</h1>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum
        voluptatem laudantium, recusandae, dignissimos sint magnam modi sit
        fugiat alias impedit, hic atque. Libero vel est repellat repudiandae
        autem veniam incidunt?
      </p>
      <Outlet />
    </div>
  );
}

export default CareerLayout;

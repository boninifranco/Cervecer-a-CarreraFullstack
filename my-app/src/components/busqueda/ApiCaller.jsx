// ApiCaller.js
import React, { useState, useEffect } from "react";

const ApiCaller = ({ setProductos }) => {
  const url = "https://6568ca569927836bd9756cdd.mockapi.io/api/v1/product";

  const fetchData = async () => {
    const response = await fetch(url);
    const data = await response.json();
    setProductos(data);
  };

  useEffect(() => {
    fetchData();
  }, [setProductos]);

  return null; // No es necesario renderizar algo en este componente
};

export default ApiCaller;

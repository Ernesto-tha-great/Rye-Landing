"use client";
import { useQuery, gql } from "@apollo/client";
import { GET_PRODUCTS_QUERY } from "../../../graphql/queries";
import { useState } from "react";

export default function ProductListPage() {
  const { loading, error, data } = useQuery(GET_PRODUCTS_QUERY);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error : {error.message}</p>;

  console.log(data);

  return (
    // JSX for displaying products
    <div className="flex flex-col gap-4">
      {data.productsByDomainV2.map((product: any) => (
        <div
          className="flex flex-col gap-6 bg-gray-400 rounded-xl"
          key={product.id}
        >
          <h1 className=" inline-flex"> Title: {product.title}</h1>
          <h1> Description: {product.description}</h1>
          <h1>Currency: {product.price.currency}</h1>
          <h1>Price: {product.price.displayValue}</h1>
        </div>
      ))}
      <h1>yes</h1>
    </div>
  );
}

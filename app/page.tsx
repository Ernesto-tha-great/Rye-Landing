"use client";
import { useQuery, gql } from "@apollo/client";
import { GET_PRODUCTS_QUERY } from "../graphql/queries";
import Navbar from "@/components/Navbar";
import { EB_Garamond } from "next/font/google";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { useState, useEffect } from "react";

const font = EB_Garamond({ weight: "600", subsets: ["latin"] });

export default function Home() {
  const [products, setProducts] = useState([]);
  const { loading, error, data } = useQuery(GET_PRODUCTS_QUERY);

  useEffect(() => {
    const getProducts = async () => {
      if (data) {
        setProducts(data.productsByDomainV2);
      }
    };
    getProducts();
  }, [data]);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error : {error.message}</p>;

  return (
    <main className="flex flex-col">
      <div
        style={{
          backgroundImage: `url("/lerub.jpeg")`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          backgroundPosition: "center",
          width: "100%",
          height: "100%",
        }}
        className=" p-8 min-h-screen  "
      >
        <Navbar />

        <div className="flex flex-col items-center h-screen  justify-center gap-4">
          <h1
            className={cn("text-6xl font-semibold text-white", font.className)}
          >
            Official sunscreen of the Good Life
          </h1>
        </div>
      </div>

      <div className="bg-[#f6f2ed] flex flex-col  items-center">
        <div className="flex flex-col items-center gap-20 my-12">
          <h1
            className={cn(
              "text-6xl font-semibold text-gray-700/80",
              font.className
            )}
          >
            Hello, Sunshine
          </h1>
          <p className="text-center text-xl text-[#8797A7] max-w-2xl">
            Get to know our lineup of dreamy SPF formulas, created by a squad of
            summer-lovin skincare specialists. Made in Italy with locally
            sourced Mediterranean ingredients.
          </p>
        </div>
        <Button>Shop Now</Button>
      </div>

      <div className="bg-[#f6f2ed] flex flex-col  items-center">
        <div className="flex flex-col items-center gap-20 my-12">
          <h1
            className={cn(
              "text-6xl font-semibold text-gray-700/80",
              font.className
            )}
          >
            Browse collections from various stores
          </h1>
        </div>

        <div className="grid grid-cols-3 gap-8 mx-6">
          {products?.map((product: any) => (
            <div
              className="flex flex-col bg-[#f7cf9b] gap-6 p-4  rounded-xl"
              key={product.id}
            >
              <div>
                {product.images?.map((image: any) => (
                  <Image
                    src={image.url}
                    alt="product"
                    width={200}
                    height={200}
                    key={image}
                  />
                ))}
              </div>

              <h1 className=" inline-flex"> Title: {product.title}</h1>
              <h1> Description: {product.description}</h1>
              <h1>Currency: {product.price.currency}</h1>
              <h1>Price: {product.price.displayValue}</h1>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}

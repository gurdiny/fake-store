import { useParams } from "react-router-dom";
import { getSingleProduct } from "../api";
import { useEffect, useState } from "react";
import { toast } from "sonner";
import { useNavigate } from "react-router-dom";

import Reviews from "./SingleProduct/Reviews";

export default function ProductDatailPage() {
  const navigate = useNavigate();
  const [product, setProduct] = useState([]);
  //   const [review, setReview] = useState();
  const { id } = useParams();

  const [quantity, setQuantity] = useState(1);
  useEffect(() => {
    getSingleProduct(id)
      .then((prod) => {
        setProduct(prod);
        // setReview(prod);
      })
      .catch((error) => {
        toast.error("no hay información");
      });
  }, [id]);

  return (
    <main className="w-full p-12">
      <div className="flex flex-row w-full justify-around gap-12">
        <div className="w-[50%] flex justify-center bg-white rounded-lg h-[100vh]">
          <img src={product.thumbnail} alt="" />
          {/* <ul>
            {product.map((prod, prodIdx) => {
              prod.images.map((image, imageIdx) => {
                return (
                  <li key={`image-${prodIdx}-${imageIdx}`}>
                    <img src={image} alt="" />
                  </li>
                );
              });
            })}
          </ul> */}
        </div>
        <div className="w-[50%] flex flex-col gap-4">
          {/* <button>
            <a href="/productos">Regresar</a>
          </button> */}
          <p className="text-sm ">{`Raiting: ${product.rating}💫`}</p>
          <h1 className="font-bold text-4xl"> {product.title}</h1>

          <p className="text-sm ">{` ${product.description}`}</p>
          <p className="text-2xl mt-4 font-semibold">{`$${product.price}`}</p>
          <p>Cantidad</p>
          <div className="flex flex-row">
            <button className="mr-4" onClick={() => setQuantity(quantity - 1)}>
              ➖
            </button>
            <p>{quantity}</p>
            <button className="ml-4" onClick={() => setQuantity(quantity + 1)}>
              ➕
            </button>
          </div>
          <div className="flex flex-col gap-0">
            <p className="text-sm ">
              <strong>SKU:</strong>
              {` ${product.sku}`}
            </p>
            <p className="text-sm ">
              <strong>Marca:</strong>
              {` ${product.brand}`}
            </p>
          </div>
        </div>
      </div>

      <div className="flex flex-row w-full justify-around gap-12">
        <div className="w-[50%] flex justify-center bg-white rounded-lg">
          {/* {product.reviews.map((prod, idx) => {
            return (
              <Reviews
                key={`review-${idx}`}
                reviewerName={prod.reviewerName}
                comment={prod.comment}
                rating={prod.rating}
              />
            );
          })} */}
        </div>
        <div className="w-[50%] flex flex-col gap-4"></div>
      </div>
    </main>
  );
}

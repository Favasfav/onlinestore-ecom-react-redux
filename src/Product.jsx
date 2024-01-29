import axios from "axios";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
function Product() {
    const navigate=useNavigate()
  const [product, setProduct] = useState({});
  const [qty, setQty] = useState(1);
  const user = useSelector((state) => state.user.user);
  console.log(user, "dddddddddddddd");
  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const response = await axios.get("http://127.0.0.1:8000/cart/product/");
        setProduct(response.data[0]); // Assuming you want to use the first product
      } catch (error) {
        console.error("Error fetching product:", error);
      }
    };
    fetchProduct();
  }, []);

  const handleCart = async () => {
    try {
      console.log("Adding to cart:", product);
      console.log("Quantity:", qty);
      const response = await axios.post(
        `http://127.0.0.1:8000/cart/addtocart/${product.id}/${qty}/${user.id}/`
      );
      if (response.status === 201) {
        Swal.fire({
          title: "Added to cart!",
          text: "Keep Giong...",
          timer: 2000,
        });
      }
    } catch {
      Swal.fire({
        title: "Problem while Cart!",
        text: "Keep Doing...",
        timer: 2000,
      });
    }
  };

  const handleIncreaseQty = () => {
    setQty((prevQty) => prevQty + 1);
  };

  const handleDecreaseQty = () => {
    if (qty > 1) {
      setQty((prevQty) => prevQty - 1);
    }
  };

  return (
    <div>
      {product ? (
        <div className="group my-10 flex w-full max-w-xs flex-col overflow-hidden border border-gray-100 bg-white shadow-md">
          <a className="relative flex h-60 overflow-hidden" href="#">
            <img
              className="absolute top-0 right-0 h-full w-full object-cover"
              src={`http://127.0.0.1:8000/${product.product_image}`}
              alt="product image"
            />
            <div className="absolute -right-16 bottom-0 mr-2 mb-4 space-y-2 transition-all duration-300 group-hover:right-0">
              <button className="flex h-10 w-10 items-center justify-center bg-gray-900 text-white transition hover:bg-gray-700">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z"
                    clipRule="evenodd"
                  />
                </svg>
              </button>
            </div>
          </a>
          <div className="mt-4 px-5 pb-5">
            <a href="#">
              <h5 className="text-xl tracking-tight text-slate-900">
                {product.product_name}
              </h5>
            </a>
            <div className="mt-2 mb-5 flex items-center justify-between">
              <p>
                {product.price && (
                  <span className="text-3xl font-bold text-slate-900">
                    {product.price}
                  </span>
                )}
              </p>
            </div>
            
            <div className="flex items-center justify-between mb-2">
              <button
                className="flex items-center  bg-gray-900 px-2 py-1 text-sm text-white transition hover:bg-gray-700"
                onClick={handleDecreaseQty}
              >
                -
              </button>
              <span className="text-base text-slate-900">{qty}</span>
              <button
                className="flex items-center  bg-gray-900 px-2 py-1 text-sm text-white transition hover:bg-gray-700"
                onClick={handleIncreaseQty}
              >
                +
              </button>
            </div>
            {user ? (
              <button
                className="flex items-center  bg-gray-900 px-2 py-1 text-sm text-white transition hover:bg-gray-700"
                onClick={handleCart}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="mr-2 h-5 w-5"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path d="M3 1a1 1 0 000 2h1.22l.305 1.222a.997.997 0 00.01.042l1.358 5.43-.893.892C3.74 11.846 4.632 14 6.414 14H15a1 1 0 000-2H6.414l1-1H14a1 1 0 00.894-.553l3-6A1 1 0 0017 3H6.28l-.31-1.243A1 1 0 005 1H3zM16 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM6.5 18a1.5 1.5 0 100-3 1.5 1.5 0 000 3z" />
                </svg>
                Add to cart
              </button>
            ) : (
              <button  className="w-full rounded-lg bg-gray-900 px-4 py-2 text-center text-base font-semibold text-white shadow-md ring-gray-500 ring-offset-2 transition focus:ring-2" onClick={()=>navigate('/login')}>Login</button>
            )}
          </div>
        </div>
      ) : (
        <p>Loading....</p>
      )}
    </div>
  );
}

export default Product;

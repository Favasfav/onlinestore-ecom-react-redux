

import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';

function Cartlist() {
  const [list, setList] = useState([]);
  const user = useSelector((state) => state.user.user);

  useEffect(() => {
    const fetchdata = async () => {
      try {
        const response = await axios.get(`http://127.0.0.1:8000/cart/cartlist/${user.id}/`);
        console.log(response.data);
        setList(response.data);
      } catch {
        alert('no cart');
      }
    };

    fetchdata();
  }, []);

  return (
    <>
      {list ? (
        <div>
          <section className="flex flex-col items-center bg-white">
            <h1 className="mt-10 text-4xl font-bold text-gray-800">Cart Lists</h1>
            <div className="mt-10 grid gap-8 px-2 sm:max-w-lg md:max-w-screen-xl lg:grid-cols-3">
              {list.map((lst, index) => (
                <article
                  key={index}
                  className="mb-4 overflow-hidden rounded-xl border text-gray-700 shadow-md duration-500 ease-in-out hover:shadow-xl"
                >
                  <div className="">
                    {lst.product && lst.product.product_image && (
                      <img
                        src={`http://127.0.0.1:8000/${lst.product.product_image}`}
                        alt=""
                        className=""
                      />
                    )}
                  </div>
                  <div className="p-4">
                    <div className="pb-6">
                      <a
                        href="#"
                        className="text-lg hover:text-green-600 font-medium duration-500 ease-in-out"
                      >
                        Name : {lst.product ? lst.product.product_name : 'Product Name Not Available'}
                      </a>
                    </div>
                    <ul className="box-border flex list-none items-center border-t border-b border-solid border-gray-200 px-0 py-6">
                      <li className="mr-4 flex items-center text-left">
                        <p>Total : {lst.total}</p>
                      </li>
                      <li className="mr-4 flex items-center text-left">
                        <p>Quantity : {lst.qty}</p>
                      </li>
                    </ul>
                  </div>
                </article>
              ))}
            </div>
          </section>
        </div>
      ) : (
        <p>No element</p>
      )}
    </>
  );
}

export default Cartlist;

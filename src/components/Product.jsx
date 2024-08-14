import React from "react";
import { toast } from "react-hot-toast";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { add, remove } from "../redux/Slices/CartSlice";

const Product = ({ post }) => {
  const { cart } = useSelector((state) => state);
  const dispatch = useDispatch();

  const addToCart = () => {
    dispatch(add(post));
    toast.success("Item added to cart!");
  };

  const removeFromCart = () => {
    dispatch(remove(post.id));
    toast.error("Item removed from cart!");
  };

  return (
    <div className="group hover:scale-110 transition duration-300 ease-in flex flex-col items-center justify-between shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px] hover:shadow-[0px_-0px_95px_53px_#00000024] gap-3 p-4 mt-10 ml-5 rounded-xl">
      <div>
        <h1 className="text-gray-700 font-semibold text-lg text-left truncate w-40 mt-1">
          {post.title}
        </h1>
      </div>
      <div>
        <h1 className="w-40 text-gray-400 font-normal text-[10px] text-left">
          {post.description.split(" ").slice(0, 10).join(" ") + "..."}
        </h1>
      </div>
      <div className="h-[180px]">
        <img src={post.image} alt="" className="h-full w-full object-contain" />
      </div>

      <div className="flex justify-between items-center w-full mt-5">
        <div>
          <p className="text-green-600 font-semibold">
            ${post.price}
          </p>
        </div>

        {cart.some((p) => p.id === post.id) ? (
          <button
            className="group-hover:bg-gray-700 group-hover:text-white transition duration-300 ease-in text-gray-700 border-2
             border-gray-700 rounded-full font-semibold p-1 px-3 text-[12px] uppercase tracking-wide"
            onClick={removeFromCart}
          >
            Remove Item
          </button>
        ) : (
          <button
            className="group-hover:bg-gray-700 group-hover:text-white transition duration-300 ease-in text-gray-700 border-2
             border-gray-700 rounded-full font-semibold p-1 px-3 text-[12px] uppercase tracking-wide"
            onClick={addToCart}
          >
            Add to Cart
          </button>
        )}
      </div>
    </div>
  );
};

export default Product;
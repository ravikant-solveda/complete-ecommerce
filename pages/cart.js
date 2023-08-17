import React from "react";
import Image from "next/image";
import Link from "next/link";
import Wrapper from "@/components/Wrapper";
import CartItem from "@/components/CartItem";

const cart = () => {
  return (
    <div className="w-full md:py-20">
      <Wrapper>
        {/* HEADING AND PARAGRAPH START */}
        <div className="text-center max-w-[800px] mx-auto mt-8 md:mt-0">
          <div className="text-[28px] md:text-[34px] mb-5 font-semibold leading-tight">
            Shopping Cart
          </div>
        </div>
        {/* HEADING AND PARAGRAPH START */}
        <div className="flex flex-col lg:flex-row gap-12 pay-10">
          {/* CART ITEMS START */}
          <div className="flex-[2]">
            <div className="text-lg font-bold">Cart Items</div>
            <CartItem />
            <CartItem />
            <CartItem />
          </div>
          {/* CART ITEMS END */}

          {/* SUMMARY START */}
          <div className="flex-[1]">
            <div className="text-lg font-bold">Summary</div>
            <div className="text-lg bg-black/[0.05] rounded-xl ">
              <div className="flex justify-between px-5 pt-5">
                <div className="uppercase text-md md:text-lg font-medium text-black">
                  Subtotal
                </div>
                <div className="text-md md:text-lg font-medium text-black">
                  ₹ 19 695.00
                </div>
              </div>
              <div className="text-sm md:text-md p-5 border-t mt-5">
                It has survived not only five centuries, but also the leap into
                electronic typesetting, remaining essentially unchanged. It was
                popularised in the 1960s with the release of Letraset sheets
                containing Lorem Ipsum passages, and more recently with desktop
                publishing software like Aldus PageMaker including versions of
                bgLorem Ipsum.It is a long established fact that a reader will
                be distracted by the readable content of a page when looking at
                its layout.
              </div>
            </div>

            {/* BUTTON START */}
            <button className="w-full py-4 rounded-full bg-black text-white text-lg font-medium transition-transform active:scale-95 my-3 hover:opacity-75">
              Checkout
            </button>
            {/* BUTTON START */}
          </div>
          {/* SUMMARY END */}
        </div>

        {/* IF CART IS EMPTY; THIS WILL BE SHOW */}
        <div className="flex-[2] flex flex-col items-center pb-[50px]  md:mt-14">
          <Image 
                src="/empty-cart.jpg" 
                width={300} 
                height={300} 
                className="w-[300px] md:w-[400px]"
                alt="empty cart image"
                />
                <span className="text-xl font-bold">your cart is empty</span>
                <span className="text-center mt-4">
                    Looks like you have not added anything in your cart. <br />
                    Go ahead and explore top categories.
                </span>
                <Link 
                    href='/'
                    className="py-4 px-8 mt-7 rounded-full bg-black text-white text-lg font-medium transition-transform hover:scale-95 mb-3 "
                >
                    Continue Shoping
                </Link>
        </div>

      </Wrapper>
    </div>
  );
};

export default cart;

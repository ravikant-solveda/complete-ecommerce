import ProductDetailsCarousel from '@/components/ProductDetailsCarousel'
import Wrapper from '@/components/Wrapper'
import React from 'react'

const ProductDetails = () => {
  return (
    <div className='w-full md:py-20'>
        <Wrapper>
            <div className='flex flex-col lg:flex-row md:px-10 gap-[50px] lg:gap-[100px]'>
                {/* left column start */}
            <div className='w-full md:w-auto flex-[1.5] max-w-[500px] lg:max-w-full mx-auto lg:mx-0'>
              <ProductDetailsCarousel/>
              
            </div>
              {/* left column end */}

              {/* left column start */}
            <div className='flex-[1] py-3'> 
             {/* PRODUCT TITLE */}
                <div className='text-[34px] font-semibold mb-2'>
                    Jordan Retro 6 6
                </div>
                {/* PRODUCT SUBTITLE */}
                <div className='text-lg font-semibold mb-5'>
                    Men's Golf Shoes
                </div>
                 {/* PRODUCT PRICE */}
                 <div className='text-lg font-semibold mb-5'>
                    MRP: ₹ 19 695.00
                </div>
                 <div className='text-md font-medium text-black/[0.5] '>
                   incl. of taxes 
                 </div>
                 <div className='text-md font-medium text-black/[0.5] mb-20'>
                    {`(ALso includes all application duties)`}
                 </div>
                {/* PRODUCT SIZE RANGE START */}
                 <div className='mb-10'>
                    <div className='flex justify-between mb-2'> 
                        <div className='text-md font-semibold'>
                            Select Size
                        </div>
                        <div className='text-md font-medium text-black/[0.5] cursor-pointer'>
                            Select Guide
                        </div>
                    </div>
                    {/* SIZE START */}
                    <div className='grid grid-cols-3 gap-2'>
                        <div className='border rounded-md text-center py-3 font-medium hover:border-black cursor-pointer'>
                            UK 6
                        </div>
                        <div className='border rounded-md text-center py-3 font-medium hover:border-black cursor-pointer'>
                            UK 6.5
                        </div>
                        <div className='border rounded-md text-center py-3 font-medium hover:border-black cursor-pointer'>
                            UK 7
                        </div>
                        <div className='border rounded-md text-center py-3 font-medium hover:border-black cursor-pointer'>
                            UK 7.5
                        </div>
                        <div className='border rounded-md text-center py-3 font-medium hover:border-black cursor-pointer'>
                            UK 8
                        </div>
                        <div className='border rounded-md text-center py-3 font-medium hover:border-black cursor-pointer'>
                            UK 8.5
                        </div>
                        <div className='border rounded-md text-center py-3 font-medium hover:border-black cursor-pointer'>
                            UK 9
                        </div>
                        <div className='border rounded-md text-center py-3 font-medium hover:border-black cursor-pointer'>
                            UK 9.5
                        </div>
                        <div className='border rounded-md text-center py-3 font-medium cursor-not-allowed bg-black/[0.1] opacity-50'>
                            UK 10
                        </div>
                        <div className='border rounded-md text-center py-3 font-medium cursor-not-allowed bg-black/[0.1] opacity-50'>
                            UK 10.5
                        </div>
                        <div className='border rounded-md text-center py-3 font-medium cursor-not-allowed bg-black/[0.1] opacity-50'>
                            UK 11
                        </div>
                    </div>
                    {/* START END */}
                    
                    {/* SHOW ERROR END */}
                    <div className='text-red-600 mt-1'>
                        Size selection is required
                    </div>
                 </div>
                 {/* PRODUCT SIZE RANGE END */}

                {/* ADD TO CART BUTTON START */}
                 <button className='w-full py-4 rounded-full bg-black text-white text-lg font-medium transition-transform active:scale-95 mb-3 hover:opacity-75'>
                    Add to Cart
                 </button>
                 {/* ADD TO CART BUTTON END */}

                {/* WISHLIST BUTTON START */}
                 <button className='w-full py-4 rounded-full border border-black text-lg font-medium transition-transform active:scale-95 flex items-center justify-center gap-2 hover:opacity-75 mb-10 '>
                    Wishlist
                 </button>
                 {/* WHISHLIST BUTTON END */}
            </div>
              {/* left column end */}
            </div>
        </Wrapper>
    </div>
  )
}

export default ProductDetails
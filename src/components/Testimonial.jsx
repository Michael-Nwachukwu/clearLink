import React from 'react'

const Testimonial = () => {

  return (
    <>
        <section className='py-[96px]'>
            <div className="grid sm:grid-cols-2 gap-[64px] place-items-center">
                <div className="flex flex-col items-start gap-[48px]">
                    <img src="/images/shopify-com-svg.svg" alt="" />
                    <div className="inline-flex items-center">
                      {[...Array(5)].map((_, index) => (
                        <img key={index} src="/images/star.svg" alt="" />
                      ))}
                    </div>
                    <div>
                        <h1 style={{ lineHeight: '60px',letterSpacing: '-0.88px' }} className='text-[#101828] text-[44px] font-medium '>ClearLink has upgraded our remote meetings. High-quality video, screen sharing, andtop-notch security make it essential for our team.</h1>
                    </div>
                    <div className="flex justify-between items-center w-full">
                        <div className="inline-flex items-center gap-[16px]">
                            <img src="/images/avatar.png" alt="" />
                            <div className="flex flex-col items-start">
                                <p style={{ lineHeight: '30px' }} className="font-semibold text-[20px] text-[#101828]">
                                    Sarah Thompson
                                </p>
                                <p className="font-normal text-[18px] text-[#475467]">Project Manager, Shopify</p>
                            </div>
                        </div>
                        <div className="flex justify-between gap-[32px]"> 
                            <button className="flex items-center justify-center w-[56px] h-[56px] rounded-full border border-[#D1E9FF] bg-[rgba(255, 255, 255, 0.90)]">
                                <img src="public/images/arrow-left.svg" alt="" />
                            </button>
                            <button className="flex items-center justify-center w-[56px] h-[56px] rounded-full border border-[#D1E9FF] bg-[rgba(255, 255, 255, 0.90)]">
                                <img src="public/images/arrow-right.svg" alt="" />
                            </button>
                        </div>
                    </div>
                </div>
                <img src="/images/Contents.png" className='h-[496px] w-full' alt="" />
            </div>

        </section>
    </>
  )
}

export default Testimonial
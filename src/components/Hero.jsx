import React from 'react'
import Header from './Header'

const Hero = () => {
  return (
    <>
        <div className="bg-pattern pt-4 sm:pt-[40px] pb-[96px] flex-col flex sm:gap-[160px] w-full px-3 sm:px-[108px] 2xl:px-[160px]">
            <Header />
            <div className="flex flex-col-reverse lg:flex-row justify-between items-center w-full pt-10">

                <div className="flex flex-col items-start gap-5 sm:gap-[32px] sm:w-[780px] sm:h-[472px] px-2 sm:px-0">
                    <h1 className='text-[#1D2939] text-3xl sm:text-[64px] font-semibold sm:leading-[72px] sm:tracking-[-1.28px]'>Uniting the world,one video call at a time</h1>
                    <p style={{ lineHeight: '32px' }} className='text-[#667085] font-normal'>Experience the future of communication with ClearLink – where crystal-clear video conferencing meets unparalleled simplicity.</p>
                    <div className="flex items-center gap-3 sm:gap-[20px]">
                        <button style={{ boxShadow: '0px 1px 2px 0px rgba(16, 24, 40, 0.05)' }} className="py-2 sm:py-[16px] px-3 sm:px-[28px] rounded-[100px] bg-[#175CD3] text-sm sm:text-[18px] sm:font-semibold text-white">
                            Start your free trial
                        </button>
                        <button className="inline-flex items-center gap-2 sm:gap-[12px] text-sm sm:text-lg font-semibold text-[#175CD3]">
                            <img src="/images/frame-10.svg" alt="" />
                            Discover AI assistant
                        </button>
                    </div>
                    <div>
                        <img src="/images/user-reviews.png" className='w-64 sm:w-auto' alt="" />
                    </div>
                </div>

                <img src="/images/Frame 25.png" className='w-full sm:w-[584px] sm:h-[488px]' alt="" />
        
            </div>
        </div>
    </>
  )
}

export default Hero
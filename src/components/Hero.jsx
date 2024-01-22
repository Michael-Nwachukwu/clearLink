import React from 'react'

const Hero = () => {
  return (
    <>
        <div className="flex flex-col-reverse lg:flex-row justify-between items-center">
            <div className="flex flex-col items-start gap-[32px] w-[780px] h-[472px]">
                <h1 className='text-[#1D2939] text-[64px] font-semibold hero-text'>Uniting the world,one video call at a time</h1>
                <p style={{ lineHeight: '32px' }} className='text-[#667085] font-normal'>Experience the future of communication with ClearLink – where crystal-clear video conferencing meets unparalleled simplicity.</p>
                <div className="flex items-center gap-[20px]">
                    <button style={{ boxShadow: '0px 1px 2px 0px rgba(16, 24, 40, 0.05)' }} className="py-[16px] px-[28px] rounded-[100px] bg-[#175CD3] text-[18px] font-semibold text-white">
                        Start your free trial
                    </button>
                    <button className="inline-flex items-center gap-[12px] text-lg font-semibold text-[#175CD3]">
                        <img src="/images/frame-10.svg" alt="" />
                        Discover AI assistant
                    </button>
                </div>
                <div>
                    <img src="/images/user-reviews.png" alt="" />
                </div>
            </div>

            <img src="/images/Frame 25.png" className='w-[584px] h-[488px]' alt="" />
            
        </div>
    </>
  )
}

export default Hero
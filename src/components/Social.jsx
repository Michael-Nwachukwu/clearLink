import React from 'react'

const Social = () => {
  return (
    <>
        <section className='sm:py-[96px] w-full sm:px-[108px] 2xl:px-[160px]'>
            <div className="flex flex-col gap-6 sm:gap-[48px] items-start">
                <p style={{ alignSelf: 'stretch' }} className='text-[20px] font-medium text-[#475467] text-center'>
                    Join 1,500+ companies already video conferencing the ClearLink way
                </p>
                <div className="flex flex-wrap p-2 items-center justify-between w-full">
                    <img className='w-16 sm:w-auto' src="/images/shopify-com-svg.svg" alt="" />
                    <img className='w-16 sm:w-auto' src="/images/coinbase-svg.svg" alt="" />
                    <img className='w-16 sm:w-auto' src="/images/dropbox-svg.svg" alt="" />
                    <img className='w-16 sm:w-auto' src="/images/intercom-svg.svg" alt="" />
                    <img className='w-16 sm:w-auto' src="/images/marvel-svg.svg" alt="" />
                    <img className='w-16 sm:w-auto' src="/images/automattic-svg.svg" alt="" />

                </div>
            </div>
        </section>
    </>
  )
}

export default Social
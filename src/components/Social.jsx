import React from 'react'

const Social = () => {
  return (
    <>
        <section className='py-[96px]'>
            <div className="flex flex-col gap-[48px] items-start">
                <p style={{ alignSelf: 'stretch' }} className='text-[20px] font-medium text-[#475467] text-center'>
                    Join 1,500+ companies already video conferencing the ClearLink way
                </p>
                <div className="flex items-center justify-between w-full">
                    <img src="/images/shopify-com-svg.svg" alt="" />
                    <img src="/images/coinbase-svg.svg" alt="" />
                    <img src="/images/dropbox-svg.svg" alt="" />
                    <img src="/images/intercom-svg.svg" alt="" />
                    <img src="/images/marvel-svg.svg" alt="" />
                    <img src="/images/automattic-svg.svg" alt="" />

                </div>
            </div>
        </section>
    </>
  )
}

export default Social
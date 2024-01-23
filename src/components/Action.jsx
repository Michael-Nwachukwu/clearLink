import React from 'react'

const Action = () => {
    return (
        <>
            <section className='pt-[96px]'>
                <div className="grid grid-cols-2 place-items-center">
                    <div className="flex flex-col items-start gap-[32px] pl-[108px] 2xl:pl-[160px]">
                        <h1 className="font-semibold tracking-[-0.96px] leading-[60px] text-[48px] text-[#101828]">Ready to clear the path to perfect communication?</h1>
                        <div className='pl-[16px] gap-[20px] flex flex-col'>
                            <div className="inline-flex items-center gap-[12px]">
                                <img src="/images/check-circle.svg" alt="" />
                                <p className="font-normal text-24px] leading-8 text-[#475467]">30 days free trial</p>
                            </div>
                            <div className="inline-flex items-center gap-[12px]">
                                <img src="/images/check-circle.svg" alt="" />
                                <p className="font-normal text-24px] leading-8 text-[#475467]">Cancel at any time</p>
                            </div>
                            <div className="inline-flex items-center gap-[12px]">
                                <img src="/images/check-circle.svg" alt="" />
                                <p className="font-normal text-24px] leading-8 text-[#475467]">Access to all features</p>
                            </div>
                            <div className="inline-flex items-center gap-[12px]">
                                <img src="/images/check-circle.svg" alt="" />
                                <p className="font-normal text-24px] leading-8 text-[#475467]">Personalized onboarding</p>
                            </div>
                        </div>
                        <div className='inline-flex gap-2'>
                            <button style={{ boxShadow: "0px 1px 2px 0px rgba(16, 24, 40, 0.05"
                            }} className='text-sm font-medium bg-[#FFFFFF] w-[144px] h-[52px] rounded-[100px] border border-[#98A2B3] p-[14px, 24px] gap-[4px] text-[#101828]'>Talk to sales</button>
                            <button style={{ boxShadow: "0px 1px 2px 0px rgba(16, 24, 40, 0.05"
                            }} className='text-sm font-medium bg-[#175CD3] w-[167px] h-[52px] rounded-[100px] border border-[#98A2B3] p-[14px, 24px] gap-[4px] text-[#FFFFFF]'>Sign up for free</button>
                        </div>
                    </div>
                    <img src="/images/Screen-mockup.png" className='h-[682px] w-[1024px] object-cover rounded-tl-[16px] border-t-8 border-l-8 border-[#101828]' alt="" />
                </div>
            </section> 
        </>
    )
}

export default Action
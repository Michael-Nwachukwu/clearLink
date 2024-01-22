import React from 'react'
import ChevronDown from '../../public/images/chevron-down.svg'

const Header = () => {
    const ChevronDown = () => {
        return <svg width="19" height="18" viewBox="0 0 19 18" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g id="chevron-down">
                <path id="Icon" d="M5.19183 6.75L9.69183 11.25L14.1918 6.75" stroke="#667085" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
            </g>
        </svg>

    }
    return (
        <>
            <header className=''>
                <div className="mx-auto flex items-center justify-between py-[16px] px-[32px] rounded-[100px] border border-[#D0D5DD] bg-[#F2F4F7]">
                    <div className="inline-flex items-center">
                        <img src="/images/group.svg" alt="" />
                        <p className='text-[#101828] font-semibold text-[24px]'>ClearLink</p>
                    </div>

                    <nav className='flex justify-between items-center gap-[40px]'>
                        <a href="#" className='inline-flex gap-1 items-center'>Products <ChevronDown /></a>
                        <a href="#" className='inline-flex gap-1 items-center'>Solutions <ChevronDown /></a>
                        <a href="#" className='inline-flex gap-1 items-center'>Resources <ChevronDown /></a>
                        <a href="#" className='inline-flex gap-1 items-center'>Pricing <ChevronDown /></a>
                    </nav>

                    <div className='inline-flex gap-2'>
                        <button style={{ boxShadow: "0px 1px 2px 0px rgba(16, 24, 40, 0.05"
                         }} className='text-sm font-medium bg-[#FFFFFF] w-[144px] h-[52px] rounded-[100px] border border-[#98A2B3] p-[14px, 24px] gap-[4px] text-[#101828]'>Talk to sales</button>
                         <button style={{ boxShadow: "0px 1px 2px 0px rgba(16, 24, 40, 0.05"
                         }} className='text-sm font-medium bg-[#175CD3] w-[167px] h-[52px] rounded-[100px] border border-[#98A2B3] p-[14px, 24px] gap-[4px] text-[#FFFFFF]'>Sign up for free</button>
                    </div>
                    
                </div>

            </header>
            {/* <div className="flex w-[1472px] items-center justify-between px-[32px] py-[16px] relative bg-gray-100 rounded-[100px] border border-solid border-gray-300">
                <div className="items-center gap-[10px] inline-flex relative flex-[0_0_auto]">
                    <img className="relative w-[25.38px] h-[28px]" alt="Group" src="group.png" />
                    <p className="relative w-fit mt-[-1.00px] [font-family:'Inter-SemiBold',Helvetica] font-semibold text-transparent text-[24px] tracking-[0] leading-[normal]">
                        <span className="text-[#0f1728]">ClearLink</span>
                        <span className="text-[#518bff]">.</span>
                    </p>
                </div>
                <div className="items-start gap-[40px] inline-flex relative flex-[0_0_auto]">
                    <div className="inline-flex items-center gap-[6px] relative flex-[0_0_auto]">
                        <div className="relative w-fit mt-[-1.00px] font-text-lg-semibold font-[number:var(--text-lg-semibold-font-weight)] text-gray-500 text-[length:var(--text-lg-semibold-font-size)] tracking-[var(--text-lg-semibold-letter-spacing)] leading-[var(--text-lg-semibold-line-height)] whitespace-nowrap [font-style:var(--text-lg-semibold-font-style)]">
                            Products
                        </div>
                        <ChevronDown className="!relative !w-[18px] !h-[18px]" color="#667085" />
                    </div>
                    <div className="inline-flex items-center gap-[6px] relative flex-[0_0_auto]">
                        <div className="relative w-fit mt-[-1.00px] font-text-lg-semibold font-[number:var(--text-lg-semibold-font-weight)] text-gray-500 text-[length:var(--text-lg-semibold-font-size)] tracking-[var(--text-lg-semibold-letter-spacing)] leading-[var(--text-lg-semibold-line-height)] whitespace-nowrap [font-style:var(--text-lg-semibold-font-style)]">
                            Solutions
                        </div>
                        <ChevronDown className="!relative !w-[18px] !h-[18px]" color="#667085" />
                    </div>
                    <div className="inline-flex items-center gap-[6px] relative flex-[0_0_auto]">
                        <div className="relative w-fit mt-[-1.00px] font-text-lg-semibold font-[number:var(--text-lg-semibold-font-weight)] text-gray-500 text-[length:var(--text-lg-semibold-font-size)] tracking-[var(--text-lg-semibold-letter-spacing)] leading-[var(--text-lg-semibold-line-height)] whitespace-nowrap [font-style:var(--text-lg-semibold-font-style)]">
                            Resources
                        </div>
                        <ChevronDown className="!relative !w-[18px] !h-[18px]" color="#667085" />
                    </div>
                    <div className="relative w-fit mt-[-1.00px] font-text-lg-semibold font-[number:var(--text-lg-semibold-font-weight)] text-gray-500 text-[length:var(--text-lg-semibold-font-size)] tracking-[var(--text-lg-semibold-letter-spacing)] leading-[var(--text-lg-semibold-line-height)] whitespace-nowrap [font-style:var(--text-lg-semibold-font-style)]">
                        Pricing
                    </div>
                </div>
                <div className="items-center gap-[8px] inline-flex relative flex-[0_0_auto]">
                    <img
                        className="relative flex-[0_0_auto] mt-[-1.00px] mb-[-3.00px] ml-[-2.00px]"
                        alt="Button"
                        src="button.png"
                    />
                    <button className="all-[unset] box-border inline-flex items-center justify-center gap-[4px] px-[24px] py-[14px] relative flex-[0_0_auto] bg-blue-700 rounded-[100px] overflow-hidden shadow-shadow-xs">
                        <div className="relative w-fit mt-[-2.00px] font-text-md-semibold font-[number:var(--text-md-semibold-font-weight)] text-basewhite text-[length:var(--text-md-semibold-font-size)] tracking-[var(--text-md-semibold-letter-spacing)] leading-[var(--text-md-semibold-line-height)] whitespace-nowrap [font-style:var(--text-md-semibold-font-style)]">
                            Sign up for free
                        </div>
                    </button>
                </div>
            </div> */}

        </>
    )
}

export default Header

color: '#101828';
fontSize: 24;
fontFamily: 'Inter';
fontWeight: '600';
wordWrap: 'break-word'
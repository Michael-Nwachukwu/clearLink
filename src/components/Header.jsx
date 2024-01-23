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
                <div className="mx-auto flex items-center justify-between p-3 sm:py-[16px] sm:px-[32px] rounded-[100px] border border-[#D0D5DD] bg-[#F2F4F7]">

                    <div className="inline-flex items-center">
                        <img src="/images/group.svg" className='w-5' alt="" />
                        <p className='text-[#101828] font-semibold text-md sm:text-[24px]'>ClearLink</p>
                    </div>

                    <nav className='hidden sm:flex justify-between items-center gap-[40px]'>
                        <a href="#" className='inline-flex gap-1 items-center'>Products <ChevronDown /></a>
                        <a href="#" className='inline-flex gap-1 items-center'>Solutions <ChevronDown /></a>
                        <a href="#" className='inline-flex gap-1 items-center'>Resources <ChevronDown /></a>
                        <a href="#" className='inline-flex gap-1 items-center'>Pricing <ChevronDown /></a>
                    </nav>

                    <div className='hidden sm:inline-flex gap-2'>
                        <button style={{ boxShadow: "0px 1px 2px 0px rgba(16, 24, 40, 0.05"
                         }} className='text-sm font-medium bg-[#FFFFFF] w-[144px] h-[52px] rounded-[100px] border border-[#98A2B3] p-[14px, 24px] gap-[4px] text-[#101828]'>Talk to sales</button>
                         <button style={{ boxShadow: "0px 1px 2px 0px rgba(16, 24, 40, 0.05"
                         }} className='text-sm font-medium bg-[#175CD3] w-[167px] h-[52px] rounded-[100px] border border-[#98A2B3] p-[14px, 24px] gap-[4px] text-[#FFFFFF]'>Sign up for free</button>
                    </div>

                    <p className='text-gray-700 font-medium sm:hidden'>MENU</p>
                    
                </div>

            </header>

        </>
    )
}

export default Header
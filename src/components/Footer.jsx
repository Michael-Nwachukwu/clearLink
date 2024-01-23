import React from 'react'

const Footer = () => {
  return (
    <>
        <footer className='pt-[96px]'>
            <div className="pb-12 px-[108px] 2xl:px-[160px]">

                <div className="flex items-start justifybetween gap-[100px]">
                    <div className="w-[400px]">
                        <div>
                            <div className="inline-flex items-center">
                                <img src="/images/group.svg" alt="" />
                                <p className='text-[#101828] font-semibold text-[24px]'>ClearLink</p>
                            </div>
                            <div>
                                <p className="font-normal leading-7 text-[#475467] text-[18px]">
                                    ClearLink is your gateway to effortless, high-quality video conferencing. Join us in shaping the future of communication!
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="grid grid-cols-5 gap-[32px]">
                        <div className='space-y-[16px]'>
                            <p className="font-semibol text-[#667085] text-[16px] leading-6">Product</p>
                            <ul className='space-y-[16px]'>
                                <li className='font-semibold text-[#475467] text-[18px] leading-7'>Overview</li>

                                <li className='font-semibold text-[#475467] text-[18px] leading-7'>Features</li>

                                <li className='font-semibold text-[#475467] text-[18px] leading-7'>Solutions</li>

                                <li className='font-semibold text-[#475467] text-[18px] leading-7'>Tutorials</li>

                                <li className='font-semibold text-[#475467] text-[18px] leading-7'>Pricing</li>
                            </ul>
                        </div>

                        <div className='space-y-[16px]'>
                            <p className="font-semibol text-[#667085] text-[16px] leading-6">Company</p>
                            <ul className='space-y-[16px]'>
                                <li className='font-semibold text-[#475467] text-[18px] leading-7'>About us</li>

                                <li className='font-semibold text-[#475467] text-[18px] leading-7'>Careers</li>

                                <li className='font-semibold text-[#475467] text-[18px] leading-7'>Press</li>

                                <li className='font-semibold text-[#475467] text-[18px] leading-7'>News</li>

                                <li className='font-semibold text-[#475467] text-[18px] leading-7'>Contact</li>
                            </ul>
                        </div>

                        <div className='space-y-[16px]'>
                            <p className="font-semibol text-[#667085] text-[16px] leading-6">Resources</p>
                            <ul className='space-y-[16px]'>
                                <li className='font-semibold text-[#475467] text-[18px] leading-7'>Blog</li>

                                <li className='font-semibold text-[#475467] text-[18px] leading-7'>Events</li>

                                <li className='font-semibold text-[#475467] text-[18px] leading-7'>Help center</li>

                                <li className='font-semibold text-[#475467] text-[18px] leading-7'>Tutorials</li>

                                <li className='font-semibold text-[#475467] text-[18px] leading-7'>Support</li>
                            </ul>
                        </div>

                        <div className='space-y-[16px]'>
                            <p className="font-semibol text-[#667085] text-[16px] leading-6">Legal</p>
                            <ul className='space-y-[16px]'>
                                <li className='font-semibold text-[#475467] text-[18px] leading-7'>Terms</li>

                                <li className='font-semibold text-[#475467] text-[18px] leading-7'>Privacy</li>

                                <li className='font-semibold text-[#475467] text-[18px] leading-7'>Cookie center</li>

                                <li className='font-semibold text-[#475467] text-[18px] leading-7'>Licenses</li>

                                <li className='font-semibold text-[#475467] text-[18px] leading-7'>Contact</li>
                            </ul>
                        </div>

                        <div className='space-y-[16px]'>
                            <p className="font-semibol text-[#004EEB] text-[16px] leading-6">Get the app</p>
                            <ul className='space-y-[16px]'>
                                <img src="/images/mobile-app-store-badge.png" alt="" />
                                <img src="/images/mobile-app-store-badge.svg" alt="" />
                            </ul>
                        </div>
                    </div>
                </div>

            </div>
            <div className="bg-[#F9FAFB] py-12 px-[108px] 2xl:px-[160px]">
                <div className="flex justify-between items-center">
                    <p className="font-normal text-base text-gray-500">© 2023 ClearLink. All rights reserved.</p>
                    <div className="flex gap-6">
                        <img src="/images/linkedin.svg" alt="" />
                        <img src="/images/twitter.svg" alt="" />
                        <img src="/images/facebook.svg" alt="" />
                        <img src="/images/instagram.svg" alt="" />
                        <img src="/images/github.svg" alt="" />
                        <img src="/images/youtube.svg" alt="" />
                    </div>
                </div>
            </div>
        </footer>
    </>
  )
}

export default Footer
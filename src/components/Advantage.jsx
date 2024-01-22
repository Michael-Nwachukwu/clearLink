import React from 'react'

const Advantage = () => {

    const advantages =[
        {
            icon: '/images/video-recorder.svg',
            title: 'Crystal-clear HD video',
            detail: 'No more pixelation or blurriness – just stunning, lifelike clarity that brings your team closer in meetings.'
        },
        {
            icon: '/images/recording-01.svg',
            title: 'Noise-canceling audio',
            detail: 'Say goodbye to distractions with our advanced audio tech for crisp, interruption-free conversations.'
        },
        {
            icon: '/images/calendar.svg',
            title: 'Scheduling made easy',
            detail: `Streamline your agenda with ClearLink's intuitive scheduling. Set up meetings, send invitations, and receive reminders in one place.`
        },
        {
            icon: '/images/lock-unlocked-04.svg',
            title: 'Bank-grade security',
            detail: `Your privacy is our priority with bank-grade security protocols safeguarding your meetings and data from unwanted intruders.`
        }
    ]

    return (
        <>
            <section className='py-[96px]'>
                <div className="flex flex-col items-start gap-[80px]">
                    <div className="flex flex-col items-start gap-[20px]">
                        <p className='text-[#175CD3] text-[18px] font-semibold'>The ClearLink Advantage</p>
                        <h3 style={{ letterSpacing: '-0.96px', lineHeight: '60px' }} className='text-[#1D2939] text-[48px] font-semibold '>Why choose ClearLink?</h3>
                        <p className='text-[24px] font-normal text-[#667085] w-[842px]'>In a world where connection is everything, ClearLink takes the lead. Our cutting-edge video conferencing app offers:</p>
                    </div>
                    <div className="grid grid-cols-2 place-items-center gap-20">
                        <div className="">
                            <div className="grid grid-cols-2 gap-x-[40px] gap-y-[60px]">

                                {advantages.map((point, index) => {
                                    return (
                                        <div key={index} className="flex flex-col items-start">
                                            <div className="rounded-full flex justify-center items-center p-[16px] bg-[#F9FAFB]">
                                                <img src={point.icon} alt="" />
                                            </div>
                                            <h3 className="font-semibold text-[#101828] text-[24px]">
                                                {point.title}
                                            </h3>
                                            <p style={{ lineHeight: '28px' }} className='text-[#475467] text-[18px] font-normal'>{point.detail}</p>
                                        </div>
                                    )
                                })}

                            </div>
                        </div>
                        <div className="relative">
                            <img src="/images/people.png" className='' alt="" />
                            <img src="/images/hand-drawn-arrow.svg" className='arrow' alt="" />
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Advantage
import React, {useState} from 'react'

const Faqs = () => {

    const faqsData = [
        {
          question: "How many participants can join a ClearLink video conference?",
          answer: "ClearLink offers flexible meeting options. Depending on your subscription plan, you can host meetings with varying numbers of participants. Our plans are designed to accommodate small team collaborations and large-scale webinars, ensuring you have the right fit for your needs."
        },
        {
          question: "Can I use ClearLink on multiple devices?",
          answer: "ClearLink offers flexible meeting options. Depending on your subscription plan, you can host meetings with varying numbers of participants. Our plans are designed to accommodate small team collaborations and large-scale webinars, ensuring you have the right fit for your needs."
        },
        {
          question: "Is ClearLink compatible with other video conferencing platforms?",
          answer: "ClearLink offers flexible meeting options. Depending on your subscription plan, you can host meetings with varying numbers of participants. Our plans are designed to accommodate small team collaborations and large-scale webinars, ensuring you have the right fit for your needs."
        },
        {
          question: "How does ClearLink ensure the security of my video conferences?",
          answer: "ClearLink offers flexible meeting options. Depending on your subscription plan, you can host meetings with varying numbers of participants. Our plans are designed to accommodate small team collaborations and large-scale webinars, ensuring you have the right fit for your needs."
        },
        {
          question: "Do I need to download any software to use ClearLink?",
          answer: "ClearLink offers flexible meeting options. Depending on your subscription plan, you can host meetings with varying numbers of participants. Our plans are designed to accommodate small team collaborations and large-scale webinars, ensuring you have the right fit for your needs."
        },
        {
          question: "What kind of customer support does ClearLink provide?",
          answer: "ClearLink offers flexible meeting options. Depending on your subscription plan, you can host meetings with varying numbers of participants. Our plans are designed to accommodate small team collaborations and large-scale webinars, ensuring you have the right fit for your needs."
        }
    ];

    const [activeIndex, setActiveIndex] = useState(0); // Set the initial active index to 0

    const toggleAccordion = (index) => {
        setActiveIndex(index === activeIndex ? -1 : index); // Toggle the active index
    };

    return (
        <>
            <section className='py-14 sm:py-[96px] w-full sm:px-[108px] 2xl:px-[160px]'>
                <div className="grid sm:grid-cols-2 gap-[20px] px-4">
                    
                    <div className="flex flex-col items-start sm:w-[547px] gap-5 sm:gap-0">
                        <p className="font-semibold text-[18px] text-[#175CD3] leading-5">
                            Support
                        </p>
                        <h1 className="font-semibold text-[48px] text-[#1D2939] leading-[60px] tracking-[-0.96px]">
                            FAQs
                        </h1>
                        <p className='text-[#667085] text-[24px] font-normal leading-8'>Everything you need to know about the product and billing. Can’t find the answer you’re looking for? Please chat to our friendly team.</p>
                    </div>

                    <div className="flex flex-col">

                        {faqsData.map((faq, index) => (
                            <div key={index} className="flex flex-col">
                                <div className={`flex items-start gap-[24px] justify-between rounded-[16px] ${activeIndex === index ? 'bg-[#F9FAFB] border border-[#EAECF0]' : ''} py-[32px] px-2 sm:p-[32px] faqs-body`}>
                                    <div className="space-y-4">
                                        <h4 className='text-md sm:text-[20px] font-semibold leading-8 text-[#101828]' onClick={() => toggleAccordion(index)}>{faq.question}</h4>
                                        <div className={`${activeIndex === index ? '' : 'hidden'} text-[18px] font-normal leading-7 text-[#475467] faqs-answer`}>{faq.answer}</div>
                                    </div>
                                    <img src={`/images/${activeIndex === index ? 'minus-circle' : 'plus-circle'}.svg`} className='pt-1 action-btn' alt="" onClick={() => toggleAccordion(index)} />
                                </div>
                            </div>
                        ))} 

                    </div>
                </div>
            </section>
        </>
    )
}

export default Faqs
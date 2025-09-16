import React from 'react'
import Reviews from '@/components/sections/Reviews';

export const metadata = {
  title: "Services | Direct Bookingz",
  description: "Learn more about Direct Bookingz and our services.",
};




const services = [
  {
    title: "WEBSITE CREATION",
    description: "Responsive, fast-loading, and SEO-friendly websites tailored to your brand.",
    icon: "/images/icons/website-icon.png",
  },
  {
    title: "GOOGLE ADS",
    description: "Targeted ad campaigns to bring high-quality traffic to your site.",
    icon: "/images/icons/google-icon.png",
  },
  {
    title: "SOCIAL MEDIA MARKETING",
    description: "Engaging content and strategy to grow your online community.",
    icon: "/images/icons/social-media-icon.png",
  },
  {
    title: "SEO OPTIMIZATION",
    description: "Rank higher on Google and get found by your ideal customers.",
    icon: "/images/icons/seo-icon.png",
  },
  {
    title: "EMAIL MARKETING CAMPAIGNS",
    description: "Convert leads into loyal customers with strategic email campaigns.",
    icon: "/images/icons/gmail-icon.png",
  },
];


const page = () => {
  return (
    <div className='bg-black text-white font-bebas'>
      <section className='h-[1140px] relative max-[1600px]:h-[750px] max-[1200px]:h-[680px] max-[1000px]:h-fit'>
        <img src="/images/services-page/service-hero.avif" alt="" className='w-full h-full absolute top-0 left-0 object-cover' />
        <div className="h-full text-center px-[200px] flex flex-col items-center relative z-[1] max-[1200px]:px-[120px] max-[1000px]:px-[90px] max-[1000px]:py-[60px] max-[700px]:px-10 max-[500px]:pt-3 max-[500px]:px-3">
          <img src="/images/logo.png" alt="" className='w-[450px] max-[1600px]:w-[300px] max-[1200px]:w-[240px] max-[1200px]:mb-10 max-[1000px]:w-[190px] max-[500px]:w-[150px] max-[500px]:mb-5' />
          <h1 className='text-[150px] leading-[160px] text-center mb-5 max-[1600px]:text-[100px] max-[1600px]:leading-[100px] max-[1000px]:text-[70px] max-[1000px]:leading-[75px] max-[500px]:text-6xl max-[500px]:leading-[65px] max-[350px]:text-5xl max-[350px]:leading-[50px]'>
            Your RENTAL BUSINESS <br />
            Growth Partner
          </h1>
          <p className='font-outfit text-2xl text-white max-[1600px]:text-xl max-[1000px]:text-lg max-[500px]:text-base'>
            We help vacation rental businesses thrive in the digital world with professional websites, powerful ad campaigns, and marketing strategies that deliver measurable results. Our goal is to make your brand visible, engaging, and profitable.
          </p>
        </div>
      </section>

      <section className="py-16 px-[170px] max-[1400px]:py-12 max-[1400px]:px-[120px] max-[1000px]:px-20 max-[700px]:px-10 max-[500px]:px-3">
        <h2 className='text-[100px] text-center mb-[60px] max-[1600px]:text-[60px] max-[1600px]:mb-10 max-[1200px]:text-5xl'>CUSTOMER TESTIMONIALS</h2>
        {/* <div className="flex justify-between gap-[22px]">
          {testimonials.map((t, i) => (
            <div key={i}>
              <div
                className="relative mb-8
                        after:w-0 after:h-0 after:content-[''] after:absolute after:left-[26px] after:-bottom-4
                        after:border-l-[0px] after:border-r-[24px] after:border-t-[20px] after:border-l-transparent after:border-r-transparent after:border-t-[#3A3A3A]"
              >
                <div className="min-h-[375px] p-4 rounded-[10px] bg-[#3A3A3A] relative z-10 max-[1600px]:min-h-[350px]">
                  <img src="/images/icons/5-stars.png" alt="" className="mb-[9px] max-[1600px]:w-[130px]" />
                  <p className="font-outfit text-[22px] max-[1600px]:text-lg">{t.text}</p>
                </div>
              </div>
              <div className="flex items-center justify-between font-outfit">
                <div
                  className="size-[53px] flex items-center justify-center text-[34px] rounded-full"
                  style={{ backgroundColor: t.color, color: "#000" }}
                >
                  {t.initial}
                </div>
                <div className='w-[calc(100%-53px-18px)]'>
                  <h3 className="text-[30px] single-line max-[1600px]:text-2xl">{t.name}</h3>
                  <p className="text-[15px] max-[1600px]:text-sm">{t.position}</p>
                </div>
              </div>
            </div>
          ))}
        </div> */}
        <Reviews />
      </section>

      <section className='py-16 px-[170px] max-[1400px]:py-12 max-[1400px]:px-[120px] max-[1000px]:px-20 max-[700px]:px-10 max-[500px]:px-3'>
        <h2 className='text-[100px] mb-4 max-[1600px]:text-[60px] max-[1200px]:text-5xl'>SERVICES</h2>
        <div className="flex flex-wrap justify-between">
          {services.map((s, i) => (
            <div key={i} className="w-[calc(50%-50px)] flex items-center justify-between mb-[76px] max-[1000px]:w-[calc(50%-10px)] max-[700px]:w-full max-[700px]:mb-7">
              <div className="size-[124px] flex items-center justify-center bg-[rgba(255,255,255,0.17)] rounded-[10px] max-[1600px]:size-[100px] max-[1000px]:size-20">
                <img src={s.icon} alt={s.title} className="w-[75px] max-[1600px]:w-[50px] max-[1000px]:w-10" />
              </div>
              <div className="w-[calc(100%-140px)] max-[1600px]:w-[calc(100%-120px)] max-[1000px]:w-[calc(100%-100px)]">
                <h3 className="text-[45px] max-[1600px]:text-3xl max-[1000px]:text-2xl">{s.title}</h3>
                <p className="font-outfit text-[30px] leading-10 max-[1600px]:text-xl max-[1600px]:leading-7 max-[1000px]:text-base max-[1000px]:leading-5">{s.description}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className='py-16 max-[1400px]:py-12'>
        <div className="px-[170px] max-[1400px]:px-[120px] max-[1000px]:px-20 max-[700px]:px-10 max-[500px]:px-3">
          <h2 className='text-[100px] mb-4 max-[1600px]:text-[60px] max-[1200px]:text-5xl'>OUR WORK NOT BOUNDED BY BEATIFUL WEBSITES, CREATIVE VISUALS AND MOTION DESIGN</h2>
        </div>
        <img src="/images/services-page/all-services.png" alt="" className='w-full' />
      </section>

      <section className='py-16 px-[170px] max-[1400px]:py-12 max-[1400px]:px-[120px] max-[1000px]:px-20 max-[700px]:px-10 max-[500px]:px-3'>
        <div className="flex justify-between max-[1000px]:flex-col max-[1000px]:justify-start">
          <div className="w-[56%] relative max-[1000px]:w-full">
            <div className="absolute top-1/2 left-1/2 -translate-1/2 text-[500px] max-[1000px]:text-[300px]">?</div>
            <div className="w-full relative z-10 bg-[rgba(128,0,0,0.5)] backdrop-blur-lg rounded-[20px] py-[67px] px-[74px] max-[1600px]:rounded-xl max-[1600px]:py-10 max-[1600px]:px-12 max-[700px]:py-8 max-[700px]:px-8">
              <h2 className='text-[100px] mb-[40px] max-[1600px]:text-[60px] max-[1200px]:text-5xl max-[700px]:mb-7'>WHY CHOOSE US</h2>
              <ul>
                <li
                  className='mb-[62px] font-outfit text-[30px] pl-[49px] relative 
                            before:size-[23px] before:rounded-full before:bg-white before:content-[""] before:absolute before:top-1/2 before:left-0 before:-translate-y-1/2 
                            max-[1600px]:mb-10 max-[1600px]:pl-8 max-[1600px]:text-xl max-[1600px]:before:size-[18px] max-[1200px]:text-lg max-[700px]:mb-5 max-[700px]:text-base'
                >
                  <span className='font-bold'>Tailored Solutions –</span> Strategies customized for your business goals and industry.
                </li>
                <li
                  className='mb-[62px] font-outfit text-[30px] pl-[49px] relative 
                            before:size-[23px] before:rounded-full before:bg-white before:content-[""] before:absolute before:top-1/2 before:left-0 before:-translate-y-1/2 
                            max-[1600px]:mb-10 max-[1600px]:pl-8 max-[1600px]:text-xl max-[1600px]:before:size-[18px] max-[1200px]:text-lg max-[700px]:mb-5 max-[700px]:text-base'
                >
                  <span className='font-bold'>Proven Results –</span> Successful track record with measurable growth for clients.
                </li>
                <li
                  className='mb-[62px] font-outfit text-[30px] pl-[49px] relative 
                            before:size-[23px] before:rounded-full before:bg-white before:content-[""] before:absolute before:top-1/2 before:left-0 before:-translate-y-1/2 
                            max-[1600px]:mb-10 max-[1600px]:pl-8 max-[1600px]:text-xl max-[1600px]:before:size-[18px] max-[1200px]:text-lg max-[700px]:mb-5 max-[700px]:text-base'
                >
                  <span className='font-bold'>Transparent Pricing –</span> Clear, upfront costs with no hidden fees.
                </li>
                <li
                  className='mb-[62px] font-outfit text-[30px] pl-[49px] relative 
                            before:size-[23px] before:rounded-full before:bg-white before:content-[""] before:absolute before:top-1/2 before:left-0 before:-translate-y-1/2 
                            max-[1600px]:mb-10 max-[1600px]:pl-8 max-[1600px]:text-xl max-[1600px]:before:size-[18px] max-[1200px]:text-lg max-[700px]:mb-5 max-[700px]:text-base'
                >
                  <span className='font-bold'>Data-Driven Strategies –</span> Decisions backed by analytics for maximum impact.
                </li>
                <li
                  className='font-outfit text-[30px] pl-[49px] relative 
                            before:size-[23px] before:rounded-full before:bg-white before:content-[""] before:absolute before:top-1/2 before:left-0 before:-translate-y-1/2 
                            max-[1600px]:mb-10 max-[1600px]:pl-8 max-[1600px]:text-xl max-[1600px]:before:size-[18px] max-[1200px]:text-lg max-[700px]:mb-5 max-[700px]:text-base'
                >
                  <span className='font-bold'>Dedicated Support –</span> Ongoing assistance to ensure your success.
                </li>
              </ul>
            </div>
          </div>
          <div className="w-[40%] max-[1000px]:w-full">
            <ul className='w-full pt-20 max-[1000px]:pt-10'>
              <li className='w-full mb-[52px] text-[35px] font-outfit flex items-center justify-between max-[1600px]:mb-10 max-[1600px]:text-[28px] max-[1200px]:text-2xl max-[1000px]:mb-7 max-[1000px]:text-lg'>
                <div className="size-[104px] rounded-full bg-[rgba(255,255,255,0.17)] flex items-center justify-center max-[1600px]:size-20 max-[1000px]:size-[60px]">
                  <img src="/images/icons/email-white.png" alt="" className='max-[1600px]:w-10 max-[1000px]:size-8' />
                </div>
                <span className='w-[calc(100%-125px)] break-words max-[1600px]:w-[calc(100%-105px)] max-[1000px]:w-[calc(100%-80px)]'>
                  support@directbookingz.com
                </span>
              </li>
              <li className='w-full mb-[52px] text-[35px] font-outfit flex items-center justify-between max-[1600px]:mb-10 max-[1600px]:text-[28px] max-[1200px]:text-2xl max-[1000px]:mb-7 max-[1000px]:text-lg'>
                <div className="size-[104px] rounded-full bg-[rgba(255,255,255,0.17)] flex items-center justify-center max-[1600px]:size-20 max-[1000px]:size-[60px]">
                  <img src="/images/icons/phone-white.png" alt="" className='max-[1600px]:w-10 max-[1000px]:size-8' />
                </div>
                <span className='w-[calc(100%-125px)] break-words max-[1600px]:w-[calc(100%-105px)] max-[1000px]:w-[calc(100%-80px)]'>
                  +1 646 631 8459
                </span>
              </li>
            </ul>
            <div className="flex items-center gap-5">
              <a href='https://www.instagram.com/bookingz01/' target='_blank' className="size-[104px] rounded-full bg-[rgba(255,255,255,0.17)] flex items-center justify-center max-[1600px]:size-20 max-[1000px]:size-[60px]">
                <img src="/images/icons/instagram-white.png" alt="" className='max-[1600px]:w-10 max-[1000px]:size-7' />
              </a>
              <a href='https://www.facebook.com/people/Direct-Bookingz/61579162591943/' target='_blank' className="size-[104px] rounded-full bg-[rgba(255,255,255,0.17)] flex items-center justify-center max-[1600px]:size-20 max-[1000px]:size-[60px]">
                <img src="/images/icons/facebook-white.png" alt="" className='max-[1600px]:w-10 max-[1000px]:size-7' />
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default page
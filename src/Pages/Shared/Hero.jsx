import React from 'react'
import logo from '../../assets/kindly_logo.png'

export default function Hero() {
  return (
    <div className='flex place-items-center flex-col  py-10'>
        <div className='flex place-items-center justify-center flex-col py-10 gap-1'>
            <img src={logo}></img>
            <p>Connecting Hearts Through Giving !</p>
            <p>Kindly is a recurrent donations platform. </p>
                <p>We bridge the gap between giving and receiving, spreading kindness.</p>
        </div>
        <div className='h-1  w-1/2 bg-base-200 drop-shadow-md'></div>


        <div className=' flex   mx-96 py-10  gap-5'>
            <div className=' gap-y-2'>

                <h1 className='  text-4xl  text-center py-5'>Donate</h1>
                <p className=' mt-2 rounded-full p-5 bg-[#dbefeb]'>Donors are individuals or organizations offering physical items for donation on the platform</p>
                <p className=' mt-2 rounded-full p-5 bg-[#dbefeb]'>They list the items they wish to donate, providing details such as description, quantity, and condition.</p>
                <p className=' mt-2 rounded-full p-5 bg-[#dbefeb]'>Donors aim to contribute to the community by offering goods to those in need.</p>
                <p className=' mt-2 rounded-full p-5 bg-[#cbdebd]'>Donors may communicate with recipients to coordinate the logistics of donation delivery or pick-up.</p>
                <p className=' mt-2 rounded-full p-5 bg-[#cbdebd]'>They may engage with the platform to track the impact of their donations and participate in community discussions or events.</p>

            </div>
            <div>
                <h1 className=' text-4xl text-center py-5'>Claim </h1>
                <p className=' mt-2 rounded-full p-5 bg-[#cbdebd]'> Recipients are individuals or organizations seeking physical items available for donation on the platform.</p>
                <p className=' mt-2 rounded-full p-5 bg-[#cbdebd]'> They browse listings of available donations and request items they need.</p>
                <p className=' mt-2 rounded-full p-5 bg-[#cbdebd]'> Recipients seek assistance to fulfill their needs, such as food, clothing, or essential items.</p>
                <p className=' mt-2 rounded-full p-5 bg-[#dbefeb]'> Recipients may communicate with donors to arrange the receipt of donated items.</p>
                <p className=' mt-2 rounded-full p-5 bg-[#dbefeb]'> They may provide feedback on received donations and engage with the platform to express gratitude or share their stories.</p>

            </div>
        </div>

    </div>
  )
}

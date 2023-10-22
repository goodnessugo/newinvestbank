import React, { useState } from 'react'
import { LiaBarsSolid } from 'react-icons/lia'
import { MdOutlineMobileScreenShare } from 'react-icons/md'
import { FaMoneyBill1Wave } from 'react-icons/fa6'
import { BiTransfer } from 'react-icons/bi'
import { Link } from 'react-router-dom'


const Footer = () => {


   







    return (
        <>


            
            <div className=''>
                <div className='flex justify-between px-5 py-2   inactive top-6/6 w-screen '>



                    <Link to='/'>

                        <div className='flex flex-col justify-center items-center hover:text-red-500'>
                            <LiaBarsSolid className='text-4xl' />
                            <h1 className='leading-tight text-xs '>Overview</h1>
                        </div>
                    </Link>


                    <Link to='/airtime'>

                        <div className='flex flex-col justify-center items-center hover:text-red-500'>
                            <MdOutlineMobileScreenShare className='text-4xl' />
                            <h1 className='leading-tight text-xs '>Airtime</h1>
                        </div>
                    </Link>


                    <Link to='/transfer'>
                        <div className='flex flex-col justify-center items-center hover:text-red-500'>
                            <BiTransfer className='text-4xl' />
                            <h1 className='leading-tight text-xs '>Transfer</h1>
                        </div>
                    </Link>



                    <Link to='/bills'>
                        <div className='flex flex-col justify-center items-center hover:text-red-500'>
                            <FaMoneyBill1Wave className='text-4xl' />
                            <h1 className='leading-tight text-xs '>Bills</h1>
                        </div>
                    </Link>



                </div>
            </div>
            {/* overview section */}

        </>

    )
}

export default Footer
import React from 'react'
import { LiaBarsSolid } from 'react-icons/lia'
import { MdOutlineMobileScreenShare } from 'react-icons/md'
import { FaMoneyBill1Wave} from 'react-icons/fa6'
import { BiTransfer } from 'react-icons/bi'


const Footer = () => {
    return (
        <>

            {/* overview section */}
            <div className='flex justify-evenly py-2 bg-gray-50 text-gray-500 relative top-28'>
                <div className='flex flex-col justify-center items-center active'>
                    <LiaBarsSolid className='text-4xl' />
                    <h1 className='leading-tight text-sm font-bold'>Overview</h1>
                </div>
                <div className='flex flex-col justify-center items-center'>
                    <MdOutlineMobileScreenShare className='text-4xl' />
                    <h1 className='leading-tight text-sm font-bold'>Airtime</h1>
                </div>
                <div className='flex flex-col justify-center items-center'>
                    <BiTransfer className='text-4xl' />
                    <h1 className='leading-tight text-sm font-bold'>Transfer</h1>
                </div>
                <div className='flex flex-col justify-center items-center'>
                    <FaMoneyBill1Wave className='text-4xl' />
                    <h1 className='leading-tight text-sm font-bold'>Bills</h1>
                </div>
            </div>
        </>

    )
}

export default Footer
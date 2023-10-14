import React from 'react'
import AccountName from './AccountName'
import Logo from './Logo'
import { LiaBarsSolid } from 'react-icons/lia'
import { MdOutlineMobileScreenShare } from 'react-icons/md'
import { BiTransfer } from 'react-icons/bi'
import { CgData } from 'react-icons/cg'
import { FaMoneyBill1Wave } from 'react-icons/fa6'
import { BsQrCodeScan } from 'react-icons/bs'
import { MdFlightTakeoff } from 'react-icons/md'
import { RiShoppingCartFill } from 'react-icons/ri'
import { ImCreditCard } from 'react-icons/im'
import { FiPower } from 'react-icons/fi'


const Sidemenu = () => {
    return (

        < >
            <div className=''>
                <div className=' bg-red-500 flex justify-between items-center px-5 py-7'>
                    <div className='font-bold text-white '>
                        <AccountName />
                    </div>

                    <div>
                        <h1>
                            <Logo />
                        </h1>
                    </div>
                </div>




                {/* list of projects */}
                <div className=''>


                    {/* one projects */}
                    <div>
                        <div className='flex items-center gap-3  pl-3 py-3'>
                            <LiaBarsSolid />
                            <h1> Overview</h1>
                        </div>
                        <hr />
                    </div>


                    {/* one projects */}
                    <div>
                        <div className='flex items-center gap-3  pl-3 py-3'>


                            <BiTransfer  />
                            <h1> Transfer</h1>
                        </div>
                        <hr />
                    </div>


                    {/* one projects */}
                    <div>
                        <div className='flex items-center gap-3  pl-3 py-3'>
                            <MdOutlineMobileScreenShare  />
                            <h1> Airtime</h1>
                        </div>
                        <hr />
                    </div>


                    {/* one projects */}
                    <div>
                        <div className='flex items-center gap-3  pl-3 py-3'>
                            <CgData  />
                            <h1> Data Bundle</h1>
                        </div>
                        <hr />
                    </div>


                    {/* one projects */}
                    <div>
                        <div className='flex items-center gap-3  pl-3 py-3'>
                            <FaMoneyBill1Wave />
                            <h1> Bill payment</h1>

                        </div>
                        <hr />
                    </div>



                    {/* one projects */}
                    <div>
                        <div className='flex items-center gap-3  pl-3 py-3'>

                            <BsQrCodeScan  />
                            <h1> QR Scanner</h1>
                        </div>
                        <hr />
                    </div>



                    {/* one projects */}
                    <div>
                        <div className='flex items-center gap-3  pl-3 py-3'>
                            <MdFlightTakeoff  />
                            <h1> Travel & Leisure</h1>
                        </div>
                        <hr />
                    </div>



                    {/* one projects */}
                    <div>
                        <div className='flex items-center gap-3  pl-3 py-3'>
                            <RiShoppingCartFill  />
                            <h1>Shopping</h1>
                        </div>
                        <hr />
                    </div>



                    {/* one projects */}
                    <div>
                        <div className='flex items-center gap-3  pl-3 py-3'>
                            <ImCreditCard  />
                            <h1> Cards</h1>
                        </div>
                        <hr />
                    </div>



                    {/* one projects */}
                    <div>
                        <div className='flex items-center gap-3  pl-3 py-3 text-red-500'>
                            <FiPower  />
                            <h1> Sign Out</h1>
                        </div>
                        <hr />
                    </div>



                </div>
            </div>

        </>
    )
}

export default Sidemenu
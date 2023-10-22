import React, { useState } from 'react'
import { BiRightArrowCircle } from 'react-icons/bi'
import Footer from './Footer'
import SideMenuButton from './SideMenuButton'
import Logo from './Logo'
import { Link } from 'react-router-dom'
import Sidemenu from './SideMenu'
import { BsArrowRightCircle, BsBank2 } from 'react-icons/bs'
import { IoPersonSharp } from 'react-icons/io5'
import { IoCheckmarkCircleSharp } from 'react-icons/io5'
import { IoIosArrowDown, IoIosArrowDropdown, IoIosArrowForward } from 'react-icons/io'

const Bills = () => {




    // useState for sideMenu pop-up
    const [modal, setModal] = useState(false);

    const toggleModal = () => {
        setModal(!modal)
    }



    return (

        <>


            {/* ---------------------the modal and overlay section------------------ */}

            {modal && (

                <div className=' modal '>
                    <div className=' h-screen w-5/6  bg-white absolute z-50 '>
                        <Sidemenu />
                    </div>

                    <div className='overlay h-screen w-screen  bg-gray-500 opacity-50 absolute z-40' onClick={toggleModal}> </div>
                    {/* <Sidemenu /> */}
                </div>
            )}





            {/* -----------begining of seperation of vh (view height)------------ */}
            <div>

                <div className='h-[80vh] w-screen  overflow-x-hidden'>
                    <div className='relative'>



                        {/* -------------the title ,bar handle, and logo section --------------- */}

                        <div className='p-3 bg-red-600  flex justify-between top-0 sticky w-full'>
                            <div className='flex justify-between items-center gap-2 text-white'>


                                {/* this helps helps the Sidemenu to toggle */}
                                <div onClick={toggleModal}>

                                    <SideMenuButton />
                                </div>
                                <h1 className='font-bold'>Bill Payment</h1>
                            </div>


                            <div>
                                <h1 className='font-bold'>
                                    <Logo />
                                </h1>
                            </div>
                        </div>


                        {/* -------------------the begining of the transfer section-------------------- */}

                        <div className=' mx-10 my-3 p-5 border rounded flex justify-between items-center '>
                            <h1 className='text-red-500 text-sm'>Bill Payments History</h1>

                            <IoIosArrowForward />

                        </div>



                        <div className='mx-10 text-xs '>





                            <div>




                                {/*---------------- filling the form section---------------- */}
                                <div>
                                    <form action="">
                                        <div>
                                            <h1 className='pt-7 mb-2 font-semibold'>Choose Bill</h1>

                                        {/* select bill options */}
                                        <select className='text-sm p-5 w-full border'>
                                            <option value="" selected>Select Bill</option>
                                            <option value="">Electricity</option>
                                            <option value="">Education</option>
                                            <option value="">Home</option>
                                            <option value="">Home</option>
                                        </select>
                                        
                                        </div>

                                        <div>
                                            <h1 className='pt-7 mb-2 font-semibold'>Amount</h1>
                                            <input type="text" placeholder='0.00' className='text-sm p-5 w-full border' />
                                        </div>

                                        <hr className='mt-5 mb-7' />
                                        <button className='text-sm py-3  w-full border rounded bg-gray-300 text-white'>CONTINUE</button>

                                    </form>
                                </div>

                            </div>

                        </div>

                    </div>

                </div>







                {/* ---------------the footer section----------------------- */}

                <div className=' h-[20vh] w-screen flex  items-start fixed drop-shadow-md'>
                    <Footer />
                </div>

            </div>



        </>

    )
}

export default Bills
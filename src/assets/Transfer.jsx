import React, { useState } from 'react'
import { BiRightArrowCircle } from 'react-icons/bi'
import Footer from './Footer'
import SideMenuButton from './SideMenuButton'
import Logo from './Logo'
import { Link } from 'react-router-dom'
import Sidemenu from './SideMenu'



const Transfer = () => {



    // useState for sideMenu pop-up
    const [modal, setModal] = useState(false);

    const toggleModal = () => {
        setModal(!modal)
    }






    return (

        <>

            <div className='h-[80vh] w-screen '>
                <div className='relative'>
                    {/* ---------------------the modal and overlay section------------------ */}

                    {modal && (

                        <div className=' modal '>
                            <div className=' h-screen w-5/6  bg-white absolute z-50'>
                                <Sidemenu />
                            </div>

                            <div className='overlay h-screen w-screen  bg-gray-500 opacity-50 absolute z-40' onClick={toggleModal}> </div>
                            {/* <Sidemenu /> */}
                        </div>
                    )}




                    {/* -------------the title ,bar handle, and logo section --------------- */}
                    
                    <div className='p-3 bg-red-500  flex justify-between '>
                        <div className='flex justify-between items-center gap-2 text-white'>


                            {/* this helps helps the Sidemenu to toggle */}
                            <div onClick={toggleModal}>

                                <SideMenuButton />
                            </div>
                            <h1 className='font-bold'>Transfer</h1>
                        </div>


                        <div>
                            <h1 className='font-bold'>
                                <Logo />
                            </h1>
                        </div>
                    </div>






                    {/* -------------------the begining of the transfer section-------------------- */}

                    <div className=' mx-10 my-3 p-5 border rounded flex justify-between items-center'>
                        <h1 className='text-red-500 text-xs'>Transfer</h1>
                        <BiRightArrowCircle />

                    </div>
                </div>

            </div>







            {/* the footer section */}

            <div className=' h-[20vh] w-screen flex  items-start fixed drop-shadow-md'>
                <Footer />
            </div>

        </>

    )
}

export default Transfer
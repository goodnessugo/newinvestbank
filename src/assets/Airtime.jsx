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


const Airtime = () => {

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
                <h1 className='font-bold'>Airtime Recharge</h1>
              </div>


              <div>
                <h1 className='font-bold'>
                  <Logo />
                </h1>
              </div>
            </div>


            {/* -------------------the begining of the transfer section-------------------- */}

            <div className=' mx-10 my-3 p-5 border rounded flex justify-between items-center '>
              <h1 className='text-red-500 text-sm'>Airtime History</h1>

              <IoIosArrowForward />

            </div>



            <div className='mx-10 text-xs '>

              <h1 className='py-3 font-semibold'>Select Mobile Operator</h1>

              <div className='text-xs flex justify-between items-center overflow-y-hidden w-full h-auto gap-4 bg-yellow-500  '>


                {/* -----------one box------------- */}
                <div>

                  <div className=' active flex flex-col justify-between border h-20 w-20 rounded p-3'>
                    <div className='flex justify-between items-start pb-3 text-lg'>
                      <IoPersonSharp />  <IoCheckmarkCircleSharp />
                    </div>

                  </div>
                  <h1>MTN</h1>
                </div>


                {/* -----------one box------------- */}
                <div>

                  <div className=' active flex flex-col justify-between border h-20 w-20 rounded p-3'>
                    <div className='flex justify-between items-start pb-3 text-lg'>
                      <IoPersonSharp />  <IoCheckmarkCircleSharp />
                    </div>

                  </div>
                  <h1>airtel</h1>
                </div>


                {/* -----------one box------------- */}
                <div>

                  <div className=' active flex flex-col justify-between border h-20 w-20 rounded p-3'>
                    <div className='flex justify-between items-start pb-3 text-lg'>
                      <IoPersonSharp />  <IoCheckmarkCircleSharp />
                    </div>

                  </div>
                  <h1>Glo</h1>
                </div>


                {/* -----------one box------------- */}
                <div>

                  <div className=' active flex flex-col justify-between border h-20 w-20 rounded p-3'>
                    <div className='flex justify-between items-start pb-3 text-lg'>
                      <IoPersonSharp />  <IoCheckmarkCircleSharp />
                    </div>

                  </div>
                  <h1>9 Mobile</h1>
                </div>



                <div>
                  <BsArrowRightCircle />
                </div>



              </div>

              <div>




                {/*---------------- filling the form section---------------- */}
                <div>
                  <form action="">
                    <div>
                      <h1 className='pt-7 mb-2 font-semibold'>Select Source Account</h1>
                      <select placeholder='Select Account' className='text-sm p-5 w-full border'>
                        <option >Select Account</option>
                        <option>Home</option>
                        <option selected>Joy</option>
                      </select>
                    </div>
                    <div>
                      <h1 className='pt-7 mb-2 font-semibold'>Select Destination  Account</h1>
                      <select placeholder='Select Account' className='text-sm p-5 w-full border'>
                        <option >Select Account</option>
                        <option>Home</option>
                        <option selected>Joy</option>
                      </select>
                    </div>
                    <div>
                      <h1 className='pt-7 mb-2 font-semibold'>Amount</h1>
                      <input type="text" placeholder='0.00' className='text-sm p-5 w-full border' />
                    </div>
                    <div>
                      <h1 className='pt-7 mb-2 font-semibold'>Transaction Description</h1>
                      <input type="text" placeholder='Transaction Description' className='text-sm p-5 w-full border' />
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

export default Airtime
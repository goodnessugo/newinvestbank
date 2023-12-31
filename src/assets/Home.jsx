import React from 'react'
import { BsThreeDots, BsToggle2Off, BsToggle2On } from 'react-icons/bs'
import { FaCalendarDays } from 'react-icons/fa6'
import { PiTelevisionLight } from 'react-icons/pi'
import { MdFlightTakeoff } from 'react-icons/md'
import { ImCreditCard } from 'react-icons/im'
import { BsQrCodeScan } from 'react-icons/bs'
import { IoFingerPrint, IoSettingsOutline } from 'react-icons/io5'
import { CgData } from 'react-icons/cg'
import { RiShoppingCartFill } from 'react-icons/ri'
import { LiaBarsSolid } from 'react-icons/lia'
import { TbCurrencyNaira } from 'react-icons/tb'
import Footer from './Footer'
import SideMenuButton from './SideMenuButton'
import Sidemenu from './SideMenu'
import { useState } from 'react'
import AccountName from './AccountName'
import Logo from './Logo'
import AccountBalance from './AccountBalance'
import { Link } from 'react-router-dom'
import Modal from './Modal'

const Home = () => {



    // useState for sideMenu pop-up
    const [modal, setModal] = useState(false);

    const toggleModal = () => {
        setModal(!modal)
    }



    // useState for toggling view for Account Balance
    const [accountBalance, setAccountBalance] = useState(false);

    const [toggleButton, setToggleButton] = useState(false);

    const [hiddenText, setHiddenText] = useState(false);


    const toggleAccountBalance = () => {
        setAccountBalance(!accountBalance)
        setToggleButton(!toggleButton)
        setHiddenText(!hiddenText)
    }










    return (
        <  >

            <div className='upperpart h-[80vh] w-screen'>
                <div className='relative '>

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

                    


                    {/* -------------------the begining of the home section-------------------- */}
                    <div className='bg-red-500   w-screen  pt-5  absolute z-20'>

                        <div >
                            <div className='mx-5 mb-2  flex justify-between  '>
                                <div className='flex justify-between items-center gap-2 text-white'>


                                    {/* this helps helps the Sidemenu to toggle */}
                                    <div onClick={toggleModal}>
                                        <SideMenuButton />
                                    </div>
                                    <h1 className='font-bold'>Overview</h1>
                                </div>


                                <div>
                                    <h1 className='font-bold'>
                                        <Logo />
                                    </h1>
                                </div>
                            </div>

                            {/* THE preview Amount section */}
                            <div className='bg-white h-28 w-auto px-5 py-2 mx-5 rounded-md'>
                                <h1 className='text-red-500 font-bold'>1223551133</h1>
                                <hr />
                                <h1 className='font-bold text-gray-400'>
                                    <AccountName />
                                </h1>



                                {/*------------------- AccountBalance Section ------------- */}
                                <div className='flex justify-between'>
                                    <div className='flex text-2xl font-semibold '>
                                        <TbCurrencyNaira />



                                        {/* this code simple says if accountBalance is not true display the asterics "*******"  */}

                                        {accountBalance ?
                                            <div className=''>
                                                <AccountBalance />
                                            </div>

                                            : '******'
                                        }

                                    </div>


                                    {/* the Toggle button section between Account Balance,  toggle Button,  */}
                                    <div className='flex justify-between items-center gap-2'>
                                        <h1 className='text-xs text-gray-600'>
                                           
                                            {hiddenText ?

                                                <span className='pe-2'>Hide</span> : <span className='pe-2'>Show</span>

                                            } 
                                            balance</h1>




                                        {
                                            toggleButton ?

                                                <BsToggle2On className=' text-3xl text-red-500 ' onClick={toggleAccountBalance} />
                                                :
                                                <BsToggle2Off className='text-3xl text-gray-500' onClick={toggleAccountBalance} />
                                        }



                                    </div>

                                </div>
                            </div>

                            {/* the ledger and History section */}
                            <div className='px-5 py-3 mt-3 flex justify-between font-semibold text-white bg-gray-600 text-xs'>
                                <h1>Ledger Balance:
                                    { hiddenText ?

                                        <span className=''> Show </span>
                                         : 
                                         <span className='pl-2'>Hidden</span>

                                    }
                                </h1>


                                {/* History Section */}
                                <div className='flex justify-between items-center gap-1'>
                                    <FaCalendarDays />
                                    <Link to='/history'><h1>History</h1></Link>
                                </div>

                            </div>


                            {/*  the links section*/}

                            <div className='px-5 py-3 bg-white h-[46vh]'>
                                <h1>invest-Links</h1>
                                <hr />

                                <div className='my-5 flex justify-between  items-center '>

                                    <div className='flex flex-col justify-center items-center '>
                                        <ImCreditCard className='text-3xl' />
                                        <h1 className='text-xs'>Cards</h1>
                                    </div>
                                    <div className='flex flex-col justify-center items-center'>
                                        <PiTelevisionLight className='text-4xl' />
                                        <h1 className='text-xs'>Cable Tv</h1>
                                    </div>
                                    <div className='flex flex-col justify-center items-center'>
                                        <MdFlightTakeoff className='text-4xl' />
                                        <h1 className='leading-tight text-xs'>Travel & <br /> Leisure</h1>
                                    </div>
                                    <div className='flex flex-col justify-center items-center'>
                                        <BsQrCodeScan className='text-3xl' />
                                        <h1 className='text-xs'>QR Payments</h1>
                                    </div>

                                </div>


                                {/* second section */}
                                <hr />
                                <div className='my-5 flex justify-between   items-center '>

                                    <div className='flex flex-col justify-center items-center '>
                                        <IoFingerPrint className='text-3xl' />
                                        <h1 className='text-xs'>myBVN</h1>
                                    </div>
                                    <div className='flex flex-col justify-center items-center'>
                                        <CgData className='text-4xl' />
                                        <h1 className='text-xs'>Data</h1>
                                    </div>
                                    <div className='flex flex-col justify-center items-center'>
                                        <RiShoppingCartFill className='text-4xl' />
                                        <h1 className='leading-tight text-xs'>Shopping</h1>
                                    </div>
                                    <div className='flex flex-col justify-center items-center'>
                                        <IoSettingsOutline className='text-3xl' />
                                        <h1 className='text-xs'>Settings</h1>
                                    </div>

                                </div>

                                <hr />



                            </div>
                        </div>






                    </div>

                </div>

            </div>



            {/* ---------------footer----------------------- */}
            <div className=' h-[20vh] w-screen flex  items-start fixed drop-shadow-md'>
                <Footer />
            </div>



        </>

    )
}

export default Home
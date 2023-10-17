import React, { useState } from 'react'
import Sidemenu from './SideMenu';

const Modal = () => {


    // useState for sideMenu pop-up
    const [modal, setModal] = useState(false);

    const toggleModal = () => {
        setModal(!modal)
    }




    return (

        <>
            <div>

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


            </div>
        </>

    )
}

export default Modal
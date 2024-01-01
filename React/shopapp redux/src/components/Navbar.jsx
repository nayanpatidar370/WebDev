import React from 'react'
import { FaShoppingCart } from 'react-icons/fa';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
    return (
        <div className="bg-blue-500">
            <div className='flex flex-row justify-between'>
                <NavLink to="/">
                    <div className='w-[50px] g-[50px]'>
                        <img src='https://t3.ftcdn.net/jpg/03/99/53/44/360_F_399534445_zG1tMcAn0q7bCaPw2Lp5ZWiBiBgQYxvN.jpg' />
                    </div>
                </NavLink>
                <div>
                    <NavLink>
                        <p>Home</p>
                    </NavLink>

                    <NavLink to="/cart">
                        <div>
                            <FaShoppingCart />
                        </div>
                    </NavLink>

                </div>

            </div>

        </div>
    )
}

export default Navbar

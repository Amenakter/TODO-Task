import React from 'react';
import { NavLink } from 'react-router-dom'

const Navber = () => {
    return (
        <div class="navbar bg-base-100" >
            <div class="navbar-start  ">
                <div class="dropdown">
                    <label tabindex="0" class="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabindex="0" class="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                        <li><NavLink to='/'>Complete</NavLink></li>
                        <li>
                            <NavLink to='/todo' class="justify-between">
                                TO Do
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to='/projects' class="justify-between">
                                Calender
                            </NavLink>
                        </li>
                        <li><NavLink to='/contact'>Contact</NavLink></li>

                    </ul>
                </div>
                <a href='#' class="btn btn-ghost normal-case text-xl text-primary font-serif">Protfolio</a>
            </div>
            <div class="navbar-center hidden lg:flex">
                <ul class="menu menu-horizontal p-0">
                    <li><NavLink to='/'>Complete Taskt</NavLink></li>
                    <li> <NavLink to='/todo' class="justify-between"> To Do</NavLink> </li>
                    <li><NavLink to='/Projects' class="justify-between">Calender</NavLink></li>
                    <li><NavLink to='/contact'>Contact</NavLink></li>

                </ul>
            </div>

        </div>
    );
};

export default Navber;
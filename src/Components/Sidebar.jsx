import React from 'react'
import { Link } from 'react-router-dom'
function Sidebar() {
    return (
        <div>
            <div className='green h-screen'>
                <h1 className='text-4xl ml-16 pt-3'>Logo</h1>
                <div>
                    <ul className='pt-9 pl-7 flex flex-col text-2xl gap-9 text-slate-300'>
                        <li className=' hover:text-white cursor-pointer'>Dashboard</li>
                        <li className=' hover:text-white cursor-pointer'><Link to="/customer">Customer</Link></li>
                        <li className=' hover:text-white cursor-pointer'><Link to="/search">Search</Link></li>
                        <li className=' hover:text-white cursor-pointer'>Solution</li>
                        <li className=' hover:text-white cursor-pointer'><Link to="/admin">Admin</Link></li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Sidebar

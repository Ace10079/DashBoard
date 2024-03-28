import React from 'react'
import Header from './Header'
import Sidebar from './Sidebar'
import Cards from './cards'
import Table1 from './Table1'

function Dashboard() {
    return (
        <>
            <div className="flex">
                <div className="bg-green-700 w-72 h-[100vh]">
                    <div><Sidebar /></div>
                </div>
                <div>
                    <div className="flex flex-col gap-4">
                        <div className="">
                            <div><Header /></div>
                        </div>
                        <div className="">
                            <div><Cards/></div>
                        </div>
                        <div className="">
                            <div><Table1/></div>
                        </div>
                    </div>
                </div>
            </div>
        </>

    )
}

export default Dashboard

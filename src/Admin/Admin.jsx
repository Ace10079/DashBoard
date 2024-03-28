import React from 'react'
import Header from '../Components/Header'
import Table1 from '../Components/Table1'
import Sidebar from '../Components/Sidebar'
import Table2 from './Table2'

function Admin() {
  return (
    <div>
       <div className="flex">
                <div className="bg-green-700 w-72 h-[100vh]">
                    <div><Sidebar /></div>
                </div>
                <div>
                    <div className="flex flex-col gap-8">
                        <div className="">
                            <div><Header/></div>
                        </div>
                        <div className="">
                            <div><Table2/></div>
                        </div>
                    </div>
                </div>
            </div>
    </div>
  )
}

export default Admin

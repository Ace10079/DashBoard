import React from 'react'
import Sidebar from '../Components/Sidebar'
import Header from '../Components/Header'
import Table3 from './Table3'

function Serach1() {
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
                            <div><Table3/></div>
                        </div>
                    </div>
                </div>
            </div>
    </div>
  )
}

export default Serach1

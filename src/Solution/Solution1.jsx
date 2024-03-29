import React from 'react'
import Header from '../Components/Header'
import Sidebar from '../Components/Sidebar'
import Table4 from './Table4'

function Solution1() {
  return (
    <div>
    <div className="flex">
        <div className="bg-green-700 w-72 h-[100vh]">
            <div><Sidebar/></div>
        </div>
        <div>
            <div className="flex flex-col gap-8">
                <div className="">
                    <div><Header/></div>
                </div>
                <div className="">
                    <div><Table4/></div>
                </div>
            </div>
        </div>
    </div>
</div>
  )
}

export default Solution1

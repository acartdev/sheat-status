import React from 'react'
import ZoneA from './zoneA'
import ZoneB from './zoneB'
import ZoneC from './zoneC'
import ZoneD from './zoneD'
import ZoneF from './zoneF'
import ZoneG from './zoneG'

export default function Map() {
    return (
        <div className='w-full h-[50rem] bg-orange-200 relative '>
            <div className="h-full w-1/5 bg-sky-400 absolute left-0">
                <div className="relative h-full w-full ">
                    <ZoneA />
                </div>
            </div>
            <div className="h-2/3 bg-red-400 w-8 top-28 absolute left-[22%]">
                <div className="relative w-full h-full">
                    <ZoneB />
                </div>
            </div>
            <div className="absolute h-2/3 w-20 bg-cyan-200 left-[32%] top-28">
                <div className="relative h-full w-full">
                    <ZoneC />
                </div>
            </div>
            <div className="absolute h-2/3 w-20 bg-green-500 left-[53%] top-28">
                <div className="relative h-full w-full">
                    <ZoneD />
                </div>
            </div>
            <div className="absolute h-2/3 w-20 bg-purple-400 left-[74%] top-28">
                <div className="relative h-full w-full">
                    <ZoneF />
                </div>
            </div>

            <div className="absolute h-28 w-20 bg-rose-500 left-[46%] bottom-0">
                <div className="relative w-full h-full">
                    <ZoneG />
                </div>
            </div>


            <div className="h-full w-5 bg-gray-400 absolute border-e-2 left-0 top-0 border-gray-500">
                <div className="flex flex-col items-center  h-full w-full justify-around">
                    <p className='rotate-[-90deg]  w-16 text-xs text-center leading-none text-black'>ร้านอาหาร</p>
                    <p className='rotate-[-90deg]  w-16 text-xs text-center leading-none text-black'>ร้านอาหาร</p>
                    <p className='rotate-[-90deg]  w-16 text-xs text-center leading-none text-black'>ร้านอาหาร</p>
                    <p className='rotate-[-90deg]  w-16 text-xs text-center leading-none text-black'>ร้านอาหาร</p>
                </div>

            </div>
            <div className="w-3/5 h-24 bg-gray-300 border-2 border-gray-500  absolute left-1/3">
                <div className="relative h-full w-full">
                    <p className='absolute bottom-0 left-8 text-black'>ห้องหมวดภาษาต่างประเทศ</p>
                    <p className='absolute text-sm rotate-90 top-8 left-[-1.5rem] text-black'>ห้องน้ำชาย</p>
                    <p className='absolute text-sm rotate-[-90deg] top-8 right-[-1.5rem] text-black'>ห้องน้ำหญิง</p>
                </div>
            </div>
            <div className="bg-gray-300 border-2 border-gray-500 h-28 w-1/5 left-1/4 bottom-0 absolute text-center text-xs py-10 text-black">ห้องรับประทานอาหารครู</div>
            <div className="bg-gray-300 border-2 border-gray-500 h-28 w-1/4 left-2/3 bottom-0 absolute text-center py-10 text-black">สหการณ์</div>
        </div>
    )
}

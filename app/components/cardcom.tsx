import React, { useEffect, useState } from 'react'
import { ImSpoonKnife } from "react-icons/im";
interface Props {
    zone: string;
    desc: string;
    colors: string
}
interface Count {
    counter: number
}
export default function Card(props: Props) {
    const [allzone, setAllZone] = useState<Count>()
    const [cout, setCount] = useState<Count>()
    useEffect(() => {
        const all = async () => {
            await fetch(`http://192.168.137.1:5000/allcount/${props.zone}`).then(value => value.json()).then(data => setAllZone(data))
        }
        all()
        const count = async () => {
            await fetch(`http://192.168.137.1:5000/count/${props.zone}`).then(value => value.json()).then(data => setCount(data))
        }
        all()
        count()


    }, [])
    return (
        <div className={`w-36 h-36 rounded-lg ${props.colors} pt-3 px-2 flex-none mr-5`}>
            <div className="flex flex-col justify-around w-full h-full">
                <p className='text-2xl text-white font-extrabold'>{props.desc}</p>
                <div className="flex justify-around w-full  ">
                    <ImSpoonKnife className="text-4xl text-gray-300" />
                    <p className='text-xl text-white font-bold'>{cout?.counter}/{allzone?.counter}</p>
                </div>
            </div>

        </div>
    )
}

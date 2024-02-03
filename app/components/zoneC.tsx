"use client"

import { useEffect, useState } from "react";
import GridComponent from "./gridcom";
import { Zone } from "./zoneA";

export default function ZoneC() {
    const [zone, setZone] = useState<Zone[]>([])
    useEffect(() => {
        const getdata = async () => {
            await fetch("http://192.168.137.1:5000/zonec").then(value => value.json()).then(data => setZone(data))
        }
        getdata()

    }, [])

    return <div className="absolute w-4 top-px pt-2 left-[5%]  ">
        <GridComponent data={zone} />

    </div>
}

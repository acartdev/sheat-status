
import Image from "next/image";
import React, { useEffect, useState } from "react";
export interface Zone {
  id: string;
  src: string;
  zone: string;
  status: string;
}
export default function ZoneA() {
  const [zone, setZone] = useState<Zone[]>([])
  useEffect(() => {
    const getdata = async () => {
      await fetch("http://192.168.137.1:5000/zonea").then(value => value.json()).then(data => setZone(data))
    }
    getdata()

  }, [])
  const statusTable = (status: string) => {
    let image: string = "";
    switch (status) {
      case "empt":
        image = "/image/usee.png"
        break;
      case "true":
        image = "/image/empt.png"
        break;
      case "false":
        image = "/image/not.png"
        break;

    }
    return image

  }

  return <div className="absolute w-4 top-px pt-2 left-[70%] grid grid-rows-25 gap-3 ">
    {zone.map((tables: any, index: number) => <div className="w-5 h-5 relative" key={index}><Image src={statusTable(tables.status)} alt="โต๊ะ" fill /></div>)}
  </div>
}

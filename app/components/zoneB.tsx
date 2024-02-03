"use client"
import Image from "next/image";
import React, { useEffect, useState } from "react";
import { Zone } from "./zoneA";

export default function ZoneB() {
  const [zone, setZone] = useState<Zone[]>([])
  useEffect(() => {
    const getdata = async () => {
      await fetch("http://192.168.137.1:5000/zoneb").then(value => value.json()).then(data => setZone(data))
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
  return <div className="absolute w-4 top-px pt-2 left-[20%] grid grid-rows-12 gap-6 ">
    {zone.map((tables: any, index: number) => <div className="w-5 h-5 relative" key={index}><Image src={statusTable(tables.status)} alt="โต๊ะ" fill /></div>)}
  </div>
}

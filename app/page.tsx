"use client"
import Map from "./components/map";
import Card from "./components/cardcom";
import { HiOutlineRefresh } from "react-icons/hi";
interface Cards {
  zone: string;
  desc: string;
  colors: string
}


export default function Home() {
  const cardCom: Cards[] = [
    { zone: "all", desc: "ทุกโซน", colors: "bg-orange-500" },
    { zone: "a", desc: "Zone A", colors: "bg-sky-400" },
    { zone: "b", desc: "Zone B", colors: "bg-red-400" },
    { zone: "c", desc: "Zone C", colors: "bg-cyan-300" },
    { zone: "d", desc: "Zone D", colors: "bg-green-500" },
    { zone: "f", desc: "Zone F", colors: "bg-purple-400" },
    { zone: "g", desc: "Zone G", colors: "bg-rose-500" },
  ]
  return (
    <main className="">
      <div className="flex justify-between pr-5">
        <p className="p-3 text-xl text-black font-bold">โซนโต๊ะภายในโรงอาหาร</p>
        <button className="text-2xl font-bold" onClick={() => window.location.reload()}><HiOutlineRefresh /></button>
      </div>
      <div className="scrolling">
        <div className="texts">
          <span>ผู้จัดทำโครงงาน</span>
          <span>นายธนภัทร กองเงิน</span>
          <span>นายสราวุฒิ กุดแถลง</span>
          <span>นางสาวธิติมา เวฬุวณารักษ์</span>
        </div>

      </div>

      <hr className="border border-black-400 w-11/12 mx-auto" />
      <div className="p-2  overflow-x-scroll flex ">
        {cardCom.map((value, index) => <Card {...value} key={index} />)}
      </div>
      <div className="container overflow-scroll" >
        <div className=""  >
          <Map />
        </div>
      </div>
    </main>

  )
}

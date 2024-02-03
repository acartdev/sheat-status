"use client"
import React from 'react';
import Image from 'next/image';
const GridComponent = ({ data }: any) => {
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
    const gridItems = data.map((item: any, index: number) => {
        return <div key={index} className="w-5 h-5 relative mb-2"><Image src={statusTable(item.status)} alt="โต๊ะ" fill /></div>
    });
    gridItems.splice(2, 0, <div key={111}></div>)
    gridItems.splice(6, 0, <div key={112}></div>)
    gridItems.splice(10, 0, <div key={113}></div>)
    gridItems.splice(14, 0, <div key={114}></div>)
    gridItems.splice(18, 0, <div key={115}></div>)
    gridItems.splice(22, 0, <div key={116}></div>)
    gridItems.splice(26, 0, <div key={117}></div>)
    gridItems.splice(30, 0, <div key={118}></div>)
    gridItems.splice(34, 0, <div key={119}></div>)
    gridItems.splice(38, 0, <div key={120}></div>)
    gridItems.splice(42, 0, <div key={121}></div>)
    gridItems.splice(46, 0, <div key={122}></div>)

    return (
        <div key={data.id} className="grid grid-cols-4 gap-4 grid-rows-12">
            {gridItems}
        </div>
    );
};

export default GridComponent;

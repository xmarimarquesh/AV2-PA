"use client"

import { useEffect, useState, Suspense } from "react";
import img_disney from "../assets/disney.jpg";
import Image from "next/image";


interface IData {
    name: string,
    imageUrl: string,
    _id: string,
}

export default function Home() {
  const [characters, setcharacters] = useState<IData[]>([]);

    useEffect(() => {
        const load = async () => {
            const res = await fetch("https://api.disneyapi.dev/character");
            const data = await res.json();
            setcharacters(data.data);
            console.log(data.data);
        }
        load();
    }, [])

  return (
    <div className="w-full bg-black text-white">
      <Image className="w-full" src={img_disney} width={2000} height={500} alt="image Disney"/>
    <div className="flex items-center justify-center flex-col gap-10">
      <h1 className="w-[80%] flex justify-center font-bold text-[2em] mt-10">ROTA UM - UseEffect Fetch</h1>
      <div className="flex flex-wrap w-full items-center justify-center">

      <Suspense fallback={<div>Loading...</div>}>
        {characters.map((item, index) => {
          return (
            <div key={index} className="w-[300px] h-auto rounded-md text-white bg-blue-950 m-5 shadow-gray-500 shadow-md hover:scale-110 transition ease-in-out">
              <Image className="grayscale rounded-t-md w-full h-60 cover hover:grayscale-0 transition ease-in-out" src={item.imageUrl} alt="image" width={400} height={400} />
              <div className="p-2 flex flex-col items-center justify-center">
                <h1 className="text-[1.1em] font-bold">{item.name}</h1>
              </div>
            </div>
            )
          })}
        </Suspense>
      </div>
    </div>
    </div>
  );
}



    
    

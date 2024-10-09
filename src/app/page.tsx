"use client"

import { useEffect, useState } from "react";
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
    <div className="flex items-center justify-center flex-col gap-10">
      <h1 className="font-bold text-[2em] mt-10">ROTA UM - UseEffect Fetch</h1>
      <div className="flex flex-wrap w-full items-center justify-center">

      {characters.map((item, index) => {
        return (
          <div key={index} className="w-[300px] h-auto bg-white m-5 rounded-2xl shadow-gray shadow-xl hover:scale-110 transition ease-in-out">
                  <Image className="rounded-t-3xl w-full h-60 cover" src={item.imageUrl} alt="" width={400} height={400} />
                  <div className="p-2 flex flex-col items-center justify-center">
                    <h1 className="text-[1.1em] font-bold">{item.name}</h1>
                  </div>
              </div>
          )
        })}

      </div>
    </div>
  );
}



    
    

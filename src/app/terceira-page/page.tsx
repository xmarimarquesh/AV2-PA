import { Suspense } from "react";
import Link from "next/link";
import Image from "next/image";

interface IData {
    data: {
        name: string,
        imageUrl: string,
        _id: string,
    }[]
}

const TerceiraRota = async () => {
    const res = await fetch("https://api.disneyapi.dev/character")
    const dados : IData = await res.json()
    console.log(dados);

    return (
        <div className="flex items-center justify-center flex-col gap-10">
            <h1 className="w-[80%] flex justify-center font-bold text-[2em] mt-10"> ROTA TRES - Server Side </h1>
            <div className="flex flex-wrap items-center justify-center">
                <Suspense fallback={<div>Loading...</div>}>
                    {dados.data.map((item) => {
                        return(
                            <div key={item._id} className="w-[300px] h-auto rounded-lg text-white bg-blue-950 m-5 shadow-gray-800 shadow-xl hover:scale-110 transition ease-in-out">
                                <Link href={`/person/${item._id}`} className="cursor-pointer"><Image className="rounded-t-md w-full h-60 cover transition ease-in-out" src={item.imageUrl} alt="Image" width={150} height={150} />
                                    <h2 className="p-2 text-[1.1em] text-white font-bold">{item.name}</h2>
                                    <div className="flex items-end self-center w-full justify-end">
                                        <Link className="underline p-1 m-2  text-white rounded-lg " href={`/person/${item._id}`}>ver mais</Link>
                                    </div>
                                </Link>
                            </div>
                        )
                    })}
                </Suspense>
            </div>
        </div>
    )
}

export default TerceiraRota;
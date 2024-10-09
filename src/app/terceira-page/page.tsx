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
                            <div key={item._id} className="w-[300px] h-auto bg-black m-5 rounded-3xl shadow-gray shadow-xl hover:scale-110 transition ease-in-out">
                                <Image className="rounded-t-3xl w-full h-60 cover" src={item.imageUrl} alt="Image" width={150} height={150} />
                                <h2 className="p-2 text-[1.1em] text-white font-bold">{item.name}</h2>
                                <div className="flex items-center justify-center self-center mt-2 mb-2">
                                    <Link className="bg-white p-2 shadow-md shadow-gray-500 text-black rounded-2xl mb-4" href={`/person/${item._id}`}>ver mais</Link>
                                </div>
                            </div>
                        )
                    })}
                </Suspense>
            </div>
        </div>
    )
}

export default TerceiraRota;
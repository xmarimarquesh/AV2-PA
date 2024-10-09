"use client"

import { useEffect, useState, Suspense } from "react";
import Image from "next/image";

import { api } from "@/constants/api";

interface IData {
    name: string,
    imageUrl: string,
    _id: string,
}

const SegundaRota = () => {
    const [data, setData] = useState<IData[]>([]);
    const [erro, setErro] = useState<boolean>(false);
    const [errorMessage, setErrorMessage] = useState<string>("Não foi possivel buscar os dados");
    const [page, setpage] = useState<string>("")
    const [name, setName] = useState<string>("")

    useEffect(() => {
        api.get(`?page=${page}&name=${name}`).then((res) => {
            setErro(false);
            setData(res.data.data);
            if(!res.data.data){
                console.log("Vazio")
            }
        }).catch((err) => {
            if(err.response.status == 404 || err.response.status == 400){
                setErro(true);
                console.log("Página não encontrada. ");
                alert("Página não encontrada. ");
                setErrorMessage("Página não encontrada. ");
            }
        })
    }, [page, name])

    return (
        <div className="flex items-center justify-center flex-col gap-10">
            <h1 className="w-[80%] flex justify-center font-bold text-[2em] mt-10">ROTA DOIS - UseEffect Axios</h1>
            <input className="w-4/5 border-b-2 border-black" placeholder="Pesquise por página..." type="number" value={page} onChange={(e) => setpage(e.target.value)} />
            <input className="w-4/5 border-b-2 border-black" placeholder="Pesquise por personagem..." type="text" value={name} onChange={(e) => setName(e.target.value)} />

            {erro && <h5 className="text-black">{errorMessage}</h5>}

            <div className="flex flex-wrap w-full items-center justify-center">
            <Suspense fallback={<div>Loading...</div>}>
                {data.map((item, i) => {
                    return(
                        <div key={i} className="w-[300px] h-auto bg-white m-5 rounded-2xl shadow-gray shadow-xl hover:scale-110 transition ease-in-out">
                            <h2 className="text-[1.1em] font-bold">{item.name}</h2>
                            <Image className="rounded-t-3xl w-full h-60 cover rounded-2xl" src={item.imageUrl} width={200} height={200} alt="sla" priority/>
                        </div>
                    )
                })}
            </Suspense>
            </div>
        </div>
    )
}

export default SegundaRota;



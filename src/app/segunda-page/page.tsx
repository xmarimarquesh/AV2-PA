"use client"

import { useEffect, useState, Suspense } from "react";
import Image from "next/image";

import star_img from "../../assets/star.png";
import disney_back from "../../assets/disney_back.jpg";

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
        <div>
            <Image className="-z-40 opacity-50 fixed top-0 object-cover h-screen" src={disney_back} width={2000} height={2000} alt="Image" />
            <div className="-z-0 flex items-center justify-center flex-col gap-10 ">

            <h1 className="w-[80%] flex justify-center font-bold text-[2em] mt-10">ROTA DOIS - UseEffect Axios</h1>
            <input className="w-4/5 border-b-2 border-black placeholder:text-black focus:border-blue-900 outline-none text-black bg-transparent" placeholder="Pesquise por página..." type="number" value={page} onChange={(e) => setpage(e.target.value)} />
            <input className="w-4/5 border-b-2 border-black placeholder:text-black focus:border-blue-900 outline-none text-black bg-transparent" placeholder="Pesquise por personagem..." type="text" value={name} onChange={(e) => setName(e.target.value)} />

            {erro && <h5 className="text-black">{errorMessage}</h5>}

            <div className="flex flex-wrap w-full items-center justify-center">
            <Suspense fallback={<div>Loading...</div>}>
                {data.map((item, i) => {
                    return(
                        <div className="flex flex-col m-4 ">
                        <div key={i} className="w-[330px] h-[500px] rounded-md bg-gray-900 flex flex-col shadow-gray shadow-xl p-6 justify-between">
                                <h2 className="text-[1em] font-bold text-white font-mono">{item.name}</h2>
                                <Image className="h-[400px] rounded-md mt-3 w-full object-cover hover:scale-105 transition ease-in-out" src={item.imageUrl} width={10000} height={10000} alt="sla" priority/>
                            <div>
                                <div className="flex w-full justify-end mt-2">
                                    {/* <Image className="w-6 hover:scale-110 cursor-pointer transition ease-in-out" src={star_img} width={1000} height={1000} alt="Img Star" /> */}
                                </div>
                            </div>
                        </div>
                        </div>
                    )
                })}
            </Suspense>
                </div>
            </div>
        </div>
    )
}

export default SegundaRota;



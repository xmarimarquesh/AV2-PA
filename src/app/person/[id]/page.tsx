import exp from "constants";
import Image from "next/image";
import Link from "next/link";


interface IData {
    data: {
        name: string,
        imageUrl: string,
        _id: string,
        films: [],
        sourceUrl: string,
        createdAt: string,
        updatedAt: string,
    }
}

// interface IDataStaticIndex {
//     results: IData[]
// }

const Person = async ({params: {id}} : {params: {id: string}}) => {
    const res = await fetch(`https://api.disneyapi.dev/character/${id}`);
    const data : IData = await res.json();
    
    return (
        <div className="w-full flex items-center justify-center">
            <div className="w-full flex flex-col justify-center items-center bg-black mt-10 self-center shadow-xl gap-5 p-5">
                <h1 className="font-bold text-[2em] text-white">{data.data.name}</h1>
                <div className="flex flex-row w-4/5 justify-around gap-10">
                    <Image className="h-auto w-1/2 rounded-[10px] border-1 border-white shadow-gray-600 shadow-md" src={data.data.imageUrl} alt="sla" width={10000} height={10000} />
                
                    <div className="w-1/2 flex flex-col justify-between">
                        <h2 className="text-white text-[1em] mt-5">Filme (s): </h2>
                        {data.data.films.map((item, index) => {
                            if(data.data.films.length >= 0)
                                return(
                                    <div key={index}>
                                        <h2 className="text-white text-[1.4em]">{item}</h2>
                                        <p className="text-gray-300">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
                                    </div>
                                )
                            })}
                    <a className="bg-white p-2 rounded-sm underline text-black font-semibold w-1/3 flex items-center justify-center" target="blank" href={data.data.sourceUrl}>Clique e acesse o fandom!</a>
                    </div>
                </div>
                <div className="w-full mt-10 flex flex-row justify-around">
                    <p className="text-white text-[0.8em]">Created At: {data.data.createdAt}</p>
                    <p className="text-white text-[0.8em]">Updated At: {data.data.updatedAt}</p>
                </div>
            </div>
        </div>
    )
}

export default Person;

// export async function generateStaticParams() {
//     const res = await fetch(`https://rickandmortyapi.com/api/character`);
//     const data : IDataStaticIndex = await res.json();

//     return data.results.map((item) => item.data._id.toString());
// }

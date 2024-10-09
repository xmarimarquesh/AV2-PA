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
            <div className="w-4/5 flex flex-col justify-center items-center bg-black mt-10 self-center shadow-xl gap-5 rounded-[80px] p-5">
                <h1 className="font-bold text-[2em] text-white">{data.data.name}</h1>
                <div>
                <Image className="h-auto w-[600px] rounded-[20px] border-1 border-white shadow-gray-600 shadow-md" src={data.data.imageUrl} alt="sla" width={1000} height={1000} />
                <h2 className="text-white text-[1em] mt-5">Filme (s): </h2>
                {data.data.films.map((item, index) => {
                    if(data.data.films.length >= 0)
                        return(
                    <div key={index}>
                                <h2 className="text-white text-[1.4em]">{item}</h2>
                            </div>
                        )
                    })}
                </div>
                <a className="bg-white text-black p-2 rounded-lg" target="blank" href={data.data.sourceUrl}>Clique e acesse o fandom!</a>
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

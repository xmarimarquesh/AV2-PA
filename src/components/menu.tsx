import { ROUTES } from "@/constants/routes";
import Link from "next/link";

const Menu = () => {
    return (
        <div className="text-branco bold bg-black gap-3 p-3 font-robFont text-medium flex flex-row justify-center align-center gap-8">
            <Link className="bg-white text-black font-semibold p-2 w-[12%] flex justify-center rounded-full hover:scale-110 transition ease-in-out" href={ROUTES.primeiraRota} property="" >ROTA UM</Link>
            <Link className="bg-white text-black font-semibold p-2 w-[12%] flex justify-center rounded-full hover:scale-110 transition ease-in-out" href={ROUTES.segundaRota}  property="">ROTA DOIS</Link>
            <Link className="bg-white text-black font-semibold p-2 w-[12%] flex justify-center rounded-full hover:scale-110 transition ease-in-out" href={ROUTES.terceiraRota} property="" >ROTA TRES</Link>
        </div>
    )
}

export default Menu;
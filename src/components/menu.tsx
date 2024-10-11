import { ROUTES } from "@/constants/routes";
import Link from "next/link";
import { Roboto } from "next/font/google";

const font = Roboto({
  weight: '500',
  subsets: ['latin']
})

const Menu = () => {
    return (
        <div className="text-branco bold text-white font-semibold bg-disney text-[1.6em] gap-3 p-3 font-robFont text-medium flex flex-row justify-center align-center gap-8">
            <Link className={"p-2 w-[12%] flex justify-center hover:scale-110 transition ease-in-out " + font.className} href={ROUTES.primeiraRota} property="" >Rota Um</Link>
            <Link className={"p-2 w-[12%] flex justify-center hover:scale-110 transition ease-in-out " + font.className} href={ROUTES.segundaRota}  property="">Rota Dois</Link>
            <Link className={"p-2 w-[12%] flex justify-center hover:scale-110 transition ease-in-out " + font.className} href={ROUTES.terceiraRota} property="" >Rota Tres</Link>
        </div>
    )
}

export default Menu;
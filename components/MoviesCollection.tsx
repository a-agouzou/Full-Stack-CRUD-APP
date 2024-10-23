'use client'

import { useRouter } from 'next/navigation'
import { CiShare1 } from "react-icons/ci";


const MoviesCollection = () => {
    const router = useRouter();
    return (
        <div className="flex  justify-between px-4 py-4 border shadow-md rounded-sm overflow-hidden cursor-pointer" onClick={()=>(router.push('/collections/walo'))} >
            <p className="font-bold text-[18px]">Favorites</p>
            <CiShare1 size={30} className="hover:"/>
        </div>
    )
}

export default MoviesCollection
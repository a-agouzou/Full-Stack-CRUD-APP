'use client'

import { useRouter } from "next/navigation";

const AddMovie = () => {

    const router = useRouter();
  return (
    <div className="flex py-4 flex-col">
      <button
        className="text-sm border py-2 px-3 font-semibold rounded-sm self-end"
        onClick={()=>router.push('/createMovie')}
      >
        Add New Movie
      </button>
    </div>
  );
};

export default AddMovie;

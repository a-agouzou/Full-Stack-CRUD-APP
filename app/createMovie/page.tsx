"use client";

import { useEffect, useRef, useState, useCallback } from "react"

const createMovie = () => {
  const [showCollectionsMenu, setShowCollectionsMenu] =
    useState<boolean>(false)
  const [selectedCollections, setSelectedCollections] = useState<string[]>([])
  const menuRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setShowCollectionsMenu(false)
      }
    }

    document.addEventListener("mousedown", handleClickOutside)
    return () => {
      document.removeEventListener("mousedown", handleClickOutside)
    }
  }, [menuRef])

  const collections = [
    { id: 1, name: "Favorites" },
    { id: 2, name: "Watch Later" },
    { id: 3, name: "Top Rated" },
    { id: 4, name: "Watched" },
    { id: 5, name: "Action" },
    { id: 6, name: "Comedy" },
    { id: 7, name: "Horror" },
    { id: 8, name: "Romance" },
    { id: 9, name: "Sci-Fi" },
    { id: 10, name: "Drama" },
  ]

  const handleCollectionClick = useCallback(
    (collectionName: string, event: React.MouseEvent) => {
      event.stopPropagation()
      setSelectedCollections((prev) => [...prev, collectionName])
    },
    []
  )


  const removeCollection = (collectionName: string, event: React.MouseEvent) => {
    event.stopPropagation()
    setSelectedCollections((prev) => prev.filter((collection) => collection !== collectionName))
  }
  return (
    <div className="container mx-auto flex flex-col justify-center items-center mt-36 p-8">
      <form action="" className="w-full max-w-md">
        <div className="flex flex-col mb-4">
          <label htmlFor="title" className="mb-2 font-bold text-lg">
            Title
          </label>
          <input
            type="text"
            id="title"
            name="title"
            className="border border-gray-300 p-2 rounded-md focus:outline-none focus:border-slate-800"
            placeholder="Enter movie title"
          />
        </div>

        <div className="flex flex-col mb-4">
          <label htmlFor="description" className="mb-2 font-bold text-lg">
            Description
          </label>
          <input
            type="text"
            id="description"
            name="description"
            className="border border-gray-300 p-2 rounded-md focus:outline-none focus:border-slate-800"
            placeholder="Enter movie description"
          />
        </div>

        <div
          className="flex flex-col mb-4 relative"
          ref={menuRef}
          onClick={() => setShowCollectionsMenu(!showCollectionsMenu)}
        >
          <div className="mb-2 font-bold border p-2 rounded-md cursor-pointer">
            Select Collections
          </div>
          {showCollectionsMenu && (
            <div className="bg-gray-100 flex flex-col absolute w-[100%] top-10 max-h-36 overflow-y-auto">
              {collections.map((collection) => (
                <div
                  key={collection.id}
                  className="text-gray-800 px-4 py-2 text-sm cursor-pointer hover:bg-gray-200"
                  onClick={(event) => handleCollectionClick(collection.name, event)}
                >
                  {collection.name}
                </div>
              ))}
            </div>
          )}
        </div>

        <div className="flex flex-col mb-6">
          <label htmlFor="image" className="mb-2 font-bold text-lg">
            Movie Poster
          </label>
          <input
            type="file"
            id="image"
            name="image"
            className="border border-gray-300 p-2 rounded-md focus:outline-none focus:border-slate-800"
          />
        </div>

        <button
          type="submit"
          className="w-full bg-slate-800 text-white font-bold py-2 rounded-md hover:bg-slate-800 transition-colors"
        >
          Add Movie
        </button>
      </form>
      <div className=" flex flex-wrap gap-2 w-full max-w-md my-2">
        {selectedCollections.map((collection, index) => (
          <div key={index} className="bg-gray-300 px-2 py-1 rounded-lg text-[12px] font-medium cursor-pointer" onClick={(e)=>removeCollection(collection, e)}>
            {collection}
          </div>
        ))}
      </div>
    </div>
  )
}

export default createMovie
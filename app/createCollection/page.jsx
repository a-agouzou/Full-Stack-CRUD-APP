

const CreateCollection = () => {
    return (
        <div className="container mx-auto flex flex-col justify-center items-center mt-36 p-8">
            <h1 className="text-4xl font-bold">Create Collection</h1>
            <form className="flex flex-col justify-center items-center mt-8">
                <input type="text" placeholder="Collection Name" className="border border-gray-300 p-2 rounded-md w-96" />
                <button className="bg-blue-500 text-white p-2 rounded-md w-96 mt-4">Create Collection</button>
            </form>
        </div>
    )
}

export default CreateCollection;
export default function NavBar() {
    return (
        <nav className='flex flex-row h-16 bg-gray-900 text-gray-200 justify-center items-center'>
            <a className='max-sm:mx-2 max-md:mx-5 max-lg:mx-10 mx-20 px-3 py-2 rounded-xl hover:bg-gray-700 hover:text-red-500'>Option 1</a>
            <a className='max-sm:mx-2 max-md:mx-5 max-lg:mx-10 mx-20 px-3 py-2 rounded-xl hover:bg-gray-700 hover:text-red-500'>Option 2</a>
            <a className='max-sm:mx-2 max-md:mx-5 max-lg:mx-10 mx-20 px-3 py-2 rounded-xl hover:bg-gray-700 hover:text-red-500'>Option 3</a>
            <a className='max-sm:mx-2 max-md:mx-5 max-lg:mx-10 mx-20 px-3 py-2 rounded-xl hover:bg-gray-700 hover:text-red-500'>Option 4</a>
        </nav>
    )
}
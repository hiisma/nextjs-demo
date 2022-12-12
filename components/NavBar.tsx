import Link from "next/link"

export default function NavBar() {
    return (
        <div>

            <nav className='flex flex-row h-16 bg-gray-900 text-gray-200 justify-center items-center'>
                <Link href="/" className='max-sm:mx-2 max-md:mx-5 max-lg:mx-10 mx-20 px-3 py-2 rounded-xl hover:bg-gray-700 hover:text-red-500'>Home</Link>
                <Link href="charts/bitcoin" className='max-sm:mx-2 max-md:mx-5 max-lg:mx-10 mx-20 px-3 py-2 rounded-xl hover:bg-gray-700 hover:text-red-500'>Bitcoin</Link>
                <Link href="#" className='max-sm:mx-2 max-md:mx-5 max-lg:mx-10 mx-20 px-3 py-2 rounded-xl hover:bg-gray-700 hover:text-red-500'>Ethereum</Link>
                <Link href="#" className='max-sm:mx-2 max-md:mx-5 max-lg:mx-10 mx-20 px-3 py-2 rounded-xl hover:bg-gray-700 hover:text-red-500'>Lumens</Link>
                <Link href="#" className='max-sm:mx-2 max-md:mx-5 max-lg:mx-10 mx-20 px-3 py-2 rounded-xl hover:bg-gray-700 hover:text-red-500'>Cardano</Link>
            </nav>
            <div className='text-4xl text-center bg-gradient-to-t from-gray-900 to-gray-800 h-16'></div>
        </div>
    )
}
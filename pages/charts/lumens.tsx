import NavBar from '../../components/NavBar';
import Head from 'next/head'

export default function Lumens() {
    return (
        <div className='flex flex-col bg-gray-900 min-h-screen'>
            <Head>
                <title>Create Next App</title>
                <meta name="description" content="Generated by create next app" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <NavBar />
            <main className='text-gray-200 p-4'>
                <h1 className='text-6xl'>Lumens chart</h1>
            </main>
        </div>
    )
}
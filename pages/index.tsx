import Head from 'next/head'

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center py-2 bg-black text-white">
      <Head>
        <title>jg.business</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="flex flex-col items-center justify-center w-full flex-1 px-20 text-center">
        <img src="/user.gif" alt="404" />
      </main>
    </div>
  )
}

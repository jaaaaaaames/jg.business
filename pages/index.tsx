import Head from 'next/head'

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center py-2 bg-black text-white">
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="flex w-full flex-1 flex-col items-center justify-center px-20 text-center">
        <h1 className="text-6xl font-bold">
          I bought this domain because it looked cool.
        </h1>
      </main>

      <footer className="flex h-24 w-full items-center justify-center">
        <a
          className="flex items-center justify-center"
          href="https://jamesgwyer.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src="https://jamesgwyer.com/james-white.png" alt="James Gwyer" className="ml-2 h-4" />
        </a>
      </footer>
    </div>
  )
}

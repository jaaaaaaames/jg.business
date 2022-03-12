import Head from 'next/head'

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2 bg-black">
      <Head>
        <title>jg.business</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="flex flex-col items-center justify-center w-full flex-1 px-20 text-center">
        <a href="https://jg.business">
          <img src="https://thumbs.gfycat.com/HandsomeDeafeningAmethystgemclam-max-1mb.gif" alt="404" />
        </a>
      </main>
    </div>
  )
}
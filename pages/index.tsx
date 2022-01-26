import Head from 'next/head'

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center py-2 bg-black text-white">
      <Head>
        <title>jg</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <script type="text/javascript" src="https://files.coinmarketcap.com/static/widget/currency.js"></script><div className="coinmarketcap-currency-widget" data-currencyid="1" data-base="USD" data-secondary="USD" data-ticker="false" data-rank="false" data-marketcap="false" data-volume="false" data-statsticker="false" data-stats="USD"></div>
    </div>
  )
}

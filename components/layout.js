import Head from 'next/head'

export default function Layout({ children }) {
    return (
        <>
          <Head>SOL Tools</Head>
          <main>{children}</main>
        </>
    )
}
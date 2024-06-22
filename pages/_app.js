import '@styles/globals.css'
import { Raleway } from 'next/font/google'
import { config } from '@fortawesome/fontawesome-svg-core'
import '@fortawesome/fontawesome-svg-core/styles.css'
import Head from 'next/head'
import Script from 'next/script'

const raleway = Raleway({
    subsets: ['latin'],
    variable: '--font-raleway',
})

export default function MyApp({ Component, pageProps }) {
    return (
        <>
            <Head>
                <title>OpenAdapt.AI</title>
                <meta
                    name="description"
                    content="AI for Humans. No programming required."
                />
                <meta
                    name="description"
                    content="OpenAdapt.AI - AI for Humans. Open source infrastructure for using Large Language Models (LLMs), Large Multimodal Models (LMMs) / Visual Language Models (VLMs), and Large Action Models (LAMs) to automate your desktop application workflows. Record, replay, and share. No programming required."
                />
                <link
                    rel="apple-touch-icon"
                    sizes="180x180"
                    href="/apple-touch-icon.png"
                />
                <link
                    rel="icon"
                    type="image/png"
                    sizes="32x32"
                    href="/favicon-32x32.png"
                />
                <link
                    rel="icon"
                    type="image/png"
                    sizes="16x16"
                    href="/favicon-16x16.png"
                />
                <link rel="manifest" href="/site.webmanifest" />
                <link
                    rel="mask-icon"
                    href="/safari-pinned-tab.svg"
                    color="#000000"
                />
                <meta name="msapplication-TileColor" content="#2b5797" />
                <meta name="theme-color" content="#ffffff" />

                {/* Social media preview images */}
                <meta property="og:image" content="/DALL·E 2024-06-22 18.00.50 - Create an image with a sleek and modern design for OpenAdapt.AI. The image should have the OpenAdapt.AI logo centered with the exact tagline_ 'OpenAda.webp" />
                <meta property="og:image:type" content="image/webp" />
                <meta property="og:image:width" content="1200" />
                <meta property="og:image:height" content="630" />
                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:image" content="/DALL·E 2024-06-22 18.00.50 - Create an image with a sleek and modern design for OpenAdapt.AI. The image should have the OpenAdapt.AI logo centered with the exact tagline_ 'OpenAda.webp" />

                {/* Google tag (gtag.js) */}
                <script
                    async
                    src="https://www.googletagmanager.com/gtag/js?id=G-CJ01Y19XJN"
                ></script>
                <script
                    dangerouslySetInnerHTML={{
                        __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-CJ01Y19XJN');
            `,
                    }}
                />
            </Head>
            <main className={`${raleway.variable} font-sans`}>
                <Component {...pageProps} />
            </main>
            <Script src="https://buttons.github.io/buttons.js" />
        </>
    )
}

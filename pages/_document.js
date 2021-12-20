import Document, { Html, Head, Main, NextScript } from 'next/document';

export default class RootDocument extends Document {
    render() {
        return (
            <Html>
                <Head>
                    <meta charSet="utf-8" />
                    <meta name="description" content="HOYA TECH page"/>
                    <meta name="keywords" content="nextjs,static,website" />
                    <meta name="google-site-verification" content="wNBO74d0veQz9o6UYxEbLs7o_cHkeafkF9pKpShKaYA" />
                    <style global jsx>
                        {`
                            html, body, #__next {
                                height: 100%;
                                width: 100%;
                                overflow: hidden;
                            }
                        `}
                    </style>
                </Head>
                <body>
                    <Main />
                    <NextScript />
                </body>
            </Html>
        );
    }
}
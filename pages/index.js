import Head from 'next/head';

import FormForward from '../Components/Content/FormForward';

export default function Home() {
    return (
        <>
            <Head>
                <meta charset='utf-8' />
                <title>Tyson Stockholder Lawsuit</title>
                <meta name='description' content='Tyson Stockholder Lawsuit' />
                <meta
                    name='viewport'
                    content='width=device-width, initial-scale=1'
                />

                <link rel='apple-touch-icon' href='images/favicon.jpg' />
                <link rel='shortcut icon' href='images/favicon.jpg' />
                <link rel='icon' sizes='192x192' href='images/favicon.jpg' />
                <link rel='stylesheet' href='global.css' />

                <meta name='theme-color' content='#f7f7f7' />
                <script type='text/javascript' src='scripts.js'></script>
            </Head>
            <FormForward />
        </>
    );
}

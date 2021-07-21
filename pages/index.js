import Head from 'next/head';

import FormForward from '../Components/Content/FormForward';
import Hero from '../Components/Content/Hero';
import Content from '../Components/Content/Content';

export default function Home() {
    return (
        <>
            <Head>
                <meta charset='utf-8' />
                <title>Carney Bates & Pulliam</title>
                <meta name='description' content='Carney Bates & Pulliam' />
                <meta
                    name='viewport'
                    content='width=device-width, initial-scale=1'
                />

                <link rel='apple-touch-icon' href='images/favicon.jpg' />
                <link rel='shortcut icon' href='images/favicon.jpg' />
                <link rel='icon' sizes='192x192' href='images/favicon.jpg' />
                <link rel='stylesheet' href='globals.css' />

                <meta name='theme-color' content='#f7f7f7' />
            </Head>
            <FormForward />
            <script src='scripts.js'></script>
        </>
    );
}

import Head from 'next/head';

import Hero from '../Components/Content/Hero';
import Content from '../Components/Content/Content';
import FormSection from '../Components/Form/FormSection';

export default function Home() {
    return (
        <>
            <Head>
                <meta charset='utf-8' />
                <title>Class Action Agency</title>
                <meta name='description' content='Class Action Agency' />
                <meta
                    name='viewport'
                    content='width=device-width, initial-scale=1'
                />

                <link rel='apple-touch-icon' href='images/favicon.jpg' />
                <link rel='shortcut icon' href='images/favicon.jpg' />
                <link rel='icon' sizes='192x192' href='images/favicon.jpg' />

                <meta name='theme-color' content='#f7f7f7' />

                <script
                    type='text/javascript'
                    src='./scripts/jotform.js'
                ></script>
            </Head>
            <Hero />
            <Content />
            <FormSection />
        </>
    );
}

import { Box, Button, Container } from '@material-ui/core';

import JotForm from '../Form/JotForm';
import List from '../List/List';
import Faq from '../Faq/Faq';

const content = {
    intro: 'Have you recently purchased sunscreen?',
    subIntro:
        'Recent scientific research reveals that dozens of sunscreens contain benzene, a known carcinogen.  But this fact has been hidden from the public. Consumers who have purchased these sunscreens may have the right to monetary compensation, whether or not they became sick. Get a free assessment here.',
    title: 'Why might I be entitled to compensation as a stockholder of Tyson?',
    subTitle:
        'Consumers are able to stand up to companies using harmful products. Our attorneys are helping individuals who have purchased sunscreens with harmful chemicals to stand up to manufacturers and deter this behavior.',
    emphasis:
        'Did you purchase any of the following sunscreen brands within the last four years?',
};

export default function Content() {
    return (
        <Box component='section' className='content-section section'>
            <Container maxWidth='md'>
                <Box className='text-center' pb={8} pt={6}>
                    <h1 className='heading-1'>{content.intro}</h1>
                    <h2 className='heading-3'>{content.subIntro}</h2>
                    <JotForm />
                </Box>
            </Container>
            <Container className='text-center' maxWidth='lg'>
                <Container maxWidth='md'>
                    <h3 className='heading-3'>
                        <b>{content.title}</b>
                    </h3>
                </Container>
                <Box className='content-wrap'>
                    <h3 className='heading-3'>
                        <em>{content.subTitle}</em>
                    </h3>
                    <h3 className='heading-3'>
                        <b>{content.emphasis}</b>
                    </h3>
                    <List />
                </Box>
                <Button variant='contained' className='btn'>
                    <a href='#form' className='is-white'>
                        Continue to Free Case Review
                    </a>
                </Button>
            </Container>
        </Box>
    );
}

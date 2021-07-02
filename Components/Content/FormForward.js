import { Box, Button, Container } from '@material-ui/core';

import JotForm from '../Form/JotForm';

const content = {
    intro: 'Do you own Tyson stock that was purchased before April 26, 2019?',
    subIntro:
        'If so, you may be entitled to a court approved incentive award in connection with stockholder litigation.',
    title: 'Why might I be entitled to compensation as a stockholder of Tyson?',
    subTitle:
        'Certain members of Tyson’s board of directors and other Tyson executives violated federal antitrust laws by conspiring with competitors to fix chicken prices. They also violated federal securities laws by certifying that the company was complying with federal laws and regulations, and by certifying that its financial statements were true and accurate. This wrongful conduct has caused significant damage to the company and its stockholders.',
    emphasis:
        'If you own stock in Tyson that was purchased between 2012 and 2019, know your rights. Speak with an attorney at no cost today.',
};

export default function Content() {
    return (
        <Box component='section' className='content-section' py={12}>
            <Container maxWidth='md'>
                <Box className='text-center' pb={8} pt={6}>
                    <h1 className='heading-1'>{content.intro}</h1>
                    <h2 className='heading-3'>{content.subIntro}</h2>
                    <JotForm />
                </Box>
            </Container>
            <Container className='text-center' maxWidth='lg'>
                <Container maxWidth='sm'>
                    <h2 className='heading-2'>{content.title}</h2>
                </Container>
                <Box className='content-wrap'>
                    <h3 className='heading-3'>
                        <em>{content.subTitle}</em>
                    </h3>
                    <h3 className='heading-3'>
                        <b>{content.emphasis}</b>
                    </h3>
                </Box>
                <Button variant='contained'>
                    <a href='#form' className='is-white'>
                        Continue to Free Case Review
                    </a>
                </Button>
            </Container>
        </Box>
    );
}

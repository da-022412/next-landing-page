import { Box, Button, Container } from '@material-ui/core';

import JotForm from '../Form/JotForm';

const content = {
    intro: 'Lawyers are investigating subscriptions for auto-renewal violations. We want to talk with you about your legal claims and options.',
    subIntro:
        'If you are an Oregon resident and have incurred renewal charges for a subscription, you may be owed money - fill out the form below to talk with a lawyer.',
    title: 'Why Would I Be Owed Money?',
    subTitle:
        'Oregon state law requires businesses to clearly disclose the terms of any automatically renewing subscription offer and obtain customers’ affirmative consent to those terms before they subscribe.',
    emphasis:
        'If you have been charged renewal fees for a subscription or free trial, we would like to hear from you.',
};

export default function Content() {
    return (
        <Box component='section' className='content-section' py={12}>
            <Container maxWidth='md'>
                <Box className='text-center' pb={8} pt={6}>
                    <h1 className='heading-1'>{content.intro}</h1>
                    <h2 className='heading-3'>{content.subIntro}</h2>
                    <Button variant='contained'>
                        <a href='#form' className='is-white'>
                            Continue to Free Case Review
                        </a>
                    </Button>
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
                <Container maxWidth='sm'>
                    <JotForm />
                </Container>
            </Container>
        </Box>
    );
}

import { Box, Button, Container } from '@material-ui/core';

const content = {
    title: 'Lawyers are Investigating Auto-Renewal Violations by The Atlantic. We Want to...',
    subTitle:
        'If you subscribed to The Atlantic and incurred renewal charges, you may be owed money - fill out the form below to talk with a lawyer.',
};

const FormSection = () => {
    return (
        <Box component='section' className='hero-section section'>
            <Container maxWidth='md'>
                <Box className='is-white text-center hero-section-wrap'>
                    <h1 className='heading-1'>{content.title}</h1>
                    <h2 className='heading-3'>{content.subTitle}</h2>
                    <Button variant='contained'>
                        <a href='#form' className='is-white'>
                            Get Started
                        </a>
                    </Button>
                </Box>
            </Container>
        </Box>
    );
};

export default FormSection;

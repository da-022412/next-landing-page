import { Box, Button, Container } from '@material-ui/core';

const content = {
    title: 'Class Action Agency',
    subTitle: 'Bringing Consumers and Law Firms Together for Fair Treatment',
};

const FormSection = () => {
    return (
        <Box component='section' className='hero-section section'>
            <Container maxWidth='sm'>
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

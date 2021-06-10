import { Box, Container, Grid } from '@material-ui/core';

import Form from './Form';

const content = {
    title: 'Submit Your Complaint',
};

const SplitFormSection = () => {
    return (
        <Box component='section' className='form-section' py={12} id='form'>
            <Container maxWidth='lg'>
                <Grid
                    container
                    alignItems='center'
                    justify='space-between'
                    spacing={12}
                >
                    <Grid item xs={12} md={6}>
                        <Box className='is-white'>
                            <h2 className='heading-2'>Free Case Review</h2>
                            <p className='body-text'>
                                Submit your information for a free case review,
                                and we'll put you in touch with an attorney who
                                focuses in class action legal issues
                            </p>
                        </Box>
                    </Grid>
                    <Grid item xs={12} md={6}>
                        <Box className='form-wrap'>
                            <Box className='form-section-wrap  text-center'>
                                <h2 className='heading-2'>{content.title}</h2>
                            </Box>
                            <Form />
                        </Box>
                    </Grid>
                </Grid>
            </Container>
        </Box>
    );
};

export default SplitFormSection;

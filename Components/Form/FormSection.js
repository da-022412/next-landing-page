import { Box, Container, Grid } from '@material-ui/core';

import Form from './Form';

const content = {
    title: 'Free Case Review',
};

const FormSection = () => {
    return (
        <Box component='section' className='form-section' py={12} id='form'>
            <Container maxWidth='sm'>
                <Grid
                    container
                    alignItems='center'
                    justify='center'
                    spacing={12}
                >
                    <Grid item xs={12} md={12}>
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

export default FormSection;

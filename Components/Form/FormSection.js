import { Box, Container, Grid } from '@material-ui/core';

import Form from './Form';

const content = {
    title: 'Has The Retail Equation prevented you from making a return or exchange?',
    subTitle:
        'If so, please submit the following information to participate in the class action:',
    formFooter:
        'An attorney client relationship is not formed by submitting information through this web site.',
};

const SplitFormSection = () => {
    return (
        <Box component='section' className='intro-section section'>
            <Container maxWidth='lg'>
                <Grid
                    container
                    alignItems='center'
                    justify='space-between'
                    spacing={12}
                >
                    <Grid item xs={12} md={6}>
                        <Box>
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
                            <Box className='intro-section-wrap  text-center'>
                                <h2 className='heading-2'>{content.title}</h2>
                                <h3 className='heading-3 text-muted'>
                                    {content.subTitle}
                                </h3>
                            </Box>
                            <Form />
                            <Box className='form-footer text-center'>
                                <small className='small text-muted'>
                                    <em>{content.formFooter}</em>
                                </small>
                            </Box>
                        </Box>
                    </Grid>
                </Grid>
            </Container>
        </Box>
    );
};

export default SplitFormSection;

import { Box, Button, Grid, TextField } from '@material-ui/core';

const content = {
    title: 'Free Case Review',
};

const Form = () => {
    return (
        <Box className='form-wrap' id='form'>
            <Box className='form-section-wrap  text-center'>
                <h2 className='heading-2'>{content.title}</h2>
            </Box>
            <Box
                component='form'
                className='form'
                action='https://submit.jotform.com/submit/211545004337143/'
                method='post'
                name='form_211545004337143'
                id='211545004337143'
                accept-charset='utf-8'
            >
                <Grid container spacing={2}>
                    <Grid item xs={12}>
                        <TextField
                            id='first_3'
                            name='q3_name[first]'
                            label='Name'
                            variant='filled'
                        />
                    </Grid>
                    <Grid item xs={12}>
                        <TextField
                            id='input_4'
                            name='q4_email'
                            label='Email'
                            variant='filled'
                        />
                    </Grid>
                    <Grid item xs={12}>
                        <TextField
                            id='input_5_phone'
                            name='q5_phoneNumber[phone]'
                            label='Telephone'
                            variant='filled'
                        />
                    </Grid>
                    <Grid item xs={12}>
                        <TextField
                            id='input_13'
                            name='q13_anyOther'
                            label='Telephone'
                            variant='filled'
                            multiline
                            rows={4}
                        />
                    </Grid>
                    <Grid item xs={12}>
                        <Button id='input_2' type='submit' variant='contained'>
                            Submit
                        </Button>
                    </Grid>
                </Grid>
            </Box>
        </Box>
    );
};

export default Form;

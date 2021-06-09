import { Box, Container, Grid } from '@material-ui/core';

const content = {
    logo: 'Class Action Agency',
};

const Header = () => {
    return (
        <Box component='header' className='header is-white'>
            <Container maxWidth='lg'>
                <Box className='header-wrap'>
                    <Grid container alignItems='center' justify='space-between'>
                        <Grid item xs={6}>
                            <Box className='logo-wrap'>
                                <h3 className='logo'>{content.logo}</h3>
                            </Box>
                        </Grid>
                    </Grid>
                </Box>
            </Container>
        </Box>
    );
};

export default Header;

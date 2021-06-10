import { Box, Container, Grid } from '@material-ui/core';

const content = {
    logo: 'Bursor & Fisher',
};

const Header = () => {
    if (typeof window !== 'undefined') {
        var prevScrollpos = window.pageYOffset;
        window.onscroll = function () {
            var currentScrollPos = window.pageYOffset;
            if (prevScrollpos > currentScrollPos) {
                document.getElementById('header').style.cssText =
                    'top: 0; background-color: var(--primary-color)';
            } else {
                document.getElementById('header').style.top = '-60px';
            }
            prevScrollpos = currentScrollPos;
        };
    }

    return (
        <Box component='header' className='header is-white' id='header'>
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

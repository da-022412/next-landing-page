import { Box, Container } from '@material-ui/core';

const Footer = () => {
    return (
        <Box component='footer' className='footer' py={6}>
            <Container maxWidth='md'>
                <small className='small text-center text-muted'>
                    Attorney Advertising. Bursor & Fisher, P.A. 888 7th Ave, New
                    York, NY 10019. The information you obtain at this site is
                    not, nor is it intended to be, legal advice. You should
                    consult an attorney for advice regarding your individual
                    situation. We invite you to contact us and welcome your
                    correspondence. Contacting us does not create an
                    attorney-client relationship. Please do not send any
                    confidential information to us until such time as an
                    attorney-client relationship has been established.{' '}
                    <a
                        href='https://www.bursor.com/privacy/'
                        rel='nofollow'
                        target='_blank'
                    >
                        Privacy Policy and Terms of Use.
                    </a>
                </small>
            </Container>
        </Box>
    );
};

export default Footer;

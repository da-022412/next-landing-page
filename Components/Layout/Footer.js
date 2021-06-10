import { Box, Container } from '@material-ui/core';

const Footer = () => {
    return (
        <Box component='footer' className='footer' py={6}>
            <Container maxWidth='md'>
                <small className='small text-center text-muted'>
                    Class Action Agency connects consumers with law firms
                    investigating violations of consumer protection laws, with
                    the goal of protecting the rights of individuals against the
                    wrongdoings of the world’s largest companies. Class Action
                    Agency is not a law firm and does not guarantee a referral
                    and no attorney-client relationship is formed by your use of
                    this website or by any communication you send or receive
                    through this site. The content and features on this website
                    shall not be construed as legal advice. The content and
                    features of this website, including means to submit a
                    question or information, do not constitute an offer to
                    represent you. This site and some of the articles on this
                    site contain links to other resources, businesses, and firms
                    on the Internet. Those links are provided as citations and
                    aids to help you identify and locate other internet
                    resources that may be of interest, or law firms that may be
                    investigating wrongdoing of corporations, and are not
                    intended to state or imply that Class Action Agency
                    sponsors, is affiliated or associated with, guarantees, or
                    is legally authorized to use any trade name, registered
                    trademark, logo, legal or official seal, or copyrighted
                    symbol that may be reflected in the links. Consumer
                    Protection Law is not responsible for any loss, injury,
                    claim, liability, or damage related to your use of this site
                    or any site linked to this site, whether from errors or
                    omissions in the content of our site or any other linked
                    sites, from the site being down or from any other use of the
                    site. In short, your use of the site is at your own risk.
                    For further information, please visit our Privacy Policy at:
                    <a
                        href='https://classactionagency.com/privacy-policy/'
                        target='_blank'
                        rel='nofollow'
                    >
                        https://classactionagency.com/privacy-policy/
                    </a>
                </small>
            </Container>
        </Box>
    );
};

export default Footer;

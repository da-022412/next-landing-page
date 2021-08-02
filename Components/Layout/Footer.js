const Footer = () => {
    return (
        <footer className='footer'>
            <div className='container-md text-center'>
                <small className='small text-muted'>
                    Honik LLC, 1515 Market St.,1100, Phila., Pa 19102.
                    Submission of the information does not create an
                    attorney/client relationship.
                    <br />
                    <br />
                    By clicking submit, you agree to the{' '}
                    <a
                        href='https://classactionagency.co/privacy-policy/'
                        target='_blank'
                        rel='nofollow'
                        className='link'
                    >
                        {' '}
                        Privacy Policy and Terms and Conditions
                    </a>{' '}
                    and that we may contact you using any of the information
                    that you have provided.
                    <br />
                    <br />
                    This website is for educational and informational purposes
                    only. No attorney-client relationship is formed by your use
                    of this website or by any communication you send or receive
                    through this site. The content and features on this website
                    shall not be construed as legal advice. The content and
                    features of this website, including means to submit a
                    question or information, do not constitute an offer to
                    represent you or anyone else.
                </small>
            </div>
        </footer>
    );
};

export default Footer;

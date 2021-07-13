const Footer = () => {
    return (
        <footer className='footer'>
            <div className='container-md text-center'>
                <small className='small text-muted'>
                    Submission of the information does not create an
                    attorney/client relationship. By clicking submit, you agree
                    to the{' '}
                    <a
                        href='https://classactionagency.com/privacy-policy'
                        target='_blank'
                        className='link'
                    >
                        Terms and Conditions and Privacy Policy
                    </a>{' '}
                    and that we may contact you using any of the information
                    that you have provided. Attorney Advertising - McGuire Law
                    P.C., 55 W. Wacker Drive, 9th Fl, Chicago, IL 60601. This
                    website is for educational and informational purposes only.
                    No attorney-client relationship is formed by your use of
                    this website or by any communication you send or receive
                    through this site. The content and features on this website
                    shall not be construed as legal advice. The content and
                    features of this website, including means to submit a
                    question or information, do not constitute an offer to
                    represent you.
                </small>
            </div>
        </footer>
    );
};

export default Footer;

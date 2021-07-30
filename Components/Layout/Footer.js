const Footer = () => {
    return (
        <footer className='footer'>
            <div className='container-md text-center'>
                <small className='small text-muted'>Attorney Advertising</small>
                <br />
                <br />
                <small className='small text-muted'>
                    Keogh Law, Ltd, 55 W. Monroe St #3390, Chicago, IL 60603
                </small>
                <br />
                <br />
                <small className='small text-muted'>
                    Submission of the information does not create an
                    attorney-client relationship. By clicking submit, you agree
                    to the{' '}
                    <a
                        href='https://classactionagency.co/privacy-policy/'
                        class='link'
                        target='_blank'
                        rel='nofollow'
                    >
                        Terms and Conditions and Privacy Policy
                    </a>{' '}
                    and that we may contact you using any of the information
                    that you have provided. This website is for educational and
                    informational purposes only. No attorney-client relationship
                    is formed by your use of this website or by any
                    communication you send or receive through this site. The
                    content and features on this website shall not be construed
                    as legal advice. The content and features of this website,
                    including means to submit a question or information, do not
                    constitute an offer to represent you. Any information you
                    submit may be shared with Keogh Law, Ltd. While your
                    communications with a lawyer may be subject to the
                    attorney-client privilege, communications through this
                    website may not be. Please do not share any confidential or
                    privileged information through this website. You are not
                    formally represented by a law firm unless and until a
                    contract of representation is signed by you and the law
                    firm.
                </small>
            </div>
        </footer>
    );
};

export default Footer;

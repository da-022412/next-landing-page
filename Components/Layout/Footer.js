const Footer = () => {
    return (
        <footer className='footer'>
            <div className='container-md text-center'>
                <small className='small text-muted'>
                    Attorney Advertising. Bursor & Fisher, P.A. 888 7th Ave, New
                    York, NY 10019. The information you obtain at this site is
                    not, nor is it intended to be, legal advice. You should
                    consult an attorney for advice regarding your individual
                    situation. We invite you to contact us and welcome your
                    correspondence. Contacting us does not create an
                    attorney-client relationship. Please do not send any
                    confidential information to us until such time as an
                    attorney-client relationship has been established. By
                    filling out the form and contacting us you consent to being
                    contacted via the information provided.
                </small>
                <small className='small text-muted'>
                    <a
                        href='https://www.bursor.com/privacy/'
                        className='link'
                        target='_blank'
                        rel='nofollow'
                    >
                        Privacy Policy and Terms of Use.
                    </a>
                </small>
            </div>
        </footer>
    );
};

export default Footer;

const content = {
    logo: 'McGuire Law',
};

const Header = () => {
    return (
        <header className='header is-white' id='header'>
            <div className='container-lg'>
                <div className='header-wrap'>
                    <div className='flex space-between'>
                        <div className='column col-50'>
                            <div className='logo-wrap'>
                                <h3 className='logo'>{content.logo}</h3>
                            </div>
                        </div>
                        <div className='column col-50'>
                            <div className='header-cta'>
                                <a href='#form'>
                                    <div className='btn secondary-btn'>
                                        Continue to Free Case Review
                                    </div>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Header;

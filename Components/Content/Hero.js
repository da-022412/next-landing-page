const content = {
    title: 'Class Action Agency',
    subTitle: 'Bringing Consumers and Law Firms Together for Fair Treatment',
};

const FormSection = () => {
    return (
        <section className='hero-section section'>
            <div class='container-md'>
                <div className='is-white text-center hero-section-wrap'>
                    <h1 className='heading-1'>{content.title}</h1>
                    <h2 className='heading-3'>{content.subTitle}</h2>
                    <div className='btn primary-btn'>
                        <a href='#form' className='is-white'>
                            Get Started
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default FormSection;

const content = {
    title: 'Tried on any beauty or other product by uploading a photograph of your face to a website or smartphone app? Amazon and many other companies offer these virtual try on services.',
    subTitle:
        'Those impacted who take legal action may be entitled to receive between $1,000 and $5,000 per violation.',
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

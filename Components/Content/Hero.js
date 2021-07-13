const content = {
    title: 'Were you interviewed online through HireVue’s automated AI software by a potential employer?',
    subTitle:
        'If so, you may be entitled to cash compensation for violation of Illinois and New York data privacy laws.',
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

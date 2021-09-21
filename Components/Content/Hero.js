const content = {
    title: 'Do you own a Subaru model equipped with the DriverFocus Driver Monitoring System?',
    subTitle:
        'If you own a 2019 - 2022 Forester Touring, 2021-2022 Outback Touring or Outback Limited XT, or 2021 - 2022 Legacy Touring or Legacy Limited XT, you may be entitled to compensation for the unlawful collection of your biometric data.',
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

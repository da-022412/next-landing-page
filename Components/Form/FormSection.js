import Form from './Form';

const content = {
    title: 'Free Case Review',
};

const FormSection = () => {
    return (
        <section className='form-section section' id='form'>
            <div className='container-sm'>
                <div className='flex centered'>
                    <div className='form-wrap'>
                        <div className='form-section-wrap  text-center'>
                            <h2 className='heading-2'>{content.title}</h2>
                        </div>
                        <Form />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default FormSection;

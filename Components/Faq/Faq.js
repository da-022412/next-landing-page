const content = [
    {
        id: 1,
        q: 'Does every Subaru employ this face recognition technology?',
        a: 'No, only a handful of models have been released.  Refer to your Owner’s Manual or lookup your VIN number to determine if your vehicle is one of those listed above.',
    },
    {
        id: 2,
        q: 'What is this case about?',
        a: 'This case involves the unlawful collection of biometrics from consumers without providing the legally required disclosures and without obtaining informed written consent to do so.  Some of Subaru’s vehicles collect scans of drivers’ faces to enable certain settings and to otherwise monitor the driver to provide specific features, but Subaru does so in violation of the law. ',
    },
    {
        id: 3,
        q: 'Would a lawsuit cost me anything?',
        a: 'No.  We represent our clients on a contingency basis, meaning that you don’t have to pay anything, and we only get paid if you win. ',
    },
];

const Faq = () => {
    return (
        <section className='container-md'>
            <div>
                <h3 className='heading-3'>Frequently Asked Questions</h3>
                {content.map((x) => (
                    <div key={x.id} className='accordion-item'>
                        <button class='accordion'>{x.q}</button>
                        <div class='panel'>
                            <p>{x.a}</p>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Faq;

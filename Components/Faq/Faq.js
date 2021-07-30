const content = [
    {
        id: 1,
        q: 'Why is it illegal to collect biometric identifiers without written consent?',
        a: 'The collection of biometric identifiers poses significant privacy risks. Unlike keyfobs or identification cards, biometric identifiers such as facial geometry cannot be replaced. If a person’s biometric identifier is lost, stolen, or compromised, the person has no recourse and is at a heightened risk of identity theft. Thus, the Illinois Biometric Information Privacy Act generally requires businesses to obtain a person’s informed written consent before collecting the person’s biometric identifiers.',
    },
    {
        id: 2,
        q: 'Does the Biometric Information Privacy Act only apply to Illinois businesses?',
        a: 'No. The Biometric Information Privacy Act generally applies to everyone who collects biometric identifiers from Illinois residents. If any company has scanned your face, fingerprints, handprints, or retina without obtaining your informed written consent, contact us for a free case review.',
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

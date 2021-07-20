const content = [
    {
        id: 1,
        q: 'What information of mine may be compromised?',
        a: 'Patient names, addresses, dates of birth, patient account numbers, health insurance plan member ID numbers, medical record numbers, dates of service, accession numbers, provider names, and/or medical and clinical treatment information were exposed; and for others it may also include protected medical and health information. If you received notice that your information was compromised, speak with our legal team today for a no-cost review to understand how you were particularly affected and understand your rights.',
    },
];

const Faq = () => {
    return (
        <section className="container-md">
            <div>
                <h3 className="heading-3">Frequently Asked Questions</h3>
                {content.map((x) => (
                    <div key={x.id} className="accordion-item">
                        <button class="accordion">{x.q}</button>
                        <div class="panel">
                            <p>{x.a}</p>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Faq;

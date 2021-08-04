const content = [
    {
        id: 1,
        q: 'What issues have been reported with these air conditioner models?',
        a: 'In addition to complete failure, reports indicate beeping, not turning on, not regulating temperature, dying, and other glitches.',
    },
    {
        id: 2,
        q: 'Should I try to fix the issue myself?',
        a: 'No, tampering with the air conditioner unit could bar your claim.',
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

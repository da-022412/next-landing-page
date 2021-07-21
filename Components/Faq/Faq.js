const content = [
    {
        id: 1,
        q: 'Do I Qualify?',
        a: 'You may qualify for this investigation under the following circumstances: Your leased vehicle was totaled after a car accident.',
    },
    {
        id: 2,
        q: 'Will this cost me anything?',
        a: 'No.  We will fight for your rights on a contingency basis.  We don’t get paid unless you do.',
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

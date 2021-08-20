const content = [
    {
        id: 1,
        q: 'What if I own a Philip Respironics device but I haven’t experienced any health problems?',
        a: 'You may nonetheless be owed compensation if you own one of the affected product models. Know your rights and help hold the device manufacturer responsible to deter danger to consumers in the future. Seeing if you have been affected is free and fast.',
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

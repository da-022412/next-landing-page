const content = [
    {
        id: 1,
        q: 'What if I have owned a Kidde but have never used it?',
        a: 'Whether you have used it or not, you may be entitled to compensation for purchasing a Kidde fire extinguisher. Speak with an investigating attorney today at no cost.',
    },
    {
        id: 2,
        q: 'What if I owned a Kidde Fire Extinguisher but no longer have it?',
        a: 'You may still be entitled to compensation if you no longer have it. Speak with an investigating attorney to understand if you may be entitled to compensation at no cost.',
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

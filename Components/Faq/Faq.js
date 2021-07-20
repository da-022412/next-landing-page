const content = [
    {
        id: 1,
        q: 'Is bat weight important?',
        a: 'Yes! Even a small difference of one ounce can be significant to young boys and girls who play youth baseball competitively.',
    },
    {
        id: 2,
        q: 'Why are some bats overweight?',
        a: 'While there may be multiple reasons that a bat is overweight, some believe that inaccurate weights are due to poor quality control measures used in the design and manufacture process.',
    },
    {
        id: 3,
        q: 'Where can I find my bat’s stated weight?',
        a: 'The weight or weight drop should be printed directly on the gnob or barrel of the bat.',
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

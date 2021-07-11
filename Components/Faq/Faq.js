const content = {
    q1: 'Do I have a claim?',
    a1: 'If you have purchased any of the sunscreens listed above, you may have a claim whether or not you have developed cancer. See if you are owed compensation at no cost today.',
    q2: 'Does this cost me anything?',
    a2: 'No.  We bring consumer lawsuits on a contingency basis, meaning that you don’t have to pay anything, and we only get paid if you win.',
};

const Faq = () => {
    return (
        <section className='container-md'>
            <div>
                <h3 className='heading-3'>Frequently Asked Questions</h3>
                <button className='accordion' id='accordion'>
                    {content.q1}
                </button>
                <div className='panel'>
                    <p className='body-text'>{content.a1}</p>
                </div>
                <button className='accordion' id='accordion'>
                    {content.q2}
                </button>
                <div className='panel'>
                    <p className='body-text'>{content.a2}</p>
                </div>
            </div>
        </section>
    );
};

export default Faq;

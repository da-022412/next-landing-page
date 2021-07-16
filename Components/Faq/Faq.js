const content = {
    q1: 'What is this case about?',
    a1: 'This case involves Examity taking unique information about you, like facial scans, voiceprints, fingerprints, or other uniquely identifying information (“Biometric Data”) without your consent.  We believe that Examity takes facial scans and voice prints of test takers without first alerting the students to this fact.  This is illegal.',
    q2: 'Do I have a claim?',
    a2: 'If you took an online test using Examity at one of many universities in Illinois within the last year, we believe that your Biometric Data was illegally obtained, stored, and used, in violation of state privacy laws.',
    q3: 'Would a lawsuit cost me anything?',
    a3: 'No.  We bring lawsuits on a contingency basis, meaning that you don’t have to pay anything, and we only get paid if you win.',
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
                <button className='accordion' id='accordion'>
                    {content.q3}
                </button>
                <div className='panel'>
                    <p className='body-text'>{content.a3}</p>
                </div>
            </div>
        </section>
    );
};

export default Faq;

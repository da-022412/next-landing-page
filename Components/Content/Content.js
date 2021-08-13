import JotForm from '../Form/JotForm';
import List from '../List/List';
import Faq from '../Faq/Faq';

const content = {
    intro: 'Have you ever purchased Zicam Cold Remedies?',
    subIntro: 'If so, you may be entitled to compensation.',
    title: 'Why would I be owed money?',
    subTitle:
        'ZICAM Pre-Cold Medicine products are advertised as clinically proven to shorten the duration of a cold when taken at the first sign of a cold.  However, ZICAM Pre-Cold Medicine has not been clinically proven to shorten a cold, and does not prevent users from catching a cold. ',
    emphasis:
        'If you have purchased a “disinfecting” UV light at any point during the last four years, we would like to hear from you.',
};

export default function Content() {
    return (
        <section className='content-section section'>
            <div className='container-md'>
                <div className='text-center'>
                    <h1 className='heading-1'>{content.intro}</h1>
                    <h2 className='heading-3'>{content.subIntro}</h2>
                    <div className='btn primary-btn'>
                        <a href='#form' className='is-white'>
                            Continue to Free Case Review
                        </a>
                    </div>
                </div>
            </div>
            <div className='container-lg text-center'>
                <div className='content-wrap'>
                    <h2 className='heading-2'>{content.title}</h2>
                    <h3 className='heading-3'>
                        <em>{content.subTitle}</em>
                    </h3>
                    <h3 className='heading-3'>
                        <b>{false}</b>
                    </h3>
                </div>
                <div className='container-lg'>
                    <JotForm />
                </div>
            </div>
        </section>
    );
}

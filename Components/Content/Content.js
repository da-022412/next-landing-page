import JotForm from '../Form/JotForm';
import List from '../List/List';
import Faq from '../Faq/Faq';

const content = {
    intro: 'Have you ever purchased Nature’s Bounty Gingko Biloba capsules?',
    subIntro: 'If so, you may be entitled to compensation.',
    title: 'Why would I be owed money?',
    subTitle:
        'The Illinois Biometric Information Privacy Act generally requires all companies to obtain written consent before collecting biometric identifiers such as scans of facial geometry, fingerprints, and voice prints.',
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
                        <em>{false}</em>
                    </h3>
                    <h3 className='heading-3'>
                        <em>
                            The packaging of Nature’s Bounty Gingko Biloba says
                            that it “Supports Healthy Brain Function & Mental
                            Alertness.” In fact, the Food and Drug
                            Administration has not evaluated that statement, and
                            several studies have shown that gingko biloba
                            provides <b>no benefits</b> in brain function or
                            mental alertness.
                        </em>
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

import JotForm from '../Form/JotForm';
import List from '../List/List';
import Faq from '../Faq/Faq';

const content = {
    intro: 'Companies that we are investigating include (but are not limited to):',
    subIntro:
        'If you’ve virtually tried on products using any of these websites or apps, find out whether you may have a legal claim.  It only takes a few minutes and is 100% free.',
    title: 'Why would I be entitled to compensation?',
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
                    <List />
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
                        <em>
                            Illinois residents who take legal action may be
                            entitled to receive between $1,000 to $5,000 per
                            violation. Additionally, individuals who serve as
                            lead plaintiffs may be able to collect an incentive
                            award if the lawsuit results in a settlement.
                        </em>
                    </h3>
                    <h3 className='heading-3'>
                        <b>{content.emphasis}</b>
                    </h3>
                </div>
                <div className='container-lg'>
                    <JotForm />
                </div>
                <Faq />
            </div>
        </section>
    );
}

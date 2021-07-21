import JotForm from '../Form/JotForm';
import List from '../List/List';
import Faq from '../Faq/Faq';

const content = {
    intro: 'Have you paid off or re-financed a residential mortgage?',
    subIntro: 'If so, you may be entitled to $500.',
    title: 'Why would I be entitled to $500?',
    subTitle:
        'California law requires mortgage lenders to record satisfactions of mortgages within 30 days after they have been paid off.  Failure to comply with this rule may make the lender liable for $500.  However, mortgage lenders sometimes neglect to record these documents on time, if at all.',
    emphasis: '',
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
                <div className='container-sm'>
                    <JotForm />
                </div>
            </div>
        </section>
    );
}

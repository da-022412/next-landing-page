import JotForm from '../Form/JotForm';
import List from '../List/List';
import Faq from '../Faq/Faq';

const content = {
    intro: 'Do you own stock in ResMed that was purchased before 2017?',
    subIntro:
        'If so, you may be entitled to a court approved incentive award in connection with stockholder litigation.',
    title: 'Why might I be entitled to an incentive award as a stockholder of ResMed?',
    subTitle:
        'ResMed executives have caused the Company to pay more than $37.5 million to resolve allegations that the Company violated the False Claims Act for paying kickbacks to suppliers and healthcare providers. ResMed shareholders have been significantly harmed as a result.',
    emphasis:
        'If you own stock in ResMed that was purchased before 2017, know your rights. Speak with an attorney at no cost today.',
};

export default function Content() {
    return (
        <section className='content-section section'>
            <div className='container-md'>
                <div className='text-center'>
                    <h1 className='heading-1'>{content.intro}</h1>
                    <h2 className='heading-3'>{content.subIntro}</h2>
                    <JotForm />
                </div>
            </div>
            <div className='container-lg text-center'>
                <div className='container-md'>
                    <h3 className='heading-3'>
                        <b>{content.title}</b>
                    </h3>
                </div>
                <div className='content-wrap'>
                    <h3 className='heading-3'>
                        <em>{content.subTitle}</em>
                    </h3>
                    <h3 className='heading-3'>
                        <b>{content.emphasis}</b>
                    </h3>
                </div>
                <div className='btn-container'>
                    <div className='btn primary-btn'>
                        <a href='#form' className='is-white'>
                            Continue to Free Case Review
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
}

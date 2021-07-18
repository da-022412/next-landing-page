import JotForm from '../Form/JotForm';
import List from '../List/List';
import Faq from '../Faq/Faq';

const content = {
    intro: 'Class Action Agency',
    subIntro: 'Bringing Consumers and Law Firms Together for Fair Treatment',
    title: 'Submit Your Complaint',
    subTitle:
        'Do you have a complaint against a company or organization and need legal support? Submit your complaint below and be connected with a class action attorney in our network.',
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

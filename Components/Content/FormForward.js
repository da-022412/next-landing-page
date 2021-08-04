import JotForm from '../Form/JotForm';
import List from '../List/List';
import Faq from '../Faq/Faq';

const content = {
    intro: 'Have You Purchased a GE air conditioner?',
    subIntro:
        'A class action against GE claims that many of GE air conditioners are designed in a way that leads them to malfunction. If you purchased a GE air conditioner within the last 4 years, you may be entitled to compensation.',
    title: 'Our legal team is investigating GE air conditioner models that lack a protective barrier for unit circuit boards, often resulting in system failure due to moisture.',
    subTitle: 'The following GE air conditioner units are being investigated:',
    emphasis:
        'If you’ve purchased one of these models or another air conditioner that has malfunctioned, you may be entitled to compensation. Speak with our investigating attorneys today at no cost.',
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
                    <List />
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
                <Faq />
            </div>
        </section>
    );
}

import JotForm from '../Form/JotForm';
import List from '../List/List';
import Faq from '../Faq/Faq';

const content = {
    intro: 'Have you or your child received genetic testing through Ancestry.com prior to September, 2020?',
    subIntro:
        'If so, your genetic information may have been illegally shared and you may be entitled to cash compensation. Speak with our investigating attorneys today for a free review of your rights.',
    title: 'Our attorneys are investigating the way Ancestry.com collected sensitive genetic information and may have shared and stored this information in a way that violates Illinois law.',
    subTitle:
        'If Ancestry.com collected your saliva or any other DNA-related sample from you, know your rights. Get in touch with our team of investigating attorneys for a free review.',
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
                    <h3 className='heading-3'>
                        <b>{false}</b>
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

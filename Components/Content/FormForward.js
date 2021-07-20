import JotForm from '../Form/JotForm';
import List from '../List/List';
import Faq from '../Faq/Faq';

const content = {
    intro: 'Forefront Dermatology recently announced that it suffered a data breach that compromised the personal and health information of approximately 2.4 million patients.',
    subIntro:
        'If you received notice from Forefront Dermatology that your personal and/or health information was hacked, speak with our attorneys today at no cost to understand your rights.',
    title: 'Between the dates of May 28, 2021 and June 4, 2021, Forefront Dermatology suffered a cyberattack and are just now notifying 2.4 million current and former patients that their personal and health-related information, including patient names, addresses, dates of birth, patient account numbers, health insurance plan member ID numbers, medical record numbers, dates of service, provider names, and/or medical and clinical treatment information, were accessed by an unauthorized third party.',
    subTitle:
        'The hackers accessed the personal information of many patients of Forefront Dermatology, including protected health information. If you received a letter from Forefront Dermatology, get in touch today.',
    emphasis:
        'Know your rights and speak with our investigating legal team at no cost.',
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
                <Faq />
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

import JotForm from '../Form/JotForm';
import List from '../List/List';
import Faq from '../Faq/Faq';

const content = {
    intro: 'Have you taken an online exam at your college or university using Examity proctoring software?',
    subIntro:
        'If so, your biometric data may have been recorded and stored in violation of privacy laws.',
    title: 'Illinois state law prevents companies from scanning or recording your face or voice to create “biometric” data, but our investigation leads us to believe that Examity is illegally violating your privacy rights.',
    subTitle:
        'If you’ve taken an online test using Examity in the last year, you may have a claim that entitles you to relief of up to $5,000.',
    emphasis:
        'If you interviewed with one of these companies, or any other company that used HireVue software during your interview, know your rights. Speak with our legal team today.',
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
                    <h3 className='heading-3'>
                        <em>{false}</em>
                    </h3>
                    <h3 className='heading-3'>
                        <b>{content.emphasis}</b>
                    </h3>
                    <Faq />
                </div>
                <div className='container-sm'>
                    <JotForm />
                </div>
            </div>
        </section>
    );
}

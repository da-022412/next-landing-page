import JotForm from '../Form/JotForm';
import List from '../List/List';

const content = {
    intro: 'Our law firm is investigating companies that used HireVue for collecting information in violation of Illinois and New York privacy laws.',
    subIntro:
        'If you are an Illinois or New York resident and were interviewed by a potential employer through web-based HireVue software, you may be entitled to compensation and can help deter potentially unlawful practices. The companies were are investigating include but are not limited to:',
    title: 'Why Would I Be Owed Money?',
    subTitle:
        'Oregon state law requires businesses to clearly disclose the terms of any automatically renewing subscription offer and obtain customers’ affirmative consent to those terms before they subscribe.',
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
                    <List />
                    <div className='btn primary-btn'>
                        <a href='#form' className='is-white'>
                            Continue to Free Case Review
                        </a>
                    </div>
                </div>
            </div>
            <div className='container-lg text-center'>
                <div className='container-sm'>
                    <h2 className='heading-2'>{false}</h2>
                </div>
                <div className='content-wrap'>
                    <h3 className='heading-3'>
                        <em>{false}</em>
                    </h3>
                    <h3 className='heading-3'>
                        <b>{content.emphasis}</b>
                    </h3>
                </div>
                <div className='container-sm'>
                    <JotForm />
                </div>
            </div>
        </section>
    );
}

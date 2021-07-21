import JotForm from '../Form/JotForm';
import List from '../List/List';
import Faq from '../Faq/Faq';

const content = {
    intro: 'If you totaled a leased vehicle, your insurance company may owe you hundreds, or even thousands, of dollars in mandatory sales tax and fee payments. You’ve paid premiums for insurance coverage and deserve the full benefits you’re entitled to.',
    subIntro:
        'If your leased vehicle was totaled, you may be entitled to compensation for costs that insurance failed to pay you, like taxes. Insurance companies throughout the United States are breaching their insurance policies by failing to pay required sales tax and fees to customers with leased vehicles. This may have cost you hundreds or even thousands of dollars.',
    title: 'If you leased a vehicle that was totaled you have the right to full compensation, and you may have a valuable claim.',
    subTitle: 'Know your rights. Speak with an attorney at no cost today.',
    emphasis:
        'If you’ve purchased one of these models or another Easton bat that was overweight, you may be entitled to compensation. Speak with our investigating attorneys today at no cost.',
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

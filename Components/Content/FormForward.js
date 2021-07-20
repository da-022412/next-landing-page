import JotForm from '../Form/JotForm';
import List from '../List/List';
import Faq from '../Faq/Faq';

const content = {
    intro: 'Have You Purchased an Easton Baseball Bat That’s Heavier Than Labeled?',
    subIntro:
        'A class action against Easton claims that many of the company’s bats are too heavy and weigh more than the weight stated on the bats’ labeling, hurting player performance. If you purchased an Easton bat that was heavier than the labeled weight, you may be entitled to compensation.',
    title: "Customers should be able to rely on what companies say about the weight of their bats, because a bat's size and weight are critical for maximizing player performance. A bat’s length and weight drop affect a number of important performance factors, such as how easy it is for a player to control the bat when swinging it across the plate, the speed and power of the swing, and the player’s batting stance. A bat that’s too heavy by even 1oz can harm performance.",
    subTitle:
        'A Bat Digest study found that the following models are consistently overweight compared to their listed and advertised weight:',
    emphasis:
        'If you’ve purchased one of these models or another Easton bat that was overweight, you may be entitled to compensation. Speak with our investigating attorneys today at no cost.',
};

export default function Content() {
    return (
        <section className="content-section section">
            <div className="container-md">
                <div className="text-center">
                    <h1 className="heading-1">{content.intro}</h1>
                    <h2 className="heading-3">{content.subIntro}</h2>
                    <JotForm />
                </div>
            </div>
            <div className="container-lg text-center">
                <div className="container-md">
                    <h3 className="heading-3">
                        <b>{content.title}</b>
                    </h3>
                </div>
                <div className="content-wrap">
                    <h3 className="heading-3">
                        <em>{content.subTitle}</em>
                    </h3>
                    <List />
                    <h3 className="heading-3">
                        <b>{content.emphasis}</b>
                    </h3>
                </div>
                <Faq />
                <div className="btn-container">
                    <div className="btn primary-btn">
                        <a href="#form" className="is-white">
                            Continue to Free Case Review
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
}

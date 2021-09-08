import './Hero.css';
import HeroText from './assets/title-text.svg';
import HeroImage from './assets/hero-image.png';
import {
    BlueButton,
    BlueButtonSmall,
    GreenButton,
    GreenButtonSmall,
} from '../components/Buttons/Buttons';

export default function Hero() {
    return (
        <div className="hero-container pt-10 sm:pt-16 lg:pt-8 overflow-hidden">
            <div className="mx-auto max-w-7xl">
                <div className="lg:grid lg:grid-cols-2 lg:gap-8">
                    <div className="mx-auto max-w-md px-4 sm:max-w-2xl sm:px-6 sm:text-center lg:px-0 lg:text-left lg:flex lg:items-center">
                        <div className="lg:py-24">
                            <h1 className="hero-h1">
                                <span className="block">Your spiritually</span>
                                <span className="block">SYMPHONIC</span>
                                <span className="block">Decentralized</span>
                                <span className="block">Investment Platform</span>
                            </h1>
                            <img src={HeroText} />
                            <p className="mt-3 text-base text-green-500 sm:mt-5 sm:text-xl lg:text-lg xl:text-xl pl-4 text-left font-book">
                                We leverage best in breed DeFi protocols to offer novel
                                decentralized investment strategies. Built on Balancer V2, Beethoven
                                X is the first next-generation AMM protocol on Fantom.
                            </p>
                            <div className="sm:hidden pt-8">
                                <GreenButton href={''} customClassName="mx-auto">
                                    Invest
                                </GreenButton>
                                <BlueButton href={''} customClassName="mx-auto mt-4">
                                    Trade
                                </BlueButton>
                            </div>
                            <div className="pt-8 hidden sm:flex sm:pt-12">
                                <GreenButtonSmall href={''} customClassName="mx-auto sm:mx-0">
                                    Invest
                                </GreenButtonSmall>
                                <BlueButtonSmall
                                    href={''}
                                    customClassName="mx-auto mt-4 sm:ml-4 sm:mt-0 sm:mr-0"
                                >
                                    Trade
                                </BlueButtonSmall>
                            </div>
                        </div>
                    </div>
                    <div className="sm:mt-12 -mb-16 sm:-mb-48 lg:m-0 lg:relative flex">
                        <div className="flex-1 hidden lg:block" />
                        <div className="mx-auto max-w-md px-4 sm:max-w-2xl sm:px-6 lg:max-w-none lg:px-0 items-right flex justify-end">
                            <img
                                src={HeroImage}
                                width="453"
                                className="max-w-3/4 md:max-w-full mx-auto md:mx-8"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

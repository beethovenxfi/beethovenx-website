import { ContentBlock } from './ContentBlock';
import YieldGeneratingHeadline from './assets/yield-generating-headline.svg';
import YieldGeneratingImage from './assets/yield-generating-image.png';
import FundsHeadline from './assets/funds-headline.svg';
import FundsImage from './assets/basket-image.png';
import MarketOpportunitiesHeadline from './assets/market-opportunities-headline.svg';
import MarketOpportunitiesImage from './assets/looking-image.png';
import HighSpeedTradingHeadline from './assets/high-speed-trading-headline.svg';
import HighSpeedTradingImage from './assets/speed-image.png';
import CommunityImage from './assets/community-image.png';
import CommunityProjectHeadline from './assets/community-project-headline.svg';

export function Body() {
    return (
        <div>
            <ContentBlock
                headlineImage={YieldGeneratingHeadline}
                headlineText="Yield generating portfolios. Make your crypto work for you"
                image={YieldGeneratingImage}
                buttonLeft={{ text: 'Invest', href: '#' }}
                buttonRight={{ text: 'Trade', href: '#' }}
                imageOnLeft={true}
                text="With our automatically rebalancing investment pools, we turn the concept of an index fund on its head: instead of paying fees to portfolio managers to rebalance your portfolio, you collect fees from traders, who rebalance your portfolio by following arbitrage opportunities."
            />
            <ContentBlock
                headlineImage={FundsHeadline}
                headlineText="Beethoven X Funds"
                image={FundsImage}
                buttonLeft={{ text: 'Invest', href: '#' }}
                buttonRight={{ text: 'Trade', href: '#' }}
                text="Our funds provide investors with a full spectrum of exposure to the Fantom ecosystem, ranging from promising early stage DeFi tokens to more liquid assets like ETH and BTC. Each fund consists of a basket of underlying assets, weighted to provide optimal exposure."
            />
            <ContentBlock
                headlineImage={MarketOpportunitiesHeadline}
                headlineText="Leveraging market opportunities"
                image={MarketOpportunitiesImage}
                buttonLeft={{ text: 'Invest', href: '#' }}
                buttonRight={{ text: 'Trade', href: '#' }}
                imageOnLeft={true}
                text="Beethoven X’s goal is to maximize the risk-adjusted return on your crypto portfolio. We will continue to launch automated investment strategies utilizing best of breed DeFi protocols, strong partnerships and innovative yield optimizers. We make your crypto work for you."
            />
            <ContentBlock
                headlineImage={HighSpeedTradingHeadline}
                headlineText="Truly decentralized high-speed trading"
                image={HighSpeedTradingImage}
                buttonLeft={{ text: 'Invest', href: '#' }}
                buttonRight={{ text: 'Trade', href: '#' }}
                text="Beethoven X enables secure and efficient - high speed, low cost - trading. Start trading immediately, no registration required. Just connect your wallet and you’re good to go."
            />
            <div className="max-w-7xl mx-auto pt-16 pb-32">
                <img src={CommunityImage} />

                <div className="flex justify-center pt-16">
                    <img src={CommunityProjectHeadline} />
                </div>
                <p className="mt-3 text-base text-green-500 sm:mt-5 sm:text-xl lg:text-lg xl:text-xl pl-4 text-center">
                    The BEET token is the limited supply governance token for Beethoven X.
                </p>
                <p className="mt-3 text-base text-green-500 sm:mt-5 sm:text-xl lg:text-lg xl:text-xl pl-4 text-center">
                    Participate in governance and shape the future of Beethoven X &middot; 80% of
                    Protocol fees will be used to buyback BEET and redistribute them to stakers
                    &middot; Future strategies will require BEET for participation
                </p>
            </div>
        </div>
    );
}

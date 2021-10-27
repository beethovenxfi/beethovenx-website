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
import DiscordIcon from './assets/discord-icon.png';
import TwitterIcon from './assets/twitter-icon.png';
import MediumIcon from './assets/medium-icon.png';
import GitbookIcon from './assets/gitbook-logo.png';
import GithubIcon from './assets/github-logo.png';
import { BlueButton, GreenButton } from '../components/Buttons/Buttons';

export function Body() {
    return (
        <div>
            <ContentBlock
                headlineImage={YieldGeneratingHeadline}
                headlineText="Yield generating portfolios. Make your crypto work for you"
                image={YieldGeneratingImage}
                //buttonLeft={{ text: 'Invest', href: 'https://app.beets.fi' }}
                //buttonRight={{ text: 'Trade', href: 'https://app.beets.fi/#/trade' }}
                imageOnLeft={true}
                text="With our automatically rebalancing investment pools, we turn the concept of an index fund on its head: instead of paying fees to portfolio managers to rebalance your portfolio, you collect fees from traders, who rebalance your portfolio by following arbitrage opportunities."
                listItems={[
                    'Set it and forget it',
                    'Collect fees from traders and arbitragers',
                    'Permissionless platform, you control your funds',
                ]}
            />
            <ContentBlock
                headlineImage={FundsHeadline}
                headlineText="Beethoven X Funds"
                image={FundsImage}
                //buttonLeft={{ text: 'Invest', href: 'https://app.beets.fi' }}
                text="Our funds provide investors with a full spectrum of exposure to the Fantom ecosystem, ranging from promising early stage DeFi tokens to more liquid assets like ETH and BTC. Each fund consists of a basket of underlying assets, weighted to provide optimal exposure."
            >
                <div className="mt-8">
                    <GreenButton
                        href="https://app.beets.fi/#/invest"
                        customClassName="mx-auto sm:mx-0"
                    >
                        Invest now
                    </GreenButton>
                </div>
            </ContentBlock>

            <ContentBlock
                headlineImage={HighSpeedTradingHeadline}
                headlineText="Truly decentralized high-speed trading"
                image={HighSpeedTradingImage}
                text="Beethoven X enables secure and efficient - high speed, low cost - trading. Start trading immediately, no registration required. Just connect your wallet and you’re good to go."
                listItems={[
                    'Best possible price using the Smart Order Router (SOR)',
                    'Low slippage trades on Stable Pools',
                    'MEV Protection',
                    'Gas efficient multi-hop trades utilizing the Balancer V2 Vault',
                ]}
                imageOnLeft={true}
            >
                <div className="mt-8">
                    <BlueButton
                        href="https://app.beets.fi/#/trade"
                        customClassName="mx-auto sm:mx-0"
                    >
                        Start trading
                    </BlueButton>
                </div>
            </ContentBlock>
            <ContentBlock
                headlineImage={MarketOpportunitiesHeadline}
                headlineText="Leveraging market opportunities"
                image={MarketOpportunitiesImage}
                //buttonLeft={{ text: 'Invest', href: 'https://app.beets.fi' }}
                //buttonRight={{ text: 'Trade', href: 'https://app.beets.fi/#/trade' }}
                text="Beethoven X’s goal is to maximize the risk-adjusted return on your crypto portfolio. We will continue to launch automated investment strategies utilizing best of breed DeFi protocols, strong partnerships and innovative yield optimizers. We make your crypto work for you."
            >
                <div className="mt-8">
                    <GreenButton
                        href="https://docs.beethovenx.io/roadmap"
                        customClassName="mx-auto sm:mx-0"
                    >
                        Checkout our roadmap
                    </GreenButton>
                </div>
            </ContentBlock>
            <div className="max-w-7xl mx-auto pt-16 pb-20">
                <div className="flex justify-center">
                    <img src={CommunityProjectHeadline} />
                </div>
                <p className="mt-3 text-base text-green-500 sm:mt-5 sm:text-xl lg:text-lg xl:text-xl pl-4 text-center font-book">
                    The $BEETS token will be the limited supply governance token for Beethoven X.
                </p>

                <p className="mt-3 text-base text-green-500 sm:mt-5 sm:text-xl lg:text-lg xl:text-xl pl-4 text-center font-body font-bold">
                    Participate in governance and shape the future of Beethoven X &middot; 80% of
                    Protocol fees will be used to buyback $BEETS and redistribute them to liquidity
                    stakers &middot; Future strategies will require $BEETS for participation
                </p>
                <div className="divide-y-2 divide-green-500 divide-solid">
                    <div className="mt-12 md:flex items-center justify-center mb-16">
                        <GreenButton
                            href="https://docs.beethovenx.io"
                            customClassName="mx-auto md:mx-0"
                        >
                            Find out more
                        </GreenButton>
                        {/*<BlueButton
                        href="https://app.beets.fi/#/trade"
                        customClassName="md:ml-8 mx-auto md:mx-0 mt-4 md:mt-0"
                    >
                        Buy $BEETS
                    </BlueButton>*/}
                    </div>
                    <div className="flex justify-center pt-16">
                        <a href="https://twitter.com/beethoven_x" className="mr-12">
                            <img src={TwitterIcon} width="40" className="mx-auto" />
                        </a>
                        <a href="https://beethovenxio.medium.com/" className="mr-12">
                            <img src={MediumIcon} width="40" className="mx-auto" />
                        </a>
                        <a href="https://discord.gg/jedS4zGk28" className="mr-12">
                            <img src={DiscordIcon} width="40" className="mx-auto" />
                        </a>
                        <a href="https://docs.beethovenx.io/" className="mr-12">
                            <img src={GitbookIcon} width="40" className="mx-auto" />
                        </a>
                        <a href="https://github.com/beethovenxfi">
                            <img src={GithubIcon} width="40" className="mx-auto" />
                        </a>
                    </div>
                </div>
            </div>

            <img src={CommunityImage} />
        </div>
    );
}

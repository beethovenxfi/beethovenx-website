import {
    BlueButton,
    BlueButtonSmall,
    GreenButton,
    GreenButtonSmall,
} from '../components/Buttons/Buttons';

interface Props {
    headlineImage: any;
    headlineText: string;
    image: any;
    buttonLeft: {
        text: string;
        href: string;
    };
    buttonRight?: {
        text: string;
        href: string;
    };
    text: string;
    children?: any;
    imageOnLeft?: boolean;
}

export function ContentBlock({
    headlineImage,
    headlineText,
    image,
    text,
    buttonLeft,
    buttonRight,
    imageOnLeft,
    children,
}: Props) {
    const centerClassName = imageOnLeft ? 'flex-1 lg:pl-24' : 'flex-1 lg:pr-24';

    return (
        <div className="max-w-7xl mx-auto py-12 px-4 sm:py-18 md:py-24 sm:px-6 lg:px-8 lg:flex lg:justify-between">
            <div className="lg:hidden pb-12">
                <img src={image} width="492" className="max-w-3/4 mx-auto" />
            </div>
            {imageOnLeft ? (
                <div className="hidden lg:flex flex-1">
                    <img
                        src={image}
                        width="492"
                        className="max-w-3/4 md:max-w-full mx-auto md:mx-0"
                    />
                </div>
            ) : null}
            <div className={centerClassName}>
                <h2 className="hidden">{headlineText}</h2>
                <img src={headlineImage} />
                <p className="mt-3 text-base text-green-500 sm:mt-5 sm:text-xl lg:text-lg xl:text-xl pl-4 text-left font-book">
                    {text}
                </p>
                {children}

                <div className="sm:hidden pt-8">
                    <GreenButton href={buttonLeft.href} customClassName="mx-auto">
                        {buttonLeft.text}
                    </GreenButton>
                    {buttonRight ? (
                        <BlueButton href={buttonRight.href} customClassName="mx-auto mt-4">
                            {buttonRight.text}
                        </BlueButton>
                    ) : null}
                </div>
                <div className="pt-12 hidden sm:flex">
                    <GreenButtonSmall
                        href={buttonLeft.href}
                        customClassName="hidden mx-auto sm:mx-0"
                    >
                        {buttonLeft.text}
                    </GreenButtonSmall>
                    {buttonRight ? (
                        <BlueButtonSmall
                            href={buttonRight.href}
                            customClassName="mx-auto mt-4 sm:ml-4 sm:mt-0 sm:mr-0"
                        >
                            {buttonRight.text}
                        </BlueButtonSmall>
                    ) : null}
                    *
                </div>
            </div>
            {!imageOnLeft ? (
                <div className="hidden lg:flex flex-1 justify-center">
                    <img
                        src={image}
                        width="492"
                        className="max-w-3/4 md:max-w-full mx-auto md:mx-0"
                    />
                </div>
            ) : null}
        </div>
    );
}

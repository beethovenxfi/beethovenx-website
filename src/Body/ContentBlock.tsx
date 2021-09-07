import { BlueButtonSmall, GreenButtonSmall } from '../components/Buttons/Buttons';

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
    const centerClassName = imageOnLeft ? 'flex-1 pl-24' : 'flex-1 pr-24';

    return (
        <div className="max-w-7xl mx-auto py-12 px-4 sm:py-24 sm:px-6 lg:px-8 lg:flex lg:justify-between">
            {imageOnLeft ? (
                <div className="flex-1">
                    <img src={image} width="492" />
                </div>
            ) : null}
            <div className={centerClassName}>
                <h2 className="hidden">{headlineText}</h2>
                <img src={headlineImage} />
                <p className="mt-3 text-base text-green-500 sm:mt-5 sm:text-xl lg:text-lg xl:text-xl pl-4 text-left">
                    {text}
                </p>
                {children}
                <div className="flex pt-12">
                    <GreenButtonSmall href={buttonLeft.href}>{buttonLeft.text}</GreenButtonSmall>
                    {buttonRight ? (
                        <div className="pl-4">
                            <BlueButtonSmall href={buttonRight.href}>
                                {buttonRight.text}
                            </BlueButtonSmall>
                        </div>
                    ) : null}
                </div>
            </div>
            {!imageOnLeft ? (
                <div className="flex-1 flex justify-center">
                    <img src={image} width="492" />
                </div>
            ) : null}
        </div>
    );
}

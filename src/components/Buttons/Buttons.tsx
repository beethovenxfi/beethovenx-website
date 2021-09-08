import './Buttons.css';

interface Props {
    href: string;
    children: any;
    customClassName?: string;
}

export function GreenButton({ href, children, customClassName }: Props) {
    return (
        <a
            href={href}
            className={
                `beet-button green-button text-blue-900 font-medium font-body ` + customClassName ||
                ''
            }
        >
            {children}
        </a>
    );
}

export function GreenButtonSmall({ href, children, customClassName }: Props) {
    return (
        <a
            href={href}
            className={
                `hidden beet-button green-button-small text-blue-900 font-medium font-body ` +
                    customClassName || ''
            }
        >
            {children}
        </a>
    );
}

export function BlueButton({ href, children, customClassName }: Props) {
    return (
        <a
            href={href}
            className={
                `beet-button blue-button text-white font-medium font-body ` + customClassName || ''
            }
        >
            {children}
        </a>
    );
}

export function BlueButtonSmall({ href, children, customClassName }: Props) {
    return (
        <a
            href={href}
            className={
                `beet-button blue-button-small text-white font-medium font-body ` +
                    customClassName || ''
            }
        >
            {children}
        </a>
    );
}

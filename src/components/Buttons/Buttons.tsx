import './Buttons.css';

interface Props {
    href: string;
    children: any;
}

export function GreenButton({ href, children }: Props) {
    return (
        <a href={href} className="beet-button green-button text-blue-900 font-medium font-body">
            {children}
        </a>
    );
}

export function GreenButtonSmall({ href, children }: Props) {
    return (
        <a
            href={href}
            className="beet-button green-button-small text-blue-900 font-medium font-body"
        >
            {children}
        </a>
    );
}

export function BlueButtonSmall({ href, children }: Props) {
    return (
        <a href={href} className="beet-button blue-button-small text-white font-medium font-body">
            {children}
        </a>
    );
}

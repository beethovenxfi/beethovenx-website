import { Fragment } from 'react';
import { Popover, Transition } from '@headlessui/react';
import { MenuIcon, XIcon } from '@heroicons/react/outline';
import LogoSVG from '../assets/images/logo.svg';
import { GreenButton, GreenButtonSmall } from '../components/Buttons/Buttons';

const navigation = [
    { name: 'Blog', href: '#' },
    { name: 'Docs', href: '#' },
];

export default function Navigation() {
    return (
        <Popover as="header" className="relative">
            <div className="pt-6">
                <nav
                    className="relative max-w-7xl mx-auto flex items-center justify-between"
                    aria-label="Global"
                >
                    <div className="flex items-center flex-1">
                        <div className="flex items-center justify-between w-full md:w-auto">
                            <a href="#">
                                <span className="sr-only">Beethoven X</span>
                                <img
                                    className="h-16 w-auto sm:h-16"
                                    src={LogoSVG}
                                    alt="Beethoven X"
                                />
                            </a>
                            <div className="-mr-2 flex items-center md:hidden">
                                <Popover.Button className="bg-green-500 rounded-md p-2 inline-flex items-center justify-center text-white hover:bg-green-500 focus:outline-none focus:ring-2 focus-ring-inset focus:ring-white">
                                    <span className="sr-only">Open main menu</span>
                                    <MenuIcon className="h-6 w-6" aria-hidden="true" />
                                </Popover.Button>
                            </div>
                        </div>
                    </div>
                    <div className="hidden md:flex md:items-center md:space-x-6">
                        <a
                            href="#"
                            className="text-base font-medium text-green-500 hover:text-white font-body"
                        >
                            Docs
                        </a>
                        <a
                            href="#"
                            className="text-base font-medium text-green-500 hover:text-white font-body"
                        >
                            Blog
                        </a>
                        <GreenButtonSmall href={'#'}>Launch App</GreenButtonSmall>
                    </div>
                </nav>
            </div>

            <Transition
                as={Fragment}
                enter="duration-150 ease-out"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="duration-100 ease-in"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
            >
                <Popover.Panel
                    focus
                    className="absolute z-10 top-0 inset-x-0 p-2 transition transform origin-top md:hidden"
                >
                    <div className="rounded-lg shadow-md mobile-menu ring-1 ring-black ring-opacity-5 overflow-hidden">
                        <div className="px-5 pt-4 flex items-center justify-between">
                            <div>
                                <img
                                    className="h-16 w-auto relative"
                                    src={LogoSVG}
                                    alt="Beethoven X"
                                    style={{ left: -18 }}
                                />
                            </div>
                            <div className="-mr-2">
                                <Popover.Button className="bg-black rounded-full p-2 inline-flex items-center justify-center text-white hover:bg-green-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-600">
                                    <span className="sr-only">Close menu</span>
                                    <XIcon className="h-6 w-6" aria-hidden="true" />
                                </Popover.Button>
                            </div>
                        </div>
                        <div className="pt-5 pb-6">
                            <div className="px-2 space-y-1">
                                {navigation.map((item) => (
                                    <a
                                        key={item.name}
                                        href={item.href}
                                        className="block px-3 py-2 rounded-md text-base font-medium text-white hover:bg-green-500"
                                    >
                                        {item.name}
                                    </a>
                                ))}
                            </div>

                            <div className="mt-6 px-5">
                                <GreenButton href={''} customClassName="mx-auto">
                                    Launch App
                                </GreenButton>
                            </div>
                        </div>
                    </div>
                </Popover.Panel>
            </Transition>
        </Popover>
    );
}

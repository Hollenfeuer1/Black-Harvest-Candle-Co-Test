import React, { useContext } from 'react';
import Link from 'next/link';
import { Disclosure } from '@headlessui/react'
import { ShoppingCartIcon, MenuIcon, XIcon } from '@heroicons/react/outline'
import { CartContext } from '../context/shopContext'
import MiniCart from './MiniCart'

function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
}

const Navbar = () => {
    const { cart, cartOpen, setCartOpen } = useContext(CartContext)

    let cartQuantity = 0
    cart.map(item => {
        return (cartQuantity += item?.variantQuantity)
    })
    return (
        <Disclosure as='nav' className='shadow-lg bg-[#161E20]'>
            {({ open }) => (
                <>
                    <div className='max-w-7xl mx-auto px-2 sm:px-6 lg:px-8'>
                        <div className='relative flex items-center justify-between h-16'>
                            <div className='absolute inset-y-0 left-0 flex items-center sm:hidden'>
                                {/* Mobile Menu Button */}
                                <Disclosure.Button className='inline-flex items-center justify-content p-2 rounded-md text-gray-400 bg-transparent hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white'>
                                    <span className='sr-only'>Open main menu</span>
                                    {open ? (
                                        <XIcon className='block h-6 w-6' aria-hidden='true' />
                                    ) : (
                                        <MenuIcon className='block h-6 w-6' aria-hidden='true' />
                                    )}
                                </Disclosure.Button>
                            </div>
                            <div className='flex-1 flex justify-center sm:items-stretch sm:justify-evenly'>
                                <div className='flex-shrink-0 flex items-center'>
                                    <Link href='/' passHref><img className='block lg:hidden h-8 w-auto' src='/BHCC_Logo_Icon.png' alt='Black Harvest Candle Co' /></Link>
                                    <Link href='/' passHref><img className='hidden lg:block h-20 w-auto mt-14 cursor-pointer' src='/BHCC_Logo_New.png' alt='Black Harvest Candle Co' /></Link>
                                </div>
                                <div className='hidden sm:block sm:ml-6 lg:mt-14 pl-20 pt-1'>
                                    <div className='flex space-x-4'>
                                        <Link href='/shop' passHref>Shop</Link>
                                        <Link href='/about-us' passHref>About Us</Link>
                                        <Link href='/faq' passHref>FAQ</Link>
                                        <Link href='/contact-us' passHref>Contact Us</Link>
                                    </div>
                                </div>
                            </div>
                            <div className='absolute inset-y-0 right-0 flex items-center pr-2 sm:static lg:mt-4 sm:inset-auto sm:ml-6 sm:pr-0'>
                                <a
                                    className="flex text-md font-bold cursor-pointer"
                                    onClick={() => setCartOpen(!cartOpen)}
                                >
                                    <ShoppingCartIcon className="h-6 w-6" />({cartQuantity})
                                </a>
                                <MiniCart cart={cart} />
                            </div>
                        </div>
                    </div>

                    <Disclosure.Panel className='sm:hidden'>
                        <div className='px-2 pt-2 pb-3 space-y-1'>
                            <Disclosure.Button as='a' href='/shop' className='block px-3 py-2 rounded-md text-base font-medium'>Shop</Disclosure.Button>
                            <Disclosure.Button as='a' href='/about-us' className='block px-3 py-2 rounded-md text-base font-medium'>About Us</Disclosure.Button>
                            <Disclosure.Button as='a' href='/faq' className='block px-3 py-2 rounded-md text-base font-medium'>FAQ</Disclosure.Button>
                            <Disclosure.Button as='a' href='/contact-us' className='block px-3 py-2 rounded-md text-base font-medium'>Contact Us</Disclosure.Button>
                        </div>
                    </Disclosure.Panel>
                </>
            )
            }
        </Disclosure>
    );
};

export default Navbar;

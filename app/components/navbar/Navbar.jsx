'use client'
import React, { useState, useEffect } from 'react'
import Link from 'next/link'
import NavItem from './NavItem'
import MobileNavItem from './MobileNavItem'
import navItems from './navItems'

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false)
    const [activeLink, setActiveLink] = useState('/')

    return (
        <nav className='fixed top-0 left-0 w-full z-50 py-2 bg-white text-black border-b border-gray-200 shadow-sm transition-all duration-300'>
            <div className='container mx-auto px-4'>
                <div className='flex justify-between items-center h-12 md:h-16'>
                    {/* Logo */}
                    <div className='flex items-center h-20'>
                        <Link
                            href='/'
                            className='flex items-center group'
                            onClick={() => setActiveLink('/')}
                        >
                            <img
                                src='/logo-desa.jpg'
                                alt='Logo Desa Cigalontang'
                                className='h-12 md:h-16 mr-3 transition-transform duration-300 group-hover:scale-110'
                            />
                            <div className='flex flex-col'>
                                <span className='font-bold text-lg hidden sm:block leading-tight text-black group-hover:text-[#0e8038]'>
                                    Desa Cigalontang
                                </span>
                                <span className='text-sm hidden sm:block leading-tight text-gray-600 group-hover:text-[#0e8038]'>
                                    Kabupaten Tasikmalaya
                                </span>
                            </div>
                        </Link>
                    </div>

                    {/* Desktop Menu */}
                    <div className='hidden md:flex space-x-1'>
                        {navItems.map((item) => (
                            <div
                                key={item.href}
                                className='relative group'
                            >
                                <NavItem
                                    {...item}
                                    isActive={activeLink === item.href}
                                    onClick={() => setActiveLink(item.href)}
                                    textColor='text-black'
                                    hoverColor='hover:text-[#0e8038]' // Tambahkan jika kamu dukung prop ini
                                />
                                {item.children && (
                                    <div className='absolute top-full left-0 bg-white text-black rounded shadow-md opacity-0 group-hover:opacity-100 scale-95 group-hover:scale-100 transition-all duration-300 min-w-[180px] z-50'>
                                        {item.children.map((child) => (
                                            <Link
                                                key={child.href}
                                                href={child.href}
                                                className='block px-4 py-2 hover:bg-gray-100 text-sm hover:text-[#0e8038]'
                                                onClick={() =>
                                                    setActiveLink(child.href)
                                                }
                                            >
                                                {child.text}
                                            </Link>
                                        ))}
                                    </div>
                                )}
                            </div>
                        ))}
                    </div>

                    {/* Mobile Toggle */}
                    <div className='md:hidden'>
                        <button
                            onClick={() => setIsOpen(!isOpen)}
                            className='p-2 rounded text-black hover:bg-black/10'
                            aria-label='Toggle menu'
                        >
                            <svg
                                className='h-6 w-6'
                                fill='none'
                                viewBox='0 0 24 24'
                                stroke='currentColor'
                            >
                                {isOpen ? (
                                    <path
                                        strokeLinecap='round'
                                        strokeLinejoin='round'
                                        strokeWidth={2}
                                        d='M6 18L18 6M6 6l12 12'
                                    />
                                ) : (
                                    <path
                                        strokeLinecap='round'
                                        strokeLinejoin='round'
                                        strokeWidth={2}
                                        d='M4 6h16M4 12h16M4 18h16'
                                    />
                                )}
                            </svg>
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile Menu */}
            <div
                className={`md:hidden overflow-hidden transition-all duration-300 
        bg-white text-black 
        ${isOpen ? 'max-h-[800px] py-3' : 'max-h-0 py-0'}`}
            >
                <div className='px-4 space-y-3'>
                    {navItems.map((item) => (
                        <div key={item.href}>
                            <MobileNavItem
                                {...item}
                                isActive={activeLink === item.href}
                                onClick={() => {
                                    setActiveLink(item.href)
                                    setIsOpen(false)
                                }}
                                activeColor='#0e8038'
                            />
                            {item.children &&
                                item.children.map((child) => (
                                    <MobileNavItem
                                        key={child.href}
                                        {...child}
                                        text={`— ${child.text}`}
                                        isActive={activeLink === child.href}
                                        onClick={() => {
                                            setActiveLink(child.href)
                                            setIsOpen(false)
                                        }}
                                        activeColor='#0e8038'
                                    />
                                ))}
                        </div>
                    ))}
                </div>
            </div>
        </nav>
    )
}

export default Navbar

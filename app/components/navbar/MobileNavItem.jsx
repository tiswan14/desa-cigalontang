'use client'
import { useState } from 'react'
import Link from 'next/link'
import { ChevronDown, ChevronUp } from 'lucide-react'

const MobileNavItem = ({ href, icon, text, isActive, onClick, children }) => {
    const [open, setOpen] = useState(false)

    if (children) {
        return (
            <div className='flex flex-col'>
                <button
                    onClick={() => setOpen(!open)}
                    className={`flex items-center justify-between px-4 py-2 rounded-lg text-base w-full transition-all ${
                        isActive
                            ? 'bg-[#0e8038]/10 text-[#0e8038] font-semibold'
                            : 'text-gray-800 hover:text-[#0e8038] hover:bg-gray-100'
                    }`}
                >
                    <span className='flex items-center'>
                        {icon && <span className='mr-2'>{icon}</span>}
                        {text}
                    </span>
                    {open ? (
                        <ChevronUp className='w-4 h-4' />
                    ) : (
                        <ChevronDown className='w-4 h-4' />
                    )}
                </button>
                {open && (
                    <div className='ml-4 mt-1 space-y-1'>
                        {children.map((child) => (
                            <Link
                                key={child.href}
                                href={child.href}
                                className={`block px-4 py-1 rounded-lg text-base transition-all ${
                                    isActive === child.href
                                        ? 'bg-[#0e8038]/10 text-[#0e8038] font-semibold'
                                        : 'text-gray-700 hover:text-[#0e8038] hover:bg-gray-100'
                                }`}
                                onClick={onClick}
                            >
                                {child.text}
                            </Link>
                        ))}
                    </div>
                )}
            </div>
        )
    }

    return (
        <Link
            href={href}
            onClick={onClick}
            className={`flex items-center px-4 py-2 rounded-lg text-base transition-all ${
                isActive
                    ? 'bg-[#0e8038]/10 text-[#0e8038] font-semibold'
                    : 'text-gray-800 hover:text-[#0e8038] hover:bg-gray-100'
            }`}
        >
            {icon && <span className='mr-2'>{icon}</span>}
            {text}
        </Link>
    )
}

export default MobileNavItem

import Link from 'next/link'
import { ChevronDown } from 'lucide-react'

const NavItem = ({
    href,
    icon,
    text,
    isActive,
    onClick,
    hasChildren = false,
}) => (
    <Link
        href={href}
        onClick={onClick}
        className={`flex items-center px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 group
            ${
                isActive
                    ? 'text-emerald-700 bg-emerald-100'
                    : 'text-gray-700 hover:text-emerald-700 hover:bg-emerald-100/60'
            }`}
    >
        {icon && <span className='mr-2'>{icon}</span>}
        {text}
        {hasChildren && (
            <ChevronDown className='ml-1 w-4 h-4 text-inherit group-hover:rotate-180 transition-transform duration-300' />
        )}
    </Link>
)

export default NavItem

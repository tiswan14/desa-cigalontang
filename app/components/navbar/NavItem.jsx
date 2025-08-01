import Link from 'next/link'
import { ChevronDown } from 'lucide-react'

const NavItem = ({
    href,
    icon,
    text,
    isActive,
    onClick,
    hasChildren = false,
    isDropdownOpen = false, // Tambahan
    toggleDropdown, // Tambahan
}) => {
    const handleClick = (e) => {
        if (hasChildren) {
            e.preventDefault()
            toggleDropdown()
        } else {
            onClick?.()
        }
    }

    return (
        <Link
            href={href}
            onClick={handleClick}
            className={`flex items-center px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300
                ${
                    isActive
                        ? 'text-emerald-700 bg-emerald-100'
                        : 'text-gray-700 hover:text-emerald-700 hover:bg-emerald-100/60'
                }`}
        >
            {icon && <span className='mr-2'>{icon}</span>}
            {text}
            {hasChildren && (
                <ChevronDown
                    className={`ml-1 w-4 h-4 transition-transform duration-300 ${
                        isDropdownOpen ? 'rotate-180' : 'rotate-0'
                    }`}
                />
            )}
        </Link>
    )
}

export default NavItem

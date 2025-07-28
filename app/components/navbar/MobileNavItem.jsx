import Link from 'next/link'

const MobileNavItem = ({ href, icon, text, isActive, onClick }) => (
    <Link
        href={href}
        onClick={onClick}
        className={`flex items-center px-4 py-2 rounded-lg text-base transition-all ${
            isActive
                ? 'bg-white/20 text-white'
                : 'text-white/90 hover:text-white hover:bg-white/10'
        }`}
    >
        {icon && <span className='mr-2'>{icon}</span>}
        {text}
    </Link>
)

export default MobileNavItem

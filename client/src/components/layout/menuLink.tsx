import Link from "next/link"

interface MenuLinkProps {
    linkHref: string,
    linkName: string,
}

const MenuLink = ({linkHref, linkName}:MenuLinkProps) => {
    return (
        <Link href={linkHref}
                className="flex justify-between items-center lg:block lg:text-nowrap focus:text-basePurple hover:text-basePurple"
        >
            <p>{linkName}</p>
            <p className="lg:hidden">&gt;</p>
        </Link>
    )
}

export default MenuLink;
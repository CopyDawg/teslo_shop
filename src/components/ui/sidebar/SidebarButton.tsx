import Link from "next/link"
import { IconType } from "react-icons";

interface Props {
    href: string;
    text: string;
    Icon: IconType
}

export const SidebarButton = ({href, text, Icon} : Props) => {
    return (
        <Link
            href={href}
            className="flex items-center mt-7 p-2 hover:bg-gray-100 rounded transition-all"
        >
            <Icon size={27} />
            <span className="ml-3 text-xl">{text}</span>
        </Link>
    )
}

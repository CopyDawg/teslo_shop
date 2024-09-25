'use client';
import { IoCloseOutline, IoLogInOutline, IoLogOutOutline, IoPeopleOutline, IoPersonOutline, IoSearchOutline, IoShirtOutline, IoTicketOutline } from "react-icons/io5"
import { SidebarButton } from "./SidebarButton";
import { useUIStore } from "@/store/ui/ui-store";
import clsx from "clsx";

export const Sidebar = () => {
    const isSideMenuOpen = useUIStore(state => state.isSideMenuOpen);
    const closeMenu = useUIStore(state => state.closeSideMenu);

    return (
        <div>
            {/* black background */}
            {
                isSideMenuOpen && (
                    <div className="fixed top-0 left-0 w-screen h-screen z-10 bg-black opacity-30"/>
                )
            }
            {/* blur background */}
            {
                isSideMenuOpen && (
                    <div className="fade-in fixed top-0 left-0 w-screen h-screen z-10 backdrop-filter backdrop-blur-sm"/>
                )
            }
            {/* Side menu */}
            <nav className={
                clsx(
                    "fixed p-5 right-0 top-0 w-[500px] h-screen bg-white z-20 shadow-2xl transform transition-all duration-300",
                    {
                        "translate-x-full": !isSideMenuOpen
                    }
                )
            }>
                <IoCloseOutline 
                    size={50} 
                    className="absolute top-5 right-5 cursor-pointer" 
                    onClick={() => console.log("click")}
                />
                {/* input */}
                <div className="relative mt-14">
                    <IoSearchOutline
                        size={20}
                        className="absolute top-2 left-2"
                        />
                    <input
                        type="text" 
                        placeholder="Buscar"
                        className="w-full bg-gray-50 rounded pl-10 py-1 pr-10 border-b-2 text-xl border-gray-200 focus:outline-none focus:border-blue-500"
                        />
                </div>
                {/* Menu */}
                <SidebarButton href="/" text="Perfil" Icon={IoPersonOutline} />
                <SidebarButton href="/" text="Ordenes" Icon={IoTicketOutline} />
                <SidebarButton href="/" text="Ingresar" Icon={IoLogInOutline} />
                <SidebarButton href="/" text="Cerrar sesión" Icon={IoLogOutOutline} />
                {/* Line separator */}
                <div className="w-full h-px bg-gray-200 my-10"/>
                <SidebarButton href="/" text="Productos" Icon={IoShirtOutline} />
                <SidebarButton href="/" text="Ordenes" Icon={IoTicketOutline} />
                <SidebarButton href="/" text="Clientes" Icon={IoPeopleOutline} />
            </nav>
        </div>
    )
}

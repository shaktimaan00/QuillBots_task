"use client"
import "./style.css"
import { useState } from "react";
import { Navbar, NavbarBrand, NavbarContent, NavbarItem, NavbarMenuToggle, NavbarMenu, NavbarMenuItem, Link, Button } from "@nextui-org/react";
import Image from "next/image";

const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const menuItems = [
        "Services",
        "Pricing",
        "Our Audits",
        "Tools",
        "Resources",
        "Refer-Earn-Secure"
    ];

    return (
        <Navbar onMenuOpenChange={setIsMenuOpen} className="header-container">
            <NavbarContent>
                <NavbarMenuToggle
                    aria-label={isMenuOpen ? "Close menu" : "Open menu"}
                    className="sm:hidden"
                />
                <NavbarBrand>
                    <Image src="/logo.png" className="header-logo" width={120} height={100} alt="logo" />
                </NavbarBrand>
            </NavbarContent>

            <NavbarContent className="hidden sm:flex gap-4 header-navitem" justify="center">
                <NavbarItem>
                    <Link className="text-slate-200 text-sm" href="#">
                        Services
                    </Link>
                </NavbarItem>
                <NavbarItem>
                    <Link href="#" aria-current="page" className="text-slate-200 text-sm">
                        Pricing
                    </Link>
                </NavbarItem>
                <NavbarItem>
                    <Link color="foreground" href="#" className="text-slate-200 text-sm">
                        Audits
                    </Link>
                </NavbarItem>
                <NavbarItem>
                    <Link color="foreground" href="#" className="text-slate-200 text-sm">
                        Tools
                    </Link>
                </NavbarItem>
                <NavbarItem>
                    <Link color="foreground" href="#" className="text-slate-200 text-sm">
                        Resources
                    </Link>
                </NavbarItem>
                <NavbarItem>
                    <Link color="foreground" href="#" className="text-slate-200 text-sm">
                        Refer-Earn-Secure
                    </Link>
                </NavbarItem>
            </NavbarContent>
            <NavbarContent justify="end">
                <NavbarItem>
                    <Button as={Link} color="primary" href="#" variant="flat" className="button text-sm">
                        Request an Audit
                    </Button>
                </NavbarItem>
            </NavbarContent>
            <NavbarMenu>
                {menuItems.map((item, index) => (
                    <NavbarMenuItem key={`${item}-${index}`}>
                        <Link
                            className="w-full text-black"
                            href="#"
                            size="lg"
                        >
                            {item}
                        </Link>
                    </NavbarMenuItem>
                ))}
            </NavbarMenu>
        </Navbar>
    )
}

export default Header;
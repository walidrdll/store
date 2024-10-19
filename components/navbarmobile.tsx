import {
    Navbar as NextUINavbar,
    NavbarContent,
    NavbarMenu,
    NavbarMenuToggle,
    NavbarBrand,
    NavbarItem,
    NavbarMenuItem,
  } from "@nextui-org/navbar";
  import { Button } from "@nextui-org/button";
  import { Kbd } from "@nextui-org/kbd";
  import { Link } from "@nextui-org/link";
  import { Input } from "@nextui-org/input";
  import { link as linkStyles } from "@nextui-org/theme";
  import NextLink from "next/link";
  import clsx from "clsx";
  
  import { siteConfig } from "@/config/site";
  import { ThemeSwitch } from "@/components/theme-switch";
  import {
    TwitterIcon,
    GithubIcon,
    DiscordIcon,
    HeartFilledIcon,
    SearchIcon,
    Logo,
  } from "@/components/icons";
  import {Image} from "@nextui-org/image";
import { House } from "lucide-react";
import { menuList } from "@/config/menuList";

const NavBarMobile = () => {
    
  
    return (
      <NextUINavbar maxWidth="xl" position="sticky" className=" md:hidden bottom-0 z-50">
        <NavbarContent className="basis-1/5 sm:basis-full" justify="start">
          <ul className=" flex gap-4 justify-start ml-2">
            {menuList.map((item) => (
              <NavbarItem key={item.href}>
                <NextLink
                  className={clsx(
                    linkStyles({ color: "foreground" }),
                    "flex flex-col mr-5 data-[active=true]:text-primary data-[active=true]:font-medium",
                  )}
                  color="foreground"
                  href={item.href}
                >
                 <span className="size-5"> {item.icon} </span>
                  <span className="flex">{item.name} </span>
                </NextLink>
              </NavbarItem>
            ))}
          </ul>
        </NavbarContent>
  
  
        <NavbarContent className="sm:hidden basis-1 pl-2" justify="end">
          <ThemeSwitch />
          <NavbarMenuToggle />
        </NavbarContent>
  
        <NavbarMenu>
          <div className="mx-4 mt-2 flex flex-col gap-2">
            {siteConfig.navMenuItems.map((item, index) => (
              <NavbarMenuItem key={`${item}-${index}`}>
                <Link
                  color={
                    index === 2
                      ? "primary"
                      : index === siteConfig.navMenuItems.length - 1
                        ? "danger"
                        : "foreground"
                  }
                  href="#"
                  size="lg"
                >
                  {item.label}
                </Link>
              </NavbarMenuItem>
            ))}
          </div>
        </NavbarMenu>
      </NextUINavbar>
    );
  };
export default NavBarMobile;
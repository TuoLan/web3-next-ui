import {
  Navbar as NextUINavbar,
  NavbarContent,
  NavbarMenu,
  NavbarMenuToggle,
  NavbarBrand,
  NavbarItem,
  NavbarMenuItem,
  Kbd,
  Link,
  Input,
  Image,
  link as linkStyles
} from "@nextui-org/react";
import NextLink from "next/link";
import clsx from "clsx";

import { siteConfig } from "@/config/site";
import { ThemeSwitch } from "@/components/theme-switch";
import {
  TwitterIcon,
  GithubIcon,
  SearchIcon
} from "@/components/icons";
import { ConnectButton } from '@rainbow-me/rainbowkit';

export const Navbar = () => {
  const searchInput = (
    <Input
      aria-label="Search"
      classNames={{
        inputWrapper: "bg-default-100",
        input: "text-sm",
      }}
      endContent={
        <Kbd className="hidden lg:inline-block" keys={["command"]}>
          K
        </Kbd>
      }
      labelPlacement="outside"
      placeholder="Search..."
      startContent={
        <SearchIcon className="text-base text-default-400 pointer-events-none flex-shrink-0" />
      }
      type="search"
    />
  );

  return (
    <NextUINavbar maxWidth="xl" position="sticky">
      <NavbarContent className="basis-1/9 sm:basis-full" justify="start">
        <NavbarBrand className="gap-3 max-w-fit">
          <NextLink className="flex justify-start items-center gap-1" href="/">
            <Image className="w-14" src="data:image/png;base64,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" />
            <p className="font-bold text-inherit">Calf</p>
          </NextLink>
        </NavbarBrand>
        <div className="hidden lg:flex gap-4 justify-start ml-2">
          {siteConfig.navItems.map((item) => (
            <NavbarItem key={item.href}>
              <NextLink
                className={clsx(
                  linkStyles({ color: "foreground" }),
                  "data-[active=true]:text-primary data-[active=true]:font-medium",
                )}
                color="foreground"
                href={item.href}
                target={item.label === 'Stake' ? '_self' : '_blank'}
              >
                {item.label}
              </NextLink>
            </NavbarItem>
          ))}
        </div>
      </NavbarContent>

      <NavbarContent
        className="hidden sm:flex basis-1/5 sm:basis-full"
        justify="end"
      >
        <NavbarItem className="hidden sm:flex gap-2">
          <Link isExternal href={siteConfig.links.twitter} title="Twitter">
            <TwitterIcon className="text-default-500" />
          </Link>
          <Link isExternal href={siteConfig.links.github} title="GitHub">
            <GithubIcon className="text-default-500" />
          </Link>
          <ThemeSwitch />
        </NavbarItem>
        <NavbarItem className="hidden lg:flex">{searchInput}</NavbarItem>
        <NavbarItem>
          <ConnectButton chainStatus="none" showBalance={false} />
        </NavbarItem>
      </NavbarContent>

      <NavbarContent className="sm:hidden basis-1 pl-4" justify="end">
        <Link isExternal href={siteConfig.links.github}>
          <GithubIcon className="text-default-500" />
        </Link>
        <ThemeSwitch />
        <NavbarMenuToggle />
      </NavbarContent>

      <NavbarMenu>
        {searchInput}
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

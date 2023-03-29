export interface NavbarDataType {
    label: string,
    href?: string,
}


export let NavbarData: Array<NavbarDataType> = [
    {
        label: "Home",
        href: "/",
    },
    {
        label: "Books",
        href: "/books",
    },
    {
        label: "Blogs",
        href: "/",
    },
    {
        label: "Orders",
        href: "/orders",
    },
    {
        label: "Contact us",
        href: "/",
    },
]
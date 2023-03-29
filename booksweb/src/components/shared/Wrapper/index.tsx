import { ReactNode } from "react"

interface propsType {
    children: ReactNode,
}

export default function Wrapper({ children }: propsType) {
    return (
        <div className="mx-auto max-w-[93rem]">{children}</div>
    )
}
interface propsType {
    text: string,
}
export default function Button({ text }: propsType) {
    return (
        <button className="m-2 py-3 px-8 bg-[#ccd9e1] rounded-sm hover:bg-[#a8bac6] duration-300">{text}</button>
    )
}
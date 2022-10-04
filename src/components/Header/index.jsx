import Image from "next/image"

export function Header({ theme }) {
    const displaySize =  () => typeof window.screen.width !== "undefined" 

    return (
        <header className="relative w-full h-[300px] ">
                <Image
                    src={`/${displaySize <= 800 ? "mobile" : "desktop"}/${theme === 'dark' ? 'bg-dark.jpg' : 'bg-light.jpg'}`}
                    layout="fill"
                    priority
                />
        </header>
    )
}
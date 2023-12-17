import { BsArrowRightShort } from "react-icons/bs"

function CentralThemes() {
    return (
        <div className="flex flex-col justify-center gap-2 w-full bg-white text-poker px-16 py-8 rounded mb-24">
            <h1 className="text-3xl font-bold">Centrala Teman</h1>
            <Theme tema="Tema 4b" rubrik="Mer o NT-givar"/>
            <Theme tema="Tema 4b" rubrik="Mer o NT-givar"/>
            <Theme tema="Tema 4b" rubrik="Mer o NT-givar"/>
            <Theme tema="Tema 4b" rubrik="Mer o NT-givar"/>
            <Theme tema="Tema 4b" rubrik="Mer o NT-givar"/>

            <a href="#" className="flex items-center text-xl text-blue-500 border-b border-blue-500 ml-auto mt-4">Visa alla teman <BsArrowRightShort /></a>
        </div>
    )
}

function Theme({tema, rubrik} : {tema: string, rubrik: string}) {
    return (
        <>
            <div className="flex gap-2 items-center">
                <p className="text-lg">{rubrik}</p>
                <a href="#" className="text-lg text-blue-500 border-b border-blue-500 ml-auto">{tema}</a>
            </div>
        </>
    )
}

export default CentralThemes
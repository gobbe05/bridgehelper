function CentralThemes() {
    return (
        <div className="flex flex-col gap-2 w-1/2">
            <h1 className="text-2xl font-bold">Centrala Teman</h1>
            <Theme tema="Tema 4b" rubrik="Mer o NT-givar"/>
            <Theme tema="Tema 4b" rubrik="Mer o NT-givar"/>
            <Theme tema="Tema 4b" rubrik="Mer o NT-givar"/>
            <Theme tema="Tema 4b" rubrik="Mer o NT-givar"/>
            <Theme tema="Tema 4b" rubrik="Mer o NT-givar"/>
        </div>
    )
}

function Theme({tema, rubrik} : {tema: string, rubrik: string}) {
    return (
        <>
            <div className="flex gap-2 items-center">
                <p className="text-lg">{rubrik}</p>
                <a href="#" className="text-blue-600 border-b border-blue-600 font-light ml-auto">{tema}</a>
            </div>
        </>
    )
}

export default CentralThemes
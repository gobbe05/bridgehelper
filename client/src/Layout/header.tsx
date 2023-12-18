import ColorButton from "../Components/colorbutton"

function Header() {
    return (
        <div className="relative flex lg:justify-center items-center h-64 lg:h-96">
            <ColorButton />
            <div>
                <h1 className="sm:text-6xl text-4xl font-bold">Bridgehelper.</h1>
                <p className="sm:text-2xl text-xl">Lär dig att spela Bridge</p>
            </div>
        </div>
    )
}

export default Header
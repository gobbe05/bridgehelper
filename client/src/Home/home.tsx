import Introduction from "./introduction"
import Information from "./information"
import InformationTema from "./temainformation"

function Home() {
    return (
        <>
            <div className="flex flex-col gap-16">
                <Introduction />
                <InformationTema />
                <Information />
            </div>
        </>
    )
}

export default Home

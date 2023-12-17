import Introduction from "./introduction"
import Information from "./information"
import CentralThemes from "./centralthemes"
import HomeEnd from "./homeend"

function Home() {
    return (
        <>
            <div className="flex flex-col gap-24">
                <Introduction />
                <Information />
                <CentralThemes />
                <HomeEnd />
            </div>
        </>
    )
}

export default Home
import Introduction from "./introduction"
import Information from "./information"
import CentralThemes from "./centralthemes"

function Home() {
    return (
        <>
            <div className="flex flex-col gap-32">
                <Introduction />
                <Information />
                <CentralThemes />

            </div>
        </>
    )
}

export default Home
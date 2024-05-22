import { useContext} from 'react'
import { Link } from 'react-router-dom'
import { colorcontext } from '../main'
import { BsArrowRightShort } from 'react-icons/bs'
import Theme from '../Components/theme'

function Information() {
    const color = useContext(colorcontext)

    return (
        <div className="flex items-center mb-8">
            <div className={`flex flex-col ${color?.colorMode == "light" ? "sm:bg-poker sm:text-white" : "sm:bg-white sm:text-gray-600"} sm:p-8 lg:px-16 rounded transition-all`}>
                <div className='flex flex-col gap-4'>
                    <h1 className="text-3xl font-bold">Nedan visas ett axplock på några centrala teman</h1>
                    <Theme pdf={"/uploads/4b Mer om NT-öppning.pdf"} heading={"Behöver du endast en uppfräschning av NT-budet och vill ha en överblick på principen för överföring, går du direkt till tema 4b"} tema={"Tema 4b"}/>
                    <Theme pdf={"/uploads/6 Tumregler & Hörnstolpar.pdf"} heading={"Behöver du endast snegla på ett antal Bridge-komihåg-ramsor går du direkt till tema 6​​​"} tema={"Tema 6"}/>
                    <Theme pdf={"/uploads/14 (a-b) En rundtur med budkedjan Öh1-Sh1-Öh2.pdf"} heading={"Behöver du endast en överblick på kombinationer med de första buden Öh1, Sh1 och Öh2, går du direkt till tema 14"} tema={"Tema 14"}/>
                    <Theme pdf={"/uploads/16  Om öppning med något av buden 1X el 2NT el 2Kl.pdf"} heading={"Behöver du endast en överblick på alternativ till öppningsbud vid spelstark hand (Hp=18+) går du direkt till tema 16​​"} tema={"Tema 16"}/>
                    <Theme pdf={"/uploads/30 Digital  Hjälpreda i Bridge . Ord och begrepp i Bridge.pdf"} heading={"Behöver du endast tillgång till en alfabetisk bridge-ordlista, ​​​​går du direkt till tema 30.  ​​"} tema={"Tema 30"}/>
                </div>
                <p></p>
                <Link to="/allateman" className={`flex items-center text-xl border-b ml-auto mt-8 sm:hover:px-2 ${color && color.colorMode == "light" ? "text-blue-300 border-blue-300" : "text-blue-500 border-blue-500"} transition-all`}>Visa alla teman <BsArrowRightShort /></Link>
            </div>
        </div>
    )
}

/*function Theme({text, theme} : {text: string, theme: string}) {
    const color = useContext(colorcontext)
    return (
        <a href="#" className='w-full flex items-center gap-8 hover:shadow-inner hover:bg-gray-200 p-4 transition-all'>
        
            <div className='w-5/6'>
                <h1>{text}</h1>
            </div>
            <p className={`${color && color.colorMode == "light" ? "text-blue-300" : "text-blue-600"} underline ml-auto`}>{theme}</p>

        </a>
    )
}*/

export default Information

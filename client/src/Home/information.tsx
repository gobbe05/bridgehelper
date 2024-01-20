import { useContext} from 'react'
import { Link } from 'react-router-dom'
import { colorcontext } from '../main'
import { BsArrowRightShort } from 'react-icons/bs'

function Information() {
    const color = useContext(colorcontext)

    return (
        <div className="flex items-center">
            <div className={`flex flex-col ${color?.colorMode == "light" ? "sm:bg-poker sm:text-white" : "sm:bg-white sm:text-poker"} sm:p-8 rounded transition-all`}>
                <div className='flex flex-col gap-4'>
                    <h1 className="text-3xl font-bold px-4">Information</h1>
                    <Theme text={"Behöver du endast en uppfräschning av NT-budet och vill ha en överblick på principen för överföring, går du direkt till tema 4b"} theme={"Tema 4b"}/>
                    <Theme text={"Behöver du endast snegla på ett antal Bridge-komihåg-ramsor går du direkt till tema 6​​​"} theme={"Tema 6"}/>
                    <Theme text={"Behöver du endast en överblick på kombinationer med de första buden Öh1, Sh1 och Öh2, går du direkt till tema 14"} theme={"Tema 14"}/>
                    <Theme text={"Behöver du endast en överblick på alternativ till öppningsbud vid spelstark hand (Hp=18+) går du direkt till tema 16​​"} theme={"Tema 30"}/>
                    <Theme text={"Behöver du endast tillgång till en alfabetisk bridge-ordlista, ​​​​går du direkt till tema 30.  ​​"} theme={"Tema 4b"}/>
                </div>
                <Link to="/allateman" className={`flex items-center text-xl border-b ml-auto mt-8 sm:hover:px-2 ${color && color.colorMode == "light" ? "text-blue-300 border-blue-300" : "text-blue-500 border-blue-500"} transition-all`}>Visa alla teman <BsArrowRightShort /></Link>
            </div>
        </div>
    )
}

function Theme({text, theme} : {text: string, theme: string}) {
    return (
        <a href="#" className='w-full flex items-center gap-8 hover:shadow-inner hover:bg-gray-200 p-4 transition-all'>
        
            <div className='w-5/6'>
                <h1>{text}</h1>
            </div>
            <p className='text-blue-600 underline ml-auto'>{theme}</p>

        </a>
    )
}

export default Information
import blobYellow from '/blob-shape-yellow.svg'
import blobBlue from '/blob-shape-blue.svg'
import blobPink from '/blob-shape-pink.svg'
import logo from '/logo.svg'

export default function Background() {
    return (
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <img
                id="logo"
                src={logo}
                className="absolute top-[2vw] left-[1vw] w-[6vw] h-[6vw]"
            />

            <img
                id="blob-yellow-big"
                src={blobYellow}
                className="absolute -bottom-[10vh] -left-[10vw] w-[30vw] h-[25vw] rotate-[290deg]"
            />

            <img
                id="blob-yellow-small"
                src={blobYellow}
                className="absolute -bottom-[3vw] -right-[4vw] w-[10vw] h-[10vw] rotate-[120deg]"
            />
            
            <img
                id="blob-blue"
                src={blobBlue}
                className="absolute -top-[4vw] -right-[5vw] w-[25vw] h-[25vw] rotate-[325deg]"
            />

            <img
                id="blob-pink"
                src={blobPink}
                className="absolute top-[10vw] -right-[2vw] w-[10vw] h-[10vw]"
            />
        </div>
    )
}
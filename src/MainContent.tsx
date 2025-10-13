import appStore from './assets/app-store.svg'

export default function MainContent() {
    return (
        <div className = "flex flex-col items-start justify-center min-h-screen -mt-30">
            <h1 className = "font-roboto font-bold text-[5rem] text-gray-900 ml-[15vw] m-0">
                Berkeley
            </h1>

            <h1 className = "font-roboto font-bold text-[5rem] text-gray-900 ml-[15vw] -mt-12">
                Mobile
            </h1>

            <p className = "font-roboto text-[1.5rem] text-gray-900 ml-[15vw] tracking-widest">
                Your essential campus life companion.<br/>
                Everything Berkeley, all in one app.
            </p>

            <a href = "https://apps.apple.com/us/app/berkeley-mobile/id912243518">
                <img
                    id = 'app-store'
                    src = {appStore}
                    className = "ml-[15vw] mt-8 w-40"
                />
            </a>
            
        </div>
    )
}
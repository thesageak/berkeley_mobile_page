import appStore from './assets/app-store.svg'

export default function MainContent() {
    return (
        <div className = "flex flex-col items-start justify-center">
            {/*Left Side: Text Placement*/}
            <div className = "flex flex-col items-start translate-x-[12vw] -translate-y-[10vh]">
                <h1 className = "font-roboto font-bold text-[5rem] text-gray-900">
                    Berkeley
                </h1>

                <h1 className = "font-roboto font-bold text-[5rem] text-gray-900 -mt-12">
                    Mobile
                </h1>

                <p className = "font-roboto text-[1.5rem] text-gray-900 tracking-widest">
                    Your essential campus life companion.<br/>
                    Everything Berkeley, all in one app.
                </p>

                <a href = "https://apps.apple.com/us/app/berkeley-mobile/id912243518">
                    <img
                        id = 'app-store'
                        src = {appStore}
                        className = "mt-8 w-40"
                    />
                </a>
            </div>
        </div>
    )
}
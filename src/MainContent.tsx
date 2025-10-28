
import appStore from './assets/app-store.svg'
import { useEffect, useState } from 'react';

export default function MainContent() {
    
    return (
        <div className="flex flex-row justify-center">
            <div className="flex flex-col items-start justify-center">
                {/*Left Side: Text Placement*/}
                <div className="flex flex-col items-start translate-x-[12vw] -translate-y-[10vh]">
                    <h1 className="font-roboto font-bold text-[5rem] text-gray-900">
                        Berkeley
                    </h1>

                    <h1 className="font-roboto font-bold text-[5rem] text-gray-900 -mt-12">
                        Mobile
                    </h1>

                    <p className="font-roboto text-[1.5rem] text-gray-900 tracking-widest">
                        Your essential campus life companion.<br />
                        Everything Berkeley, all in one app.
                    </p>

                    <a href="https://apps.apple.com/us/app/berkeley-mobile/id912243518">
                        <img
                            id='app-store'
                            src={appStore}
                            className="mt-8 w-40"
                            loading="eager" 
                        />
                    </a>
                </div>
            </div>
            
            {/* Right Side: Image Carousel */}
            <ImageCarousel />
        </div>
    );
}

// ImageCarousel component for flipping screenshots
function ImageCarousel() {
    // List of image URLs
    const images = [
        '/dining_detail_home_drawer_tab/light.png',
        '/dining_home_drawer_tab/light.png',
        '/events_detail/light.png',
        '/events_tab/light.png',
        '/fitness_home_drawer_tab/light.png',
        '/resources_tab/light.png',
        '/safety_tab/light.png',
        '/study_home_drawer_tab/light.png'
    ];
    const [index, setIndex] = useState(0);
    useEffect(() => {
        const interval = setInterval(() => {
            setIndex((prev) => (prev + 1) % images.length);
        }, 5000);
        return () => clearInterval(interval);
    }, [images.length]);
    return (
        <div className="flex flex-[1] items-center justify-center h-[80vh] m-2 relative">
            {images.map((src, i) => (
                <img
                    key={src}
                    src={src}
                    alt="App screenshot"
                    className={`rounded-lg absolute h-full object-contain transition-opacity duration-700 ${index === i ? 'opacity-100 z-10' : 'opacity-0 z-0'}`}
                    draggable={false}
                    loading="eager" 
                />
            ))}
        </div>
    );
}
import { useEffect } from "react";

function BirdEyeWidget() {
    useEffect(() => {
        const timer = setTimeout(() => {
            const script = document.createElement("script");
            script.src = "https://getbirdeye.com.au/embed/v6/291208/1/2954526870/94f9c24f046ab7027a620ad56c31f5b92895833f70925638";
            script.defer = true;
            script.id = "podium-widget";
            document.body.appendChild(script);
        }, 5000); // load 5s after initial render

        return () => clearTimeout(timer);
    }, []);

    return null;
}

export default BirdEyeWidget;
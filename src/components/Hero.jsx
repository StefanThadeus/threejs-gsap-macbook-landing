import { useEffect, useRef } from "react";

const Hero = () => {
    const ref = useRef(null);

    useEffect(() => {
        if (ref.current)
            ref.current.playbackRate = 2;
    }, []);

    return (
        <section id="hero">
            <div><h1>MacBook Pro</h1><img src="title.png" alt="MacBook Pro Title" />
                <video ref={ref} src="/videos/hero.mp4" autoPlay muted playsInline />
            </div>

            <button>Buy</button>

            <p>From $1599 or $133/mo for 12 months</p>
        </section>
    );
}

export default Hero;
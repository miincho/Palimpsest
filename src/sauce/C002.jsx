import { useEffect, useRef } from "react";
import "../assets/fonts.css";
import "../css/C002.css";
// import Footer from '../components/Footer.jsx';

function PixelPush() {
    const containerRef = useRef();

    useEffect(() => {
        const container = containerRef.current;
        const screenWidth = screen.availWidth; // takes up the entire screen
        const screenHeight = screen.availHeight;

        const numRows = Math.floor(screenHeight / 10);
        const numCols = Math.floor(screenWidth / 10);
        const pixelSize = 10; //making the numbers bigger is fun
        const pixels = [];

        for (let row = 0; row < numRows; row++) {
            for (let col = 0; col < numCols; col++) {
                const pixel = document.createElement("div");
                pixel.className = "pixel";
                pixel.style.top = `${row * pixelSize}px`;
                pixel.style.left = `${col * pixelSize}px`;
                container.appendChild(pixel);
                pixels.push(pixel);
            }
        }

        pixels.forEach((pixel) => {
            pixel.addEventListener("mouseover", () => {
                const dx = Math.random() * 80 - 10;
                const dy = Math.random() * 20 - 10;
                pixel.style.transform = `translate(${dx}px, ${dy}px)`;
                setTimeout(() => {
                    pixel.style.transform = "translate(0, 0)";
                }, 500);
            });
        });

        return () => {
            pixels.forEach((pixel) => {
                container.removeChild(pixel);
            });
        };
    }, []);

    return (
        <>
            <div ref={containerRef} className="pixel-container"></div>
            {/* <Footer /> */}
        </>
    );
}

export default PixelPush;

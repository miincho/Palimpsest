import React, { useState } from 'react';
import '../css/M002.css';
import '../assets/fonts.css';

function App() {

    //[current state, function state]
    const [isVisible, setIsVisible] = useState(false);
    const [text, setText] = useState(`
        "The outside pattern is a florid arabesque, reminding one of a fungus... (If you can imagine a toadstool in joints—an interminable string of toadstools, budding and sprouting in endless convolutions—why, that is something like it!)
        That is, sometimes!
        There is one marked peculiarity about this paper—a thing nobody seems to notice but myself, and that is that it changes as the light changes.
        When the sun shoots in through the east window—(I always watch for that first long, straight ray)—it changes so quickly that I never can quite believe it.
        (That is why I watch it always.)
        By moonlight—the moon shines in all night when there is a moon—I wouldn’t know it was the same paper.
        At night in any kind of light, in twilight, candlelight, lamplight, and worst of all by moonlight, it becomes bars! (The outside pattern, I mean, and the woman behind it) is as plain as can be.
        I didn’t realize for a long time what the thing was that showed behind—(that dim sub-pattern)—but now I am quite sure it is a woman…."
    `);

    const revealButton = () => {
        setIsVisible(!isVisible);
    };

    const degradeText = () => {
        const characters = text.split('');
        const updatedText = characters.map((character, index) => {
            //change alphetical characters to white
            if (/[a-zA-Z]/.test(character)) {
                return (
                    <span key={index} style={{ color: 'white' }}>
                        {character}
                    </span>
                );
            }
            return character;
        });
        setText(updatedText);
    };

    return (
        <>
            <div className='content'>
            
                {/* revealing second button and text excerpt onClick */}
                <button onClick={revealButton}>To plant a seed</button>

                <button className={isVisible ? 'second visible' : 'second'} onClick={degradeText}>And to watch it die</button>
                <div className={isVisible ? 'excerpt visible' : 'excerpt'}>{text}</div>

            </div>
            {/* <Footer /> */}
        </>
    );
}

export default App;

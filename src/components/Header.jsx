import { useState, useEffect } from 'react';
import './Header.css';
import '../assets/fonts.css';

function Header() {

    const [time, setTime] = useState(new Date());
    useEffect(()=>{
        const interval = setInterval(()=>{
            setTime(new Date());
        }, 1000);
        return () => clearInterval(interval);
    }, []);

    let day = time.getDate().toString().padStart(2,0);
    let month = (time.getMonth()+1).toString().padStart(2,0);
    const year = time.getFullYear();
    const noCap = `${month}.${day}.${year}`;

    let hr = time.getHours().toString().padStart(2,0);
    let min = time.getMinutes().toString().padStart(2,0);
    let sec = time.getSeconds().toString().padStart(2,0);
    const zone = new Date().toLocaleDateString(undefined,{day:'2-digit',timeZoneName:'short'}).substring(4);     
    const skeeYat = `${hr}:${min}:${sec} ${zone}`

    return(
        <header>
            <div className="head">
                <div className="left"> { noCap } </div>
                <a id='homepage' href='https://www.p3sto.com/'>
                    <div>Palimpsest</div>
                </a>
                <div className="right"> { skeeYat } </div>
            </div>
        </header>
    );
    
}

export default Header
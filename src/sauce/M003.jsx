import '../css/M003.css';
import '../assets/fonts.css';

function App() {

    return (
        <>
            <div className="container">
                <div className='left'>
                    <p className='title'>DERIVATIVE</p>
                    <p>00</p>
                    <p className='desc'>
                        The tool implementing the mediation between theory and practice, between thought and observation, is mathematics
                    </p>
                    <p className='symbolic'>f / f’ / f’’/ f’’’/ f’’’’</p>
                </div>
                <div className='middle'>
                    <p>+</p>
                </div>
                <div className='right'>
                    <p className='title'>INTEGRAL</p>
                    <p>01</p>
                    <p className='desc'>
                        Therefore it happens that our entire contemporary culture finds its intellectual foundations in mathematics.
                    </p>
                    <p className='symbolic'> &lt; / &lt; / &lt; / &lt; / &lt; </p>
                </div>
            </div>
            {/* <Footer /> */}
        </>
    );
}

export default App;

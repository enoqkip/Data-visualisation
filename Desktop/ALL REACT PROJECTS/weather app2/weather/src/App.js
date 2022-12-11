import coldBg from "./assets/cold.jpg";
import "./App.css";

function App() {
    return (
        <div className="app" style={{ background: `url(${coldBg})` }}>
            <div className="overlay">
                <div className="container">
                    <div className="section section__inputs">
                        <input
                            type="text"
                            name="city"
                            placeholder="enter a city"
                        />
                        <button> °F</button>
                    </div>
                    <div className="section section__temperature">
                        <div className="icon">
                            <h3>London ,GB</h3>
                            <img
                                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSK2SZiiaJ3cdgb2cRz8XEkUDI9F17jssMJnJcqFJ_-uhV8QFoiBIgPEEUM0U0ND4eQGhI&usqp=CAU"
                                alt="icon"
                            />
                            <h3>cloudy</h3>
                            <div className=" temperature">
                                <h1>34 C</h1>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default App;

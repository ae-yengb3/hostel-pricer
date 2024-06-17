import "./App.css";
import Header from "./components/Header";

function App() {
  return (
    <div>
      <Header></Header>
      <main>
        <div className="container">
          <div className="form-container">
            <div className="select-container">
              <div className="select-input">
                <select name="Location" id="location">
                  <option value={""}>Location</option>
                  <option value={"Kotei"}>Kotei</option>
                  <option value={"Ayeduase"}>Ayeduase</option>
                  <option value={"New-site"}>New-site</option>
                  <option value={"Campus"}>Campus</option>
                  <option value={"Atonsu"}>Atonsu</option>
                  <option value={"Boadi"}>Boadi</option>
                  <option value={"Bomsu"}>Bomsu</option>
                  <option value={"Tech Junction"}>Tech Junction</option>
                  <option value={"Room size"}>Room Size</option>
                </select>
              </div>
              <div className="select-input">
                <select name="Room Size" id="room-size">
                  <option value={""}>Room Size</option>
                  <option value={"Small"}>Small</option>
                  <option value={"Large"}>Large</option>
                  <option value={"Executive"}>Executive</option>
                </select>
              </div>
              <div className="select-input">
                <select name="Persons per room" id="persons per room">
                  <option value={""}>Persons Per Room</option>
                  <option value={"1"}>1</option>
                  <option value={"2"}>2</option>
                  <option value={"3"}>3</option>
                  <option value={"4"}>4</option>
                </select>
              </div>
            </div>
            <div className="checkbox-container">
              <div className="checkbox-input">
                <span>Infrastructure</span>
                <div className="label-container">
                  <input type="checkbox" value={"Modern Wardrobe"} />
                  <label>Modern Wardrobe</label>
                </div>
                <div className="label-container">
                  <input type="checkbox" value={"Back up power supply"} />
                  <label>Back up power supply</label>
                </div>
                <div className="label-container">
                  <input type="checkbox" value={"Gym"} />
                  <label>Gym</label>
                </div>
                <div className="label-container">
                  <input type="checkbox" value={"Elevator"} />
                  <label>Elevator</label>
                </div>
                <div className="label-container">
                  <input type="checkbox" value={"Modernized Bathrooms"} />
                  <label>Modernized Bathroom</label>
                </div>
              </div>
              <div className="checkbox-input">
              <span>Appliances</span>
              <div className="label-container">
                <input type="checkbox" value={"TV"} />
                <label>TV</label>
              </div>
              <div className="label-container">
                <input type="checkbox" value={"Air Conditioner"} />
                <label>Air Conditioner</label>
              </div>
              <div className="label-container">
                <input type="checkbox" value={"Refrigerator"} />
                <label>Refrigerator</label>
              </div>
              <div className="label-container">
                <input type="checkbox" value={"Water Heater"} />
                <label>Water Heater</label>
              </div>
              </div>
            </div>
            <div className="button-container">
              <button >Check Price</button>
            </div>
          </div>
        </div> 
        <div className="base-container">
          <div className="price">
            Estimated Price:
            <span>Ghc 4,096.00</span>
          </div>
        </div>
      </main>
    </div>
  );
}
export default App;

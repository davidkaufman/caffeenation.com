import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src="/images/CaffeeNationBanner.png" className="App-logo" alt="logo" />
        <p class="tagline">
          Caffeinating Commuters since 2020!
        </p>

        <p class="orange">
          Mobile Order Menu
        </p>

        <p class="orange">
          Coffee <sm>or</sm> Tea
        </p>
        <p class="brown">
          <input type="checkbox" name="order_item" value="coffee-12oz" />
          12<sm> oz . . . . . . . . . . . .</sm> $1.00
        </p>
        <p class="brown">
          <input type="checkbox" name="order_item" value="coffee-16oz" />
          16<sm> oz . . . . . . . . . . . .</sm> $1.50
        </p>
        <p class="brown">
          <input type="checkbox" name="order_item" value="coffee-travel_mug" />
          Fill Travel Mug<sm> . . . </sm>$2.00
        </p>
        <p class="orange">
          Donuts
        </p>
        <p class="brown">
          <input type="checkbox" name="order_item" value="donut" />
          $1.00
        </p>
      </header>
    </div>
  );
}

export default App;

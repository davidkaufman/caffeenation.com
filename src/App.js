import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src="/images/CaffeeNationLogo.png" className="App-logo" alt="logo" />
        <p>
          Caffeinating Commuters since 2020!
        </p>
        <p class="orange">
          Coffee or Tea
        </p>
        <p class="brown">
          12<sm> oz . . . . . . . . . .</sm> $1.00
        </p>
        <p class="brown">
          16<sm> oz . . . . . . . . . .</sm> $1.50
        </p>
        <p class="brown">
          <div class="multiline">
            Fill Your<br />
            Travel Mug $2.00
          </div>
        </p>
        <p class="orange">
          Donuts
        </p>
        <p class="brown">
          $1.00
        </p>
      </header>
    </div>
  );
}

export default App;

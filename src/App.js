import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src="/images/CaffeeNationBanner.png" className="App-logo" alt="logo" />
        <p class="tagline">
          Caffeinating Commuters since 2020!
        </p>

        <p class="orange title">
          Mobile Order Menu
        </p>

        <p class="orange">
          Coffee <sm>or</sm> Tea
        </p>

        <p class="menu-item brown">
          <input type="checkbox" name="order_item" value="coffee-12oz" id="oi-c12" />
          <label for="oi-c12" >
            12<sm> oz . . . . . . . . . . . . .</sm> $1.00
          </label>
        </p>
        <p class="menu-item brown">
          <input type="checkbox" name="order_item" value="coffee-16oz" id="oi-c16" on/>
          <label for="oi-c16" >
            16<sm> oz . . . . . . . . . . . . .</sm> $1.50
          </label>
          <div class="condiments-drawer closed">
            <fieldset class="sweeteners">
              <legend>Sweetener</legend>
              <div> 
                <input type="radio" name="sweetener" value="none" id="no_sweetener" />
                <label for="no_sweetener" >
                  None
                </label>
              </div>
              <div> 
                <input type="radio" name="sweetener" value="sugar" id="sugar" />
                <label for="sugar" >
                  Sugar
                </label>
              </div>
              <div>
                <input type="radio" name="sweetener" value="splenda" id="splenda" />
                <label for="splenda" >
                  Splenda
                </label>
              </div>
              <div>
                <input type="radio" name="sweetener" value="stevia" id="stevia" />
                <label for="stevia" >
                  Stevia
                </label>
              </div>
            </fieldset> { /* <!-- /.sweeteners --> */ }
            <fieldset class="creamers">
              <legend>Creamer</legend>
              <div> 
                <input type="radio" name="creamer" value="none" id="no_creamer" />
                <label for="no_creamer" >
                  None
                </label>
              </div>
              <div> 
                <input type="radio" name="creamer" value="half-n-half" id="half-n-half" />
                <label for="half-n-half" >
                  Half<sm> &amp; </sm>Half
                </label>
              </div>
              <div>
                <input type="radio" name="creamer" value="milk" id="milk" />
                <label for="milk" >
                  Milk
                </label>
              </div>
              <div>
                <input type="radio" name="creamer" value="soymilk" id="soymilk" />
                <label for="soymilk" >
                  Soy Milk
                </label>
              </div>
            </fieldset> { /* <!-- /.creamers --> */ }
          </div> { /* <!-- /.condiments-drawer --> */ }
        </p>
        <p class="menu-item brown">
          <input type="checkbox" name="order_item" value="coffee-travel_mug" id="oi-cfill" />
          <label for="oi-cfill" >
            Fill Travel Mug<sm> . . . </sm>$2.00
          </label>
        </p>

        <p class="orange">
          Donuts
        </p>

        <p class="menu-item brown">
          <input type="checkbox" name="order_item" value="donut" id="oi-d" />
          <label for="oi-d" >
            $1.00
          </label>
        </p>
      </header>
    </div>
  );
}

export default App;

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
          <input type="checkbox" name="order_item" value="coffee-12oz" id="oi-c12" onChange={
              (e)=>{ document.getElementById('drawer1').style.display = e.target.checked ? 'block' : 'none' }
          } />
          <label for="oi-c12" >
            12<sm> oz . . . . . . . . . . . . .</sm> $1.00
          </label>
          <div class="condiments-drawer" id="drawer1">
            <fieldset class="sweeteners">
              <legend>Sweetener</legend>
              <div> 
                <input type="radio" name="sweetener1" value="none" id="no_sweetener1" />
                <label for="no_sweetener1" >
                  None
                </label>
              </div>
              <div> 
                <input type="radio" name="sweetener1" value="sugar" id="sugar1" />
                <label for="sugar1" >
                  Sugar
                </label>
              </div>
              <div>
                <input type="radio" name="sweetener1" value="splenda" id="splenda1" />
                <label for="splenda1" >
                  Splenda
                </label>
              </div>
              <div>
                <input type="radio" name="sweetener1" value="stevia" id="stevia1" />
                <label for="stevia1" >
                  Stevia
                </label>
              </div>
            </fieldset> { /* <!-- /.sweeteners --> */ }
            <fieldset class="creamers">
              <legend>Creamer</legend>
              <div> 
                <input type="radio" name="creamer1" value="none" id="no_creamer1" />
                <label for="no_creamer1" >
                  None
                </label>
              </div>
              <div> 
                <input type="radio" name="creamer1" value="half-n-half" id="half-n-half1" />
                <label for="half-n-half1" >
                  Half<sm> &amp; </sm>Half
                </label>
              </div>
              <div>
                <input type="radio" name="creamer1" value="milk" id="milk1" />
                <label for="milk1" >
                  Milk
                </label>
              </div>
              <div>
                <input type="radio" name="creamer1" value="soymilk" id="soymilk1" />
                <label for="soymilk1" >
                  Soy Milk
                </label>
              </div>
            </fieldset> { /* <!-- /.creamers --> */ }
          </div> { /* <!-- /.condiments-drawer#drawer1 --> */ }
        </p>
        <p class="menu-item brown">
          <input type="checkbox" name="order_item" value="coffee-16oz" id="oi-c16" onChange={ 
              (e)=>{ document.getElementById('drawer2').style.display = e.target.checked ? 'block' : 'none' }
          } />
          <label for="oi-c16" >
            16<sm> oz . . . . . . . . . . . . .</sm> $1.50
          </label>
          <div class="condiments-drawer" id="drawer2">
            <fieldset class="sweeteners">
              <legend>Sweetener</legend>
              <div> 
                <input type="radio" name="sweetener2" value="none" id="no_sweetener2" />
                <label for="no_sweetener2" >
                  None
                </label>
              </div>
              <div> 
                <input type="radio" name="sweetener2" value="sugar" id="sugar2" />
                <label for="sugar2" >
                  Sugar
                </label>
              </div>
              <div>
                <input type="radio" name="sweetener2" value="splenda" id="splenda2" />
                <label for="splenda2" >
                  Splenda
                </label>
              </div>
              <div>
                <input type="radio" name="sweetener2" value="stevia" id="stevia2" />
                <label for="stevia2" >
                  Stevia
                </label>
              </div>
            </fieldset> { /* <!-- /.sweeteners --> */ }
            <fieldset class="creamers">
              <legend>Creamer</legend>
              <div> 
                <input type="radio" name="creamer2" value="none" id="no_creamer2" />
                <label for="no_creamer2" >
                  None
                </label>
              </div>
              <div> 
                <input type="radio" name="creamer2" value="half-n-half" id="half-n-half2" />
                <label for="half-n-half2" >
                  Half<sm> &amp; </sm>Half
                </label>
              </div>
              <div>
                <input type="radio" name="creamer2" value="milk" id="milk2" />
                <label for="milk2" >
                  Milk
                </label>
              </div>
              <div>
                <input type="radio" name="creamer2" value="soymilk" id="soymilk2" />
                <label for="soymilk2" >
                  Soy Milk
                </label>
              </div>
            </fieldset> { /* <!-- /.creamers --> */ }
          </div> { /* <!-- /.condiments-drawer#drawer2 --> */ }
        </p>
        <p class="menu-item brown">
          <input type="checkbox" name="order_item" value="coffee-travel_mug" id="oi-cfill" onChange={
            (e)=>{ document.getElementById('drawer3').style.display = e.target.checked ? 'block' : 'none' }
          } />
          <label for="oi-cfill" >
            Fill Travel Mug<sm> . . . </sm>$2.00
          </label>
          <div class="condiments-drawer" id="drawer3">
            <fieldset class="sweeteners">
              <legend>Sweetener</legend>
              <div> 
                <input type="radio" name="sweetener3" value="none" id="no_sweetener3" />
                <label for="no_sweetener3" >
                  None
                </label>
              </div>
              <div> 
                <input type="radio" name="sweetener3" value="sugar" id="sugar3" />
                <label for="sugar3" >
                  Sugar
                </label>
              </div>
              <div>
                <input type="radio" name="sweetener3" value="splenda" id="splenda3" />
                <label for="splenda3" >
                  Splenda
                </label>
              </div>
              <div>
                <input type="radio" name="sweetener3" value="stevia" id="stevia3" />
                <label for="stevia3" >
                  Stevia
                </label>
              </div>
            </fieldset> { /* <!-- /.sweeteners --> */ }
            <fieldset class="creamers">
              <legend>Creamer</legend>
              <div> 
                <input type="radio" name="creamer3" value="none" id="no_creamer3" />
                <label for="no_creamer3" >
                  None
                </label>
              </div>
              <div> 
                <input type="radio" name="creamer3" value="half-n-half" id="half-n-half3" />
                <label for="half-n-half3" >
                  Half<sm> &amp; </sm>Half
                </label>
              </div>
              <div>
                <input type="radio" name="creamer3" value="milk" id="milk3" />
                <label for="milk3" >
                  Milk
                </label>
              </div>
              <div>
                <input type="radio" name="creamer3" value="soymilk" id="soymilk3" />
                <label for="soymilk3" >
                  Soy Milk
                </label>
              </div>
            </fieldset> { /* <!-- /.creamers --> */ }
          </div> { /* <!-- /.condiments-drawer#drawer3 --> */ }
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

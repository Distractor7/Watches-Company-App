// import logo from "./logo.svg";
import logo from "./watches.png";
import "./new.css";
import { BrowserRouter, Route } from "react-router-dom";
import AppRouter from "./appRouter";

function WelcomePage(props) {
  const isLoggedIn = props.isLoggedIn;
  const userName = props.name;

  if (isLoggedIn == false) {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p className="p">Please sign in</p>
          <form>
            <input className="log-in-input"></input>
            <button className="button">Sign In</button>
          </form>
        </header>
      </div>
    );
  } else if (isLoggedIn == true) {
    return (
      <div className="App">
        <header className="App-header">
          <p className="p">Welcome, {userName}</p>
        </header>
      </div>
    );
  }
}

function LandingPage() {
  return (
    <div className="bioContainer">
      <p className="companyBio">
        "Our watch company has a rich heritage of crafting timepieces of the
        highest quality. Established in 1604, we have a passion for precision
        and attention to detail that is evident in every piece we create. Using
        only the finest materials and the latest technology, we strive to
        produce watches that are not only functional but also beautiful works of
        art. Our collections are diverse, ranging from classic and elegant to
        modern and sporty, ensuring that there is something for everyone.
        Whether you're looking for a timeless piece or something more
        contemporary, our watches are designed to stand the test of time and
        become a cherished possession. With a focus on quality and
        craftsmanship, our watches are truly the epitome of style and
        functionality."
      </p>
    </div>
  );
}

function ProductConstructor(props) {
  return (
    <div className="productContainer">
      <h1>Model: {props.model}</h1>
      <p>Year: {props.year}</p>
      <p>Size: {props.size}</p>
      <p>Colour: {props.colour}</p>
    </div>
  );
}

function App() {
  return (
    <div className="App">
      <div>
        <ul id="nav-list">
          <li>
            <a href="hhtps://localhost:3000/home">Home</a>
          </li>
          <li>
            <a href="hhtps://localhost:3000/userProfile">User Profile</a>
          </li>
          <li>
            <a href="hhtps://localhost:3000/shoppingPage">Shopping Page</a>
          </li>
          <li>
            <a href="hhtps://localhost:3000/legalPage">Legal Page</a>
          </li>
        </ul>
        <AppRouter />
      </div>
      <header className="App-header">
        <WelcomePage isLoggedIn={false} name="Jordan Bendon">
          HELLO
        </WelcomePage>
        <LandingPage></LandingPage>
        <div>
          <div className="productsHeading">Products</div>
          <div
            className="productsBox"
            style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr" }}
          >
            <ProductConstructor
              model="Phantom"
              year="1985"
              size="M"
              colour="Rose Gold"
            ></ProductConstructor>
            <ProductConstructor
              model="El Diablo"
              year="1975"
              size="S"
              colour="Black"
            ></ProductConstructor>
            <ProductConstructor
              model="Eagle"
              year="1945"
              size="L"
              colour="Gold"
            ></ProductConstructor>
          </div>
        </div>
      </header>
    </div>
  );
}

export default App;

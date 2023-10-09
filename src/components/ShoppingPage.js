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

function ShoppingPage() {
  return (
    <div>
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
    </div>
  );
}

export default ShoppingPage;

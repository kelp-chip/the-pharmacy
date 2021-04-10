
function FauxLanding(props) {
  return (
    <div>
      <h1>Take a Look At Our Products</h1>
      {props.fakeProducts.map( (fakeProduct, i) => {
        return (
          <div key={i}>
            <h4 className="fakeProductName">{fakeProduct.name}</h4>
            <div className="fakeProductPrice">${fakeProduct.price}</div>
            <div className="fakeProductDesc">{fakeProduct.description}</div>
            <img className="fakeProductImg" src={fakeProduct.image} alt=''></img>
          </div>
        )
      })}
    </div>
  );
}

export default FauxLanding;

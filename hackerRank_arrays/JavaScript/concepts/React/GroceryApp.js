//https://www.testdome.com/tests/react-js-online-test/104

// React is loaded and is available as React and ReactDOM
// imports should NOT be used
const Product = (props) => {
  const plus = () => {
    // Call props.onVote to increase the vote count for this product
    props.onVote("add", props.index);
  };
  const minus = () => {
    // Call props.onVote to decrease the vote count for this product
    props.onVote("minus", props.index);
  };
  return (
    <li>
      <span>{props.product.name}</span> -{" "}
      <span>votes: {props.product.votes}</span>
      <button onClick={plus}>+</button> <button onClick={minus}>-</button>
    </li>
  );
};

const GroceryApp = (props) => {
  let [products, setProducts] = React.useState(props.products);
  const onVote = (dir, index) => {
    // Update the products array accordingly ...
    const updatedProducts = [...products];
    if (dir === "add") {
      updatedProducts[index] = {
        name: updatedProducts[index].name,
        votes: updatedProducts[index].votes + 1,
      };
    }
    if (dir === "minus") {
      updatedProducts[index] = {
        name: updatedProducts[index].name,
        votes: updatedProducts[index].votes - 1,
      };
    }
    // Update the state with the updated products array
    setProducts(updatedProducts);
  };

  return (
    <ul>
      {
        /* Render an array of products, which should call onVote when + or - is clicked */
        products.map((prod, ind) => {
          return (
            <Product key={ind} product={prod} index={ind} onVote={onVote} />
          );
        })
      }
    </ul>
  );
};

document.body.innerHTML = "<div id='root'></div>";
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <GroceryApp
    products={[
      { name: "Oranges", votes: 0 },
      { name: "Bananas", votes: 0 },
    ]}
  />
);

setTimeout(() => {
  let plusButton = document.querySelector("ul > li > button");
  if (plusButton) {
    plusButton.click();
  }
  setTimeout(() => {
    console.log(document.getElementById("root").outerHTML);
  });
});

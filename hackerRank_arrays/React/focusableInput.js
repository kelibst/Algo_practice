// React is loaded and is available as React and ReactDOM
// imports should NOT be used

const FocusableInput = (props) => {
  // Write your code here
  let inputRef = React.useRef();

  React.useEffect(() => {
    if (props.shouldFocus) {
      inputRef.current.focus();
    } else {
      inputRef.current.blur();
    }
  }, []);

  return <input ref={inputRef} />;
};
document.body.innerHTML = "<div id='root' />";
ReactDOM.render(
  <FocusableInput shouldFocus={true} />,
  document.getElementById("root")
);
setTimeout(() => console.log(document.getElementById("root").innerHTML));

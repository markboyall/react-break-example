const dom = ReactDOMFactories;

function Component() {
    var memo = React.useMemo(() => 1, []);
    
    return dom.h1({}, 
        "Hello World", 
        memo);
}

document.addEventListener('DOMContentLoaded', () => {
    ReactDOM.render(
      React.createElement(Component, { ref: () => {} }),
      document.getElementById('root')
    );
});

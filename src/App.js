import './App.css';
import Nav from './components/Nav.js';
import Form from './components/Form.js';

function App() {
  return (
    <div className="App">
      <Nav />
      <Form />
    </div>
  );
}

export default App;

// return <ChakraProvider theme={Theme}>{props.children}</ChakraProvider>

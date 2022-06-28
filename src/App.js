import './App.css';
import Nav from './components/Nav.js';
import Form from './components/Form.js';

export default function App() {
  return (
    <div className="App">
      <Nav />
      <Form />
    </div>
  );
}

// return <ChakraProvider theme={Theme}>{props.children}</ChakraProvider>

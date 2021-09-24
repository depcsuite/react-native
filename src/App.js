import logo from './logo.svg';
import './App.css';
import Form from './components/Form';

function App() {

  let object = { a: 1, b: 2, c: { d: 3, e: 4 } };

  const handleSubmit = (name, apellido) => {
    console.log('Se subió el formulario', name, apellido);
  }

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Form submit={handleSubmit} object={object} />
      </header>
    </div>
  );
}

export default App;

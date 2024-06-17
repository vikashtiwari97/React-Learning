import './App.css';
import Home from './component/Home';
import Box from './component/Box'
import Try from './component/Try'
import Change from './component/Change';
import Text from './component/Text'
import State from './component/State'
function App() {
  let response = [
    {
      name : 'Vicky Tiwari1',
      class : 'BA1',
      rollNumber : 101,
    },
    {
      name : 'Vicky Tiwari2',
      class : 'BA2',
      rollNumber : 102,
    },
    {
      name : 'Vicky Tiwari3',
      class : 'BA3',
      rollNumber : 103,
    },
    {
      name : 'Vicky Tiwari4',
      class : 'BA4',
      rollNumber : 104,
    },
    {
      name : 'Vicky Tiwari5',
      class : 'BA5',
      rollNumber : 105,
    }
  ]
  return (
    <div>
      <Box>
      <div className="App">
                Learning Project
            </div>
            <hr/>
            <Home name={response[0].name} class={response[0].class} rollNumber={response[0].rollNumber}>
              This is first Data
            </Home>
            <hr/>
            <Home name={response[1].name} class={response[1].class} rollNumber={response[1].rollNumber}>
              This is second data
            </Home>
            <hr/>
            <Home name={response[2].name} class={response[2].class} rollNumber={response[2].rollNumber}>
              this is third data
            </Home>
            <hr/>
            <Home name={response[3].name} class={response[3].class} rollNumber={response[3].rollNumber}>
              this is my fourth data
            </Home>
            <hr/>
            <Home name={response[4].name} class={response[4].class} rollNumber={response[4].rollNumber}>
              this is my fifth data
            </Home>
            <hr/>
            <Try className="primary-button" onClick={() => alert('Button clicked!')}>
                Click me
            </Try>

              <Try className="secondary-button" onClick={() => alert('Another button clicked!')}>
                Click me too
            </Try>
            <Change></Change>
            <Text></Text>
            <State></State>
      </Box>
    </div>
  );
}

export default App;

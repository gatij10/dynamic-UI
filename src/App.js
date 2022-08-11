import { BrowserView, MobileView } from 'react-device-detect';
import './App.css';

function App() {
  console.log('test');
  return (
    <>
      <MobileView>This is mobile view</MobileView>
      <BrowserView>This is desktop view</BrowserView>
    </>
  );
}

export default App;

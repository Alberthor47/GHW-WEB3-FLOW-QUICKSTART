import { useEffect, useState } from 'react';
import './App.css';
import * as fcl from '@onflow/fcl'

fcl.config({
  'accessNode.api': 'https://rest-testnet.onflow.org'
})

function App() {
    const [greeting, setGreeting] = useState("");

    useEffect(() => {
      const queryChain = async () => {
        const res = await fcl.query({
          cadence: `
            import HelloWorld from 0x9dca641e9a4b691b

            access(all) fun main(): String {
              return HelloWorld.greeting
            }
        `
        });

        console.log(res);
        setGreeting(res);
      }

      queryChain();
    }, []);

    return (
        <div className="App">
            <div>FCL App Quickstart</div>
            <div>{greeting}</div>
        </div>
    );
}

export default App;

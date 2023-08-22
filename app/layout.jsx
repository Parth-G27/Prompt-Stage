import "@styles/globals.css";
import Nav from "@components/Nav";
import Provider from "@components/Provider";
// This will import the Tailwaind Css in the whole application 
// import { children } from 'react';

export const metadata = {
    title: 'Prompt Stage',
    description: 'Explore & Share prompts'
}

const Rootlayout = ({children}) => {
  return (
    <html lang='en'>
        <body>
            <Provider>
    
            <div className='main'>
                <div className='gradient'/>
            </div>

                <main className='app'>
                    <Nav/>
                    {children}
                </main>

            </Provider>
        </body>

    </html>
  )
}

export default Rootlayout
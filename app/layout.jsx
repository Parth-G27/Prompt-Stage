import "@styles/globals.css";
import Nav from "@components/Nav";
// This will import the Tailwaind Css in the whole application 
// import { children } from 'react';

export const metadata = {
    title: 'Prompt Stage',
    description: 'Explore & Share prompts'
}

const Rootlayout = ({children}) => {
  return (
    <html>
        <body>
            <div className='main'>
                <div className='gradient'/>

                <main className='app'>
                    <Nav/>
                    {children}
                </main>

            </div>
        </body>

    </html>
  )
}

export default Rootlayout
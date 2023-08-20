import "@styles/globals.css";
// This will import the Tailwaind Css in the whole application 
// import { children } from 'react';

export const metadata = {
    title: 'Prompt Stage',
    description: 'Explore & Share prompts'
}

const Rootlayout = ({children}) => {
  return (
    <html lang="en">
        <body>
            <div className='main'>
                <div className='gradient'/>

                <main className='app'>
                    {children}
                </main>

            </div>
        </body>

    </html>
  )
}

export default Rootlayout
import './globals.css';
import Sidebar from '../components/Sidebar.jsx'

export default function RootLayout ({ children }) {
  return (
    <html lang='en'>
      {/*
        <head /> will contain the components returned by the nearest parent
        head.jsx. Find out more at https://beta.nextjs.org/docs/api-reference/file-conventions/head
      */}
      <head />
      <body>
        <div style={{display: 'flex', flexDirection: 'column'}}>
          <div style={{height: '80px'}}>
            <Sidebar />
          </div>
          <div style={{ flex: 1, position: 'relative'}}>
            {children}
          </div>
        </div>
      </body>
    </html>
  )
}
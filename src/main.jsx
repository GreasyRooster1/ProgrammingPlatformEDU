import {StrictMode} from 'react'
import {createRoot} from 'react-dom/client'
import './index.css'

createRoot(document.getElementById('root')).render(
  <StrictMode>
      <div style={{width: '100vw', height: '100vh', position: 'relative', background: '#0F0F10', overflow: 'hidden', display:"flex", justifyContent:"space-between", flexDirection:"column", alignItems:"center"}}>
        <div>
            <div style={{textAlign: 'center', justifyContent: 'center', display: 'flex', flexDirection: 'column', color: 'white', fontSize: 128, fontFamily: 'JetBrains Mono', fontWeight: '400', wordWrap: 'break-word'}}>Bytecode</div>
            <div style={{textAlign: 'center', justifyContent: 'center', display: 'flex', flexDirection: 'column', color: 'white', fontSize: 48, fontFamily: 'JetBrains Mono', fontWeight: '400', wordWrap: 'break-word'}}>Learn programming one<br/>byte at a time</div>
        </div>

        <img style={{width:'30vw', aspectRatio:"1"}} src={"./logo.svg"} />

        <div style={{marginBottom:"2.5%",textAlign: 'center', justifyContent: 'center', display: 'flex', flexDirection: 'column', color: 'white', fontSize: 48, fontFamily: 'JetBrains Mono', fontWeight: '400', wordWrap: 'break-word'}}>Coming Soon</div>
      </div>
  </StrictMode>,
)

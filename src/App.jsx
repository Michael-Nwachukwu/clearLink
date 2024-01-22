import Header from "./components/Header"
import Hero from "./components/Hero"


function App() {

  return (
    <>
  
    <div className='min-h-[50em] bg-pattern w-full flex flex-col item-center gap-[120px]' style={{ padding: '40px 108px 96px 108px' }}>
      <Header />
      <Hero />
    </div>




      {/* <div style={{ padding: 32, background: '#EFF8FF', boxShadow: '0px 32px 64px -12px rgba(15.96, 23.62, 40.04, 0.14)', borderRadius: 16, border: '1px #B2DDFF solid', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', gap: 40, display: 'inline-flex' }}>
      <div style={{ flexDirection: 'column', justifyContent: 'center', alignItems: 'center', gap: 20, display: 'flex' }}>
        <div style={{ justifyContent: 'center', alignItems: 'center', gap: 20, display: 'inline-flex' }}>
          <div style={{ width: 160, height: 160, position: 'relative', borderRadius: 12, overflow: 'hidden' }}>
            <div style={{ width: 160, height: 160, left: 0, top: 0, position: 'absolute', background: '#FF9C66' }} />
            <img style={{ width: 153.59, height: 153.59, left: 3.28, top: 6.41, position: 'absolute' }} src="https://via.placeholder.com/154x154" />
          </div>
          <div style={{ width: 160, height: 160, position: 'relative', borderRadius: 12, overflow: 'hidden' }}>
            <div style={{ width: 160, height: 160, left: 0, top: 0, position: 'absolute', background: '#D6BBFB' }} />
            <img style={{ width: 175, height: 175, left: -7.50, top: 0, position: 'absolute' }} src="https://via.placeholder.com/175x175" />
          </div>
          <div style={{ width: 160, height: 160, position: 'relative', borderRadius: 12, overflow: 'hidden' }}>
            <div style={{ width: 160, height: 160, left: 0, top: 0, position: 'absolute', background: '#ACDC79' }} />
            <img style={{ width: 160, height: 160, left: 0, top: 5.47, position: 'absolute' }} src="https://via.placeholder.com/160x160" />
          </div>
        </div>
        <div style={{ justifyContent: 'center', alignItems: 'center', gap: 20, display: 'inline-flex' }}>
          <div style={{ width: 160, height: 160, position: 'relative', borderRadius: 12, overflow: 'hidden' }}>
            <div style={{ width: 160, height: 160, left: 0, top: 0, position: 'absolute', background: '#B3B8DB' }} />
            <img style={{ width: 160, height: 160, left: 0, top: 12.50, position: 'absolute' }} src="https://via.placeholder.com/160x160" />
          </div>
          <div style={{ width: 160, height: 160, position: 'relative', borderRadius: 12, overflow: 'hidden' }}>
            <div style={{ width: 160, height: 160, left: 0, top: 0, position: 'absolute', background: '#FEC84B' }} />
            <img style={{ width: 160, height: 160, left: 0, top: 0, position: 'absolute' }} src="https://via.placeholder.com/160x160" />
          </div>
          <div style={{ width: 160, height: 160, position: 'relative', borderRadius: 12, overflow: 'hidden' }}>
            <div style={{ width: 160, height: 160, left: 0, top: 0, position: 'absolute', background: '#FEA3B4' }} />
            <img style={{ width: 175, height: 175, left: -7.50, top: 0, position: 'absolute' }} src="https://via.placeholder.com/175x175" />
          </div>
        </div>
      </div>
      <div style={{ justifyContent: 'flex-start', alignItems: 'flex-start', gap: 16, display: 'inline-flex' }}>
        <div style={{ padding: 12, background: 'white', boxShadow: '0px 1px 2px rgba(16, 24, 40, 0.05)', borderRadius: 100, overflow: 'hidden', border: '1px #D1E9FF solid', justifyContent: 'center', alignItems: 'center', gap: 10, display: 'flex' }}>
          <div style={{ width: 20, height: 20, position: 'relative' }}>
            <div style={{ width: 11.67, height: 16.67, left: 4.17, top: 1.67, position: 'absolute', border: '1.50px #175CD3 solid' }}></div>
          </div>
        </div>
        <div style={{ padding: 12, background: 'white', boxShadow: '0px 1px 2px rgba(16, 24, 40, 0.05)', borderRadius: 100, overflow: 'hidden', border: '1px #D1E9FF solid', justifyContent: 'center', alignItems: 'center', gap: 10, display: 'flex' }}>
          <div style={{ width: 20, height: 20, position: 'relative' }}>
            <div style={{ width: 16.67, height: 11.67, left: 1.67, top: 4.17, position: 'absolute', border: '1.50px #175CD3 solid' }}></div>
          </div>
        </div>
        <div style={{ padding: 12, background: 'white', boxShadow: '0px 1px 2px rgba(16, 24, 40, 0.05)', borderRadius: 100, overflow: 'hidden', border: '1px #D1E9FF solid', justifyContent: 'center', alignItems: 'center', gap: 10, display: 'flex' }}>
          <div style={{ width: 20, height: 20, position: 'relative' }}>
            <div style={{ width: 16.67, height: 15, left: 1.67, top: 2.50, position: 'absolute', border: '1.50px #175CD3 solid' }}></div>
          </div>
        </div>
        <div style={{ padding: 12, background: 'white', boxShadow: '0px 1px 2px rgba(16, 24, 40, 0.05)', borderRadius: 100, overflow: 'hidden', border: '1px #D1E9FF solid', justifyContent: 'center', alignItems: 'center', gap: 10, display: 'flex' }}>
          <div style={{ width: 20, height: 20, position: 'relative' }}>
            <div style={{ width: 16.67, height: 16.67, left: 1.67, top: 1.67, position: 'absolute', border: '1.50px #175CD3 solid' }}></div>
          </div>
        </div>
        <div style={{ padding: 12, background: 'white', boxShadow: '0px 1px 2px rgba(16, 24, 40, 0.05)', borderRadius: 100, overflow: 'hidden', border: '1px #D1E9FF solid', justifyContent: 'center', alignItems: 'center', gap: 10, display: 'flex' }}>
          <div style={{ width: 20, height: 20, position: 'relative' }}>
            <div style={{ width: 15, height: 15, left: 2.50, top: 2.50, position: 'absolute', border: '1.50px #175CD3 solid' }}></div>
          </div>
        </div>
        <div style={{ padding: 12, background: 'white', boxShadow: '0px 1px 2px rgba(16, 24, 40, 0.05)', borderRadius: 100, overflow: 'hidden', border: '1px #D1E9FF solid', justifyContent: 'center', alignItems: 'center', gap: 10, display: 'flex' }}>
          <div style={{ width: 20, height: 20, position: 'relative' }}>
            <div style={{ width: 16.67, height: 16.67, left: 1.67, top: 1.67, position: 'absolute', border: '1.50px #175CD3 solid' }}></div>
          </div>
        </div>
      </div>
      </div> */}

    </>
  )
}

export default App

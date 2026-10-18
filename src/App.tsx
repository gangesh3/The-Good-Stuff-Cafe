import { ArrowDown, ArrowUpRight, Leaf } from 'lucide-react'
import { useEffect, useState, type CSSProperties } from 'react'
import { CafeFooter } from './components/CafeFooter'
import { LogoMark } from './components/LogoMark'
import { ReviewSection } from './components/ReviewSection'
import { SocialActions } from './components/SocialActions'
import { cafeConfig } from './config/cafeConfig'

function App() {
  const [notice, setNotice] = useState('')

  useEffect(() => {
    document.title = `${cafeConfig.cafeName} · Share your experience`
  }, [])

  const showNotice = (message: string) => {
    setNotice(message)
    window.setTimeout(() => setNotice((current) => current === message ? '' : current), 4800)
  }

  return (
    <main
      className="site-shell"
      style={{
        '--primary-color': cafeConfig.primaryColor,
        '--secondary-color': cafeConfig.secondaryColor,
        '--background-color': cafeConfig.backgroundColor,
        '--text-color': cafeConfig.textColor,
      } as CSSProperties}
    >
      <section className="hero">
         <div
           className={`hero-photo ${cafeConfig.bannerImage ? '' : 'hero-photo--fallback'}`}
           style={cafeConfig.bannerImage ? { backgroundImage: `url(${cafeConfig.bannerImage})` } : undefined}
           aria-label={`${cafeConfig.cafeName} banner`}
           role="img"
         >
          <div className="hero-photo__overlay" />
          <div className="hero-photo__grain" />
           <header className="topbar">
             <a className="wordmark" href="#top"><LogoMark compact /><span>{cafeConfig.cafeName}</span></a>
             <a className="topbar-link" href="#reviews">{cafeConfig.buttonLabels.writeOwnReview} <ArrowUpRight size={16} /></a>
           </header>
           <div className="hero-copy" id="top">
             <div className="hero-kicker"><span /> {cafeConfig.heroKicker} <span /></div>
             <h1>{cafeConfig.tagline}</h1>
             <p>{cafeConfig.welcomeMessage}</p>
            <a href="#reviews" className="hero-scroll">Share your experience <ArrowDown size={16} /></a>
          </div>
             <div className="hero-stamp"><Leaf size={16} /><span>{cafeConfig.heroStamp.split('\n').map((line) => <span key={line}>{line}<br /></span>)}</span></div>
        </div>
        <div className="hero-panel">
          <div className="hero-panel__inner">
            <div className="logo-lockup"><LogoMark /><span className="logo-lockup__line" /></div>
            <p className="hero-panel__label">Welcome to</p>
             <h2>{cafeConfig.cafeName}</h2>
            <p className="hero-panel__tagline">{cafeConfig.tagline}</p>
            <div className="hero-panel__rule"><span /><Leaf size={14} /><span /></div>
            <SocialActions onNotice={showNotice} />
          </div>
        </div>
      </section>

      <ReviewSection onNotice={showNotice} />
      <CafeFooter />

      {notice && <div className="toast" role="status"><span className="toast-dot" />{notice}</div>}
    </main>
  )
}

export default App

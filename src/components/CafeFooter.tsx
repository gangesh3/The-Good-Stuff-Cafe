import { Clock3, Heart, MapPin, Phone, ExternalLink } from 'lucide-react'
import { cafeConfig } from '../config/cafeConfig'
import { LogoMark } from './LogoMark'

export function CafeFooter() {
  return (
    <footer className="cafe-footer">
      <div className="footer-brand">
        <LogoMark compact />
        <div><strong>{cafeConfig.cafeName}</strong><span>{cafeConfig.tagline}</span></div>
      </div>
      <div className="footer-details">
        {cafeConfig.address && <span><MapPin size={15} /> {cafeConfig.address}</span>}
        {cafeConfig.hours && <span><Clock3 size={15} /> {cafeConfig.hours}</span>}
        {cafeConfig.contactInfo && <span><Phone size={15} /> {cafeConfig.contactInfo}</span>}
        {cafeConfig.cafeWebsiteUrl && <a href={cafeConfig.cafeWebsiteUrl} target="_blank" rel="noopener noreferrer"><ExternalLink size={15} /> Website</a>}
      </div>
      <div className="footer-made">{cafeConfig.footerText} <Heart size={13} fill="currentColor" /></div>
    </footer>
  )
}

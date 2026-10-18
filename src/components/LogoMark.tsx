import { Coffee } from 'lucide-react'
import { cafeConfig } from '../config/cafeConfig'

type LogoMarkProps = { compact?: boolean }

export function LogoMark({ compact = false }: LogoMarkProps) {
  return (
    <div className={`logo-mark ${compact ? 'logo-mark--compact' : ''}`} aria-label={`${cafeConfig.cafeName} logo`}>
      {cafeConfig.logoImage ? (
        <img src={cafeConfig.logoImage} alt="" className="logo-mark__image" />
      ) : (
        <>
          <Coffee strokeWidth={1.7} />
          {!compact && <span className="logo-steam logo-steam--one" />}
          {!compact && <span className="logo-steam logo-steam--two" />}
        </>
      )}
    </div>
  )
}

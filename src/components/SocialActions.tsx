import { ArrowUpRight, Facebook, Instagram, MessageCircle } from 'lucide-react'
import type { MouseEvent } from 'react'
import { cafeConfig } from '../config/cafeConfig'
import { isSafeExternalUrl } from '../lib/external'

type SocialActionsProps = { onNotice: (message: string) => void }

type SocialAction = {
  key: 'instagram' | 'whatsapp' | 'facebook'
  href: string
  label: string
  description: string
  className: string
  icon: typeof Instagram
}

export function SocialActions({ onNotice }: SocialActionsProps) {
  const actions: SocialAction[] = [
    {
      key: 'instagram',
      href: cafeConfig.instagramUrl,
      label: cafeConfig.buttonLabels.instagram,
      description: 'See the latest from our coffee corner',
      className: 'social-action--instagram',
      icon: Instagram,
    },
    {
      key: 'whatsapp',
      href: cafeConfig.whatsappUrl,
      label: cafeConfig.buttonLabels.whatsapp,
      description: 'Questions, bookings, or just say hello',
      className: 'social-action--whatsapp',
      icon: MessageCircle,
    },
    ...(cafeConfig.facebookUrl ? [{
      key: 'facebook' as const,
      href: cafeConfig.facebookUrl,
      label: cafeConfig.buttonLabels.facebook,
      description: 'Keep up with café news and updates',
      className: 'social-action--facebook',
      icon: Facebook,
    }] : []),
  ]

  const handleLink = (event: MouseEvent<HTMLAnchorElement>, action: SocialAction) => {
    if (!isSafeExternalUrl(action.href)) {
      event.preventDefault()
      onNotice('This social link is not configured yet.')
    }
  }

  return (
    <section className="social-actions" aria-label={`Connect with ${cafeConfig.cafeName}`}>
      {actions.map((action) => {
        const Icon = action.icon
        return (
          <a
            className={`social-action ${action.className}`}
            href={isSafeExternalUrl(action.href) ? action.href : '#'}
            key={action.key}
            target="_blank"
            rel="noopener noreferrer"
            onClick={(event) => handleLink(event, action)}
          >
            <span className="social-action__icon"><Icon size={22} strokeWidth={1.8} /></span>
            <span className="social-action__copy">
              <strong>{action.label}</strong>
              <small>{action.description}</small>
            </span>
            <ArrowUpRight className="social-action__arrow" size={20} strokeWidth={1.8} />
          </a>
        )
      })}
    </section>
  )
}

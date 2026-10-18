import { ArrowUpRight, Clipboard, ExternalLink, PenLine, Sparkles } from 'lucide-react'
import { useState } from 'react'
import { cafeConfig } from '../config/cafeConfig'
import { copyText, isSafeExternalUrl, openExternal } from '../lib/external'
import { ReviewCard } from './ReviewCard'

type ReviewSectionProps = { onNotice: (message: string) => void }

export function ReviewSection({ onNotice }: ReviewSectionProps) {
  const [copiedId, setCopiedId] = useState<string | null>(null)
  const [fallbackText, setFallbackText] = useState('')

  const openReviews = () => {
    if (!isSafeExternalUrl(cafeConfig.googleReviewUrl)) {
      onNotice('Add the café Google review URL in cafeConfig.ts first.')
      return
    }
    if (!openExternal(cafeConfig.googleReviewUrl)) {
      onNotice('Google Reviews could not open automatically. Use the button below.')
    }
  }

  const postReview = (text: string, id: string) => {
    void navigator.vibrate?.(8)
    void (async () => {
      const copied = await copyText(text)
      if (!copied) {
        setFallbackText(text)
        onNotice('Select the message below, then use Copy Again.')
        return
      }
      setFallbackText('')
      setCopiedId(id)
      window.setTimeout(() => setCopiedId((current) => current === id ? null : current), 2400)
      const opened = openExternal(cafeConfig.googleReviewUrl)
      onNotice(opened ? 'Message copied! Opening Google Reviews…' : 'Message copied! Use Open Google Reviews below.')
    })()
  }

  return (
    <section className="reviews-section" id="reviews">
      <div className="section-heading">
        <div className="eyebrow"><Sparkles size={14} /> Your experience matters</div>
        <h2>{cafeConfig.reviewHeading}</h2>
        <p>{cafeConfig.reviewSubheading}</p>
      </div>

      <div className="review-list">
        {cafeConfig.reviewPresets.map((review) => (
          <ReviewCard key={review.id} review={review} copied={copiedId === review.id} onCopy={() => postReview(review.message, review.id)} />
        ))}
      </div>

      {fallbackText && (
        <div className="copy-fallback" role="alert">
          <div className="copy-fallback__heading"><Clipboard size={16} /> Copy manually if needed</div>
          <p>The message is ready below. Select it, copy it, then paste it into Google Reviews.</p>
          <textarea value={fallbackText} readOnly onFocus={(event) => event.currentTarget.select()} aria-label="Review message to copy" rows={4} />
          <button type="button" className="copy-button copy-fallback__button" onClick={() => postReview(fallbackText, 'fallback')}>
            <Clipboard size={16} /> Copy Again
          </button>
        </div>
      )}

      <div className="custom-review-wrap">
        <button className="custom-review-trigger" type="button" onClick={openReviews}>
          <span className="custom-review-trigger__icon"><PenLine size={18} /></span>
          <span><strong>{cafeConfig.buttonLabels.writeOwnReview}</strong><small>Open Google Reviews and share your genuine experience</small></span>
          <ArrowUpRight size={19} />
        </button>
      </div>

      <div className="review-actions-note">
        <p>Suggestions are only starting points. Please edit them so your review reflects what you actually experienced.</p>
        <button type="button" className="review-link-button" onClick={openReviews}>
          {isSafeExternalUrl(cafeConfig.googleReviewUrl) ? <ExternalLink size={15} /> : <Clipboard size={15} />}
          {isSafeExternalUrl(cafeConfig.googleReviewUrl) ? cafeConfig.buttonLabels.openGoogleReviews : 'Configure Google Reviews link'}
        </button>
      </div>
    </section>
  )
}

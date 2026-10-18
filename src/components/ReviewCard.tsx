import { Check, Copy, Star } from 'lucide-react'
import { type ReviewPreset } from '../config/cafeConfig'
import { cafeConfig } from '../config/cafeConfig'

type ReviewCardProps = {
  review: ReviewPreset
  copied: boolean
  onCopy: () => void
}

export function ReviewCard({ review, copied, onCopy }: ReviewCardProps) {
  return (
    <article className={`review-card ${copied ? 'review-card--copied' : ''}`}>
      <div className="review-card__body">
        <span className="review-card__tag">{review.label}</span>
        <p>“{review.message}”</p>
      </div>
      <div className="review-card__aside">
        <div className="stars" aria-label={`${review.rating} out of 5 stars`}>
          {[1, 2, 3, 4, 5].map((star) => <Star key={star} size={15} fill={star <= review.rating ? 'currentColor' : 'none'} />)}
        </div>
        <button className="copy-button" onClick={onCopy} type="button">
          {copied ? <Check size={16} /> : <Copy size={16} />}
          <span>{copied ? 'Copied!' : cafeConfig.buttonLabels.copyAndPost}</span>
        </button>
      </div>
    </article>
  )
}

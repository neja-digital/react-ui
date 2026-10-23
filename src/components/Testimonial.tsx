import type { TNJTestimonialProps } from '@/types/props/components/testimonial'
import { FaRegStar, FaStar } from 'react-icons/fa'
import NJCard from './Card'

const MAX_RATING = 5

export default function NJTestimonial(props: TNJTestimonialProps) {
  const { njAuthor, njReview, njRating, ...rest } = props
  const rating = Math.min(Math.max(Math.round(njRating), 0), MAX_RATING)
  const filledStarsJsx = Array.from({ length: rating }, (_, i) => <FaStar key={`filled-${i}`} />)
  const emptyStarsJsx = Array.from({ length: MAX_RATING - rating }, (_, i) => <FaRegStar key={`empty-${i}`} />)

  const testimonialContent = (
    <>
      <div className="testimonial-item__rating">
        {filledStarsJsx}{emptyStarsJsx}
      </div>
      <p className="testimonial-item__review">{njReview}</p>
    </>
  )

  return (
    <NJCard
      className="testimonial-item"
      njTitle={njAuthor}
      njContent={testimonialContent}
      {...rest}
    />
  )
}

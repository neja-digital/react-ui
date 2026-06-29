import type { TNJTestimonialProps } from '@/types/props/components/testimonial'
import { FaRegStar, FaStar } from 'react-icons/fa'
import NJCard from './Card'

const MAX_RATING = 5

export default function NJTestimonial(props: TNJTestimonialProps) {
  const { njAuthor, njReview, njRating, ...rest } = props
  const filledStarsJsx = new Array(njRating).fill(0).map(_ => <FaStar />)
  const emptyStarsJsx = new Array(MAX_RATING - njRating).fill(0).map(_ => <FaRegStar />)

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

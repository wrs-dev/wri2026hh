'use client'

import { useEffect, useMemo, useRef, useState } from 'react'
import clsx from 'clsx'
import { useInView } from 'framer-motion'
import { Container } from '@/components/Container';

const reviews = [
  {
    title: 'Always an Aha! moment.',
    body: 'The takeaways from WRI have been invaluable. They have deepened my understanding of the industry.',
    author: 'Mike Roney, Iron Moustache Engineering',
    rating: 5,
  },
  {
    title: 'A must attend event!',
    body: 'Effective, impactful Insightful. The highest quality presenters in the North American rail industry.',
    author: 'Constantine Issakidis, Athena Industrial Services',
    rating: 5,
  },
  {
    title:'WRI embedded into me the principles of wheel-rail interface management.',
    body: 'I can always call someone from the WRI community and know I would get great advice.',
    author: 'Peeter Vesik, SkyTrain',
    rating: 5,
  },
  {
    title: 'The pulse of the rail industry.',
    body: 'The organizers have the incredible knack of putting together presentations that collectively have something new for every attendee.',
    author: 'Shankar Rajaram, Sound Transit',
    rating: 5,
  },
  {
    title: 'A stand out amongst the seminars available.',
    body: 'Gordon Bachinsky and his dedicated, passionate team assemble presenters that provide an unmatched learning and networking opportunity.',
    author: 'George Fowler, TSB (retired)',
    rating: 5,
  },
  {
    title: 'WRI never disappoints!',
    body: 'Learn, laugh, and meet others who really care about solving problems in our industry.',
    author: 'David Casaceli',
    rating: 5,
  },
  {
    title: 'WRI showed me how the industry works.',
    body: "It's the first conference that allowed us to truly interact and talk freely. I learn something new every time.",
    author: 'Ralph Schorr, Amsted Rail',
    rating: 5,
  },
  {
    title: 'The best railroad engineering conference in the business.',
    body: 'If you are looking to learn more about the rail industry\’s current engineering and mechanical challenges, and talk shop with knowledgeable people who are willing to share what they know, WRI is the conference for you.',
    author: 'Brad Kerchof, Norfolk Southern Railway (retired)',
    rating: 5,
  },
  {
    title: 'WRI: place of the case studies with practical applications.',
    body: 'I have learned so much from the material presented that I use since the beginning of my career.',
    author: 'Antonio Merheb, Chairman of International Heavy Haul Association',
    rating: 5,
  },
]

function StarIcon(props) {
  return (
    <svg viewBox="0 0 20 20" aria-hidden="true" {...props}>
      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
    </svg>
  )
}

function StarRating({ rating }) {
  return (
    <div className="flex">
      {[...Array(5).keys()].map((index) => (
        <StarIcon
          key={index}
          className={clsx(
            'h-5 w-5',
            rating > index ? 'fill-wri-yellow' : 'fill-gray-300',
          )}
        />
      ))}
    </div>
  )
}

function Review({ title, body, author, rating, className, ...props }) {
  let animationDelay = useMemo(() => {
    let possibleAnimationDelays = ['0s', '0.1s', '0.2s', '0.3s', '0.4s', '0.5s']
    return possibleAnimationDelays[
      Math.floor(Math.random() * possibleAnimationDelays.length)
    ]
  }, [])

  return (
    <figure
      className={clsx(
        'animate-fade-in rounded-3xl bg-white p-6 opacity-0 shadow-md shadow-gray-900/5',
        className,
      )}
      style={{ animationDelay }}
      {...props}
    >
      <blockquote className="text-gray-900">
        <StarRating rating={rating} />
        <p className="mt-4 text-lg font-semibold leading-6 before:content-['“'] after:content-['”']">
          {title}
        </p>
        <p className="mt-3 text-base leading-7">{body}</p>
      </blockquote>
      <figcaption className="mt-3 text-sm text-gray-600 before:content-['–_']">
        {author}
      </figcaption>
    </figure>
  )
}

function splitArray(array, numParts) {
  let result = []
  for (let i = 0; i < array.length; i++) {
    let index = i % numParts
    if (!result[index]) {
      result[index] = []
    }
    result[index].push(array[i])
  }
  return result
}

function ReviewColumn({ reviews, className, reviewClassName, msPerPixel = 0 }) {
  let columnRef = useRef(null)
  let [columnHeight, setColumnHeight] = useState(0)
  let duration = `${columnHeight * msPerPixel}ms`

  useEffect(() => {
    if (!columnRef.current) {
      return
    }

    let resizeObserver = new window.ResizeObserver(() => {
      setColumnHeight(columnRef.current?.offsetHeight ?? 0)
    })

    resizeObserver.observe(columnRef.current)

    return () => {
      resizeObserver.disconnect()
    }
  }, [])

  return (
    <div
      ref={columnRef}
      className={clsx('animate-marquee space-y-8 py-4', className)}
      style={{ '--marquee-duration': duration }}
    >
      {reviews.concat(reviews).map((review, reviewIndex) => (
        <Review
          key={reviewIndex}
          aria-hidden={reviewIndex >= reviews.length}
          className={reviewClassName?.(reviewIndex % reviews.length)}
          {...review}
        />
      ))}
    </div>
  )
}

function ReviewGrid() {
  let containerRef = useRef(null)
  let isInView = useInView(containerRef, { once: true, amount: 0.4 })
  let columns = splitArray(reviews, 3)
  let column1 = columns[0]
  let column2 = columns[1]
  let column3 = splitArray(columns[2], 2)

  return (
    <div
      ref={containerRef}
      className="relative -mx-4 mt-16 grid h-[49rem] max-h-[150vh] grid-cols-1 items-start gap-8 overflow-hidden px-4 sm:mt-20 md:grid-cols-2 lg:grid-cols-3"
    >
      {isInView && (
        <>
          <ReviewColumn
            reviews={[...column1, ...column3.flat(), ...column2]}
            reviewClassName={(reviewIndex) =>
              clsx(
                reviewIndex >= column1.length + column3[0].length &&
                  'md:hidden',
                reviewIndex >= column1.length && 'lg:hidden',
              )
            }
            msPerPixel={20}
          />
          <ReviewColumn
            reviews={[...column2, ...column3[1]]}
            className="hidden md:block"
            reviewClassName={(reviewIndex) =>
              reviewIndex >= column2.length ? 'lg:hidden' : ''
            }
            msPerPixel={30}
          />
          <ReviewColumn
            reviews={column3.flat()}
            className="hidden lg:block"
            msPerPixel={20}
          />
        </>
      )}
      <div className="pointer-events-none absolute inset-x-0 top-0 h-32 bg-gradient-to-b from-gray-50" />
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-gray-50" />
    </div>
  )
}

export default function Reviews() {
  return (
    <section
      id="reviews"
      aria-labelledby="reviews-title"
      className="pb-16 pt-20 sm:pb-0 sm:pt-32"
    >
      <Container>
        <h2
          id="reviews-title"
          className="text-4xl font-wri tracking-tight sm:text-center"
        >
          What are attendees of Wheel Rail Seminars events saying?
        </h2>
        <p className="mt-2 text-lg text-gray-600 sm:text-center">
          Thousands of people have attended our events and we&apos;re honored to
          have received such high praise from the wheel-rail community.
        </p>
        <ReviewGrid />
      </Container>
    </section>
  )
}

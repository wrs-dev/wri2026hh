import Image from 'next/image';
import Link from 'next/link';

export default function Hotel() {
  return (
    <section id="hotel" className="py-32 hare-hotel">
      <div className="container">
        <div className="grid row">
          <div className="col">
            <h1 className="mb-4 relative inline-block capitalize text-xl md:text-2xl font-bold text-black after:absolute after:bg-wri-yellow after:bottom-0 after:left-0 after:h-0.5 after:w-full">
              WRI 2025HH HOST HOTEL
            </h1>
            <div className="grid grid-cols-1">
              <figure>
                <Image
                  src="/loews-hotel-web.webp"
                  alt="loews-hotel"
                  width={'400'}
                  height={'267'}
                  className="w-full h-auto rounded-xl"
                  loading="lazy"
                />
              </figure>
              <div>
                <div className="mb-6 text-3xl font-bold primary-color">
                  Loews Chicago O’Hare Hotel
                </div>
                <div className="mb-8 text-lg font-bold">
                  5300 N River Rd, Rosemont, IL 60018
                </div>
                <a
                  href="https://www.loewshotels.com/chicago-ohare/group-wheel-rail-interaction-24"
                  target="_blank"
                  className="hidden inline-block px-4 py-2 text-xl font-bold border-4 shadow-xl rounded-xl bg-wri-yellow hover:bg-wri-green border-wri-dark-blue hover:border-wri-green text-wri-dark-blue hover:text-white"
                >
                  Reservations
                </a>
              </div>
            </div>
          </div>

          <div className="col">
            <h2>Making Reservations/Discounted Rate:</h2>
            <p className="text-base mb-3.5">
              {' '}
              The Conference room Block at the Loews Chicago O'Hare Hotel has expired.  There are a limited number of rooms available through the Conference Coordinator.
            </p>
            <p className="text-base mb-3.5">
            If you require a hotel room for WRI '24, please contact:
            </p>
            <p className="text-base mb-3.5">
            Brandon Koenig at <a href="mailto:brandon@wheel-rail-seminars.com"> brandon@wheel-rail-seminars.com</a>
            </p>
            <p className="text-base mb-3.5">
            The Remaining Rooms will be on a first come basis and can not be guaranteed at this late date.
            </p>
            <h2>Room Deposits/Guarantees:</h2>
            <p className="text-base mb-3.5">
              <b>
                Hotel reservations requires a credit card guarantee to secure
                your room reservation.
              </b>
               Should you need to cancel your reservation, reservations must be
              canceled a minimum of 48 hours prior to arrival, 5PM hotel time,
              to avoid a one night cancellation penalty.
            </p>
            <h2>Reservation Confirmation:</h2>
            <p className="text-base mb-3.5">
              You will receive your hotel confirmation email directly from the
              hotel.
            </p>
            <p className="text-base mb-3.5">
              <b>
                Reservation must be cancelled by 5:00pm, local hotel time, two
                days prior to arrival date.
              </b>
               Failure to cancel by 5:00pm, 48 hours prior will result in the
              loss of one night's room and tax on your credit card.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

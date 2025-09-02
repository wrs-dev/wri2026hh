import Image from 'next/image';
import Head from 'next/head';
import Link from 'next/link';
import Navigation from '@/components/navigation'
import Banner26HH from '@/components/banner/wri26HH';
import Registration from '@/components/registration';
import SponsorsCloud from '@/components/sponsors';

export default function Terms() {
  return (
    <main className="bg-white">
      <Navigation />
      <Banner26HH />
      <div className="max-w-5xl px-4 pb-40 mx-auto">
        <div className="privacy-policy" id="terms">
          {/* T&C */}
          <h2 className="mt-16 text-2xl font-bold tracking-tight text-gray-900">
            Conference Attendee Terms & Conditions, Cancellation and Refund
            Policy
          </h2>
          <p className="mt-6 text-xl">
            <strong>Payments:</strong> Full payment must be made upon
            registering for the Conference. Any questions or problems
            registering, please contact Brandon Koenig, Director of Operations
            at 847-808-1818 or email at brandon@wheel-rail-seminars.com.
          </p>
          <p className="mt-6 text-xl">
            <strong>Early Bird Rate:</strong> To qualify for early bird rates or
            discounts, booking and payment must be received before the deadline
            listed in the marketing material.
          </p>
          <p className="mt-6 text-xl">
            <strong>Cancellation Policy:</strong> Refunds, minus a 20%
            administrative fee, are available for cancellations made in writing
            at least six weeks prior to the event. No refunds after this date.
            Substitutions are allowed up to 5 days before the event. In lieu of
            cancellation, you may apply your registration fee toward next year's
            Conference. No-shows will not receive a refund or credit.
          </p>
          <p className="mt-6 text-xl">
            <strong>Event Changes:</strong> WHEEL RAIL SEMINARS may change event
            format, speakers, content, venue, or program at any time for any
            reason without liability. Your registration will roll over if the
            event is postponed or changes to a virtual format.
          </p>
          <p className="mt-6 text-xl">
            <strong>Registration Adjustment:</strong> WHEEL RAIL SEMINARS may
            review and adjust registration types and fees if attendee
            information is misrepresented or incorrect. Adjusted fees will be
            charged to the payment method on file.
          </p>
          <p className="mt-6 text-xl">
            <strong>Speakers:</strong> Speakers' views are their own. WHEEL RAIL
            SEMINARS is not liable for advice or opinions expressed. Speakers
            grant WHEEL RAIL SEMINARS permission to use their name and
            presentation materials for promotional purposes.
          </p>
          <p className="mt-6 text-xl">
            <strong>Data Protection:</strong> By registering, delegates allow
            WHEEL RAIL SEMINARS and associated companies to contact them.
            Contact the events team to opt-out. Attendee contact details will be
            shared with sponsors and other attendees for networking purposes.
            Opt-out when booking.
          </p>
          <p className="mt-6 text-xl">
            <strong>Insurance:</strong> Attendees are responsible for arranging
            their own insurance. WHEEL RAIL SEMINARS is not liable for any loss
            or damage to personal property.
          </p>
          <p className="mt-6 text-xl">
            <strong>Photographs and Media:</strong> WHEEL RAIL SEMINARS has the
            right to use any photographs, recordings, or electronic images for
            promotional purposes without compensation to attendees, speakers,
            sponsors, or exhibitors.
          </p>
          <p className="mt-6 text-xl">
            <strong>Visa Requirements:</strong> Attendees are responsible for
            visa requirements. Invitation letters for visas are provided after
            registration and full payment. WHEEL RAIL SEMINARS will not contact
            embassies on your behalf.
          </p>
          <p className="mt-6 text-xl">
            <strong>Admittance:</strong> WHEEL RAIL SEMINARS reserves the right
            to refuse admittance or expel disruptive attendees without refund.
            Attendees must follow health and safety guidelines, including
            COVID-19 protocols. Attendees assume all associated risks and
            liabilities.
          </p>
          <p className="mt-6 text-xl">
            <strong>Disclaimer:</strong> WHEEL RAIL SEMINARS may change, cancel,
            or postpone events without liability. No refunds or credits will be
            issued unless WHEEL RAIL SEMINARS determines it is fair to do so.
          </p>
          <p className="mt-6 text-xl">
            <strong>Force Majeure:</strong> WHEEL RAIL SEMINARS is not liable
            for delays or failures caused by events beyond its control. In such
            cases, the event may be postponed or rescheduled without liability.
          </p>
          <p className="mt-6 text-xl">
            <strong>Virtual Event:</strong> If Wheel Rail Seminars offers a
            virtual option for attendees, participants are responsible for
            meeting technical requirements to access the virtual event platform.
            Login credentials must not be shared or transferred without
            permission.
          </p>
          <p className="mt-6 text-xl">
            <strong>Changes to Terms:</strong> WHEEL RAIL SEMINARS may modify
            these terms at any time. Changes take effect upon notification to
            attendees.
          </p>
          <p className="mt-6 text-xl">
            <strong>Interpretation:</strong> This Agreement follows the laws of
            Florida. Disputes will be settled through arbitration or in a
            Florida, Brevard county court. Prevailing parties may recover
            reasonable attorney's fees and costs.
          </p>
          <p className="mt-6 text-xl">
            <strong>Entire Agreement:</strong> This Agreement, along with any
            Conference Rules and Regulations, Appendices, and Schedules,
            constitutes the final and complete agreement between the Parties and
            supersedes all prior agreements and understandings.
          </p>
        </div>
      </div>
    </main>
  );
}

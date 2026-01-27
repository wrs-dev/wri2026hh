import Image from 'next/image';
import Head from 'next/head';
import Link from 'next/link';
import Navigation from '@/components/navigation';
import IconsHH from '@/components/icons/iconsHH';
import Banner26HH from '@/components/banner/wri26HH';

export async function getStaticProps() {
  return {
    props: {
      title: "WRI Wheel Rail Interaction Conference | Legal",
      description: "Legal information about the Annual Wheel/Rail Interaction Conference (WRI)",
      socialImage: "/wri2026-hh-social.png" 
    }
  };
}

export default function Legal() {
  return (
    <main className="bg-white">
      <Navigation />
      <Banner26HH />
      <div className="max-w-5xl pb-40 mx-auto">
        <div className="pb-40 privacy-container" id="privacy">
          <div className="privacy-policy">
            <h2
              className="mt-16 text-2xl font-bold tracking-tight text-gray-900"
              id="privacy"
            >
              Privacy Policy
            </h2>
            <p className="mt-6 text-xl">Last updated February 10, 2024</p>
            <p className="mt-6 text-xl">
              This privacy notice for Wheel Rail Seminars ("Company," "we,"
              "us," or "our"), describes how and why we might collect, store,
              use, and/or share ("process") your information when you use our
              services ("Services"), such as when you:
            </p>
            <ul>
              <li className="pt-4 ml-12 list-disc">
                Visit our website at{' '}
                <a
                  href="https://wheel-rail-seminars.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  https://wheel-rail-seminars.com
                </a>
                , or any website of ours that links to this privacy notice
              </li>
              <li className="pt-4 ml-12 list-disc">
                Engage with us in other related ways, including any sales,
                marketing, or events
              </li>
            </ul>
            <h3 className="mt-6 text-2xl">Questions or concerns?</h3>
            <p className="mt-6 text-xl">
              Reading this privacy notice will help you understand your privacy
              rights and choices. If you do not agree with our policies and
              practices, please do not use our Services. If you still have any
              questions or concerns, please contact us at{' '}
              <a href="mailto:brandon@wheel-rail-seminars.com">
                brandon@wheel-rail-seminars.com
              </a>
              .
            </p>
            <div>
              <h3 className="mt-6 text-2xl">Summary of Key Points</h3>
              <p className="mt-6 text-xl">
                This summary provides key points from our privacy notice, but
                you can find out more details about any of these topics in the
                numbered sections below.
              </p>
              <p className="mt-6 text-xl">
                <strong>What personal information do we process?</strong> When
                you visit, use, or navigate our Services, we may process
                personal information depending on how you interact with Wheel
                Rail Seminars and the Services, the choices you make, and the
                products and features you use.
              </p>
              <p className="mt-6 text-xl">
                <strong>
                  Do we process any sensitive personal information?
                </strong>{' '}
                We do not process sensitive personal information.
              </p>
              <p className="mt-6 text-xl">
                <strong>
                  Do we receive any information from third parties?
                </strong>{' '}
                We do not receive any information from third parties.
              </p>
              <p className="mt-6 text-xl">
                <strong>How do we process your information?</strong> We process
                your information to provide, improve, and administer our
                Services, communicate with you, for security and fraud
                prevention, and to comply with law. We may also process your
                information for other purposes with your consent. We process
                your information only when we have a valid legal reason to do
                so.
              </p>
              <p className="mt-6 text-xl">
                <strong>
                  In what situations and with which parties do we share personal
                  information?
                </strong>{' '}
                We may share information in specific situations and with
                specific third parties.
              </p>
              <p className="mt-6 text-xl">
                <strong>How do we keep your information safe?</strong> We have
                organizational and technical processes and procedures in place
                to protect your personal information. However, no electronic
                transmission over the internet or information storage technology
                can be guaranteed to be 100% secure, so we cannot promise or
                guarantee that hackers, cybercriminals, or other unauthorized
                third parties will not be able to defeat our security and
                improperly collect, access, steal, or modify your information.
              </p>
              <p className="mt-6 text-xl">
                <strong>What are your rights?</strong> Depending on where you
                are located geographically, the applicable privacy law may mean
                you have certain rights regarding your personal information.
              </p>
              <p className="mt-6 text-xl">
                <strong>How do you exercise your rights?</strong> The easiest
                way to exercise your rights is by contacting us. We will
                consider and act upon any request in accordance with applicable
                data protection laws.
              </p>
            </div>
            {/* Section 1 */}
            <div>
              <h3 className="mt-6 text-2xl">
                1. WHAT INFORMATION DO WE COLLECT?
              </h3>
              <li className="pt-4 ml-12 list-disc">
                Personal information you disclose to us
              </li>
              <p className="mt-6 text-xl">
                <strong>In short:</strong> We collect personal information that
                you provide to us.
              </p>
              <p className="mt-6 text-xl">
                We collect personal information that you voluntarily provide to
                us when you express an interest in obtaining information about
                us or our products and Services, when you participate in
                activities on the Services, or otherwise when you contact us.
              </p>
              <h4>Personal Information Provided by You.</h4>
              <p className="mt-6 text-xl">
                The personal information that we collect depends on the context
                of your interactions with us and the Services, the choices you
                make, and the products and features you use. The personal
                information we collect can include the following:
              </p>
              <ul>
                <li className="pt-4 ml-12 list-disc">email addresses</li>
              </ul>
              <p className="mt-6 text-xl">
                <strong>Sensitive Information.</strong> We do not process
                sensitive information.
              </p>
              <p className="mt-6 text-xl">
                All personal information that you provide to us must be true,
                complete, and accurate, and you must notify us of any changes to
                such personal information.
              </p>
            </div>
            {/* Section 2 */}
            <div>
              <h3 className="mt-6 text-2xl">
                2. HOW DO WE PROCESS YOUR INFORMATION?
              </h3>
              <p className="mt-6 text-xl">
                <strong>In Short:</strong> We process your information to
                provide, improve, and administer our Services, communicate with
                you, for security and fraud prevention, and to comply with law.
                We may also process your information for other purposes with
                your consent.
              </p>
              <p className="mt-6 text-xl">
                We process your personal information for a variety of reasons,
                depending on how you interact with our Services, including:
              </p>
              <ul>
                <li className="pt-4 ml-12 list-disc">
                  To save or protect an individual's vital interest. We may
                  process your information when necessary to save or protect an
                  individual’s vital interest, such as to prevent harm.
                </li>
              </ul>
            </div>
            {/* Section 3 */}
            <div>
              <h3 className="mt-6 text-2xl">
                3. WHAT LEGAL BASES DO WE RELY ON TO PROCESS YOUR INFORMATION?
              </h3>
              <p className="mt-6 text-xl">
                <strong>In Short:</strong> We only process your personal
                information when we believe it is necessary and we have a valid
                legal reason (i.e., legal basis) to do so under applicable law,
                like with your consent, to comply with laws, to provide you with
                services to enter into or fulfill our contractual obligations,
                to protect your rights, or to fulfill our legitimate business
                interests.
              </p>
              <p className="mt-6 text-xl">
                If you are located in the EU or UK, this section applies to you.
                The General Data Protection Regulation (GDPR) and UK GDPR
                require us to explain the valid legal bases we rely on in order
                to process your personal information. As such, we may rely on
                the following legal bases to process your personal information:
              </p>
              <ul>
                <li className="pt-4 ml-12 list-disc">
                  Consent: We may process your information if you have given us
                  permission (i.e., consent) to use your personal information
                  for a specific purpose. You can withdraw your consent at any
                  time.
                </li>
                <li className="pt-4 ml-12 list-disc">
                  Legal Obligations: We may process your information where we
                  believe it is necessary for compliance with our legal
                  obligations, such as to cooperate with a law enforcement body
                  or regulatory agency, exercise or defend our legal rights, or
                  disclose your information as evidence in litigation in which
                  we are involved.
                </li>
                <li className="pt-4 ml-12 list-disc">
                  Vital Interests: We may process your information where we
                  believe it is necessary to protect your vital interests or the
                  vital interests of a third party, such as situations involving
                  potential threats to the safety of any person.
                </li>
              </ul>
              <p className="mt-6 text-xl">
                If you are located in Canada, this section applies to you. We
                may process your information if you have given us specific
                permission (i.e., express consent) to use your personal
                information for a specific purpose, or in situations where your
                permission can be inferred (i.e., implied consent). You can
                withdraw your consent at any time.
              </p>
              <p className="mt-6 text-xl">
                In some exceptional cases, we may be legally permitted under
                applicable law to process your information without your consent,
                including, for example:
              </p>
              <ul>
                <li className="pt-4 ml-12 list-disc">
                  If collection is clearly in the interests of an individual and
                  consent cannot be obtained in a timely way.
                </li>
                <li className="pt-4 ml-12 list-disc">
                  For investigations and fraud detection and prevention.
                </li>
                <li className="pt-4 ml-12 list-disc">
                  For business transactions provided certain conditions are met.
                </li>
                <li className="pt-4 ml-12 list-disc">
                  If it is contained in a witness statement and the collection
                  is necessary to assess, process, or settle an insurance claim.
                </li>
                <li className="pt-4 ml-12 list-disc">
                  For identifying injured, ill, or deceased persons and
                  communicating with next of kin.
                </li>
                <li className="pt-4 ml-12 list-disc">
                  If we have reasonable grounds to believe an individual has
                  been, is, or may be victim of financial abuse.
                </li>
                <li className="pt-4 ml-12 list-disc">
                  If it is reasonable to expect collection and use with consent
                  would compromise the availability or the accuracy of the
                  information and the collection is reasonable for purposes
                  related to investigating a breach of an agreement or a
                  contravention of the laws of Canada or a province.
                </li>
                <li className="pt-4 ml-12 list-disc">
                  If disclosure is required to comply with a subpoena, warrant,
                  court order, or rules of the court relating to the production
                  of records.
                </li>
                <li className="pt-4 ml-12 list-disc">
                  If it was produced by an individual in the course of their
                  employment, business, or profession and the collection is
                  consistent with the purposes for which the information was
                  produced.
                </li>
                <li className="pt-4 ml-12 list-disc">
                  If the collection is solely for journalistic, artistic, or
                  literary purposes.
                </li>
                <li className="pt-4 ml-12 list-disc">
                  If the information is publicly available and is specified by
                  the regulations.
                </li>
              </ul>
            </div>
            {/* Section 5 */}
            <div>
              <h3 className="mt-6 text-2xl">
                5. HOW LONG DO WE KEEP YOUR INFORMATION?
              </h3>
              <p className="mt-6 text-xl">
                <strong>In Short:</strong> We keep your information for as long
                as necessary to fulfill the purposes outlined in this privacy
                notice unless otherwise required by law.
              </p>
              <p className="mt-6 text-xl">
                When we have no ongoing legitimate business need to process your
                personal information, we will either delete or anonymize such
                information, or, if this is not possible (for example, because
                your personal information has been stored in backup archives),
                then we will securely store your personal information and
                isolate it from any further processing until deletion is
                possible.
              </p>
            </div>
            {/* Section 6 */}
            <div>
              <h3 className="mt-6 text-2xl">
                6. HOW DO WE KEEP YOUR INFORMATION SAFE?
              </h3>
              <p className="mt-6 text-xl">
                <strong>In Short:</strong> We aim to protect your personal
                information through a system of organizational and technical
                security measures.
              </p>
              <p className="mt-6 text-xl">
                We have implemented appropriate and reasonable technical and
                organizational security measures designed to protect the
                security of any personal information we process. However,
                despite our safeguards and efforts to secure your information,
                no electronic transmission over the Internet or information
                storage technology can be guaranteed to be 100% secure, so we
                cannot promise or guarantee that hackers, cybercriminals, or
                other unauthorized third parties will not be able to defeat our
                security and improperly collect, access, steal, or modify your
                information. Although we will do our best to protect your
                personal information, transmission of personal information to
                and from our Services is at your own risk. You should only
                access the Services within a secure environment.
              </p>
            </div>
            {/* Section 7 */}
            <div>
              <h3 className="mt-6 text-2xl">
                7. DO WE COLLECT INFORMATION FROM MINORS?
              </h3>
              <p className="mt-6 text-xl">
                <strong>In short:</strong> We do not knowingly collect data from
                or market to children under 18 years of age.
              </p>
              <p className="mt-6 text-xl">
                We do not knowingly solicit data from or market to children
                under 18 years of age. By using the Services, you represent that
                you are at least 18 or that you are the parent or guardian of
                such a minor and consent to such minor dependent’s use of the
                Services. If we learn that personal information from users less
                than 18 years of age has been collected, we will deactivate the
                account and take reasonable measures to promptly delete such
                data from our records. If you become aware of any data we may
                have collected from children under age 18, please contact us at
                brandon@wheel-rail-seminars.com.
              </p>
            </div>
            {/* Section 8 */}
            <div>
              <h3 className="mt-6 text-2xl">
                8. WHAT ARE YOUR PRIVACY RIGHTS?
              </h3>
              <p className="mt-6 text-xl">
                <strong>In short:</strong> In some regions, such as the European
                Economic Area (EEA), United Kingdom (UK), and Canada, you have
                rights that allow you greater access to and control over your
                personal information. You may review, change, or terminate your
                account at any time.
              </p>
              <p className="mt-6 text-xl">
                In some regions (like the EEA, UK, and Canada), you have certain
                rights under applicable data protection laws. These may include
                the right (i) to request access and obtain a copy of your
                personal information, (ii) to request rectification or erasure;
                (iii) to restrict the processing of your personal information;
                and (iv) if applicable, to data portability. In certain
                circumstances, you may also have the right to object to the
                processing of your personal information. You can make such a
                request by contacting us by using the contact details provided
                in the section "12. HOW CAN YOU CONTACT US ABOUT THIS NOTICE?"
                below.
              </p>
              <p className="mt-6 text-xl">
                We will consider and act upon any request in accordance with
                applicable data protection laws.
              </p>
              <p className="mt-6 text-xl">
                If you are located in the EEA or UK and you believe we are
                unlawfully processing your personal information, you also have
                the right to complain to your local data protection supervisory
                authority. You can find their contact details here:{' '}
                <a
                  href="https://ec.europa.eu/justice/data-protection/bodies/authorities/index_en.htm"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  https://ec.europa.eu/justice/data-protection/bodies/authorities/index_en.htm
                </a>
                .
              </p>
              <p className="mt-6 text-xl">
                If you are located in Switzerland, the contact details for the
                data protection authorities are available here:{' '}
                <a
                  href="https://www.edoeb.admin.ch/edoeb/en/home.html"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  https://www.edoeb.admin.ch/edoeb/en/home.html
                </a>
                .
              </p>
              <p className="mt-6 text-xl">
                <strong>Withdrawing your consent:</strong> If we are relying on
                your consent to process your personal information, which may be
                express and/or implied consent depending on the applicable law,
                you have the right to withdraw your consent at any time. You can
                withdraw your consent at any time by contacting us by using the
                contact details provided in the section "HOW CAN YOU CONTACT US
                ABOUT THIS NOTICE?" below.
              </p>
              <p className="mt-6 text-xl">
                However, please note that this will not affect the lawfulness of
                the processing before its withdrawal nor, when applicable law
                allows, will it affect the processing of your personal
                information conducted in reliance on lawful processing grounds
                other than consent.
              </p>
              <p className="mt-6 text-xl">
                If you have questions or comments about your privacy rights, you
                may email us at brandon@wheel-rail-seminars.com.
              </p>
            </div>
            {/* Section 9 */}
            <div>
              <h3 className="mt-6 text-2xl">
                9. CONTROLS FOR DO-NOT-TRACK FEATURES
              </h3>
              <p className="mt-6 text-xl">
                Most web browsers and some mobile operating systems and mobile
                applications include a Do-Not-Track ("DNT") feature or setting
                you can activate to signal your privacy preference not to have
                data about your online browsing activities monitored and
                collected. At this stage no uniform technology standard for
                recognizing and implementing DNT signals has been finalized. As
                such, we do not currently respond to DNT browser signals or any
                other mechanism that automatically communicates your choice not
                to be tracked online. If a standard for online tracking is
                adopted that we must follow in the future, we will inform you
                about that practice in a revised version of this privacy notice.
              </p>
            </div>
            {/* Section 10 */}
            <div>
              <h3 className="mt-6 text-2xl">
                10. DO CALIFORNIA RESIDENTS HAVE SPECIFIC PRIVACY RIGHTS?
              </h3>
              <p className="mt-6 text-xl">
                <strong>In short:</strong> Yes, if you are a resident of
                California, you are granted specific rights regarding access to
                your personal information.
              </p>
              <p className="mt-6 text-xl">
                California Civil Code Section 1798.83, also known as the "Shine
                The Light" law, permits our users who are California residents
                to request and obtain from us, once a year and free of charge,
                information about categories of personal information (if any) we
                disclosed to third parties for direct marketing purposes and the
                names and addresses of all third parties with which we shared
                personal information in the immediately preceding calendar year.
                If you are a California resident and would like to make such a
                request, please submit your request in writing to us using the
                contact information provided below.
              </p>
              <p className="mt-6 text-xl">
                If you are under 18 years of age, reside in California, and have
                a registered account with Services, you have the right to
                request removal of unwanted data that you publicly post on the
                Services. To request removal of such data, please contact us
                using the contact information provided below and include the
                email address associated with your account and a statement that
                you reside in California. We will make sure the data is not
                publicly displayed on the Services, but please be aware that the
                data may not be completely or comprehensively removed from all
                our systems (e.g., backups, etc.).
              </p>
            </div>
            {/* CCPA Privacy Notice */}
            <div>
              <h3 className="mt-6 text-2xl">CCPA Privacy Notice</h3>
              <p className="mt-6 text-xl">
                The California Code of Regulations defines a "resident" as:
              </p>
              <ul>
                <li className="pt-4 ml-12 list-disc">
                  (1) every individual who is in the State of California for
                  other than a temporary or transitory purpose and
                </li>
                <li className="pt-4 ml-12 list-disc">
                  (2) every individual who is domiciled in the State of
                  California who is outside the State of California for a
                  temporary or transitory purpose
                </li>
              </ul>
              <p className="mt-6 text-xl">
                All other individuals are defined as "non-residents."
              </p>
              <p className="mt-6 text-xl">
                If this definition of "resident" applies to you, we must adhere
                to certain rights and obligations regarding your personal
                information.
              </p>
              <p className="mt-6 text-xl">
                <strong>
                  What categories of personal information do we collect?
                </strong>
              </p>
              <p className="mt-6 text-xl">
                We have collected the following categories of personal
                information in the past twelve (12) months:
              </p>
              {/* Insert the table or list of collected personal information categories here */}
              <p className="mt-6 text-xl">
                <strong>
                  How do we use and share your personal information?
                </strong>
              </p>
              <p className="mt-6 text-xl">
                More information about our data collection and sharing practices
                can be found in this privacy notice.
              </p>
              <p className="mt-6 text-xl">
                You may contact us by email at brandon@wheel-rail-seminars.com,
                or by referring to the contact details at the bottom of this
                document.
              </p>
              <p className="mt-6 text-xl">
                If you are using an authorized agent to exercise your right to
                opt out we may deny a request if the authorized agent does not
                submit proof that they have been validly authorized to act on
                your behalf.
              </p>
              <p className="mt-6 text-xl">
                <strong>
                  Will your information be shared with anyone else?
                </strong>
              </p>
              <p className="mt-6 text-xl">
                We may disclose your personal information with our service
                providers pursuant to a written contract between us and each
                service provider. Each service provider is a for-profit entity
                that processes the information on our behalf, following the same
                strict privacy protection obligations mandated by the CCPA.
              </p>
              <p className="mt-6 text-xl">
                We may use your personal information for our own business
                purposes, such as for undertaking internal research for
                technological development and demonstration. This is not
                considered to be "selling" of your personal information.
              </p>
              <p className="mt-6 text-xl">
                Wheel Rail Seminars has not disclosed, sold, or shared any
                personal information to third parties for a business or
                commercial purpose in the preceding twelve (12) months. Wheel
                Rail Seminars will not sell or share personal information in the
                future belonging to website visitors, users, and other
                consumers.
              </p>
              <p className="mt-6 text-xl">
                <strong>Your rights with respect to your personal data</strong>
              </p>
              <ul>
                <li className="pt-4 ml-12 list-disc">
                  Right to be informed — Request to know
                </li>
                <li className="pt-4 ml-12 list-disc">
                  Right to Non-Discrimination for the Exercise of a Consumer’s
                  Privacy Rights
                </li>
                <li className="pt-4 ml-12 list-disc">
                  Right to Limit Use and Disclosure of Sensitive Personal
                  Information
                </li>
              </ul>
              {/* Insert additional rights and descriptions here */}
              <p className="mt-6 text-xl">Verification process</p>
              {/* Insert the verification process description here */}
              <p className="mt-6 text-xl">Other privacy rights</p>
              {/* Insert additional privacy rights and descriptions here */}
            </div>{' '}
            <p className="mt-6 text-xl">Verification process</p>
            <p className="mt-6 text-xl">
              Upon receiving your request, we will need to verify your identity
              to determine you are the same person about whom we have the
              information in our system. These verification efforts require us
              to ask you to provide information so that we can match it with
              information you have previously provided us. For instance,
              depending on the type of request you submit, we may ask you to
              provide certain information so that we can match the information
              you provide with the information we already have on file, or we
              may contact you through a communication method (e.g., phone or
              email) that you have previously provided to us. We may also use
              other verification methods as the circumstances dictate.
            </p>
            <p className="mt-6 text-xl">
              We will only use personal information provided in your request to
              verify your identity or authority to make the request. To the
              extent possible, we will avoid requesting additional information
              from you for the purposes of verification. However, if we cannot
              verify your identity from the information already maintained by
              us, we may request that you provide additional information for the
              purposes of verifying your identity and for security or
              fraud-prevention purposes. We will delete such additionally
              provided information as soon as we finish verifying you.
            </p>
            <p className="mt-6 text-xl">Other privacy rights</p>
            <ul>
              <li className="pt-4 ml-12 list-disc">
                You may object to the processing of your personal information.
              </li>
              <li className="pt-4 ml-12 list-disc">
                You may request correction of your personal data if it is
                incorrect or no longer relevant, or ask to restrict the
                processing of the information.
              </li>
              <li className="pt-4 ml-12 list-disc">
                You can designate an authorized agent to make a request under
                the CCPA on your behalf. We may deny a request from an
                authorized agent that does not submit proof that they have been
                validly authorized to act on your behalf in accordance with the
                CCPA.
              </li>
              <li className="pt-4 ml-12 list-disc">
                You may request to opt out from future selling or sharing of
                your personal information to third parties. Upon receiving an
                opt-out request, we will act upon the request as soon as
                feasibly possible, but no later than fifteen (15) days from the
                date of the request submission.
              </li>
            </ul>
            <p className="mt-6 text-xl">
              To exercise these rights, you can contact us by email at
              brandon@wheel-rail-seminars.com, or by referring to the contact
              details at the bottom of this document. If you have a complaint
              about how we handle your data, we would like to hear from you.
            </p>
            {/* Section 11 */}
            <div>
              <h3 className="mt-6 text-2xl">
                11. DO WE MAKE UPDATES TO THIS NOTICE?
              </h3>
              <p className="mt-6 text-xl">
                <strong>In short:</strong> Yes, we will update this notice as
                necessary to stay compliant with relevant laws.
              </p>
            </div>
            {/* Section 12 */}
            <div>
              <h3 className="mt-6 text-2xl">
                12. HOW CAN YOU CONTACT US ABOUT THIS NOTICE?
              </h3>
              <p className="mt-6 text-xl">
                If you have questions or comments about this notice, you may
                email us at brandon@wheel-rail-seminars.com or by post to:
              </p>
              <p className="mt-6 text-xl">
                Wheel Rail Seminars
                <br />
                507 Latania Palm Drive
                <br />
                Indialantic, FL 32903 USA
              </p>
            </div>
            {/* Section 13 */}
            <div>
              <h3 className="mt-6 text-2xl">
                13. HOW CAN YOU REVIEW, UPDATE, OR DELETE THE DATA WE COLLECT
                FROM YOU?
              </h3>
              <p className="mt-6 text-xl">
                Based on the applicable laws of your country, you may have the
                right to request access to the personal information we collect
                from you, change that information, or delete it. To request to
                review, update, or delete your personal information, please
                contact us at brandon@wheel-rail-seminars.com.
              </p>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

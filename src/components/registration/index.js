import React, { useState, useEffect } from 'react';
import PricingEmployeeIndividual from '@/components/pricing-employee-individual/index-earlybird';
import PricingEmployeeMulti from '@/components/pricing-employee-multi/index-earlybird';
import PricingProfessionalIndividual from '@/components/pricing-professional-individual/index-earlybird';
import PricingProfessionalMulti from '@/components/pricing-professional-multi/index-earlybird';
import PricingVirtualIndividual from '@/components/pricing-virtual-individual';
import PricingVirtualMulti from '@/components/pricing-virtual-multi';
import PricingStudentIndividual from '@/components/pricing-student-individual';
import PricingStudentMulti from '@/components/pricing-student-multi';
import RegisterButton from '@/components/buttons/register-button';
import StudentRegisterButton from '@/components/buttons/student-register-button';

const useCountdown = targetDate => {
  const countDownDate = new Date(targetDate).getTime();

  // Initialize with null values to match server render
  const [countDown, setCountDown] = useState({
    days: null,
    hours: null,
    minutes: null,
    seconds: null,
  });

  useEffect(() => {
    // Update the countdown immediately on mount and then set interval
    const updateCountdown = () => {
      const now = new Date().getTime();
      const distance = countDownDate - now;

      // Update state with calculated time values
      setCountDown({
        days: Math.floor(distance / (1000 * 60 * 60 * 24)),
        hours: Math.floor((distance / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((distance / 1000 / 60) % 60),
        seconds: Math.floor((distance / 1000) % 60),
      });
    };

    updateCountdown(); // Initial update
    const interval = setInterval(updateCountdown, 1000);

    return () => clearInterval(interval);
  }, [countDownDate]);

  return countDown;
};

const RegistrationComp = () => {
  const { days, hours, minutes, seconds } = useCountdown('2026-04-22T00:00:00');

  return (
    <section className="py-12 register-now">
      <h2 className="px-4 text-5xl font-normal leading-normal text-center pb-11">
        <b>Register for WRI 2026 Heavy Haul Now!</b>
      </h2>
      <h2 className="px-4 text-5xl font-normal leading-normal text-center pb-11">
        <b>Take advantage of Early Bird pricing!</b>
      </h2>
      <div className="row">
        <div className="container" id="register">
          <ul className="flex flex-wrap justify-center pb-16">
            <li>
              <h3>{days}</h3>
              <span>Days</span>
            </li>
            <li>
              <h3>{hours}</h3>
              <span>Hours</span>
            </li>
            <li>
              <h3>{minutes}</h3>
              <span>Minutes</span>
            </li>
            <li>
              <h3>{seconds}</h3>
              <span>Seconds</span>
            </li>
          </ul>
          <div className="grid grid-cols-1 gap-4 md:grid-cols-1 xl:grid-cols-2">
            {/* Employee Column */}
            <div className="flex flex-col px-4 mb-4">
              <div className="px-0 lg:px-12">
                <h3 className="mb-8 text-4xl font-bold text-center text-white">
                  Employee Registration
                </h3>
                <p className="pb-4 mb-6 text-white">
                  Employee Pricing is designed for direct, full-time employees
                  of qualifying railroads, transit agencies, and government
                  agencies. (You must be paid directly from a railroad, transit
                  agency, or government agency and receive a W-2 or similar). No
                  contractors are eligible for Employee Pricing.
                </p>
                <p className="mb-10 text-white">
                  Employees registering for more than one event will receive
                  special Multi-Event Discounts.
                </p>
              </div>
              <div className="mt-auto">
                <PricingEmployeeIndividual />
                <PricingEmployeeMulti />
              </div>
            </div>

            {/* Professional Column */}
            <div className="flex flex-col px-4 mt-8 mb-4 lg:mt-0">
              <div className="px-0 lg:px-12">
                <h3 className="mb-8 text-4xl font-bold text-center text-white">
                  Professional Registration
                </h3>
                <p className="pb-4 mb-6 text-white">
                  Professional Pricing is for suppliers, contractors,
                  consultants, and others who are not an employee of a railroad,
                  transit agency, or government agency.
                </p>
                <p className="mb-10 text-white">
                  Professionals registering for more than one event will receive
                  special Multi-Event Discounts.
                </p>
              </div>
              <div className="mt-auto">
                <PricingProfessionalIndividual />
                <PricingProfessionalMulti />
              </div>
            </div>
          </div>

          {/* Centered Register Button below both columns */}
          <div className="mt-12 text-center">
            <RegisterButton />
          </div>

          {/* Virtual Section - TEMPORARILY HIDDEN */}
          {/* <div className="grid grid-cols-1 gap-4 mt-8 md:grid-cols-1 xl:grid-cols-2">
            <div className="flex flex-col justify-between h-full px-4 mb-4">
              <div className="px-0 lg:px-12">
                <h3 className="mb-8 text-4xl font-bold text-center text-white">
                  Virtual Option
                </h3>
                <p className="pb-4 mb-6 text-center text-white">
                  All attendees are eligible for the following virtual pricing.
                </p>
                <p className="mb-10 text-center text-white">
                  Attendees registering for more than one event will receive special Multi-Event Discounts.
                </p>
              </div>
              <div>
                <div className="mb-4">
                  <PricingVirtualIndividual />
                </div>
                <PricingVirtualMulti />
              </div>
            </div>
          </div> */}

          {/* Student Section - Centered */}
          <div className="flex justify-center mt-8">
            <div className="flex flex-col justify-between w-full h-full px-4 mb-4 xl:w-1/2">
              <div className="px-0 lg:px-12">
                <h3 className="mb-8 text-4xl font-bold text-center text-white">
                  Student Registration
                </h3>
                <p className="pb-4 mt-6 mb-6 text-center text-white">
                  Student Pricing is available exclusively through the Student Registration button below.
                </p>
              </div>
              <div>
                <div className="mb-4">
                  <PricingStudentIndividual />
                </div>
                <PricingStudentMulti />
              </div>
            </div>
          </div>

          {/* Student Registration Button only */}
          <div className="mt-12 mb-12 text-center">
            <StudentRegisterButton />
          </div>
        </div>
      </div>
    </section>
  );
};

export default RegistrationComp;
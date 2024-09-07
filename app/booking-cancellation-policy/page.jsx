import Footer from "@/components/Footer";
import Testimonials from "@/components/Testimonials";
import React from "react";

const page = () => {
  return (
    <div className="mt-20">
      <div className="grid place-items-center">
        <div className="bg-white p-6  container">
          <h2 className="text-3xl font-bold mb-8 text-center">Check-in / Check-out Policy:</h2>
          {/* <h3 className="text-xl font-bold mb-2">1. Scope of Services</h3> */}
          {/* <ul className="list-disc pl-6 mb-4">
            <li>AVENA Properties</li>
          </ul> */}

          {/* <ol className="list-decimal pl-6 mb-4">
            <li>
              In case Guests are not able to select the properties from our website, you can call our support desk and our team will help you find a suitable accommodation within your preferred budget
              and amenities.
            </li> */}

          <ol className="list-decimal pl-6 mb-4">
            <li>The primary guest must be at least 18 years of age to be able to check into the AVENA.</li>
            <li>The usual standard check-in time is 12 p.m. and check-out time is 11 a.m. AVENA tries to ensure that you can check-in any time after that till your reservation is valid.</li>
            <li>
              It is mandatory for all guests to present valid photo identification at the time of check-in. According to government regulations, a valid Photo ID has to be carried by every person
              above the age of 18 staying at the Property. The identification proofs accepted are Aadhar Card, Driving License, Voter ID Card, and Passport. Note that PAN card is not acceptable.
              Without an original copy of a valid ID, you will not be allowed to check-in.
            </li>
            <li>
              After reaching the Property, if you face any difficulty in check-in and it cannot be resolved by the Property supervisor, you are requested to contact AVENA immediately. AVENA will
              verify the issue with the Property and post verification, you would be provided the following assistance:
            </li>
            <ol className="list-none pl-6 mb-4">
              <li>a. AVENA will try to arrange for accommodation in the nearby location</li>
              <li>b. AVENA will try to provide you with alternate accommodation in its other listed properties if the same is available.</li>
              <li>c. If AVENA is unable to provide alternative accommodation or you do not accept such alternate accommodation, you may be offered full refund.</li>
              <li>d. AVENA will not be liable for compensation beyond your booking payment.</li>
            </ol>
            <li>
              Unless specifically intimated, AVENA shall not be held liable to refund the booking amount or any part thereof in case of unavailability of rooms due to natural disaster (earthquake,
              landslide etc.), terrorist activity, government guidelines or any force majeure act, beyond the control of AVENA.
            </li>
          </ol>

          <h3 className="text-xl font-bold mb-2">Early Check-in and Late Check-out:</h3>
          <p className="mb-4">
            1. Early Check-In: The standard check-in time in Properties is 12 noon unless mentioned otherwise in your Booking voucher. Early check-in is subject to availability and Extra charges will
            usually apply
          </p>

          <p className="mb-4">
            2. Late Check-out: The standard check-out time in Properties is 11 AM unless mentioned otherwise in your Booking voucher. Late check-out is subject to availability and cannot be confirmed
            with the Property in advance. Extra charges will usually apply.
          </p>

          <h3 className="text-xl font-bold mb-2"> Booking Extension Policy:</h3>

          <p className="mb-4">Any extension of stay at the Property is subject to availability of the rooms at the current ongoing rate and not at the rate at which the original booking was made.</p>

          <h3 className="text-xl font-bold mb-2"> Cancellation and Refund Policy:</h3>

          <ol className="list-decimal pl-6 mb-4">
            <li>You can cancel your booking using the AVENA website or mobile app.</li>
            <li>The applicable refund amount will be credited to you within 7-14 working days.</li>
            <li>
              Some Avena properties do not accept bookings from unmarried couples, do not accept local id proofs. This information is available to the Guest prior to making the booking. For any
              cancellations or check-in denial associated with such bookings that are dishonoured by the Properties, AVENA shall be under no obligation to refund any amount to the Guest.
            </li>
            <li>
              Properties reserve the right to deny check-in where customers are unable to provide a valid government id or if the Property is suspicious of the Guests check-in at it’s Property. Under
              all such cases AVENA shall be under no obligation to refund any amount to the Guest.
            </li>
            <li>
              Unless specifically intimated, AVENA shall not be held liable to refund the booking amount or any part thereof in case of unavailability of rooms due to natural disaster (earthquake,
              landslide etc.), terrorist activity, government guidelines or any force majeure act, beyond the control of AVENA.
            </li>
            <li>
              Any balance payment should be cleared at the time of arrival in the Property. If guest could not clear balance payment (due to any reason) within 1 hour from check in time, bookings of
              such guest will be cancelled and they will be asked to leave Property immediately.
            </li>
          </ol>

          <h3 className="text-xl font-bold mb-2"> Long Stay Bookings </h3>

          <p className="mb-4">
            For bookings of more than 7 nights, you have to settle all outstanding payments on a weekly basis. Further accommodation is subject to settlement of the outstanding amount.
          </p>

          <h3 className="text-xl font-bold mb-2">Visitors Policy</h3>

          <ol className="list-decimal pl-6 mb-4">
            <li>You should check with the Property for its Visitor Policy.</li>
            <li>In order to maintain privacy of guests and the placidity of the Property, AVENA encourages its Property Partners to have a visitor policy where:</li>
          </ol>

          <ol className="list-none pl-6 mb-4">
            <li>a. Visitors are generally allowed to meet guests during the day, except if there is an emergency.</li>
            <li>b. Visitors are not to be allowed to stay overnight.</li>
            <li>c. The Property front desk requires all visitors to present a government approved photo identity prior to accessing guest floors/rooms.</li>
          </ol>

          <h3 className="text-xl font-bold mb-2">Code of Conduct:</h3>

          <ol className="list-decimal pl-6 mb-4">
            <li>Illegal activities are not permitted in any AVENA property.</li>
            <li>You should be aware that the AVENA may refuse service or evict you</li>
            <ol className="list-none pl-6 mb-4">
              <li>a) For refusal or failure to pay for accommodation,</li>
              <li>b) If you act in a disorderly fashion as to disturb the peace of other guests, </li>
              <li>c) If you destroy, damage, deface or threaten harm to AVENA property or guests, d) Any of your actions are deemed inappropriate by the AVENA.</li>
            </ol>
            <li>Please keep the AVENA room in a good condition and maintain hygiene and cleanliness. You may be held liable for any damage to AVENA assets (except normal wear and tear). </li>
            <li>
              When you check into a AVENA, you agree to abide by their guest policies, which are designed to ensure a safe, comfortable, and enjoyable stay for all guests. However, failing to follow
              these rules can result in serious consequences
            </li>
          </ol>

          <h3 className="text-xl font-bold mb-2">Alcohol, Drugs, Prostitution and Human Trafficking</h3>

          <ol className="list-decimal pl-6 mb-4">
            <li>
              Anyone found using or under the influence of illegal drugs or substances classified under the Narcotic Drugs and Psychotropic Substances Act, 1985 will be reported to the officers of the
              law and asked to leave the AVENA. Any evidence or suspicion of drug use at the AVENA will also be reported immediately to the police.
            </li>
            <li>
              Anyone found in the actions of Human Trafficking and Prostitution will be legally guided by the law of Immoral Traffic (Prevention) Act. They will be reported to the officers of the law
              and asked to leave the AVENA.
            </li>
            <li>
              Drinking alcohol is prohibited in all public areas including; in the AVENA’s lobby, hallways, and parking areas of AVENA. Please contact the AVENA City Manager regarding consumption of
              alcoholic beverages within your room, without disturbing the discipline of the AVENA or other guests.
            </li>
          </ol>

          <h3 className="text-xl font-bold mb-2">Beware of Fraud:</h3>

          <ol className="list-decimal pl-6 mb-4">
            <li>
              AVENA does not authorise any of its employees, consultants, third-party vendors, associates to collect payment in any other form other than payments from secure AVENA gateway and its
              affiliated OTA payment gateway links.
            </li>
            <li>
              Any instances where collection of payment is attempted from any unauthorized payment gateways other than the ones mentioned above are acts of fraud. Encountering and acting on the same
              is solely on your own accord and discretion. AVENA will not be responsible for any loss/liability arising out of such an event.
            </li>
          </ol>

          <h3 className="text-xl font-bold mb-2">Contact AVENA</h3>

          <p className="mb-4">
            While AVENA works with our Property Partners to enable a comfortable stay, we recognise that you may have some concerns. If they are not addressed by the Property during your stay at the
            Property, you may escalate the same to AVENA. No complaint would be entertained post check out. For any assistance from AVENA, please contact{" "}
            <span className="text-blue-600 underline"> onboarding@avena.co.in </span>
          </p>
          <h3 className="text-xl font-bold mb-2">Grievances</h3>

          <p className="mb-4">For any grievances: Phone : +91 8069645244</p>
        </div>
      </div>
      <Testimonials />
      <Footer />
    </div>
  );
};

export default page;

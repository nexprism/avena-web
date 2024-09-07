"use client";

import React, { useCallback, useState } from "react";

import { Label } from "@/components/ui/label";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { Card, CardContent } from "@/components/ui/card";
import Image from "next/image";
import { capitalizeFirstLetter, formateDate, formatPrice } from "@/lib/utils";
import { Badge } from "@/components/ui/badge";

// Display component for form fields
function DisplayField({ label, value, className = "" }) {
  return (
    <div className="flex flex-col gap-2">
      <Label>{label}</Label>
      <div className={`bg-[#E4E4E4] p-4 rounded ${className}`}>{value?.toString()}</div>
    </div>
  );
}

export function ViewBooking({ bookingId, base_url }) {
  const [booking, setBooking] = useState({});

  const fetchData = useCallback(async () => {
    try {
      const url = `${base_url}/api/v1/booking/${bookingId}`;
      const response = await fetch(url);
      const data = await response.json();
      setBooking(data.data);
    } catch (error) {}
  }, [bookingId, base_url]);

  React.useEffect(() => {
    fetchData();
  }, [fetchData]);

  return (
    <div className="h-full p-2 lg:p-4 xl:p-8 mt-16 grid place-items-center ">
      <div className="flex items-center gap-2">
        <div className="text-2xl font-bold flex">Booking Details</div>
        {booking.status === "pending" ? (
          <Badge variant="outline" className="w-fit text-yellow-500">
            {capitalizeFirstLetter(booking.status)}
          </Badge>
        ) : booking.status === "cancelled" ? (
          <Badge variant="outline" className="w-fit text-red-900">
            {capitalizeFirstLetter(booking.status)}
          </Badge>
        ) : booking.status === "accepted" ? (
          <Badge variant="outline" className="w-fit text-green-500">
            {capitalizeFirstLetter(booking.status)}
          </Badge>
        ) : null}
      </div>
      <div className="mt-8 container">
        <div className="grid grid-cols-1 gap-2 lg:grid-cols-2 lg:gap-4 xl:grid-cols-3 xl:gap-4">
          <div className="flex flex-col gap-2">
            <DisplayField className="" label="Guest Name" value={booking?.name} />
            <DisplayField className="" label="Contact" value={booking?.contact} />
          </div>

          <div className="flex flex-col gap-2">
            <DisplayField className="" label="Email" value={booking?.email} />
            <DisplayField className="" label="City" value={booking?.city || "N/A"} />
          </div>

          <div className="flex flex-col gap-2">
            <DisplayField className="" label="Check In" value={formateDate(booking?.checkin)} />
            <DisplayField className="" label="Check Out" value={formateDate(booking?.checkout)} />
          </div>

          <div className="flex flex-col gap-2 ">
            <DisplayField className="" label="No. of Guests" value={booking?.guests} />
            <DisplayField className="" label="Total Amount Paid" value={formatPrice(booking?.amount)} />
          </div>

          <div className="flex flex-col gap-2 ">
            <DisplayField className="" label="Property Owner Name" value={booking?.vendor?.firstName + " " + booking?.vendor?.lastName} />
            <DisplayField className="" label="Property Name" value={booking?.property?.propertyName} />
          </div>

          <DisplayField label="Notes" value={booking?.notes || "NA"} className="h-[142px]" />
          <DisplayField label="Property Address" value={booking?.property?.propertyAddress || "NA"} className="h-[142px]" />
          {booking?.disapproveReason && <DisplayField label="Cancel Reason" value={booking?.disapproveReason || "NA"} className="h-[142px]" />}
        </div>

        <div className=" py-2">
          <span className="font-bold mr-4">Type of ID</span>
          <span className="">
            {booking?.typeOfId === "dl"
              ? "Driving Licence"
              : booking?.typeOfId === "adhar"
              ? "Adhar Card"
              : booking?.typeOfId === "pan"
              ? "PAN Card"
              : booking?.typeOfId === "passport"
              ? "Passport"
              : ""}
          </span>
        </div>

        <div className="grid col-span-1 gap-2 md:grid-cols-2 md:gap-4 xl:grid-cols-3 xl:gap-6 2xl:grid-cols-4 2xl:gap-8 mt-8">
          {[1, 2].map((num) => {
            const imageSrc = num === 1 ? `/uploads/${booking?.image1}` : `/uploads/${booking?.image2}`; // Use a default image if none available
            const label = num === 1 ? "Front Picture" : "Back Picture";

            return (
              <div key={num} className="flex flex-col gap-2">
                <Carousel className="w-64 h-40 rounded-lg">
                  <CarouselContent className="">
                    <CarouselItem className="">
                      <div className="p-1">
                        <Card className="">
                          <CardContent className="flex h-40 items-center justify-center p-6 rounded-lg">
                            <Image alt={`Property image ${label}`} src={imageSrc} width={208} height={92} priority={true} className="rounded-lg" />
                          </CardContent>
                        </Card>
                      </div>
                    </CarouselItem>
                  </CarouselContent>
                  <CarouselPrevious />
                  <CarouselNext />
                </Carousel>
                <div className="p-1">{label}</div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

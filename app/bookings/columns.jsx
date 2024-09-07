"use client";


import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";
import { capitalizeFirstLetter, formateDate } from "@/lib/utils";
import { Eye, MoreHorizontal, Phone } from "lucide-react";
import { useRouter } from "next/navigation";

const ActionsCell = ({ row }) => {
  const router = useRouter();

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" className="h-8 w-8 p-0">
          <span className="sr-only">Open menu</span>
          <MoreHorizontal className="h-4 w-4" />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        <DropdownMenuLabel>Actions</DropdownMenuLabel>

        <DropdownMenuItem
          onClick={() => {
            router.push(`/bookings/detail/${row.original._id}`);
          }}
        >
          <Eye className="w-4 h-4 mr-2" /> View Booking Detail
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export const columns = [
  {
    header: "Guest Name",
    cell: ({ row }) => {
      const vendor = row.original;
      return (
        <div className="flex gap-8 min-w-56">
          <div className="min-w-16 min-h-16 max-w-16 max-h-16 bg-[#C4C4C4] rounded-3xl"></div>
          <div className="flex flex-col gap-1 xl:gap-2">
            <div className="flex-col gap-2">
              {/* <div className="text-[#5D0E41] text-sm">#EMP-00025</div> */}
              <div className="font-bold text-base">{`${vendor?.name} `}</div>
            </div>
            <div className="text-xs">Join on {formateDate(vendor.createdAt)}</div>
          </div>
        </div>
      );
    },
  },
  {
    header: "Property",
    cell: ({ row }) => {
      const vendor = row.original;
      return <div className="w-48">{vendor.property?.propertyName}</div>;
    },
  },

  {
    accessorKey: "email",
    header: "Email",
  },

  {
    accessorKey: "checkin",
    header: "CheckIn",
    cell: ({ row }) => {
      const data = row.original;
      return <div className="flex gap-2 items-start min-w-28 ">{formateDate(data.checkin)}</div>;
    },
  },
  {
    accessorKey: "checkout",
    header: "checkOut",
    cell: ({ row }) => {
      const data = row.original;
      return <div className="flex gap-2 items-start min-w-28 ">{formateDate(data.checkout)}</div>;
    },
  },

  {
    header: "Contact",
    cell: ({ row }) => {
      const vendor = row.original;
      return (
        <div className="flex items-center gap-2">
          <Phone className="h-4 w-4 text-blue-700" />
          {vendor.contact}
        </div>
      );
    },
  },
  {
    header: "Status ",
    cell: ({ row }) => {
      const data = row.original;
      return (
        <div className="flex flex-col gap-2 items-start min-w-32">
          {data.status === "pending" ? (
            <Badge variant="outline" className="w-fit text-yellow-500">
              {capitalizeFirstLetter(data.status)}
            </Badge>
          ) : data.status === "cancelled" ? (
            <Badge variant="outline" className="w-fit text-red-900">
              {capitalizeFirstLetter(data.status)}
            </Badge>
          ) : data.status === "accepted" ? (
            <Badge variant="outline" className="w-fit text-green-500">
              {capitalizeFirstLetter(data.status)}
            </Badge>
          ) : null}
        </div>
      );
    },
  },
  {
    id: "actions",
    cell: ActionsCell,
  },
];

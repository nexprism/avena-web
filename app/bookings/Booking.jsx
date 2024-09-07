"use client";
import React from "react";
import { columns } from "./columns";
import { DataTable } from "@/components/ui/data-table";

const Booking = ({ user, base_url }) => {
  const [loading, setLoading] = React.useState(true);
  const [data, setData] = React.useState([]);

  const fetchData = React.useCallback(async () => {
    try {
      const url = `${base_url}/api/v1/booking-web?email=${user.email}`;
      const response = await fetch(url);
      const data = await response.json();
      console.log(data);
      setData(data.data);
      setLoading(false);
    } catch (error) {}
  }, [user.email, base_url]);

  React.useEffect(() => {
    fetchData();
  }, [fetchData]);

  return (
    <div className="p-4 grid place-items-center">
      <div className="mt-16 container">
        <DataTable columns={columns} data={data} loading={loading} />
      </div>
    </div>
  );
};
export default Booking;

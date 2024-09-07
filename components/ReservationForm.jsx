import { useState } from "react";
import { FormControl, InputLabel, MenuItem, Select } from "@mui/material";
import { DatePicker, Space } from "antd";

const { RangePicker } = DatePicker;

const ReservationForm = () => {
  // const [rooms, setRooms] = useState("");
  const [guests, setGuests] = useState("");

  // const handleRoomsChange = (event) => {
  //   setRooms(event.target.value);
  // };

  const handleGuestsChange = (event) => {
    setGuests(event.target.value);
  };

  return (
    <div className="lg:flex flex-col items-center text-center min-w-[290px] max-w-[360px] min-h-[200px] px-[27px] max-h-[500px] bg-white border-2 border-opacity-10 border-black rounded-md shadow-xl">
      <h4 className="font-primaryMedium uppercase text-lg mb-8 mt-2">Your Reservation</h4>
      <Space direction="vertical" className="w-full flex justify-center items-center space-y-4">
        <Space size={8} className=" space-x-2">
          <RangePicker placeholder={["Check-in", "Check-out"]} className="w-full h-14 border-[1.5px] border-black border-opacity-25 rounded" />
        </Space>
      </Space>

      <div className="w-full mt-5 px-[2px]">
        {/* <FormControl sx={{ minWidth: 120, width: "100%", marginBottom: "20px" }}>
          <InputLabel id="rooms-select-label">Rooms</InputLabel>
          <Select labelId="rooms-select-label" value={rooms} label="Rooms" onChange={handleRoomsChange}>
            <MenuItem value="">
              <em>None</em>
            </MenuItem>
            <MenuItem value={1}>1</MenuItem>
            <MenuItem value={2}>2</MenuItem>
            <MenuItem value={3}>3</MenuItem>
            <MenuItem value={4}>4</MenuItem>
          </Select>
        </FormControl> */}

        <FormControl sx={{ minWidth: 120, width: "100%", marginBottom: "20px" }}>
          <InputLabel id="guests-select-label">Guests</InputLabel>
          <Select labelId="guests-select-label" value={guests} label="Guests" onChange={handleGuestsChange} defaultValue="1">
            <MenuItem value={1}>1</MenuItem>
            <MenuItem value={2}>2</MenuItem>
            <MenuItem value={3}>3</MenuItem>
            <MenuItem value={4}>4</MenuItem>
            <MenuItem value={5}>5</MenuItem>
          </Select>
        </FormControl>
      </div>
    </div>
  );
};

export default ReservationForm;

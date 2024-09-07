import HomeSlider from "../Components/HomeSlider";
import LocationCarousal from "../Components/LocationCarousal";
import WhychooseUs from "../Components/WhychooseUs";
import AboutUS from "../Components/AboutUS";
import Testimonials from "../Components/Testimonials";
import Footer from "../Components/Footer";
import CateSlider from "./CateSlider";

const Homepage = () => {
  const data = [
    {
      id: 1,
      img: [
        "https://images.unsplash.com/photo-1549638441-b787d2e11f14?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        "https://plus.unsplash.com/premium_photo-1675616563084-63d1f129623d?q=80&w=2069&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        "https://images.unsplash.com/photo-1515510621228-30de609bbd60?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        "https://images.unsplash.com/photo-1549638441-b787d2e11f14?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        "https://plus.unsplash.com/premium_photo-1675616563084-63d1f129623d?q=80&w=2069&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        "https://images.unsplash.com/photo-1515510621228-30de609bbd60?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      ],
      location: "Goa",
      para: "Starting from ₹2243",
      description:
        "helloooo Lorem ipsum dolor sit, amet consectetur adipisicing elit. Magnam nihil neque earum tempora minus ab ipsam, magni veniam eaque nam eius atque accusantium officia deleniti veritatis vitae voluptatem explicabo. Laborum voluptas fuga doloremque ipsam voluptatem ut iste excepturi expedita repudiandae omnis! Qui, corrupti repellat? Vitae, repudiandae. Rerum eum eos magni itaque doloremque autem voluptatibus architecto explicabo ut pariatur maxime inventore laboriosam porro illo adipisci, ipsa nostrum, nobis expedita incidunt sit tempore dignissimos nulla illum vero. Dicta asperiores exercitationem necessitatibus qui, iusto modi tempora at impedit nulla, odio quaerat nisi sint ullam dolore porro facilis? Pariatur fugit atque voluptates odit illum, a voluptas quae cum vel aspernatur sunt animi, ratione sed deserunt magni illo saepe. Ducimus aliquid, earum dolorum soluta animi velit quas maxime autem nam repudiandae? Maiores neque eius, non perferendis, voluptas consequatur maxime sapiente repudiandae ad ut labore enim adipisci accusamus animi. Rerum atque ab enim, rem facere nihil. Fugiat eum ipsum voluptate!",
      name: "Santorini ",
      location1: "Santorini",
      guests: "6",
      room: "3",
      baths: "2",
      oldprice: "12,000",
      newprice: "10,500",
    },
    {
      id: 2,
      img: [
        "https://images.unsplash.com/photo-1549638441-b787d2e11f14?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        "https://plus.unsplash.com/premium_photo-1675616563084-63d1f129623d?q=80&w=2069&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        "https://images.unsplash.com/photo-1515510621228-30de609bbd60?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        "https://images.unsplash.com/photo-1549638441-b787d2e11f14?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        "https://plus.unsplash.com/premium_photo-1675616563084-63d1f129623d?q=80&w=2069&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        "https://images.unsplash.com/photo-1515510621228-30de609bbd60?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      ],
      location: "Mumbai",
      para: "Starting from ₹2540",
      description:
        " bhaggg    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Magnam nihil neque earum tempora minus ab ipsam, magni veniam eaque nam eius atque accusantium officia deleniti veritatis vitae voluptatem explicabo. Laborum voluptas fuga doloremque ipsam voluptatem ut iste excepturi expedita repudiandae omnis! Qui, corrupti repellat? Vitae, repudiandae. Rerum eum eos magni itaque doloremque autem voluptatibus architecto explicabo ut pariatur maxime inventore laboriosam porro illo adipisci, ipsa nostrum, nobis expedita incidunt sit tempore dignissimos nulla illum vero. Dicta asperiores exercitationem necessitatibus qui, iusto modi tempora at impedit nulla, odio quaerat nisi sint ullam dolore porro facilis? Pariatur fugit atque voluptates odit illum, a voluptas quae cum vel aspernatur sunt animi, ratione sed deserunt magni illo saepe. Ducimus aliquid, earum dolorum soluta animi velit quas maxime autem nam repudiandae? Maiores neque eius, non perferendis, voluptas consequatur maxime sapiente repudiandae ad ut labore enim adipisci accusamus animi. Rerum atque ab enim, rem facere nihil. Fugiat eum ipsum voluptate blanditiis illo doloribus odit fuga placeat corrupti! Optio porro aspernatur ab iusto saepe tempore, delectus tenetur eveniet aliquam iur",
      name: "Escape",
      location1: "Santorini",
      guests: "6",
      room: "3",
      baths: "2",
      oldprice: "12,000",
      newprice: "10,500",
    },
    {
      id: 3,
      img: [
        "https://images.unsplash.com/photo-1549638441-b787d2e11f14?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        "https://plus.unsplash.com/premium_photo-1675616563084-63d1f129623d?q=80&w=2069&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        "https://images.unsplash.com/photo-1515510621228-30de609bbd60?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        "https://images.unsplash.com/photo-1549638441-b787d2e11f14?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        "https://plus.unsplash.com/premium_photo-1675616563084-63d1f129623d?q=80&w=2069&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        "https://images.unsplash.com/photo-1515510621228-30de609bbd60?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      ],
      location: "Mumbai",
      para: "Starting from ₹2540",
      description:
        "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Magnam nihil neque earum tempora minus ab ipsam, magni veniam eaque nam eius atque accusantium officia deleniti veritatis vitae voluptatem explicabo. Laborum voluptas fuga doloremque ipsam voluptatem ut iste excepturi expedita repudiandae omnis! Qui, corrupti repellat? Vitae, repudiandae. Rerum eum eos magni itaque doloremque autem voluptatibus architecto explicabo ut pariatur maxime inventore laboriosam porro illo adipisci, ipsa nostrum, nobis expedita incatur inventore similique molestias enim corporis, unde vel et illo officia! Praesentium ea, aliquid doloremque laudantium provident velit voluptas dolor quos commodi modi odit atque quisquam accusantium dolore tempore earum culpa inventore harum quia. Adipisci cumque dignissimos perferendis nostrum porro! Doloribus quisquam adipisci dicta quia! Animi inventore alias, ipsum, id iusto assumenda voluptatem quisquam quod voluptate accusantium officia? Id est quae adipisci quam sit hic animi voluptate dicta accusantium! Adipisci quod officiis ut fugit!",
      name: "Landmark",
      location1: "Santorini",
      guests: "6",
      room: "3",
      baths: "2",
      oldprice: "12,000",
      newprice: "10,500",
    },
    {
      id: 4,
      img: [
        "https://images.unsplash.com/photo-1549638441-b787d2e11f14?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        "https://plus.unsplash.com/premium_photo-1675616563084-63d1f129623d?q=80&w=2069&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        "https://images.unsplash.com/photo-1515510621228-30de609bbd60?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        "https://images.unsplash.com/photo-1549638441-b787d2e11f14?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        "https://plus.unsplash.com/premium_photo-1675616563084-63d1f129623d?q=80&w=2069&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        "https://images.unsplash.com/photo-1515510621228-30de609bbd60?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      ],
      location: "Mumbai",
      para: "Starting from ₹2540",
      description:
        "Lorem ipsum dolor sit, aihil. Fugiat eum ipsum voluptate blanditiis illo doloribus odit fuga placeat corrupti! Optio porro aspernatur ab iusto saepe tempore, delectus tenetur eveniet aliquam iure aut ullam totam quo voluptatibus! Dicta, beatae itaque hic animi recusandae ipsum magni odit fugiat eius voluptates qui non corrupti autem eum, temporibus eaque dolore? Quia beatae modi, magnam nisi voluptas nobis reiciendis enim fugit. Eaque ipsum voluptas fugiat blanditiis consequatur odio ex hic necessitatibus minima officiis doloremque pariatur magnam debitis, minus natus aspernatur inventore similique molestias enim corporis, unde vel et illo officia! Praesentium ea, aliquid doloremque laudantium provident velit voluptas dolor quos commodi modi odit atque quisquam accusantium dolore tempore earum culpa inventore harum quia. Adipisci cumque dignissimos perferendis nostrum porro! Doloribus quisquam adipisci dicta quia! Animi inventore alias, ipsum, id iusto assumenda voluptatem quisquam quod voluptate accusantium officia? Id est quae adipisci quam sit hic animi voluptate dicta accusantium! Adipisci quod officiis ut fugit!",
      name: "Radission",
      location1: "Santorini",
      guests: "6",
      room: "3",
      baths: "2",
      oldprice: "12,000",
      newprice: "10,500",
    },
    {
      id: "66d5e8706632817dde0ab622",
      img: [
        "https://images.unsplash.com/photo-1549638441-b787d2e11f14?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        "https://plus.unsplash.com/premium_photo-1675616563084-63d1f129623d?q=80&w=2069&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        "https://images.unsplash.com/photo-1515510621228-30de609bbd60?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        "https://images.unsplash.com/photo-1549638441-b787d2e11f14?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        "https://plus.unsplash.com/premium_photo-1675616563084-63d1f129623d?q=80&w=2069&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        "https://images.unsplash.com/photo-1515510621228-30de609bbd60?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      ],
      location: "Lonavala",
      para: "Starting from ₹6754",
      description:
        "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Magnam nihil neque earum tempora minus ab ipsam, magni veniam eaque nam eius atque accusantium officia deleniti veritatis vitae voluptatem explicabo. Laborum voluptas fuga doloremque ipsam voluptatem ut iste excepturi expedita repudiandae omnis! Qui, corrupti repellat? Vitae, repudiandae. Rerum eum eos magni itaque doloremque autem voluptatibus architecto explicabo ut pariatur maxime inventore laboriosam porro illo adipisci, ipsa nostrum, nobis expedita incidunt sit tempore dignissimos nuore earum culpa inventore harum quia. Adipisci cumque dignissimos perferendis nostrum porro! Doloribus quisquam adipisci dicta quia! Animi inventore alias, ipsum, id iusto assumenda voluptatem quisquam quod voluptate accusantium officia? Id est quae adipisci quam sit hic animi voluptate dicta accusantium! Adipisci quod officiis ut fugit!",
      name: "OKbook",
      location1: "Santorini",
      guests: "6",
      room: "3",
      baths: "2",
      oldprice: "12,000",
      newprice: "10,500",
    },
    {
      id: 6,
      img: [
        "https://images.unsplash.com/photo-1549638441-b787d2e11f14?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        "https://plus.unsplash.com/premium_photo-1675616563084-63d1f129623d?q=80&w=2069&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        "https://images.unsplash.com/photo-1515510621228-30de609bbd60?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        "https://images.unsplash.com/photo-1549638441-b787d2e11f14?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        "https://plus.unsplash.com/premium_photo-1675616563084-63d1f129623d?q=80&w=2069&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        "https://images.unsplash.com/photo-1515510621228-30de609bbd60?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      ],
      location: "Jaipur",
      para: "Starting from ₹1560",
      description:
        "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Magnam nihil neque earum tempora minus ab ipsam, magni veniam eaque nam eius atque accusantium officia deleniti veritatis vitae voluptatem explicabo. Laborum voluptas fuga doloremque ipsam voluptatem ut iste excepturi expedita repudiandae omnis! Qui, corrupti repellat? Vitae, repudiandae. Rerum eum eos magni itaque doloremque autem voluptatibus architecto explicabo ut pariatur maxime inventore laboriosam porro illo adipisci, ipsa nostrum, nobis expeditatempore earum culpa inventore harum quia. Adipisci cumque dignissimos perferendis nostrum porro! Doloribus quisquam adipisci dicta quia! Animi inventore alias, ipsum, id iusto assumenda voluptatem quisquam quod voluptate accusantium officia? Id est quae adipisci quam sit hic animi voluptate dicta accusantium! Adipisci quod officiis ut fugit!",
      name: "Live24",
      location1: "Santorini",
      guests: "6",
      room: "3",
      baths: "2",
      oldprice: "12,000",
      newprice: "10,500",
    },
    {
      id: 7,
      img: [
        "https://images.unsplash.com/photo-1549638441-b787d2e11f14?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        "https://plus.unsplash.com/premium_photo-1675616563084-63d1f129623d?q=80&w=2069&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        "https://images.unsplash.com/photo-1515510621228-30de609bbd60?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        "https://images.unsplash.com/photo-1549638441-b787d2e11f14?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        "https://plus.unsplash.com/premium_photo-1675616563084-63d1f129623d?q=80&w=2069&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        "https://images.unsplash.com/photo-1515510621228-30de609bbd60?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      ],
      location: "Hyderabad",
      para: "Starting from ₹15500",
      description:
        "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Magnam nihil neque earum tempora minus ab ipsam, magni veniam eaque nam eius atque accusantium officia deleniti veritatis vitae voluptatem explicabo. Laborum voluptas fuga doloremque ipsam voluptatem ut iste excepturi expedita repudiandae omnis! Qui, corrupti repellat? Vitae, repudiandae. Rerum eendis enim fugit. Eaque ipsum voluptas fugiat blanditiis consequatur odio ex hic necessitatibus minima officiis doloremque pariatur magnam debitis, minus natus aspernatur inventore similique molestias enim corporis, unde vel et illo officia! Praesentium ea, aliquid doloremque laudantium provident velit voluptas dolor quos commodi modi odit atque quisquam accusantium dolore tempore earum culpa inventore harum quia. Adipisci cumque dignissimos perferendis nostrum porro! Doloribus quisquam adipisci dicta quia! Animi inventore alias, ipsum, id iusto assumenda voluptatem quisquam quod voluptate accusantium officia? Id est quae adipisci quam sit hic animi voluptate dicta accusantium! Adipisci quod officiis ut fugit!",
      name: "LandMark",
      location1: "Santorini",
      guests: "6",
      room: "3",
      baths: "2",
      oldprice: "12,000",
      newprice: "10,500",
    },
    {
      id: 8,
      img: [
        "https://images.unsplash.com/photo-1549638441-b787d2e11f14?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        "https://plus.unsplash.com/premium_photo-1675616563084-63d1f129623d?q=80&w=2069&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        "https://images.unsplash.com/photo-1515510621228-30de609bbd60?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        "https://images.unsplash.com/photo-1549638441-b787d2e11f14?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        "https://plus.unsplash.com/premium_photo-1675616563084-63d1f129623d?q=80&w=2069&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        "https://images.unsplash.com/photo-1515510621228-30de609bbd60?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      ],
      location: "Hyderabad",
      para: "Starting from ₹15500",
      description:
        "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Magnam nihil neque earum tempora minus ab ipsam, magni veniam eaque nam eius atque accusantium officia deleniti veritatis vitae voluptatem explicabo. Laborum voluptas fuga doloremque ipsam voluptatem ut iste excepturi expedita repudiandae omnis! Qui, corrupti repellat? Vitae, repue tempore earum culpa inventore harum quia. Adipisci cumque dignissimos perferendis nostrum porro! Doloribus quisquam adipisci dicta quia! Animi inventore alias, ipsum, id iusto assumenda voluptatem quisquam quod voluptate accusantium officia? Id est quae adipisci quam sit hic animi voluptate dicta accusantium! Adipisci quod officiis ut fugit!",
      name: "Cotage",
      location1: "Santorini",
      guests: "6",
      room: "3",
      baths: "2",
      oldprice: "12,000",
      newprice: "10,500",
    },
    {
      id: 9,
      img: [
        "https://images.unsplash.com/photo-1549638441-b787d2e11f14?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        "https://plus.unsplash.com/premium_photo-1675616563084-63d1f129623d?q=80&w=2069&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        "https://images.unsplash.com/photo-1515510621228-30de609bbd60?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        "https://images.unsplash.com/photo-1549638441-b787d2e11f14?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        "https://plus.unsplash.com/premium_photo-1675616563084-63d1f129623d?q=80&w=2069&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        "https://images.unsplash.com/photo-1515510621228-30de609bbd60?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      ],
      location: "Hyderabad",
      para: "Starting from ₹15500",
      description:
        "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Magnam nihil neque earum tempora minus ab ipsam, magni veniam eaque nam eius atque accusantium officia deleniti veritatis vitae voluptatem explicabo. Laborum voluptas fuga doloremque ipsam voluptatem ut iste excepturi expedita repudiandae omnis! Qui, corrupti repellat? Vitae, repudiauptatem quisquam quod voluptate accusantium officia? Id est quae adipisci quam sit hic animi voluptate dicta accusantium! Adipisci quod officiis ut fugit!",
      name: "Santorini Escape",
      location1: "Santorini",
      guests: "6",
      room: "3",
      baths: "2",
      oldprice: "12,000",
      newprice: "10,500",
    },
    {
      id: 10,
      img: [
        "https://images.unsplash.com/photo-1549638441-b787d2e11f14?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        "https://plus.unsplash.com/premium_photo-1675616563084-63d1f129623d?q=80&w=2069&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        "https://images.unsplash.com/photo-1515510621228-30de609bbd60?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        "https://images.unsplash.com/photo-1549638441-b787d2e11f14?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        "https://plus.unsplash.com/premium_photo-1675616563084-63d1f129623d?q=80&w=2069&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        "https://images.unsplash.com/photo-1515510621228-30de609bbd60?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      ],
      location: "Kolkata",
      para: "Starting from ₹1500",
      description:
        "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Magnam nihil neque earum tempora minus ab ipsam, magni veniam eaque nam eius atque accusantium officia deleniti veritatis vitae voluptatem explicabo. Laborum voluptas fuga doloremque ipsam voluptatem ut iste excepturi expedita repudiandae omnis! Qui, corrupti repellat? Vitae, repudida voluptatem quisquam quod voluptate accusantium officia? Id est quae adipisci quam sit hic animi voluptate dicta accusantium! Adipisci quod officiis ut fugit!",
      name: "Santorini Escape",
      location1: "Santorini",
      guests: "6",
      room: "3",
      baths: "2",
      oldprice: "12,000",
      newprice: "10,500",
    },
    {
      id: 11,
      img: [
        "https://images.unsplash.com/photo-1549638441-b787d2e11f14?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        "https://plus.unsplash.com/premium_photo-1675616563084-63d1f129623d?q=80&w=2069&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        "https://images.unsplash.com/photo-1515510621228-30de609bbd60?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        "https://images.unsplash.com/photo-1549638441-b787d2e11f14?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        "https://plus.unsplash.com/premium_photo-1675616563084-63d1f129623d?q=80&w=2069&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        "https://images.unsplash.com/photo-1515510621228-30de609bbd60?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      ],
      location: "Delhi",
      para: "Starting from ₹1220",
      description:
        "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Magnam nihil neque earum tempora minus ab ipsam, magni veniam eaque nam eius atque accusantium officia deleniti veritatis vitae voluptatem explicabo. Laborum voluptas fuga doloremque ipsam voluptatem ut iste excepturi expedita repudiandae omnis! Qui, corrupti repellat? Vitae, repudiandae. Rerum eum eos magni itaque doloremque autem voluptatibus architecto explicabo ut pariatur maxime inventore laboriosam porro illo adipisci, ipsa nostrum, nobis expedita incidunt sit tempore dignissimos nulla illum vero. Dicta asperiores exercitationem necessitatibus qui, iusto modi tempora at impedit nulla, odio quaerat nisi sint ullam dolore porro facilis? Pariatur fugit atque voluptates rum culpa inventore harum quia. Adipisci cumque dignissimos perferendis nostrum porro! Doloribus quisquam adipisci dicta quia! Animi inventore alias, ipsum, id iusto assumenda voluptatem quisquam quod voluptate accusantium officia? Id est quae adipisci quam sit hic animi voluptate dicta accusantium! Adipisci quod officiis ut fugit!",
      name: "Santorini Escape",
      location1: "Santorini",
      guests: "6",
      room: "3",
      baths: "2",
      oldprice: "12,000",
      newprice: "10,500",
    },
    {
      id: 12,
      img: [
        "https://images.unsplash.com/photo-1549638441-b787d2e11f14?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        "https://plus.unsplash.com/premium_photo-1675616563084-63d1f129623d?q=80&w=2069&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        "https://images.unsplash.com/photo-1515510621228-30de609bbd60?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        "https://images.unsplash.com/photo-1549638441-b787d2e11f14?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        "https://plus.unsplash.com/premium_photo-1675616563084-63d1f129623d?q=80&w=2069&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        "https://images.unsplash.com/photo-1515510621228-30de609bbd60?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      ],
      location: "Delhi",
      para: "Starting from ₹1220",
      description:
        "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Magnam nihil neque earum tempora minus ab ipsam, magni veniam eaque nam eius atque accusantium officia deleniti veritatis vitae voluptatem explicabo. Laborum voluptas fuga doloremque ipsam voluptatem ut iste excepturi expedita repudiandae omnis! Qui, corrupti repellat? Vitae, repudiandae. Rerum eum eos magni itaque doloremque autem voluptatibus architecto explicabo ut pariatur maxime inventore laboriosam porro illo adipisci, ipsa nostrum, nobis expedita incidunt sit tempore dignissimos nullquam quod voluptate accusantium officia? Id est quae adipisci quam sit hic animi voluptate dicta accusantium! Adipisci quod officiis ut fugit!",
      name: "Santorini Escape",
      location1: "Santorini",
      guests: "6",
      room: "3",
      baths: "2",
      oldprice: "12,000",
      newprice: "10,500",
    },
    {
      id: 13,
      img: [
        "https://images.unsplash.com/photo-1549638441-b787d2e11f14?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        "https://plus.unsplash.com/premium_photo-1675616563084-63d1f129623d?q=80&w=2069&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        "https://images.unsplash.com/photo-1515510621228-30de609bbd60?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        "https://images.unsplash.com/photo-1549638441-b787d2e11f14?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        "https://plus.unsplash.com/premium_photo-1675616563084-63d1f129623d?q=80&w=2069&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        "https://images.unsplash.com/photo-1515510621228-30de609bbd60?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      ],
      location: "Ranchi",
      para: "Starting from ₹1020",
      description:
        "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Magnam nihil neque earum tempora minus ab ipsam, magni veniam eaque nam eius atque accusantium officia deleniti veritatis vitae voluptatem explicabo. Laborum voluptas fuga doloremque ipsam voluptatem ut iste excepturi expedita repudiandae omnis! Qui, corrupti repellat? Vitae, repudiandae. Rerum eum eos magni itaque doloremque autem voluptatibus architecto explicabo ut pariatur maxime inventore laboriosam porro illo adipisci, ipsa nostrum, nobis expedita incidunt sit temporea voluptatem quisquam quod voluptate accusantium officia? Id est quae adipisci quam sit hic animi voluptate dicta accusantium! Adipisci quod officiis ut fugit!",
      name: "Santorini Escape",
      location1: "Santorini",
      guests: "6",
      room: "3",
      baths: "2",
      oldprice: "12,000",
      newprice: "10,500",
    },
    {
      id: 14,
      img: [
        "https://images.unsplash.com/photo-1549638441-b787d2e11f14?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        "https://plus.unsplash.com/premium_photo-1675616563084-63d1f129623d?q=80&w=2069&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        "https://images.unsplash.com/photo-1515510621228-30de609bbd60?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        "https://images.unsplash.com/photo-1549638441-b787d2e11f14?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        "https://plus.unsplash.com/premium_photo-1675616563084-63d1f129623d?q=80&w=2069&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        "https://images.unsplash.com/photo-1515510621228-30de609bbd60?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      ],
      location: "Nagaland",
      para: "Starting from ₹2430",
      description:
        "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Magnam nihil neque earum tempora minus ab ipsam, magni veniam eaque nam eius atque accusantium officia deleniti veritatis vitae voluptatem explicabo. Laborum voluptas fuga doloremque ipsam voluptatem ut iste excepturi expedita repudiandae omnis! Qui, corrupti repellat? Vitae, repudiandae. Rerum eum eos magni itaque doloremque autem voluptatibus architecto explicabo ut pariatur maxime inventore laboriosam porro illo adipisci, ipsa nostrum, nobis expedita incidunt sit tempore a voluptatem quisquam quod voluptate accusantium officia? Id est quae adipisci quam sit hic animi voluptate dicta accusantium! Adipisci quod officiis ut fugit!",
      name: "Santorini Escape",
      location1: "Santorini",
      guests: "6",
      room: "3",
      baths: "2",
      oldprice: "12,000",
      newprice: "10,500",
    },
  ];

  // const bestrated = [
  //   { id: 15, img: 'https://images.unsplash.com/photo-1549638441-b787d2e11f14?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', location: 'Goa', para: 'Starting from ₹2243' },
  //   { id: 25, img: 'https://images.unsplash.com/photo-1549638441-b787d2e11f14?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', location: 'Mumbai', para: 'Starting from ₹2540' },
  //   { id: 35, img: 'https://images.unsplash.com/photo-1549638441-b787d2e11f14?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', location: 'Mumbai', para: 'Starting from ₹2540' },
  //   { id: 45, img: 'https://images.unsplash.com/photo-1549638441-b787d2e11f14?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', location: 'Mumbai', para: 'Starting from ₹2540' },
  //   { id: 55, img: 'https://images.unsplash.com/photo-1549638441-b787d2e11f14?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', location: 'Lonavala', para: 'Starting from ₹6754' },
  //   { id: 65, img: 'https://images.unsplash.com/photo-1549638441-b787d2e11f14?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', location: 'Jaipur', para: 'Starting from ₹1560' },
  //   { id: 75, img: 'https://images.unsplash.com/photo-1549638441-b787d2e11f14?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', location: 'Hyderabad', para: 'Starting from ₹15500' },
  //   { id: 85, img: 'https://images.unsplash.com/photo-1549638441-b787d2e11f14?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', location: 'Hyderabad', para: 'Starting from ₹15500' },
  //   { id: 95, img: 'https://images.unsplash.com/photo-1549638441-b787d2e11f14?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', location: 'Hyderabad', para: 'Starting from ₹15500' },
  //   { id: 105, img: 'https://images.unsplash.com/photo-1549638441-b787d2e11f14?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', location: 'Kolkata', para: 'Starting from ₹1500' },
  //   { id: 115, img: 'https://images.unsplash.com/photo-1549638441-b787d2e11f14?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', location: 'Delhi', para: 'Starting from ₹1220' },
  //   { id: 125, img: 'https://images.unsplash.com/photo-1549638441-b787d2e11f14?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', location: 'Delhi', para: 'Starting from ₹1220' },
  //   { id: 135, img: 'https://images.unsplash.com/photo-1549638441-b787d2e11f14?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', location: 'Ranchi', para: 'Starting from ₹1020' },
  //   { id: 145, img: 'https://images.unsplash.com/photo-1549638441-b787d2e11f14?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', location: 'Nagaland', para: 'Starting from ₹2430' },
  // ];

  return (
    <div>
      <HomeSlider />
      <LocationCarousal data={data} marginTop={"mt-56"} boxTitle={"TRENDING THIS SEASON"} />
      <CateSlider/>
      <AboutUS />
      <LocationCarousal data={data} marginTop={"mt-2"} boxTitle={"BEST RATEDED LOCATION"} />
      <WhychooseUs />
      <Testimonials />
      <Footer />
    </div>
  );
};

export default Homepage;

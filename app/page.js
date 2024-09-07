import HomePage from "./HomePage";
import { BASE_URL, IMAGE_URL } from "@/utils/utils";

export default function Home() {
  const base_url = BASE_URL;
  const image_url = IMAGE_URL;
  return <HomePage base_url={base_url} image_url={image_url} />;
}

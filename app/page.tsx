import Image from "next/image";
import ProductListPage from "./(routes)/products/page";
import Navbar from "@/components/Navbar";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col">
      <Navbar />
    </main>
  );
}

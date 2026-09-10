import Image from "next/image";
import HomeHero from "@/code/components/Home/HomeHero";
import HomePractices from "@/code/components/Home/HomePractices";
export default function Home() {
  return (
    <main>
      <HomeHero/>
      <HomePractices/>
    </main>
  );
}

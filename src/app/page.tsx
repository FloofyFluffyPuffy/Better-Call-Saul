import Image from "next/image";
import HomeHero from "@/code/components/Home/HomeHero";
import HomePractices from "@/code/components/Home/HomePractices";
import HomePracticesOld from "@/code/components/Home/HomePracticesOld";
export default function Home() {
  return (
    <main>
      <HomeHero/>
      <HomePractices/>
      <HomePracticesOld/>
    </main>
  );
}

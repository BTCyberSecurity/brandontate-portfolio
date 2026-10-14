import { pageMetadata } from "@/lib/metadata";
import About from "@/components/About";
import Contact from "@/components/Contact";
import Experience from "@/components/Experience";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Notebook from "@/components/Notebook";
import Projects from "@/components/Projects";
export const metadata = pageMetadata("/", "Brandon Tate | IT Leadership, Infrastructure & Security", "Portfolio of Brandon Tate — IT leader, infrastructure builder, and cybersecurity practitioner focused on operations, identity, automation, private AI, and resilient systems.");
export default function Home() {
  return <main id="main-content" tabIndex={-1} className="min-h-screen bg-[#F4F1EA] text-[#102F46]">
    <Header /><Hero /><Experience /><Projects /><Notebook /><About /><Contact />
  </main>;
}

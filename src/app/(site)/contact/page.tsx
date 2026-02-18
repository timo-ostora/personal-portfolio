import { Section, SocialMedia, ContactForm } from "@/components/shared"
import { Mail } from "lucide-react";
import Link from "next/link";
import { BsWhatsapp } from "react-icons/bs";

export default function Contact() {
  return (
    <Section>
      <div className="grid gap-4">
        <h1 className="font-display text-6xl">LET&apos;S TALK</h1>
        <p className="text-lg max-w-lg">
          I am always open to discussing new projects, creative ideas, or opportunities to be part of your vision. 
          Feel free to reach out to me for any inquiries or collaborations.
        </p>
      </div>
      <div className="grid md:grid-cols-2 gap-6">
        {/* <ContactForm /> */}
        
        <div className="flex flex-col gap-6 p-6 rounded-2xl">
          <div className="grid gap-4">
            <h4>Address</h4>
            <div className="grid gap-4">
              <div className="flex gap-2">
                <Mail className="h-5 w-5" /> <Link href="melto:mohamed09azizi@gmail.com">Mohamed09azizi@gmail.com</Link>
              </div>
              <div className="flex gap-2">
                <BsWhatsapp className="h-5 w-5" /> <Link href="https://wa.me/212679186173">(+212) 679-186-173</Link>
              </div>
            </div>
          </div>
          <div className="grid gap-4">
            <h4>Follow Me</h4>
            <SocialMedia className="flex-col gap-4" />
          </div>
        </div>

      </div>

    </Section>
  );
}







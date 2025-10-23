import {
  Github,
  Linkedin,
  Mail,
  MapPin,
  Phone,
  Send,
} from "lucide-react";
import { cn } from "@/lib/utils";
import { useToast } from "@/hooks/use-toast";
import { useState } from "react";
import emailjs from "emailjs-com";

export const ContactSection = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Replace these with your actual EmailJS IDs from your EmailJS dashboard
  const SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID;
  const TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
  const USER_ID = import.meta.env.VITE_EMAILJS_USER_ID;

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, e.target, USER_ID)
      .then(
        () => {
          toast({
            title: "Message sent!",
            description: "Thank you for your message. I'll get back to you soon.",
          });
          setIsSubmitting(false);
          e.target.reset();
        },
        (error) => {
          toast({
            title: "Error",
            description: "Something went wrong. Please try again.",
          });
          setIsSubmitting(false);
        }
      );
  };

  return (
    <section id="contact" className="py-24 px-4 relative bg-secondary/30">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
          Get In <span className="text-primary"> Touch</span>
        </h2>

        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          Have a project in mind or want to collaborate? Feel free to reach out.
          I'm always open to discussing new opportunities.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Contact Info Card */}
          <div
            className="
              mx-auto
              rounded-2xl
              shadow-xl
              p-8 md:p-10
              backdrop-blur
              border
              bg-blue-500/10
              border-blue-200
              dark:border-blue-800
              transition-colors
              flex flex-col justify-between
              min-h-[340px]
              items-center
              text-center
              card-hover
              card-bubble-hover
            "
          >
            <h3 className="text-2xl font-semibold mb-6">Contact Information</h3>
            <div className="space-y-6 justify-center items-center flex flex-col w-full">
              <div className="flex flex-col items-center text-center space-y-2">
                <div className="p-3 rounded-full bg-primary/10 mb-1">
                  <Mail className="h-6 w-6 text-primary" />
                </div>
                <h4 className="font-medium">Email</h4>
                <a
                  href="mailto:hello@gmail.com"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  jaysinhbusiness@gmail.com
                </a>
              </div>
              <div className="flex flex-col items-center text-center space-y-2">
                <div className="p-3 rounded-full bg-primary/10 mb-1">
                  <Phone className="h-6 w-6 text-primary" />
                </div>
                <h4 className="font-medium">Phone</h4>
                <a
                  href="tel:+11234567890"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  not available
                </a>
              </div>
              <div className="flex flex-col items-center text-center space-y-2">
                <div className="p-3 rounded-full bg-primary/10 mb-1">
                  <MapPin className="h-6 w-6 text-primary" />
                </div>
                <h4 className="font-medium">Location</h4>
                <a className="text-muted-foreground hover:text-primary transition-colors">
                  Cambridgeshire, Peterborough
                </a>
              </div>
            </div>
            <div className="pt-8 w-full">
              <h4 className="font-medium mb-4">Connect With Me</h4>
              <div className="flex space-x-4 justify-center">
                <a href="https://www.linkedin.com/in/jaysinh-maher-0613a935b/" target="_blank"><Linkedin /></a>
                <a href="https://github.com/JaysinhMaher" target="_blank"><Github /></a>
              </div>
            </div>
          </div>
          {/* Contact Form Card */}
          <div
            className="p-8 rounded-lg shadow-xs
              bg-[#e0f2fe] dark:bg-[#0f172a] transition-colors border border-[#bae6fd] dark:border-[#1e293b]
              card-hover
              card-bubble-hover
            "
          >
            <h3 className="text-2xl font-semibold mb-6 text-[#0f172a] dark:text-white"> Send a Message</h3>

            <form className="space-y-6" onSubmit={handleSubmit}>
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium mb-2 text-[#0f172a] dark:text-slate-200"
                >
                  {" "}
                  Your Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  className="w-full px-4 py-3 rounded-md border border-input bg-[#bae6fd] dark:bg-[#1e293b] text-[#0f172a] dark:text-slate-100 focus:outline-hidden focus:ring-2 focus:ring-primary"
                  placeholder="john doe"
                />
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium mb-2 text-[#0f172a] dark:text-slate-200"
                >
                  {" "}
                  Your Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  className="w-full px-4 py-3 rounded-md border border-input bg-[#bae6fd] dark:bg-[#1e293b] text-[#0f172a] dark:text-slate-100 focus:outline-hidden focus:ring-2 focus:ring-primary"
                  placeholder="john@gmail.com"
                />
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium mb-2 text-[#0f172a] dark:text-slate-200"
                >
                  {" "}
                  Your Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  className="w-full px-4 py-3 rounded-md border border-input bg-[#bae6fd] dark:bg-[#1e293b] text-[#0f172a] dark:text-slate-100 focus:outline-hidden focus:ring-2 focus:ring-primary resize-none"
                  placeholder="Hello, I'd like to talk about..."
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className={cn(
                  "cosmic-button w-full flex items-center justify-center gap-2"
                )}
              >
                {isSubmitting ? "Sending..." : "Send Message"}
                <Send size={16} />
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

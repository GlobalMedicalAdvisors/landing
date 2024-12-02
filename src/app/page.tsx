import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Phone,
  Ticket,
  UserCircle,
  Mail,
  Bell,
  FileText,
  List,
  RefreshCw,
  Send,
  LucideProps,
} from "lucide-react";
import { ReactElement } from "react";

export default function LandingPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <header className="px-4 lg:px-6 max-h-20 flex items-center">
        <Link className="flex items-center justify-center" href="#">
          <Image
            src="/logo.jpeg"
            alt="GMA Logo"
            width={70}
            height={70}
            className="mix-blend-multiply"
          />
          <span className="sr-only">MediTravel</span>
        </Link>
        <nav className="ml-auto flex gap-4 sm:gap-6">
          <Link
            className="text-sm font-medium hover:underline underline-offset-4"
            href="#"
          >
            Features
          </Link>
          <Link
            className="text-sm font-medium hover:underline underline-offset-4"
            href="#"
          >
            How It Works
          </Link>
          <Link
            className="text-sm font-medium hover:underline underline-offset-4"
            href="#"
          >
            Partners
          </Link>
          <Link
            className="text-sm font-medium hover:underline underline-offset-4"
            href="#"
          >
            Contact
          </Link>
        </nav>
      </header>
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center space-y-4 text-center">
              <div className="space-y-2">
                <h1>Book Your Medical Journey with Ease</h1>
                <p className="mx-auto max-w-[700px] md:text-xl">
                  Be among the first to experience hassle-free medical travel
                  booking. Join our waitlist for early access to our
                  revolutionary app.
                </p>
              </div>
              <div className="space-y-4 sm:space-x-4">
                <Button size="lg">Join Waitlist</Button>
                <Button size="lg" variant="outline">
                  Learn More
                </Button>
              </div>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <h2 className="text-center mb-8 sm:text-4xl md:text-5xl text-3xl">
              Features
            </h2>
            <div className="grid gap-6 lg:grid-cols-3">
              <FeatureCard
                icon={<List className="h-10 w-10 mb-4 text-primary" />}
                title="View Partner Clinics & Hotels"
                description="Browse through our extensive list of partner clinics and hotels to find the perfect match for your needs."
              />
              <FeatureCard
                icon={<Phone className="h-10 w-10 mb-4 text-primary" />}
                title="Direct Contact"
                description="Easily get in touch with hotels, clinics, or doctors directly through our app."
              />
              <FeatureCard
                icon={<Ticket className="h-10 w-10 mb-4 text-primary" />}
                title="Reservation Tickets"
                description="Request and manage your reservation tickets all in one place."
              />
              <FeatureCard
                icon={<UserCircle className="h-10 w-10 mb-4 text-primary" />}
                title="User Profiles"
                description="Create and manage your profile for a personalized experience."
              />
              <FeatureCard
                icon={<Mail className="h-10 w-10 mb-4 text-primary" />}
                title="Easy Login"
                description="Login seamlessly using email magic links or OAuth."
              />
              <FeatureCard
                icon={<Bell className="h-10 w-10 mb-4 text-primary" />}
                title="Booking Notifications"
                description="Receive instant notifications once your booking is confirmed."
              />
              <FeatureCard
                icon={<FileText className="h-10 w-10 mb-4 text-primary" />}
                title="Document Upload"
                description="Securely upload and manage your medical documents and identification."
              />
              <FeatureCard
                icon={<RefreshCw className="h-10 w-10 mb-4 text-primary" />}
                title="Real-time Updates"
                description="Get real-time updates on your booking status and payment reminders."
              />
              <FeatureCard
                icon={<Send className="h-10 w-10 mb-4 text-primary" />}
                title="Instant Communication"
                description="Our team manages bookings and communicates with you directly for a smooth experience."
              />
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <h2 className="text-center mb-8 sm:text-4xl md:text-5xl text-3xl">
              How It Works
            </h2>
            <div className="grid gap-6 lg:grid-cols-3">
              <Card>
                <CardHeader>
                  <CardTitle>1. Browse & Choose</CardTitle>
                </CardHeader>
                <CardContent>
                  <p>
                    Explore our partner clinics and hotels, and select the ones
                    that best suit your needs.
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle>2. Book & Upload</CardTitle>
                </CardHeader>
                <CardContent>
                  <p>
                    Make your reservation and securely upload any necessary
                    medical documents.
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle>3. Relax & Prepare</CardTitle>
                </CardHeader>
                <CardContent>
                  <p>
                    We&apos;ll handle the rest, including accommodation
                    arrangements. Just prepare for your journey!
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <h2 className="text-center mb-8 sm:text-4xl md:text-5xl text-3xl">
              App Preview
            </h2>
            <div className="flex justify-center items-center space-x-4">
              <Image
                src="/placeholder.svg?height=600&width=300"
                alt="App mockup 1"
                width={300}
                height={600}
                className="rounded-xl shadow-lg"
              />
              <Image
                src="/placeholder.svg?height=600&width=300"
                alt="App mockup 2"
                width={300}
                height={600}
                className="rounded-xl shadow-lg"
              />
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <h2 className="text-center mb-8 sm:text-4xl md:text-5xl text-3xl">
              Our Partners
            </h2>
            <div className="grid gap-6 lg:grid-cols-2 justify-items-center relative mix-blend-multiply">
              <Image
                className="hover:opacity-70 transition-all duration-300"
                alt="Doctor Smile"
                src="/doctor-smile.png"
                width={250}
                height={250}
              />
              <Image
                className="hover:opacity-70 transition-all duration-300"
                alt="Doctor Smile"
                src="/panorama-clinics.jpg"
                width={250}
                height={250}
              />
            </div>
          </div>
        </section>
        {/* TBD: Testimonial */}
        {/* <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <h2 className="text-center mb-8 sm:text-4xl md:text-5xl text-3xl">
              What Our Customers Say
            </h2>
            <div className="grid gap-6 lg:grid-cols-3">
              <TestimonialCard
                quote="This app made my medical trip so much easier. Everything was taken care of!"
                author="Sarah J."
              />
              <TestimonialCard
                quote="I was amazed at how smooth the whole process was. Highly recommended!"
                author="Michael T."
              />
              <TestimonialCard
                quote="The peace of mind this service provides is priceless. Thank you!"
                author="Emma R."
              />
            </div>
          </div>
        </section> */}
        <section className="w-full py-12 md:py-24 lg:py-32 bg-accent">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-center mb-8 sm:text-4xl md:text-5xl text-3xl">
                  Be the First to Experience Hassle-Free Medical Travel
                </h2>
                <p className="mx-auto max-w-[700px] md:text-xl">
                  Join our waitlist now and get early access to our
                  revolutionary medical travel booking app.
                </p>
              </div>
              <div className="space-x-4">
                <Button>Join Waitlist</Button>
                <Button variant="outline">Contact Us</Button>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6 border-t">
        <p className="text-xs text-gray-500 dark:text-gray-400">
          © 2024 MediTravel. All rights reserved.
        </p>
        <nav className="sm:ml-auto flex gap-4 sm:gap-6">
          <Link className="text-xs hover:underline underline-offset-4" href="#">
            Terms of Service
          </Link>
          <Link
            className="text-xs hover:underline underline-offset-4"
            href="/privacy-policy"
          >
            Privacy Policy
          </Link>
        </nav>
      </footer>
    </div>
  );
}

function FeatureCard({
  icon,
  title,
  description,
}: {
  title: string;
  icon: ReactElement<LucideProps & React.ComponentProps<"svg">>;
  description: string;
}) {
  return (
    <Card>
      <CardHeader>
        <div className="flex items-center justify-center">{icon}</div>
        <CardTitle className="text-center">{title}</CardTitle>
      </CardHeader>
      <CardContent>
        <p className="text-center text-gray-500 dark:text-gray-400">
          {description}
        </p>
      </CardContent>
    </Card>
  );
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
function TestimonialCard({ quote, author }: { quote: string; author: string }) {
  return (
    <Card>
      <CardContent className="pt-4">
        <blockquote className="border-l-4 pl-4 italic">{quote}</blockquote>
        <p className="mt-4 text-right font-semibold">- {author}</p>
      </CardContent>
    </Card>
  );
}

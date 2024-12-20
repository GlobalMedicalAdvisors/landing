import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Phone,
  Ticket,
  UserCircle,
  Bell,
  FileText,
  List,
  RefreshCw,
  Send,
} from "lucide-react";
import { FeatureCard } from "@/components/feature-card";
import { Badge } from "@/components/ui/badge";
import Iphone15Pro from "@/components/ui/iphone-15-pro";
import { ResponsiveWaitlistModal } from "@/components/responsive-waitlist-modal";

export default function LandingPage() {
  return (
    <div>
      <main className="flex-1">
        <section className="w-full py-12 md:py-8 lg:py-6">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center space-y-4 text-center">
              <div className="space-y-2">
                <h1>Book Your Medical Journey with Ease</h1>
                <Badge variant={"outline"} className="bg-primary/45">
                  Coming Soon
                </Badge>
                <p className="mx-auto max-w-[700px] md:text-xl">
                  Be among the first to experience hassle-free medical travel
                  booking. Join our waitlist for early access to our
                  revolutionary app.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
                <ResponsiveWaitlistModal>
                  <Button size="lg" className="w-full sm:w-auto">
                    Join Waitlist
                  </Button>
                </ResponsiveWaitlistModal>
              </div>
              <div>
                <Iphone15Pro className="max-w-sm" src="/mockup.jpg" />
              </div>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <h2
              id="features"
              className="text-center mb-8 sm:text-4xl md:text-5xl text-3xl"
            >
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
            <h2
              id="how-it-works"
              className="text-center mb-8 sm:text-4xl md:text-5xl text-3xl"
            >
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

        <section className="w-full py-12 md:py-24 lg:py-32 ">
          <div className="container px-4 md:px-6">
            <h2
              id="partners"
              className="text-center mb-8 sm:text-4xl md:text-5xl text-3xl"
            >
              Our Partners
            </h2>
            <div className="grid gap-6 lg:grid-cols-2 justify-items-center">
              <Image
                className="hover:opacity-70 transition-all duration-300"
                alt="Doctor Smile"
                src="/doctor-smile.png"
                width={250}
                height={250}
              />

              <Image
                className="hover:opacity-70 transition-all duration-300"
                alt="Panorama Clinics"
                src="/panorama-clinics.png"
                width={250}
                height={250}
              />
            </div>
            <p className="text-center text-xl font-medium">
              more to come soon!
            </p>
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
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6 border-t">
        <p className="text-xs text-gray-500 dark:text-gray-400">
          Powered by ELCC © copyright 2024
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

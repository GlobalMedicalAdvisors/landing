import Link from "next/link";

export default function PrivacyPolicy() {
  return (
    <div>
      <main className="flex-1 py-12 md:py-8 lg:py-6">
        <div className="container px-4 md:px-6">
          <h1>Privacy Policy</h1>
          <div className="prose dark:prose-invert max-w-none">
            <p className="mb-8">Last updated: Nov 30, 2024</p>
            <h2>1. Introduction</h2>
            <p>
              Welcome to MediTravel. We are committed to protecting your
              personal information and your right to privacy. This Privacy
              Policy explains how we collect, use, disclose, and safeguard your
              information when you use our mobile application and services.
            </p>
            <h2>2. Information We Collect</h2>
            <p>
              We collect information that you provide directly to us, including:
            </p>
            <ul>
              <li>
                Personal information (e.g., name, email address, phone number)
              </li>
              <li>Medical information and documents</li>
              <li>Booking and reservation details</li>
              <li>User profile information</li>
            </ul>
            <h2>3. How We Use Your Information</h2>
            <p>We use the information we collect to:</p>
            <ul>
              <li>Provide, maintain, and improve our services</li>
              <li>Process your bookings and reservations</li>
              <li>Communicate with you about our services</li>
              <li>Comply with legal obligations</li>
            </ul>
            <h2>4. Data Security</h2>
            <p>
              We implement appropriate technical and organizational measures to
              protect your personal information against unauthorized or unlawful
              processing, accidental loss, destruction, or damage.
            </p>
            <h2>5. Your Rights</h2>
            <p>
              You have the right to access, correct, or delete your personal
              information. You may also have the right to restrict or object to
              certain processing of your data.
            </p>
            <h2>6. Changes to This Privacy Policy</h2>
            <p>
              We may update this Privacy Policy from time to time. We will
              notify you of any changes by posting the new Privacy Policy on
              this page.
            </p>
            <h2>7. Contact Us</h2>
            <p>
              If you have any questions about this Privacy Policy, please
              contact us at:
              <a href="mailto:privacy@meditravel.com" className="ml-1">
                privacy@meditravel.com
              </a>
            </p>
          </div>
        </div>
      </main>
      <footer className="flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6 border-t">
        <p className="text-xs text-gray-500 dark:text-gray-400">
          © 2024 MediTravel. All rights reserved.
        </p>
        <nav className="sm:ml-auto flex gap-4 sm:gap-6">
          <Link className="text-xs hover:underline underline-offset-4" href="/">
            Home
          </Link>
          <Link className="text-xs hover:underline underline-offset-4" href="#">
            Terms of Service
          </Link>
        </nav>
      </footer>
    </div>
  );
}

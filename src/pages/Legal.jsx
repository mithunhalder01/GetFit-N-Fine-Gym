import { Link } from "react-router-dom";
import { PageHero } from "../components/UI";
import { GYM } from "../data";

function LegalShell({ title, subtitle, children }) {
  return (
    <>
      <PageHero tag={GYM.name} title={title} highlight="" subtitle={subtitle} />
      <section className="bg-black py-16 px-4 sm:px-6">
        <div className="max-w-3xl mx-auto">
          <div className="bg-[#0a0a0a] border border-white/5 rounded-3xl p-5 sm:p-8 md:p-10">
            <div className="prose prose-invert prose-sm sm:prose-base max-w-none">
              {children}
            </div>
          </div>
          <div className="mt-6 text-center">
            <Link to="/contact" className="text-yellow-400 text-xs uppercase tracking-widest font-bold hover:underline">
              Need help? Contact us
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}

export function PrivacyPolicy() {
  return (
    <LegalShell
      title="PRIVACY"
      subtitle="How we collect, use and protect your information."
    >
      <h2>Overview</h2>
      <p>
        This policy explains how {GYM.name} collects and uses information when you use our website or contact us.
      </p>

      <h2>Information we collect</h2>
      <ul>
        <li>Name, phone number and email you submit via forms.</li>
        <li>Basic usage data such as pages visited (if analytics is enabled).</li>
      </ul>

      <h2>How we use it</h2>
      <ul>
        <li>To respond to your inquiries and book your free trial.</li>
        <li>To improve our services and website experience.</li>
      </ul>

      <h2>Contact</h2>
      <p>
        For privacy questions, email <strong>{GYM.email}</strong>.
      </p>
    </LegalShell>
  );
}

export function TermsOfService() {
  return (
    <LegalShell
      title="TERMS"
      subtitle="Website terms for using our content and services."
    >
      <h2>Use of website</h2>
      <p>
        By using this website, you agree not to misuse it, attempt unauthorized access, or disrupt service.
      </p>

      <h2>Content</h2>
      <p>
        Content on this website is for general information. Plans, schedules and offers may change without notice.
      </p>

      <h2>Liability</h2>
      <p>
        {GYM.name} is not liable for indirect damages arising from website use. Always consult a professional before starting any fitness program.
      </p>
    </LegalShell>
  );
}

export function RefundPolicy() {
  return (
    <LegalShell
      title="REFUNDS"
      subtitle="A simple, transparent refund and cancellation policy."
    >
      <h2>General</h2>
      <p>
        Refunds are considered case-by-case depending on the plan and remaining duration.
      </p>

      <h2>How to request</h2>
      <p>
        Contact us on <strong>{GYM.phone}</strong> or email <strong>{GYM.email}</strong> with your membership details.
      </p>

      <h2>Processing time</h2>
      <p>
        Approved refunds are typically processed within 5–10 business days.
      </p>
    </LegalShell>
  );
}

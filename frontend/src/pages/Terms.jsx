import React from 'react'

const Terms = () => {
    return (
        <section className="bg-gray-100 text-gray-800 font-sans p-4 sm:p-8">
            <div className="max-w-5xl mx-auto bg-white border border-gray-200 rounded-2xl p-6 sm:p-10">
                <h1 className="text-4xl font-extrabold text-gray-900 mb-6">Devlink - Legal Terms, Privacy &amp; Policy</h1>
                <p className="text-sm text-gray-500 mb-8">Effective Date: 20 July 2025</p>
                {/* Company Notice */}
                <section className="mb-10">
                    <h2 className="text-2xl font-semibold text-indigo-600 mb-2">1. Company Status &amp; Scope</h2>
                    <p className="text-gray-700">Devlink is an independent, unregistered startup offering ERP services on a freelance basis. We are not a government-registered legal entity as of now. By using our services, you acknowledge this and agree to proceed at your own discretion.</p>
                </section>
                {/* Terms of Use */}
                <section className="mb-10">
                    <h2 className="text-2xl font-semibold text-indigo-600 mb-2">2. Terms of Use</h2>
                    <ul className="list-disc list-inside space-y-2 text-gray-700">
                        <li>Services must be used for legal, ethical, and educational/institutional purposes only.</li>
                        <li>Any misuse, abuse, or illegal action from a user will result in account suspension without notice or refund.</li>
                        <li>All payments made are final and non-refundable after service activation or delivery.</li>
                        <li>You are responsible for keeping your credentials secure and not sharing them with unauthorized individuals.</li>
                        <li>We reserve the right to deny service to anyone violating these terms.</li>
                    </ul>
                </section>
                {/* Privacy Policy */}
                <section className="mb-10">
                    <h2 className="text-2xl font-semibold text-indigo-600 mb-2">3. Privacy Policy</h2>
                    <ul className="list-disc list-inside space-y-2 text-gray-700">
                        <li>We only collect essential data: organization name, ERP data (e.g., student, staff records), and credentials.</li>
                        <li><strong>We DO NOT collect or store</strong>: browsing history, IP address, device info, or third-party analytics data.</li>
                        <li>No cookies or trackers are embedded in our ERP systems.</li>
                        <li>We do not share any user data with third parties, advertisers, or external platforms.</li>
                        <li>Users may request data deletion at any time by contacting us directly.</li>
                    </ul>
                </section>
                {/* Infrastructure & Third-Party Services */}
                <section className="mb-10">
                    <h2 className="text-2xl font-semibold text-indigo-600 mb-2">4. Infrastructure &amp; Third-Party Services</h2>
                    <ul className="list-disc list-inside space-y-2 text-gray-700">
                        <li>Image uploads are managed via <strong>Cloudinary</strong> secure image cloud services.</li>
                        <li>Backend servers and databases are hosted on <strong>Contabo VPS</strong>.</li>
                        <li>We implement best-effort security, but any breach or data leak caused due to third-party infrastructure is beyond our liability.</li>
                        <li>We strongly advise all users to keep their login details confidential and secure. Any misuse from credential sharing is not our responsibility.</li>
                    </ul>
                </section>
                {/* Violation & Enforcement */}
                <section className="mb-10">
                    <h2 className="text-2xl font-semibold text-indigo-600 mb-2">5. Violation Policy</h2>
                    <ul className="list-disc list-inside space-y-2 text-gray-700">
                        <li>Any user found involved in anti-national, unlawful, abusive, or harmful digital activity will be permanently suspended.</li>
                        <li>No warning or refund will be issued in such cases.</li>
                        <li>In serious cases, activity logs (if enabled) may be handed over to legal authorities as required.</li>
                    </ul>
                </section>
                {/* Liability & Legal Safety */}
                <section className="mb-10">
                    <h2 className="text-2xl font-semibold text-indigo-600 mb-2">6. Legal Disclaimer &amp; Liability</h2>
                    <ul className="list-disc list-inside space-y-2 text-gray-700">
                        <li>Devlink is not liable for data loss, service disruption, or security breaches resulting from third-party infrastructure (e.g., Contabo, Cloudinary).</li>
                        <li>All services are provided "as-is" with no warranty of uptime, performance, or legal compliance.</li>
                        <li>It is your responsibility to ensure your usage complies with your local and institutional laws.</li>
                    </ul>
                </section>
                {/* Contact */}
                <section className="mb-6">
                    <h2 className="text-2xl font-semibold text-indigo-600 mb-2">7. Contact &amp; Queries</h2>
                    <p className="text-gray-700">
                        📧 Email: <a href="mailto:devlinkin@outlook.com" className="underline text-blue-600">devlinkin@outlook.com</a><br />
                        📍 Devlink Team, Freelance ERP Startup, India (Unregistered)<br />
                    </p>
                </section>
                {/* Final Note */}
                <p className="text-xs text-gray-500 italic mt-4">
                    This document is provided as a good-faith legal safety measure. Since Devlink is not a registered company, you are advised to use our services at your own discretion. These policies are written to ensure full transparency and protection for both parties.
                </p>
            </div>
        </section>

    )
}

export default Terms

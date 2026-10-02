"use client";
import React, { useState } from "react";
import LoaddingDownload from "../components/LoaddingDownload";

function Privacy() {
  return (
    <main className="container mx-auto px-4 py-8 max-w-4xl leading-relaxed">
      <h1 className="text-3xl font-bold mb-6 text-gray-900">Privacy Policy</h1>

      <div className="space-y-6 text-gray-700">
        <section>
          <h2 className="text-xl font-semibold mb-3 text-gray-800">
            1. Information We Collect
          </h2>
          <p>
            Welcome to DownloadSCL. We respect your privacy and are committed to
            protecting your personal data. This privacy policy will inform you
            as to how we look after your personal data when you visit our
            website and tell you about your privacy rights.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold mb-3 text-gray-800">
            2. How We Use Your Information
          </h2>
          <p>
            We use the information we collect to provide, maintain, and improve
            our services. This includes troubleshooting, data analysis, testing,
            system maintenance, support, reporting, and hosting of data to
            ensure the best possible experience for our users.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold mb-3 text-gray-800">
            3. Cookies and Tracking
          </h2>
          <p>
            Our website may use "cookies" to enhance user experience. You can
            choose to set your web browser to refuse cookies or to alert you
            when cookies are being sent. If you do so, note that some parts of
            the site may not function properly.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold mb-3 text-gray-800">
            4. Data Security
          </h2>
          <p>
            We have put in place appropriate security measures to prevent your
            personal data from being accidentally lost, used, or accessed in an
            unauthorized way, altered, or disclosed.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold mb-3 text-gray-800">
            5. Contact Us
          </h2>
          <p>
            If you have any questions or suggestions about our Privacy Policy,
            do not hesitate to contact us at:
            <a
              href="mailto:support@downloadscl.com"
              className="text-blue-600 hover:underline ml-1 font-medium"
            >
              support@downloadscl.com
            </a>
          </p>
        </section>
      </div>
    </main>
  );
}

export default Privacy;

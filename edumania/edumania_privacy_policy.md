# Privacy Policy for Edumania

**Effective Date:** September 21, 2026

Welcome to **Edumania** ("the Application"). We are dedicated to protecting your privacy and handling your personal data transparently and securely. This Privacy Policy explains how information is collected, processed, and safeguarded when you use the Edumania mobile application developed by **Raju Kumar Singh** ("Service Provider", "we", "our", or "us").

---

## 1. Information Collection and Use

To provide an engaging, high-performance learning experience, the Application collects the following categories of information:

- **Account & Profile Information:** When you register an account, we collect your name, email address, and profile details. Passwords are never stored in plain text; they are encrypted using one-way cryptographic salted hashing (bcrypt) and stored securely in our MongoDB Atlas database. Authentication is managed using industry-standard JSON Web Tokens (JWT).
- **In-App Purchases & Billing Information:** Digital course purchases on Android devices are processed directly through **Google Play In-App Billing** in full compliance with Google Play Store Policies. **We do not collect, process, or store your credit/debit card details, bank information, or payment credentials.** All financial transactions are managed exclusively and securely by Google Play. Our backend only records purchase confirmation tokens and order IDs to unlock your purchased content.
- **Course Progress & Learning Analytics:** We store your enrolled courses, lesson completion status, and video playback timestamps to enable seamless cross-device learning and automatic lesson resume.
- **Device & Diagnostic Data:** The Application collects technical metadata such as your device model, operating system version, app version, and crash logs to maintain stability, diagnose errors, and deliver optimized app bundles.
- **Over-The-Air (OTA) Updates:** The Application uses **Expo EAS Update** to deliver silent, instant bug fixes and UI updates. During update checks, minimal runtime metadata (app version and platform) is transmitted to determine if a newer bundle is available.

The Application **does not** track or request your precise GPS location.

---

## 2. Third-Party Services

We work with trusted third-party service providers who assist in operating the Application, processing payments, and hosting course content:

- **Google Play Services & Google Play Billing:** Powers native in-app course purchases and Android platform services. ([Google Privacy Policy](https://policies.google.com/privacy))
- **MongoDB Atlas:** Secure cloud database provider used to store user profiles, enrolled courses, and lesson progress. ([MongoDB Privacy Policy](https://www.mongodb.com/legal/privacy-policy))
- **Expo Application Services (EAS):** Manages Over-The-Air updates and runtime distribution. ([Expo Privacy Policy](https://expo.dev/privacy))
- **YouTube API Services:** Delivers video lectures and educational streaming content via embedded players. ([YouTube Terms](https://www.youtube.com/t/terms) / [Google Privacy Policy](https://policies.google.com/privacy))

---

## 3. Account Deletion and User Rights

You maintain full control over your personal data. You have the right to request the complete deletion of your account and all associated records at any time:

- **In-App Deletion:** Open the Edumania app and navigate to **Profile > Settings > Delete Account**.
- **Email Request:** Email us at [rajukumarsingh72090@gmail.com](mailto:rajukumarsingh72090@gmail.com) with the subject *"Account Deletion Request"*.

For complete details on deletion timelines and data handling, please review our [Account Deletion Policy](edumania_account_deletion_policy.html).

---

## 4. Data Security and Encryption

We employ robust safeguards to protect your personal data:
- All network communications between the mobile application and our backend server are encrypted using HTTPS/TLS 256-bit encryption.
- Authentication utilizes JSON Web Tokens (JWT) with secure expiration lifecycles.
- Account passwords undergo cryptographic salted hashing (bcrypt) before storage.
- Email verifications and password resets are verified using private, time-limited one-time verification codes (OTP).

---

## 5. Data Retention

We retain your personal information only as long as your account is active or as necessary to provide you with educational services. When an account is deleted, your personal profile, learning progress, and credentials are permanently purged. Limited non-identifying transaction records may be retained solely to satisfy legal, tax, or regulatory compliance requirements.

---

## 6. Children's Privacy

The Application is designed for general audiences and does not knowingly collect personally identifiable information from children under the age of 13. If you believe that a child under 13 has provided us with personal data, please contact us immediately, and we will promptly delete such information from our servers.

---

## 7. Changes to This Privacy Policy

We may update our Privacy Policy periodically. Any modifications will be posted directly on this page with an updated Effective Date. We encourage you to review this Privacy Policy periodically.

---

## 8. Contact Us

If you have questions, feedback, or privacy concerns regarding this Privacy Policy or our data practices:

- **Developer:** Raju Kumar Singh
- **Application:** Edumania (`com.rajukumarexpo.edumania`)
- **Email:** [rajukumarsingh72090@gmail.com](mailto:rajukumarsingh72090@gmail.com)

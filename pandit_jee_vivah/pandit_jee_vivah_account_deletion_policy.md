# 🗑️ Account & Data Deletion Policy — Pandit Jee Vivah

**Application Name:** Pandit Jee Vivah  
**Package Name:** `com.panditjeevivah.app`  
**Developer / Owner:** Raju Kumar Singh  
**Effective Date:** September 28, 2026  
**Official Deletion Email:** `rajukumarsingh72090@gmail.com`  
**Helpline Number:** `+91 7209078494`  

---

## Google Play Data Safety Compliance Notice

In compliance with Google Play Store User Data policies, **Pandit Jee Vivah** offers a transparent and accessible mechanism for members to request complete, permanent account deletion and erasure of all associated matrimonial data — both **directly within the mobile app** and via **email / web request** for users who have uninstalled the app.

---

## 1. User Right to Complete Data Erasure

Every member has the unconditional right to permanently delete their account and wipe all personal records, horoscope details, photographs, and chat logs. Account deletion is permanent and cannot be undone.

---

## 2. How to Request Account Deletion

### Method 1: In-App Self-Service Deletion (Instant)
1. Open the **Pandit Jee Vivah** Android app.
2. Tap the **Profile** tab in the bottom navigation bar.
3. Open **Settings & Privacy** -> **Account Security**.
4. Tap **"Delete Account & Wipe Data"**.
5. Review the summary of data to be permanently erased.
6. Confirm with your account password or email OTP verification.
7. Tap **"Permanently Delete My Account"**. Your account is immediately purged and session tokens revoked.

### Method 2: Web & Email Request (For Users Without the App)
If you have uninstalled the app or cannot access your phone:
- Send an email from your **registered email address** to:  
  **`rajukumarsingh72090@gmail.com`**
- **Subject Line:** `Account Deletion Request - Pandit Jee Vivah`
- **Include in the Body:**
  1. Your Full Name
  2. Registered Mobile Number
  3. Matrimony ID (if known, e.g., `BBM-XXXXXX`)
- **Helpline Assistance:** You may also call our 24x7 Customer Helpline at **`+91 7209078494`** for verification and deletion support.

---

## 3. Data Categories Permanently Deleted

When account deletion is triggered, our system executes an atomic purge across all database collections (`authService.deleteUserAccount`):

| Data Category | Specific Data Erased | Status |
|---|---|---|
| **User & Authentication** | Name, email, mobile number, password hash, DOB, gender, JWT tokens | **Permanently Deleted** |
| **Matrimonial Profile** | Subcaste, Gothram, height, marital status, mother tongue, bio | **Permanently Deleted** |
| **Education & Career** | College, degrees, employer, designation, annual income range | **Permanently Deleted** |
| **Family Background** | Parents' details, siblings, family values, and economic status | **Permanently Deleted** |
| **Horoscope & Astrological Data** | Kundli chart, Rashi, Nakshatra, Manglik status, birth time & place | **Permanently Deleted** |
| **Partner Preferences** | Age filters, education preference, subcaste filters, income expectations | **Permanently Deleted** |
| **Photographs & Media** | All profile photos and verification media removed from Cloudinary CDN | **Permanently Deleted** |
| **Matches & Interactions** | Sent/received interest requests, shortlisted candidates, match history | **Permanently Deleted** |
| **Chat & Messages** | All direct one-to-one messages and conversation history | **Permanently Deleted** |

---

## 4. Deletion Processing Timeline

- **In-App Deletion:** **Immediate (< 1 second)** upon user confirmation.
- **Email / Helpline Requests:** Completed within **24 to 48 hours** following verification.

---

## 5. Data Retention Exceptions (Legal Compliance)

- **Personal Profile Data:** 0% retained. All matrimonial profile and personal data is permanently destroyed.
- **Financial Transaction Records:** Pursuant to Indian statutory tax and financial accounting requirements (GST Act, financial audit laws), anonymized billing records (Razorpay Order ID, Google Play purchase tokens, invoice numbers, amounts, and dates) are retained strictly for the statutory retention period. These records cannot be used to restore or reconstruct a matrimonial profile.

---

## 6. Confirmation of Deletion

- **In-App:** Instant notification: *"Your account and all associated matrimonial data have been permanently deleted."* Followed by automatic logout.
- **Email Request:** A confirmation email dispatched via Brevo confirming full erasure.

---

## 7. Contact Information

For any questions regarding account or data deletion:
- **Developer:** Raju Kumar Singh
- **Application:** Pandit Jee Vivah (`com.panditjeevivah.app`)
- **Email:** `rajukumarsingh72090@gmail.com`
- **Helpline:** `+91 7209078494` / `+91 7542818621`

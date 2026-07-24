#  Vachan — Offline Voice-First Financial Eligibility Assistant

> **Empowering India's informal workforce with accessible, explainable financial guidance — anytime, anywhere.**

##  Overview

**Vachan** is a voice-first, offline financial literacy and eligibility assistant designed for India's informal workforce — including gig workers, small vendors, rural entrepreneurs, and individuals who have real economic activity but lack formal credit histories.

Millions of people generate income and maintain transaction records, yet struggle to access financial schemes and credit due to:

- Limited digital literacy
- Complex financial documentation
- Lack of formal credit scores
- Poor internet connectivity
- Language barriers

Vachan bridges this gap by allowing users to **speak, type, or upload financial documents**, analyze their information locally, determine eligibility using machine learning, and explain the result in simple, accessible language.

---

#  Key Features

##  Multimodal Financial Assistance

Users can interact naturally through:

- **Voice input** — for users who prefer speaking over typing
- **Text input** — for digitally comfortable users
- **Document images** — upload loan forms, government scheme documents, or handwritten financial records

The system extracts relevant financial information and processes it through an eligibility pipeline.

---

##  Fully Offline Capability

Vachan is designed for environments with unreliable connectivity.

Once the model is downloaded:

- No cloud LLM dependency  
- No continuous internet requirement  
- Data stays on-device  
- Works in low-connectivity regions

---

##  AI-Powered Eligibility Prediction

The assistant uses a trained machine learning classifier to evaluate user information against financial eligibility criteria.

The system considers factors such as:

- Income patterns
- Transaction history
- Employment type
- Financial documentation
- User-provided information

---

##  Confidence-Aware AI Responses

Vachan does not present predictions as absolute truths.

Every recommendation includes a confidence indicator:

| Indicator | Meaning |
|---|---|
| 🟢 High Confidence | Strong match with available criteria |
| 🟡 Medium Confidence | Possible eligibility, but additional verification may help |
| 🔴 Low Confidence | Insufficient evidence — consult a human advisor |

This ensures responsible AI usage and prevents misleading financial decisions.

---

## 🗣️ Vernacular Financial Explanations

Instead of complex banking terminology, Vachan explains outcomes in simple, user-friendly language.

Example:

> "Based on your income and transaction history, you may qualify for this scheme. You should verify your documents before applying."

The goal is not just prediction — but **financial understanding**.

---

#  Target Users

Vachan is specifically built for:

###  Gig Workers
- Delivery partners
- Freelancers
- Independent workers

###  Small Vendors
- Street vendors
- Local shop owners
- Micro-business operators

###  Rural Users
- Farmers
- Self-employed individuals
- Informal workers

These users often have economic activity but limited access to formal financial systems.


# 🏗️ System Architecture

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

##  Vernacular Financial Explanations

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

---

#  Technology Stack

## Backend
- Python
- Machine Learning Classification Pipeline
- Document Processing / OCR
- Speech Processing
- Offline Inference Engine

## Frontend
- React
- Modern responsive UI
- Voice interaction interface

## AI Components
- Trained eligibility classifier
- Confidence scoring mechanism
- Multimodal input processing

---

#  Why Vachan?

Traditional financial systems often assume:

- Stable internet access
- High digital literacy
- Formal credit history
- Ability to understand complex documentation

However, many users outside the formal economy do not fit these assumptions.

Vachan focuses on **real people with real financial activity**, helping them understand opportunities they may already qualify for.

---

#  Future Roadmap

- Support for more Indian languages
- Integration with additional government schemes
- Improved handwritten document understanding
- Personalized financial literacy lessons
- Human advisor connection for uncertain cases
- More robust offline edge deployment

---

#  Responsible AI Principles

Vachan follows responsible AI practices:

- No false certainty  
- Confidence-based recommendations  
- Human verification encouraged for uncertain cases  
- Offline-first privacy approach  
- Designed for accessibility

---

#  Contributors

Built with the goal of making financial assistance more accessible, understandable, and inclusive.

---

##  License

This project is developed for educational and innovation purposes.

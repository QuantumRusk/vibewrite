# 🎭 VibeWrite - AI Content Studio

Transform your text with the power of AI. Professional, casual, funny, or custom - VibeWrite rewrites your content in seconds.

## ✨ Live Demo

### 🚀 [**👉 Click Here to Launch VibeWrite Web App**](https://vibewrite-ten.vercel.app/) 

---

## 🚀 Features

| Feature | Description |
| :--- | :--- |
| **🎨 6 Preset Tones** | Professional, Casual, Funny, Inspirational, Formal, Friendly |
| **🎭 Custom Persona** | Write your own instruction (e.g., "like a pirate") |
| **🔍 Auto-Detect** | AI detects the tone of your text |
| **🌐 Multi-Language** | Support for 10+ languages |
| **📊 Diff Highlighter** | See exactly what changed (green = added, red = removed) |
| **📥 Export** | Download as `.txt` or polished PDF |
| **🔊 Read Aloud** | Text-to-speech accessibility |
| **📜 History** | Saves last 20 rewrites locally |
| **⌨️ Keyboard Shortcuts** | `Ctrl + Enter` = Rewrite, `Escape` = Clear |

---

## 🛠️ Tech Stack

* **Framework:** Next.js 16 (App Router)
* **Styling:** Tailwind CSS + Glassmorphism
* **AI Engine:** Google Gemini API
* **Deployment:** Vercel
* **Icons:** Lucide React
* **PDF Export:** html2pdf.js
* **Diff Tracking:** diff library

---

## 🏃 Run Locally

```bash
# Clone the repository
git clone [https://github.com/YOUR_USERNAME/vibewrite.git](https://github.com/YOUR_USERNAME/vibewrite.git)

# Navigate into the project directory
cd vibewrite

# Install dependencies
npm install

# Add your Gemini API key to .env.local
echo "GEMINI_API_KEY=your_api_key_here" > .env.local

# Run development server
npm run dev
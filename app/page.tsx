// import { ArrowRight, Sparkles, FileText, BookOpen, Eye, Download, Shield, Languages, Keyboard, Zap } from 'lucide-react';

// const LandingPage = () => {
//   return (
//     <div className="min-h-screen bg-gradient-to-b from-slate-50 to-slate-100 dark:from-slate-950 dark:to-slate-900">
//       {/* Sticky Glassmorphism Header with Persistent CTA */}
//       <header className="sticky top-0 z-50 w-full backdrop-blur-lg bg-white/70 dark:bg-slate-950/70 border-b border-slate-200/50 dark:border-slate-800/50 transition-colors duration-300">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <div className="flex items-center justify-between h-16 md:h-20">
//             {/* Logo */}
//             <div className="flex items-center gap-2">
//               <div className="w-8 h-8 rounded-full bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center shadow-lg shadow-purple-500/30">
//                 <Sparkles className="w-4 h-4 text-white" />
//               </div>
//               <span className="text-xl font-bold text-slate-900 dark:text-white">VibeWrite</span>
//               <span className="hidden sm:inline-block text-xs font-medium text-slate-500 dark:text-slate-400 bg-slate-200/50 dark:bg-slate-800/50 px-2 py-0.5 rounded-full">AI Studio</span>
//             </div>
            
//             {/* Navigation Links (Desktop) */}
//             <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-slate-600 dark:text-slate-300">
//               <a href="#features" className="hover:text-slate-900 dark:hover:text-white transition-colors">Features</a>
//               <a href="#how-it-works" className="hover:text-slate-900 dark:hover:text-white transition-colors">How It Works</a>
//             </nav>
            
//             {/* Persistent Launch CTA */}
//             <a 
//               href="/rewrite"
//               target="_blank"
//               rel="noopener noreferrer" 
//               className="group flex items-center gap-2 px-4 py-2.5 bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 text-white text-sm font-semibold rounded-full shadow-lg shadow-purple-500/30 hover:shadow-purple-500/40 transition-all duration-300 hover:scale-105"
//             >
//               Launch App
//               <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
//             </a>
//           </div>
//         </div>
//       </header>

//       {/* Main Content */}
//       <main className="relative">
//         {/* Minimalist Hero Section */}
//         <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-12 pb-16 md:pt-20 md:pb-24 text-center">
//           <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-slate-200/50 dark:bg-slate-800/50 backdrop-blur-sm border border-slate-300/20 dark:border-slate-700/20 text-xs font-medium text-slate-600 dark:text-slate-300 mb-6">
//             <Zap className="w-3.5 h-3.5 text-purple-500" />
//             AI-Powered Content Studio
//           </div>
//           <h1 className="text-5xl sm:text-6xl md:text-7xl font-bold tracking-tight text-slate-900 dark:text-white leading-[1.1]">
//             Transform Your{' '}
//             <span className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 bg-clip-text text-transparent">
//               Text
//             </span>
//             <br />
//             with the Tone of{' '}
//             <span className="bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 bg-clip-text text-transparent">
//               AI
//             </span>
//           </h1>
//           <p className="mt-6 max-w-2xl mx-auto text-lg sm:text-xl text-slate-600 dark:text-slate-300 leading-relaxed">
//             Write, rewrite, and refine. VibeWrite helps you communicate with clarity and creativity—from professional emails to creative stories, in any style you choose.
//           </p>
//           <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
//             <a 
//               href="/rewrite"
//               target="_blank"
//               rel="noopener noreferrer" 
//               className="group flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 text-white text-lg font-semibold rounded-full shadow-xl shadow-purple-500/30 hover:shadow-purple-500/40 transition-all duration-300 hover:scale-105"
//             >
//               Start Writing Free
//               <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
//             </a>
//             <a 
//               href="#features" 
//               className="px-8 py-4 text-slate-700 dark:text-slate-200 text-lg font-medium rounded-full border border-slate-300/50 dark:border-slate-700/50 hover:bg-slate-100 dark:hover:bg-slate-800/50 transition-colors"
//             >
//               Explore Features
//             </a>
//           </div>
//           <p className="mt-6 text-sm text-slate-400 dark:text-slate-500">
//             No account needed. No limits. Powered by Google Gemini AI.
//           </p>
//         </section>

//         {/* Bento Grid Features Section */}
//         <section id="features" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-20 md:pb-28">
//           <div className="text-center mb-12">
//             <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 dark:text-white">
//               Designed for{' '}
//               <span className="bg-gradient-to-r from-indigo-500 to-purple-500 bg-clip-text text-transparent">
//                 Creative Flow
//               </span>
//             </h2>
//             <p className="mt-3 text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
//               Everything you need to rewrite, refine, and reinvent your content.
//             </p>
//           </div>
          
//           {/* Bento Grid: 3x2 */}
//           <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
//             {/* Card 1: AI Rewriting */}
//             <div className="group relative p-6 rounded-2xl bg-white/60 dark:bg-slate-900/60 backdrop-blur-sm border border-slate-200/50 dark:border-slate-700/50 shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1.5 hover:border-indigo-500/30 dark:hover:border-indigo-400/30">
//               <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-indigo-500/20 to-purple-500/20 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
//                 <Sparkles className="w-6 h-6 text-indigo-600 dark:text-indigo-400" />
//               </div>
//               <h3 className="text-lg font-semibold text-slate-900 dark:text-white">AI Rewriting</h3>
//               <p className="mt-2 text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
//                 Choose from 6 preset tones or create your own custom persona. Transform any text in seconds.
//               </p>
//             </div>

//             {/* Card 2: Formats & Export */}
//             <div className="group relative p-6 rounded-2xl bg-white/60 dark:bg-slate-900/60 backdrop-blur-sm border border-slate-200/50 dark:border-slate-700/50 shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1.5 hover:border-purple-500/30 dark:hover:border-purple-400/30">
//               <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-purple-500/20 to-pink-500/20 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
//                 <Download className="w-6 h-6 text-purple-600 dark:text-purple-400" />
//               </div>
//               <h3 className="text-lg font-semibold text-slate-900 dark:text-white">Export Any Format</h3>
//               <p className="mt-2 text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
//                 Download your rewritten text as a polished PDF or clean .txt file with one click.
//               </p>
//             </div>

//             {/* Card 3: Privacy First */}
//             <div className="group relative p-6 rounded-2xl bg-white/60 dark:bg-slate-900/60 backdrop-blur-sm border border-slate-200/50 dark:border-slate-700/50 shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1.5 hover:border-emerald-500/30 dark:hover:border-emerald-400/30">
//               <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-emerald-500/20 to-teal-500/20 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
//                 <Shield className="w-6 h-6 text-emerald-600 dark:text-emerald-400" />
//               </div>
//               <h3 className="text-lg font-semibold text-slate-900 dark:text-white">Privacy First</h3>
//               <p className="mt-2 text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
//                 Your history is stored locally. No data is sent to our servers—only directly to the AI API.
//               </p>
//             </div>

//             {/* Card 4: Accessibility */}
//             <div className="group relative p-6 rounded-2xl bg-white/60 dark:bg-slate-900/60 backdrop-blur-sm border border-slate-200/50 dark:border-slate-700/50 shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1.5 hover:border-cyan-500/30 dark:hover:border-cyan-400/30">
//               <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-cyan-500/20 to-blue-500/20 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
//                 <Languages className="w-6 h-6 text-cyan-600 dark:text-cyan-400" />
//               </div>
//               <h3 className="text-lg font-semibold text-slate-900 dark:text-white">Accessibility Built-In</h3>
//               <p className="mt-2 text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
//                 Listen to your text with Read Aloud. Supports multiple languages and text-to-speech.
//               </p>
//             </div>

//             {/* Card 5: Diff Viewer */}
//             <div className="group relative p-6 rounded-2xl bg-white/60 dark:bg-slate-900/60 backdrop-blur-sm border border-slate-200/50 dark:border-slate-700/50 shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1.5 hover:border-amber-500/30 dark:hover:border-amber-400/30">
//               <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-amber-500/20 to-orange-500/20 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
//                 <Eye className="w-6 h-6 text-amber-600 dark:text-amber-400" />
//               </div>
//               <h3 className="text-lg font-semibold text-slate-900 dark:text-white">Smart Diff Viewer</h3>
//               <p className="mt-2 text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
//                 See exactly what changed. Added words highlighted in green, removed in red.
//               </p>
//             </div>

//             {/* Card 6: Keyboard Shortcuts */}
//             <div className="group relative p-6 rounded-2xl bg-white/60 dark:bg-slate-900/60 backdrop-blur-sm border border-slate-200/50 dark:border-slate-700/50 shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1.5 hover:border-rose-500/30 dark:hover:border-rose-400/30">
//               <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-rose-500/20 to-pink-500/20 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
//                 <Keyboard className="w-6 h-6 text-rose-600 dark:text-rose-400" />
//               </div>
//               <h3 className="text-lg font-semibold text-slate-900 dark:text-white">Keyboard Shortcuts</h3>
//               <p className="mt-2 text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
//                 Speed up your workflow. Use Ctrl+Enter to rewrite and Escape to clear.
//               </p>
//             </div>
//           </div>
//         </section>

//         {/* How It Works Section */}
//         <section id="how-it-works" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-20 md:pb-28">
//           <div className="text-center mb-12">
//             <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 dark:text-white">
//               How It{' '}
//               <span className="bg-gradient-to-r from-indigo-500 to-purple-500 bg-clip-text text-transparent">
//                 Works
//               </span>
//             </h2>
//             <p className="mt-3 text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
//               Three simple steps to transform your text.
//             </p>
//           </div>
//           <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
//             {[
//               { step: "1", title: "Paste Your Text", desc: "Copy and paste any text you want to rewrite." },
//               { step: "2", title: "Choose Your Tone", desc: "Select a preset or create a custom persona." },
//               { step: "3", title: "Get Your Result", desc: "Your rewritten text is ready to copy, download, or share." }
//             ].map((item) => (
//               <div key={item.step} className="relative p-6 text-center">
//                 <div className="w-14 h-14 mx-auto rounded-full bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center text-white text-2xl font-bold shadow-lg shadow-purple-500/30">
//                   {item.step}
//                 </div>
//                 <h3 className="mt-4 text-lg font-semibold text-slate-900 dark:text-white">{item.title}</h3>
//                 <p className="mt-2 text-sm text-slate-600 dark:text-slate-400">{item.desc}</p>
//               </div>
//             ))}
//           </div>
//         </section>
//       </main>

//       {/* Floating Dock CTA (Mobile Friendly) */}
//       <div className="fixed bottom-6 left-1/2 -translate-x-1/2 z-50 md:hidden">
//         <a 
//           href="/rewrite"
//           target="_blank"
//           rel="noopener noreferrer" 
//           className="flex items-center gap-2 px-6 py-3.5 bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 text-white text-sm font-semibold rounded-full shadow-2xl shadow-purple-500/40 transition-all duration-300 hover:scale-105"
//         >
//           Launch App
//           <ArrowRight className="w-4 h-4" />
//         </a>
//       </div>

//       {/* Footer */}
//       <footer className="border-t border-slate-200/50 dark:border-slate-800/50 py-8">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-slate-500 dark:text-slate-400">
//           <p>© 2026 VibeWrite. Built for MicroCraft Vibeathon.</p>
//           <div className="flex items-center gap-4">
//             <span>⚡ Powered by Google Gemini AI</span>
//           </div>
//         </div>
//       </footer>
//     </div>
//   );
// };

// export default LandingPage;
//---------------------------------------------------------------------------------//

import { ArrowRight, Sparkles, FileText, BookOpen, Eye, Download, Shield, Languages, Keyboard, Zap } from 'lucide-react';

const LandingPage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-slate-100 dark:from-slate-950 dark:to-slate-900">
      {/* Sticky Glassmorphism Header */}
      <header className="sticky top-0 z-50 w-full backdrop-blur-lg bg-white/70 dark:bg-slate-950/70 border-b border-slate-200/50 dark:border-slate-800/50 transition-colors duration-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-14 sm:h-16 md:h-20">
            {/* Logo */}
            <div className="flex items-center gap-1.5 sm:gap-2">
              <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center shadow-lg shadow-purple-500/30">
                <Sparkles className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-white" />
              </div>
              <span className="text-base sm:text-xl font-bold text-slate-900 dark:text-white">VibeWrite</span>
              <span className="hidden sm:inline-block text-xs font-medium text-slate-500 dark:text-slate-400 bg-slate-200/50 dark:bg-slate-800/50 px-2 py-0.5 rounded-full">AI Studio</span>
            </div>
            
            {/* Navigation Links - Hidden on mobile */}
            <nav className="hidden md:flex items-center gap-6 lg:gap-8 text-sm font-medium text-slate-600 dark:text-slate-300">
              <a href="#features" className="hover:text-slate-900 dark:hover:text-white transition-colors">Features</a>
              <a href="#how-it-works" className="hover:text-slate-900 dark:hover:text-white transition-colors">How It Works</a>
            </nav>
            
            {/* Desktop CTA */}
            <a 
              href="/rewrite" 
              target="_blank"
              rel="noopener noreferrer"
              className="hidden sm:flex items-center gap-1.5 sm:gap-2 px-3 sm:px-4 py-1.5 sm:py-2.5 bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 text-white text-xs sm:text-sm font-semibold rounded-full shadow-lg shadow-purple-500/30 hover:shadow-purple-500/40 transition-all duration-300 hover:scale-105"
            >
              <span className="hidden xs:inline">Launch</span> App
              <ArrowRight className="w-3 h-3 sm:w-4 sm:h-4 group-hover:translate-x-1 transition-transform" />
            </a>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="relative">
        {/* Hero Section - Mobile Optimized */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 sm:pt-12 md:pt-20 pb-12 sm:pb-16 md:pb-24 text-center">
          <div className="inline-flex items-center gap-1.5 sm:gap-2 px-2.5 sm:px-3 py-1 sm:py-1.5 rounded-full bg-slate-200/50 dark:bg-slate-800/50 backdrop-blur-sm border border-slate-300/20 dark:border-slate-700/20 text-[10px] sm:text-xs font-medium text-slate-600 dark:text-slate-300 mb-4 sm:mb-6">
            <Zap className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-purple-500" />
            AI-Powered Content Studio
          </div>
          
          <h1 className="text-3xl xs:text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight text-slate-900 dark:text-white leading-[1.1]">
            Transform Your{' '}
            <span className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 bg-clip-text text-transparent">
              Text
            </span>
            <br className="hidden xs:block" />
            with the Tone of{' '}
            <span className="bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 bg-clip-text text-transparent">
              AI
            </span>
          </h1>
          
          <p className="mt-4 sm:mt-6 max-w-2xl mx-auto text-sm sm:text-base md:text-lg lg:text-xl text-slate-600 dark:text-slate-300 leading-relaxed px-2">
            Write, rewrite, and refine. VibeWrite helps you communicate with clarity and creativity—from professional emails to creative stories, in any style you choose.
          </p>
          
          <div className="mt-6 sm:mt-10 flex flex-col xs:flex-row items-center justify-center gap-3 sm:gap-4 px-2">
            <a 
              href="/rewrite" 
              target="_blank"
              rel="noopener noreferrer"
              className="group w-full xs:w-auto flex items-center justify-center gap-2 px-6 sm:px-8 py-3 sm:py-4 bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 text-white text-sm sm:text-base lg:text-lg font-semibold rounded-full shadow-xl shadow-purple-500/30 hover:shadow-purple-500/40 transition-all duration-300 hover:scale-105"
            >
              Start Writing Free
              <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-x-1 transition-transform" />
            </a>
            <a 
              href="#features" 
              className="w-full xs:w-auto px-6 sm:px-8 py-3 sm:py-4 text-slate-700 dark:text-slate-200 text-sm sm:text-base lg:text-lg font-medium rounded-full border border-slate-300/50 dark:border-slate-700/50 hover:bg-slate-100 dark:hover:bg-slate-800/50 transition-colors text-center"
            >
              Explore Features
            </a>
          </div>
          
          <p className="mt-4 sm:mt-6 text-xs sm:text-sm text-slate-400 dark:text-slate-500">
            No account needed. No limits. Powered by Google Gemini AI.
          </p>
        </section>

        {/* Bento Grid Features - Responsive */}
        <section id="features" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-12 sm:pb-16 md:pb-20 lg:pb-28">
          <div className="text-center mb-8 sm:mb-12">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-slate-900 dark:text-white">
              Designed for{' '}
              <span className="bg-gradient-to-r from-indigo-500 to-purple-500 bg-clip-text text-transparent">
                Creative Flow
              </span>
            </h2>
            <p className="mt-2 sm:mt-3 text-slate-600 dark:text-slate-400 max-w-2xl mx-auto text-sm sm:text-base px-2">
              Everything you need to rewrite, refine, and reinvent your content.
            </p>
          </div>
          
          {/* Grid: 1 column on mobile, 2 on tablet, 3 on desktop */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
            {/* Card 1 */}
            <div className="group relative p-4 sm:p-6 rounded-2xl bg-white/60 dark:bg-slate-900/60 backdrop-blur-sm border border-slate-200/50 dark:border-slate-700/50 shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1.5 hover:border-indigo-500/30 dark:hover:border-indigo-400/30">
              <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-gradient-to-br from-indigo-500/20 to-purple-500/20 flex items-center justify-center mb-3 sm:mb-4 group-hover:scale-110 transition-transform">
                <Sparkles className="w-5 h-5 sm:w-6 sm:h-6 text-indigo-600 dark:text-indigo-400" />
              </div>
              <h3 className="text-base sm:text-lg font-semibold text-slate-900 dark:text-white">AI Rewriting</h3>
              <p className="mt-1 sm:mt-2 text-xs sm:text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                Choose from 6 preset tones or create your own custom persona. Transform any text in seconds.
              </p>
            </div>

            {/* Card 2 */}
            <div className="group relative p-4 sm:p-6 rounded-2xl bg-white/60 dark:bg-slate-900/60 backdrop-blur-sm border border-slate-200/50 dark:border-slate-700/50 shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1.5 hover:border-purple-500/30 dark:hover:border-purple-400/30">
              <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-gradient-to-br from-purple-500/20 to-pink-500/20 flex items-center justify-center mb-3 sm:mb-4 group-hover:scale-110 transition-transform">
                <Download className="w-5 h-5 sm:w-6 sm:h-6 text-purple-600 dark:text-purple-400" />
              </div>
              <h3 className="text-base sm:text-lg font-semibold text-slate-900 dark:text-white">Export Any Format</h3>
              <p className="mt-1 sm:mt-2 text-xs sm:text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                Download your rewritten text as a polished PDF or clean .txt file with one click.
              </p>
            </div>

            {/* Card 3 */}
            <div className="group relative p-4 sm:p-6 rounded-2xl bg-white/60 dark:bg-slate-900/60 backdrop-blur-sm border border-slate-200/50 dark:border-slate-700/50 shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1.5 hover:border-emerald-500/30 dark:hover:border-emerald-400/30">
              <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-gradient-to-br from-emerald-500/20 to-teal-500/20 flex items-center justify-center mb-3 sm:mb-4 group-hover:scale-110 transition-transform">
                <Shield className="w-5 h-5 sm:w-6 sm:h-6 text-emerald-600 dark:text-emerald-400" />
              </div>
              <h3 className="text-base sm:text-lg font-semibold text-slate-900 dark:text-white">Privacy First</h3>
              <p className="mt-1 sm:mt-2 text-xs sm:text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                Your history is stored locally. No data is sent to our servers—only directly to the AI API.
              </p>
            </div>

            {/* Card 4 */}
            <div className="group relative p-4 sm:p-6 rounded-2xl bg-white/60 dark:bg-slate-900/60 backdrop-blur-sm border border-slate-200/50 dark:border-slate-700/50 shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1.5 hover:border-cyan-500/30 dark:hover:border-cyan-400/30">
              <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-gradient-to-br from-cyan-500/20 to-blue-500/20 flex items-center justify-center mb-3 sm:mb-4 group-hover:scale-110 transition-transform">
                <Languages className="w-5 h-5 sm:w-6 sm:h-6 text-cyan-600 dark:text-cyan-400" />
              </div>
              <h3 className="text-base sm:text-lg font-semibold text-slate-900 dark:text-white">Accessibility</h3>
              <p className="mt-1 sm:mt-2 text-xs sm:text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                Listen to your text with Read Aloud. Supports multiple languages and text-to-speech.
              </p>
            </div>

            {/* Card 5 */}
            <div className="group relative p-4 sm:p-6 rounded-2xl bg-white/60 dark:bg-slate-900/60 backdrop-blur-sm border border-slate-200/50 dark:border-slate-700/50 shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1.5 hover:border-amber-500/30 dark:hover:border-amber-400/30">
              <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-gradient-to-br from-amber-500/20 to-orange-500/20 flex items-center justify-center mb-3 sm:mb-4 group-hover:scale-110 transition-transform">
                <Eye className="w-5 h-5 sm:w-6 sm:h-6 text-amber-600 dark:text-amber-400" />
              </div>
              <h3 className="text-base sm:text-lg font-semibold text-slate-900 dark:text-white">Smart Diff Viewer</h3>
              <p className="mt-1 sm:mt-2 text-xs sm:text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                See exactly what changed. Added words highlighted in green, removed in red.
              </p>
            </div>

            {/* Card 6 */}
            <div className="group relative p-4 sm:p-6 rounded-2xl bg-white/60 dark:bg-slate-900/60 backdrop-blur-sm border border-slate-200/50 dark:border-slate-700/50 shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1.5 hover:border-rose-500/30 dark:hover:border-rose-400/30">
              <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-gradient-to-br from-rose-500/20 to-pink-500/20 flex items-center justify-center mb-3 sm:mb-4 group-hover:scale-110 transition-transform">
                <Keyboard className="w-5 h-5 sm:w-6 sm:h-6 text-rose-600 dark:text-rose-400" />
              </div>
              <h3 className="text-base sm:text-lg font-semibold text-slate-900 dark:text-white">Shortcuts</h3>
              <p className="mt-1 sm:mt-2 text-xs sm:text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                Speed Up your Workflow. Use Ctrl+Enter to rewrite, Escape to clear.
              </p>
            </div>
          </div>
        </section>

        {/* How It Works - Responsive */}
        <section id="how-it-works" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-12 sm:pb-16 md:pb-20 lg:pb-28">
          <div className="text-center mb-8 sm:mb-12">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-slate-900 dark:text-white">
              How It{' '}
              <span className="bg-gradient-to-r from-indigo-500 to-purple-500 bg-clip-text text-transparent">
                Works
              </span>
            </h2>
            <p className="mt-2 sm:mt-3 text-slate-600 dark:text-slate-400 max-w-2xl mx-auto text-sm sm:text-base px-2">
              Three simple steps to transform your text.
            </p>
          </div>
          
          <div className="grid grid-cols-1 xs:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {[
              { step: "1", title: "Paste Your Text", desc: "Copy and paste any text you want to rewrite." },
              { step: "2", title: "Choose Your Tone", desc: "Select a preset or create a custom persona." },
              { step: "3", title: "Get Your Result", desc: "Your rewritten text is ready to copy, download, or share." }
            ].map((item) => (
              <div key={item.step} className="relative p-4 sm:p-6 text-center">
                <div className="w-12 h-12 sm:w-14 sm:h-14 mx-auto rounded-full bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center text-white text-xl sm:text-2xl font-bold shadow-lg shadow-purple-500/30">
                  {item.step}
                </div>
                <h3 className="mt-3 sm:mt-4 text-base sm:text-lg font-semibold text-slate-900 dark:text-white">{item.title}</h3>
                <p className="mt-1 sm:mt-2 text-xs sm:text-sm text-slate-600 dark:text-slate-400">{item.desc}</p>
              </div>
            ))}
          </div>
        </section>
      </main>

      {/* Floating Dock CTA - Mobile Only */}
      <div className="fixed bottom-4 sm:bottom-6 left-1/2 -translate-x-1/2 z-50 md:hidden">
        <a 
          href="/rewrite" 
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 px-5 sm:px-6 py-2.5 sm:py-3.5 bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 text-white text-xs sm:text-sm font-semibold rounded-full shadow-2xl shadow-purple-500/40 transition-all duration-300 hover:scale-105"
        >
          Launch App
          <ArrowRight className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
        </a>
      </div>

      {/* Footer - Responsive */}
      <footer className="border-t border-slate-200/50 dark:border-slate-800/50 py-6 sm:py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-3 sm:gap-4 text-xs sm:text-sm text-slate-500 dark:text-slate-400">
          <p>© 2026 VibeWrite. Built for MicroCraft Vibeathon.</p>
          <div className="flex items-center gap-3 sm:gap-4">
            <span>⚡ Powered by Google Gemini AI</span>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default LandingPage;
'use client';

import { useState, useEffect } from 'react';
import { toast, Toaster } from 'react-hot-toast';
import * as Diff from 'diff';
import { 
  Sparkles, 
  Copy, 
  Check, 
  RefreshCw,
  FileText,
  Send,
  Palette,
  Moon,
  Sun,
  Download,
  Clock,
  Trash2,
  FileDown,
  History,
  Zap,
  ChevronDown,
  ChevronUp
} from 'lucide-react';

// const TONES1 = [
//   { value: 'auto', label: '🎯 Auto-Detect', color: 'bg-gradient-to-r from-purple-500 to-pink-500' },
//   { value: 'professional', label: '💼 Professional', color: 'bg-blue-500' },
//   { value: 'casual', label: '😊 Casual', color: 'bg-green-500' },
//   { value: 'funny', label: '😂 Funny', color: 'bg-yellow-500' },
//   { value: 'inspirational', label: '🌟 Inspirational', color: 'bg-purple-500' },
//   { value: 'formal', label: '📜 Formal', color: 'bg-indigo-500' },
//   { value: 'friendly', label: '🤝 Friendly', color: 'bg-pink-500' },
//];

const TONES = [
  { value: 'auto', label: '🎯 Auto-Detect', color: 'bg-gradient-to-r from-purple-500 to-pink-500' },
  { value: 'professional', label: '💼 Professional', color: 'bg-blue-500' },
  { value: 'casual', label: '😊 Casual', color: 'bg-green-500' },
  { value: 'funny', label: '😂 Funny', color: 'bg-yellow-500' },
  { value: 'inspirational', label: '🌟 Inspirational', color: 'bg-purple-500' },
  { value: 'formal', label: '📜 Formal', color: 'bg-indigo-500' },
  { value: 'friendly', label: '🤝 Friendly', color: 'bg-pink-500' },
];

const LANGUAGES = [
  { value: 'en', label: '🇬🇧 English' },
  { value: 'es', label: '🇪🇸 Spanish' },
  { value: 'fr', label: '🇫🇷 French' },
  { value: 'de', label: '🇩🇪 German' },
  { value: 'it', label: '🇮🇹 Italian' },
  { value: 'pt', label: '🇵🇹 Portuguese' },
  { value: 'hi', label: '🇮🇳 Hindi' },
  { value: 'ja', label: '🇯🇵 Japanese' },
  { value: 'ko', label: '🇰🇷 Korean' },
  { value: 'zh', label: '🇨🇳 Chinese' },
];

const MAX_CHARS = 5000;
const MAX_WORDS = 1000;

export default function Home() {
  // State
  const [inputText, setInputText] = useState('');
  const [selectedTone, setSelectedTone] = useState('professional');
  const [outputText, setOutputText] = useState('');
  const [selectedLanguage, setSelectedLanguage] = useState('en');
  const [isLoading, setIsLoading] = useState(false);
  const [showDiff, setShowDiff] = useState(false);
  const [customPersona, setCustomPersona] = useState('');
  const [showCustomPersona, setShowCustomPersona] = useState(false);
  const [isCopied, setIsCopied] = useState(false);
  const [darkMode, setDarkMode] = useState(true);
  const [isReading, setIsReading] = useState(false);
  const [history, setHistory] = useState<Array<{ original: string; rewritten: string; tone: string; timestamp: string }>>([]);
  const [showHistory, setShowHistory] = useState(false);
  const [charCount, setCharCount] = useState(0);
  const [wordCount, setWordCount] = useState(0);

  // Load history from localStorage on mount
  useEffect(() => {
    const savedHistory = localStorage.getItem('vibeHistory');
    if (savedHistory) {
      try {
        setHistory(JSON.parse(savedHistory));
      } catch (e) {
        console.error('Failed to load history');
      }
    }
  }, []);

  // Save history to localStorage when it changes
  useEffect(() => {
    localStorage.setItem('vibeHistory', JSON.stringify(history));
  }, [history]);

  // Update character and word count
  useEffect(() => {
    const text = inputText || '';
    setCharCount(text.length);
    const words = text.trim() === '' ? 0 : text.trim().split(/\s+/).length;
    setWordCount(words);
  }, [inputText]);

  // Check if text exceeds limits
  const isOverLimit = charCount > MAX_CHARS || wordCount > MAX_WORDS;

  const handleRewrite = async () => {
    if (!inputText.trim()) {
      toast.error('Please enter some text to rewrite!');
      return;
    }

    if (isOverLimit) {
      toast.error(`Text exceeds limits! Max ${MAX_CHARS} characters or ${MAX_WORDS} words.`);
      return;
    }

    setIsLoading(true);
    try {
      // Determine what to send: custom persona OR preset tone
const finalTone = customPersona.trim() ? customPersona : selectedTone;
const isCustom = !!customPersona.trim();

const response = await fetch('/api/rewrite', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify({ 
    text: inputText, 
    tone: finalTone,
    language: selectedLanguage,
    isCustom: isCustom  // Tell backend if it's a custom persona
  }),
});

      const data = await response.json();
      
      if (data.error) {
        toast.error(data.error);
      } else {
       setOutputText(data.rewrittenText);
             if (data.detectedTone) {
               toast.success(`🎯 Detected tone: ${data.detectedTone}`);
          }

        // Show appropriate success message
if (customPersona.trim()) {
  toast.success(`🎭 Rewritten with custom persona: "${customPersona}"`);
} else if (data.detectedTone) {
  toast.success(`🎯 Detected tone: ${data.detectedTone}`);
} else {
  toast.success('✨ Text rewritten successfully!');
}

// Optionally clear custom persona after use
// setCustomPersona('');
// setShowCustomPersona(false);
        
        // Save to history
        const newEntry = {
          original: inputText,
          rewritten: data.rewrittenText,
          tone: selectedTone,
          timestamp: new Date().toLocaleString()
        };
        setHistory(prev => [newEntry, ...prev].slice(0, 20)); // Keep last 20
        
        toast.success('✨ Text rewritten successfully!');
      }
    } catch (error) {
      toast.error('Failed to rewrite. Try again!');
    } finally {
      setIsLoading(false);
    }
  };

    // Diff Highlighter Functions
  const getWordDiff = (original: string, rewritten: string) => {
    if (!original || !rewritten) return [];
    
    // Split into words (handle punctuation)
    const originalWords = original.match(/\S+|\s+/g) || [];
    const rewrittenWords = rewritten.match(/\S+|\s+/g) || [];
    
    // Use diff library for word-by-word comparison
    const diffResult = Diff.diffWords(original, rewritten);
    
    return diffResult;
  };

  const renderDiff = (original: string, rewritten: string) => {
    if (!original || !rewritten) return null;
    
    const diffResult = getWordDiff(original, rewritten);
    
    return diffResult.map((part, index) => {
      // Determine style based on diff type
      let className = '';
      if (part.added) {
        className = 'bg-green-500/30 text-green-300 px-0.5 rounded font-medium';
      } else if (part.removed) {
        className = 'bg-red-500/30 text-red-300 line-through px-0.5 rounded';
      }
      
      return (
        <span key={index} className={className}>
          {part.value}
        </span>
      );
    });
  };

  const handleCopy = async () => {
    if (!outputText) return;
    await navigator.clipboard.writeText(outputText);
    setIsCopied(true);
    toast.success('📋 Copied to clipboard!');
    setTimeout(() => setIsCopied(false), 2000);
  };

  const handleClear = () => {
    setInputText('');
    setOutputText('');
    toast('🧹 Cleared everything!');
  };

  const handleDownloadTxt = () => {
    if (!outputText) {
      toast.error('Nothing to download!');
      return;
    }
    const blob = new Blob([outputText], { type: 'text/plain' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `rewritten-text-${Date.now()}.txt`;
    a.click();
    URL.revokeObjectURL(url);
    toast.success('📥 Downloaded successfully!');
  };

    const handleReadAloud = () => {
    if (!outputText) {
      toast.error('Nothing to read!');
      return;
    }

    if ('speechSynthesis' in window) {
      if (isReading) {
        window.speechSynthesis.cancel();
        setIsReading(false);
        toast('🔇 Stopped reading');
        return;
      }

      const utterance = new SpeechSynthesisUtterance(outputText);
      utterance.rate = 0.9;
      utterance.pitch = 1;
      utterance.volume = 1;
      
      // Try to use a female voice if available
      const voices = window.speechSynthesis.getVoices();
      const femaleVoice = voices.find(voice => voice.name.includes('Female') || voice.name.includes('Samantha'));
      if (femaleVoice) utterance.voice = femaleVoice;

      utterance.onstart = () => {
        setIsReading(true);
        toast.success('🔊 Reading aloud...');
      };
      
      utterance.onend = () => {
        setIsReading(false);
        toast('🔊 Finished reading');
      };
      
      utterance.onerror = () => {
        setIsReading(false);
        toast.error('Failed to read aloud');
      };

      window.speechSynthesis.speak(utterance);
    } else {
      toast.error('Text-to-speech not supported in this browser');
    }
  };

    const handleDownloadPdf = async () => { // 👈 Added async here
    if (!outputText) {
      toast.error('Nothing to download!');
      return;
    }

    // 💡 Lazily load html2pdf only when the user clicks download on the client side
    const { default: html2pdf } = await import('html2pdf.js');

    // Create a temporary container for PDF content
    const element = document.createElement('div');
    element.innerHTML = `
      <div style="padding: 40px; font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
        <h1 style="color: #7c3aed; font-size: 24px; margin-bottom: 10px;">VibeWrite - AI Rewritten Text</h1>
        <div style="border-bottom: 2px solid #7c3aed; margin-bottom: 20px;"></div>
        <p style="color: #4b5563; font-size: 14px; margin-bottom: 5px;">
          <strong>Tone:</strong> ${TONES.find(t => t.value === selectedTone)?.label || selectedTone}
        </p>
        <p style="color: #4b5563; font-size: 14px; margin-bottom: 20px;">
          <strong>Date:</strong> ${new Date().toLocaleString()}
        </p>
        <div style="background: #f3f4f6; padding: 20px; border-radius: 8px; margin-bottom: 20px;">
          <h3 style="color: #374151; font-size: 16px; margin-bottom: 10px;">Rewritten Text:</h3>
          <p style="color: #1f2937; font-size: 15px; line-height: 1.6; white-space: pre-wrap;">${outputText}</p>
        </div>
        <div style="border-top: 1px solid #e5e7eb; margin-top: 20px; padding-top: 20px; text-align: center; color: #9ca3af; font-size: 12px;">
          Generated by VibeWrite AI Studio
        </div>
      </div>
    `;

    const opt = {
      margin:       1,
      filename:     `vibewrite-${Date.now()}.pdf`,
      image:        { type: 'jpeg', quality: 0.98 },
      html2canvas:  { scale: 2, logging: false },
      jsPDF:        { unit: 'in', format: 'a4', orientation: 'portrait' }
    } as const;

    toast.loading('Generating PDF...', { id: 'pdf' });

    html2pdf().set(opt).from(element).save().then(() => {
      toast.success('📄 PDF downloaded successfully!', { id: 'pdf' });
    }).catch(() => {
      toast.error('Failed to generate PDF', { id: 'pdf' });
    });
  };

  const handleClearHistory = () => {
    if (confirm('Clear all history?')) {
      setHistory([]);
      toast('🗑️ History cleared!');
    }
  };

  const handleUseHistory = (text: string) => {
    setInputText(text);
    setShowHistory(false);
    toast('📝 Text loaded from history!');
  };

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  // Keyboard shortcuts
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      // Ctrl+Enter or Cmd+Enter to rewrite
      if ((e.ctrlKey || e.metaKey) && e.key === 'Enter') {
        e.preventDefault();
        handleRewrite();
      }
      // Escape to clear
      if (e.key === 'Escape') {
        handleClear();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [inputText, selectedTone]);

  return (
    <div className={`min-h-screen transition-colors duration-300 ${
      darkMode 
        ? 'bg-gradient-to-br from-gray-900 via-purple-900 to-indigo-900' 
        : 'bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50'
    }`}>
      <Toaster position="top-right" />
      
      {/* Main Container */}
      <div className="container mx-auto px-4 py-6 max-w-6xl">
        
        {/* Header */}
        <div className={`text-center mb-8 ${darkMode ? 'text-white' : 'text-gray-800'}`}>
          <div className={`inline-flex items-center gap-3 backdrop-blur-lg rounded-full px-6 py-3 mb-4 border ${
            darkMode 
              ? 'bg-white/10 border-white/20' 
              : 'bg-white/60 border-gray-200'
          }`}>
            <Sparkles className="text-yellow-400 w-6 h-6" />
            <span className={`font-bold text-lg ${darkMode ? 'text-white' : 'text-gray-800'}`}>VibeWrite</span>
            <span className={`text-sm ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>✨ AI Content Studio</span>
            <button
              onClick={toggleDarkMode}
              className={`ml-2 p-2 rounded-full transition-all ${
                darkMode 
                  ? 'bg-white/10 hover:bg-white/20 text-yellow-400' 
                  : 'bg-gray-200 hover:bg-gray-300 text-gray-700'
              }`}
            >
              {darkMode ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
            </button>
          </div>
          
          <h1 className="text-4xl md:text-5xl font-bold mb-2 bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
            Rewrite with AI
          </h1>
          <p className={`${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
            Transform your text into any tone. Professional, casual, funny, or inspirational.
          </p>
          <div className={`text-xs mt-1 ${darkMode ? 'text-gray-400' : 'text-gray-500'}`}>
            ⚡ Shortcuts: Ctrl+Enter to rewrite • Escape to clear
          </div>
        </div>

        {/* Main Grid */}
        <div className="grid lg:grid-cols-2 gap-6">
          
          {/* Left: Input */}
          <div className={`backdrop-blur-lg rounded-2xl p-6 border shadow-2xl ${
            darkMode 
              ? 'bg-white/10 border-white/20' 
              : 'bg-white/60 border-gray-200/50'
          }`}>
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center gap-2">
                <FileText className={`w-5 h-5 ${darkMode ? 'text-blue-400' : 'text-blue-600'}`} />
                <h2 className={`font-semibold ${darkMode ? 'text-white' : 'text-gray-800'}`}>Your Text</h2>
              </div>
              <div className={`text-xs ${darkMode ? 'text-gray-400' : 'text-gray-500'}`}>
                {wordCount} words • {charCount} chars
              </div>
            </div>
            
            <textarea
              value={inputText}
              onChange={(e) => setInputText(e.target.value)}
              placeholder="Paste your text here... (max 5000 chars, 1000 words)"
              className={`w-full h-48 p-4 rounded-xl border transition-all resize-none ${
                darkMode 
                  ? 'bg-white/5 text-white placeholder-gray-400 border-white/10 focus:border-purple-500' 
                  : 'bg-white/30 text-gray-800 placeholder-gray-400 border-gray-200 focus:border-purple-500'
              } focus:outline-none`}
            />
            
            {/* Character/Word limit bar */}
            <div className="mt-2 space-y-1">
              <div className="flex justify-between text-xs">
                <span className={darkMode ? 'text-gray-400' : 'text-gray-500'}>Characters</span>
                <span className={charCount > MAX_CHARS ? 'text-red-500 font-bold' : darkMode ? 'text-gray-300' : 'text-gray-600'}>
                  {charCount}/{MAX_CHARS}
                </span>
              </div>
              <div className="w-full h-1 bg-gray-300 rounded-full overflow-hidden">
                <div 
                  className={`h-full transition-all ${charCount > MAX_CHARS ? 'bg-red-500' : 'bg-purple-500'}`}
                  style={{ width: `${Math.min((charCount / MAX_CHARS) * 100, 100)}%` }}
                />
              </div>
              <div className="flex justify-between text-xs">
                <span className={darkMode ? 'text-gray-400' : 'text-gray-500'}>Words</span>
                <span className={wordCount > MAX_WORDS ? 'text-red-500 font-bold' : darkMode ? 'text-gray-300' : 'text-gray-600'}>
                  {wordCount}/{MAX_WORDS}
                </span>
              </div>
              <div className="w-full h-1 bg-gray-300 rounded-full overflow-hidden">
                <div 
                  className={`h-full transition-all ${wordCount > MAX_WORDS ? 'bg-red-500' : 'bg-purple-500'}`}
                  style={{ width: `${Math.min((wordCount / MAX_WORDS) * 100, 100)}%` }}
                />
              </div>
            </div>
            
            <div className="flex flex-wrap gap-2 mt-4">
              {TONES.map((tone) => (
                <button
                  key={tone.value}
                  onClick={() => setSelectedTone(tone.value)}
                  className={`px-3 py-1.5 rounded-full text-xs font-medium transition-all ${
                    selectedTone === tone.value
                      ? `${tone.color} text-white shadow-lg scale-105`
                      : darkMode 
                        ? 'bg-white/10 text-gray-300 hover:bg-white/20'
                        : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                  }`}
                >
                  {tone.label}
                </button>
              ))}
            </div>
                        {/* Custom Persona Toggle */}
            {/* Custom Persona Toggle */}
<div className="mt-4">
  <button
    onClick={() => setShowCustomPersona(!showCustomPersona)}
    className={`flex items-center gap-2 text-sm font-medium transition-all ${
      darkMode ? 'text-purple-400 hover:text-purple-300' : 'text-purple-600 hover:text-purple-700'
    }`}
  >
    <span>{showCustomPersona ? '🔽' : '🎭'}</span>
    {showCustomPersona ? 'Hide Custom Persona' : 'Custom Persona (Advanced)'}
    <span className={`text-xs ${darkMode ? 'text-gray-500' : 'text-gray-400'}`}>
      {showCustomPersona ? '' : '(type your own instruction)'}
    </span>
  </button>
  
  {showCustomPersona && (
    <div className="mt-2">
      <div className="flex gap-2">
        <input
          type="text"
          value={customPersona}
          onChange={(e) => setCustomPersona(e.target.value)}
          placeholder="e.g., like a pirate, as Elon Musk, formal email to professor..."
          className={`flex-1 p-3 rounded-xl text-sm border transition-all ${
            darkMode 
              ? 'bg-white/5 text-white placeholder-gray-400 border-white/10 focus:border-purple-500' 
              : 'bg-white/30 text-gray-800 placeholder-gray-400 border-gray-200 focus:border-purple-500'
          } focus:outline-none`}
        />
        {customPersona && (
          <button
            onClick={() => setCustomPersona('')}
            className={`px-4 rounded-xl text-sm transition-all ${
              darkMode 
                ? 'bg-red-500/20 text-red-400 hover:bg-red-500/30' 
                : 'bg-red-100 text-red-600 hover:bg-red-200'
            }`}
          >
            ✕ Clear
          </button>
        )}
      </div>
      <div className="flex justify-between items-center mt-1">
        <p className={`text-xs ${darkMode ? 'text-gray-400' : 'text-gray-500'}`}>
          💡 Tip: Be specific! "like a pirate" works better than just "funny"
        </p>
        {customPersona && (
          <span className={`text-xs px-2 py-0.5 rounded-full ${
            darkMode ? 'bg-green-500/20 text-green-400' : 'bg-green-100 text-green-600'
          }`}>
            ✅ Active: "{customPersona}"
          </span>
        )}
      </div>
    </div>
  )}
</div>

            <div className="mt-3">
  <label className={`text-xs font-medium ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
    🌐 Language
  </label>
  <select
    value={selectedLanguage}
    onChange={(e) => setSelectedLanguage(e.target.value)}
    className={`w-full mt-1 p-2 rounded-lg text-sm border transition-all ${
      darkMode 
        ? 'bg-white/5 text-white border-white/10 focus:border-purple-500' 
        : 'bg-white/30 text-gray-800 border-gray-200 focus:border-purple-500'
    } focus:outline-none`}
  >
    {LANGUAGES.map((lang) => (
      <option key={lang.value} value={lang.value} className={darkMode ? 'bg-gray-800' : 'bg-white'}>
        {lang.label}
      </option>
    ))}
  </select>
</div>

            <div className="flex flex-wrap gap-3 mt-4">
              <button
                onClick={handleRewrite}
                disabled={isLoading || isOverLimit || !inputText.trim()}
                className="flex-1 bg-gradient-to-r from-purple-500 to-pink-500 text-white font-bold py-3 px-6 rounded-xl hover:scale-105 transition-all disabled:opacity-50 disabled:scale-100 flex items-center justify-center gap-2 min-w-[140px]"
              >
                {isLoading ? (
                  <>
                    <RefreshCw className="w-5 h-5 animate-spin" />
                    Rewriting...
                  </>
                ) : (
                  <>
                    <Send className="w-5 h-5" />
                    Rewrite Text
                  </>
                )}
              </button>
              <button
                onClick={handleClear}
                className={`px-6 rounded-xl transition-all ${
                  darkMode 
                    ? 'bg-white/10 text-gray-300 hover:bg-white/20' 
                    : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                }`}
              >
                Clear
              </button>
            </div>
            {isOverLimit && (
              <p className="text-red-500 text-xs mt-2">⚠️ Text exceeds the limit! Please shorten it.</p>
            )}
          </div>

{/* Right: Output */}
<div className={`backdrop-blur-lg rounded-2xl p-6 border shadow-2xl ${
  darkMode 
    ? 'bg-white/10 border-white/20' 
    : 'bg-white/60 border-gray-200/50'
}`}>
  <div className="flex items-center justify-between mb-4 flex-wrap gap-2">
    <div className="flex items-center gap-2 flex-wrap">
      <Palette className={`w-5 h-5 ${darkMode ? 'text-purple-400' : 'text-purple-600'}`} />
      <h2 className={`font-semibold ${darkMode ? 'text-white' : 'text-gray-800'}`}>Rewritten Text</h2>
      {outputText && inputText && (
        <button
          onClick={() => setShowDiff(!showDiff)}
          className={`text-xs px-3 py-1 rounded-full transition-all ${
            showDiff
              ? 'bg-purple-500 text-white'
              : darkMode 
                ? 'bg-white/10 text-gray-300 hover:bg-white/20' 
                : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
          }`}
        >
          {showDiff ? '📊 Hide Changes' : '📊 Show Changes'}
        </button>
      )}
    </div>
    <div className="flex gap-2 flex-wrap">
      {outputText && (
        <>
          {/* Copy Button */}
          <button
            onClick={handleCopy}
            className={`flex items-center gap-1 text-xs px-3 py-1.5 rounded-lg transition-all ${
              darkMode 
                ? 'bg-white/10 text-gray-300 hover:bg-white/20' 
                : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
            }`}
          >
            {isCopied ? (
              <>
                <Check className="w-3 h-3 text-green-400" />
                Copied!
              </>
            ) : (
              <>
                <Copy className="w-3 h-3" />
                Copy
              </>
            )}
          </button>
          {/* .txt Download */}
          <button
            onClick={handleDownloadTxt}
            className={`flex items-center gap-1 text-xs px-3 py-1.5 rounded-lg transition-all ${
              darkMode 
                ? 'bg-white/10 text-gray-300 hover:bg-white/20' 
                : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
            }`}
          >
            <Download className="w-3 h-3" />
            .txt
          </button>
          {/* PDF Download */}
          <button
            onClick={handleDownloadPdf}
            className={`flex items-center gap-1 text-xs px-3 py-1.5 rounded-lg transition-all ${
              darkMode 
                ? 'bg-white/10 text-gray-300 hover:bg-white/20' 
                : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
            }`}
          >
            <FileDown className="w-3 h-3" />
            PDF
          </button>
          {/* Read Aloud */}
          <button
            onClick={handleReadAloud}
            className={`flex items-center gap-1 text-xs px-3 py-1.5 rounded-lg transition-all ${
              isReading 
                ? 'bg-red-500 text-white' 
                : darkMode 
                  ? 'bg-white/10 text-gray-300 hover:bg-white/20' 
                  : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
            }`}
          >
            {isReading ? (
              <span className="animate-pulse">🔴</span>
            ) : (
              <span>🔊</span>
            )}
            {isReading ? 'Stop' : 'Read'}
          </button>
        </>
      )}
    </div>
  </div>

  {/* Output Text Area */}
  <div className={`w-full h-48 p-4 rounded-xl border overflow-y-auto ${
    darkMode 
      ? 'bg-white/5 border-white/10 text-white' 
      : 'bg-white/30 border-gray-200 text-gray-800'
  }`}>
    {outputText ? (
      <>
        {showDiff && inputText ? (
          // Diff View
          <div className="space-y-3">
            <div className={`p-3 rounded-lg ${darkMode ? 'bg-white/5 border border-white/10' : 'bg-white/50 border border-gray-200'}`}>
              <p className={`text-xs mb-1 ${darkMode ? 'text-gray-400' : 'text-gray-500'}`}>Original:</p>
              <p className={`text-sm leading-relaxed whitespace-pre-wrap ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                {inputText}
              </p>
            </div>
            <div className={`p-3 rounded-lg ${darkMode ? 'bg-white/5 border border-white/10' : 'bg-white/50 border border-gray-200'}`}>
              <p className={`text-xs mb-1 ${darkMode ? 'text-gray-400' : 'text-gray-500'}`}>Rewritten (changes highlighted):</p>
              <p className={`text-sm leading-relaxed whitespace-pre-wrap ${darkMode ? 'text-white' : 'text-gray-800'}`}>
                {renderDiff(inputText, outputText)}
              </p>
            </div>
            <div className="flex gap-3 text-xs">
              <span className={darkMode ? 'text-gray-400' : 'text-gray-500'}>
                <span className="bg-green-500/30 text-green-300 px-1 rounded">Added</span> New words
              </span>
              <span className={darkMode ? 'text-gray-400' : 'text-gray-500'}>
                <span className="bg-red-500/30 text-red-300 line-through px-1 rounded">Removed</span> Deleted words
              </span>
            </div>
          </div>
        ) : (
          // Normal View
          <p className="leading-relaxed whitespace-pre-wrap">{outputText}</p>
        )}
      </>
    ) : (
      <p className={`text-center mt-16 ${darkMode ? 'text-gray-400' : 'text-gray-500'}`}>
        ✨ Your rewritten text will appear here...
      </p>
    )}
  </div>

  {/* Footer Info */}
  <div className="mt-4 p-4 rounded-xl border flex justify-between items-center flex-wrap gap-2 ${
    darkMode 
      ? 'bg-white/5 border-white/10' 
      : 'bg-white/30 border-gray-200'
  }">
    <div>
      <p className={`text-sm ${darkMode ? 'text-gray-400' : 'text-gray-500'}`}>
        💡 <span className={darkMode ? 'text-gray-300' : 'text-gray-700'}>Current Tone:</span>{' '}
        <span className={`font-medium ${darkMode ? 'text-white' : 'text-gray-800'}`}>
          {customPersona.trim() ? (
            <span className="text-purple-400">🎭 "{customPersona}"</span>
          ) : (
            TONES.find(t => t.value === selectedTone)?.label || selectedTone
          )}
        </span>
      </p>
      <p className={`text-xs mt-1 ${darkMode ? 'text-gray-500' : 'text-gray-400'}`}>
        {inputText ? `${charCount} characters • ${wordCount} words` : 'No text loaded'}
      </p>
    </div>
    {outputText && (
      <span className={`text-xs px-2 py-1 rounded-full ${
        darkMode ? 'bg-green-500/20 text-green-400' : 'bg-green-100 text-green-700'
      }`}>
        ✓ Generated
      </span>
    )}
  </div>

          </div>
        </div>

        
        {/* History Section */}
        <div className={`mt-6 backdrop-blur-lg rounded-2xl border shadow-2xl ${
          darkMode 
            ? 'bg-white/10 border-white/20' 
            : 'bg-white/60 border-gray-200/50'
        }`}>
          <div
            role="button"
            tabIndex={0}
            onClick={() => setShowHistory(!showHistory)}
            onKeyDown={(e) => {
              if (e.key === 'Enter' || e.key === ' ') {
                setShowHistory(!showHistory);
              }
            }}
            className={`w-full p-4 flex items-center justify-between transition-all cursor-pointer rounded-t-2xl ${
              darkMode ? 'text-white hover:bg-white/5' : 'text-gray-800 hover:bg-white/10'
            }`}
          >
            <div className="flex items-center gap-3">
              <History className={`w-5 h-5 ${darkMode ? 'text-purple-400' : 'text-purple-600'}`} />
              <span className="font-semibold">History ({history.length})</span>
            </div>
            <div className="flex items-center gap-3">
              {history.length > 0 && (
                <button
                  onClick={(e) => { e.stopPropagation(); handleClearHistory(); }}
                  className={`p-1.5 rounded-lg text-xs transition-all ${
                    darkMode 
                      ? 'hover:bg-white/10 text-red-400' 
                      : 'hover:bg-gray-200 text-red-600'
                  }`}
                >
                  <Trash2 className="w-4 h-4" />
                </button>
              )}
              {showHistory ? <ChevronUp className="w-5 h-5" /> : <ChevronDown className="w-5 h-5" />}
            </div>
          </div>
          
          {showHistory && (
            <div className={`p-4 border-t ${
              darkMode ? 'border-white/10' : 'border-gray-200/50'
            }`}>
              {history.length === 0 ? (
                <p className={`text-center text-sm ${darkMode ? 'text-gray-400' : 'text-gray-500'}`}>
                  No history yet. Rewrite some text to see it here!
                </p>
              ) : (
                <div className="space-y-3 max-h-60 overflow-y-auto">
                  {history.map((entry, index) => (
                    <div
                      key={index}
                      className={`p-3 rounded-lg border transition-all cursor-pointer ${
                        darkMode 
                          ? 'bg-white/5 border-white/10 hover:bg-white/10' 
                          : 'bg-white/30 border-gray-200 hover:bg-white/50'
                      }`}
                      onClick={() => handleUseHistory(entry.original)}
                    >
                      <div className="flex justify-between items-start">
                        <div className="flex-1">
                          <p className={`text-sm line-clamp-2 ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                            <span className="font-medium">Original:</span> {entry.original}
                          </p>
                          <p className={`text-sm line-clamp-2 mt-1 ${darkMode ? 'text-gray-400' : 'text-gray-500'}`}>
                            <span className="font-medium">Rewritten:</span> {entry.rewritten}
                          </p>
                        </div>
                        <div className="flex flex-col items-end ml-3 flex-shrink-0">
                          <span className={`text-xs px-2 py-0.5 rounded-full ${
                            darkMode ? 'bg-purple-500/20 text-purple-400' : 'bg-purple-100 text-purple-700'
                          }`}>
                            {entry.tone}
                          </span>
                          <span className={`text-xs mt-1 ${darkMode ? 'text-gray-500' : 'text-gray-400'}`}>
                            {entry.timestamp}
                          </span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          )}
        </div>

        {/* Footer */}
        <div className={`text-center mt-6 text-sm ${darkMode ? 'text-gray-400' : 'text-gray-500'}`}>
          <p>⚡ Built with Next.js + Gemini AI • Hackathon Edition</p>
          <p className="text-xs mt-1">
            Max {MAX_CHARS} characters or {MAX_WORDS} words • History saves locally
          </p>
        </div>
      </div>
    </div>
  );
}
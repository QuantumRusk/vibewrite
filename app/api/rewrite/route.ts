
// import { NextResponse } from 'next/server';

// export async function POST(request: Request) {
//   try {
//     const { text, tone } = await request.json();

//     if (!text || !tone) {
//       return NextResponse.json(
//         { error: 'Missing text or tone' },
//         { status: 400 }
//       );
//     }

//     const apiKey = process.env.GEMINI_API_KEY;
    
//     // Debug: Check if API key exists
//     console.log('API Key exists?', !!apiKey);
//     console.log('API Key length:', apiKey?.length || 0);

//     if (!apiKey) {
//       return NextResponse.json(
//         { error: 'API key not configured' },
//         { status: 500 }
//       );
//     }

//     // Gemini API call with the correct format
//     const url = `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash:generateContent?key=${apiKey}`;
    
//     const requestBody = {
//       contents: [
//         {
//           parts: [
//             {
//               text: `Rewrite the following text in a ${tone} tone. Keep the same meaning but change the style to be ${tone}. Only return the rewritten text, nothing else. Don't add any explanations or quotes.\n\nOriginal text: "${text}"`,
//             },
//           ],
//         },
//       ],
//       generationConfig: {
//         temperature: 0.7,
//         maxOutputTokens: 500,
//       },
//     };

//     console.log('Sending request to Gemini...');
    
//     const response = await fetch(url, {
//       method: 'POST',
//       headers: {
//         'Content-Type': 'application/json',
//       },
//       body: JSON.stringify(requestBody),
//     });

//     const data = await response.json();
    
//     // Debug: Log the full response
//     console.log('Response status:', response.status);
//     console.log('Response data:', JSON.stringify(data, null, 2));

//     // Check if response has error
//     if (data.error) {
//       console.error('Gemini Error:', data.error);
//       return NextResponse.json(
//         { error: `Gemini Error: ${data.error.message || 'Unknown error'}` },
//         { status: response.status }
//       );
//     }

//     // Extract the text from the response
//     const rewrittenText = data?.candidates?.[0]?.content?.parts?.[0]?.text || '';

//     if (!rewrittenText) {
//       console.error('No text in response:', data);
//       return NextResponse.json(
//         { error: 'No text generated' },
//         { status: 500 }
//       );
//     }

//     return NextResponse.json({ rewrittenText });
//   } catch (error) {
//     console.error('Server Error:', error);
    
//     // Explicitly cast or check the error message
//     const errorMessage = error instanceof Error ? error.message : 'Unknown error';

//     return NextResponse.json(
//       { error: `Server error: ${errorMessage}` },
//       { status: 500 }
//     );
//   }
// }



import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  try {
    // ✅ Accept ALL parameters: text, tone, and language
    const { text, tone, language = 'en', isCustom = false } = await request.json();

    // ✅ Validate inputs
    if (!text || !tone) {
      return NextResponse.json(
        { error: 'Missing text or tone' },
        { status: 400 }
      );
    }

    const apiKey = process.env.GEMINI_API_KEY;
    
    if (!apiKey) {
      return NextResponse.json(
        { error: 'API key not configured' },
        { status: 500 }
      );
    }

    // ✅ Language mapping
    // Get the parameters (including isCustom)


// Language mapping
const languageNames: Record<string, string> = {
  'en': 'English',
  'es': 'Spanish',
  'fr': 'French',
  'de': 'German',
  'it': 'Italian',
  'pt': 'Portuguese',
  'hi': 'Hindi',
  'ja': 'Japanese',
  'ko': 'Korean',
  'zh': 'Chinese',
};

const languageName = languageNames[language] || 'English';

// ✅ BUILD PROMPT BASED ON INPUT TYPE
let prompt = '';

if (isCustom) {
  // 🎭 CUSTOM PERSONA MODE
  prompt = `Rewrite the following text ${tone} (the instruction is: ${tone}). The text should be in ${languageName} language if not already. Keep the same meaning but change the style according to the instruction. Only return the rewritten text, nothing else.\n\nOriginal text: "${text}"`;
} else if (tone === 'auto') {
  // 🎯 AUTO-DETECT MODE
  prompt = `Analyze the following text and identify its current tone (e.g., professional, casual, funny, inspirational, formal, friendly, sarcastic, emotional, etc.). Then rewrite it in ${languageName} language (if not already) and in a tone that contrasts with the original. Here's the text: "${text}"\n\nFirst, tell me the original tone you detected (just one word), then provide the rewritten text in ${languageName}. Format your response as:\nOriginal Tone: [tone]\nRewritten: [rewritten text]`;
} else {
  // 🎨 PRESET TONE MODE
  prompt = `Rewrite the following text in ${languageName} language (if not already) and in a ${tone} tone. Keep the same meaning but change the style to be ${tone} and language to ${languageName}. Only return the rewritten text, nothing else. Don't add any explanations or quotes.\n\nOriginal text: "${text}"`;
}

    // ✅ Gemini API call
    const url = `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash:generateContent?key=${apiKey}`;
    
    const requestBody = {
      contents: [
        {
          parts: [
            {
              text: prompt,
            },
          ],
        },
      ],
      generationConfig: {
        temperature: 0.7,
        maxOutputTokens: 500,
      },
    };

    const response = await fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(requestBody),
    });

    const data = await response.json();

    // ✅ Check for API errors
    if (data.error) {
      console.error('Gemini Error:', data.error);
      return NextResponse.json(
        { error: `Gemini Error: ${data.error.message || 'Unknown error'}` },
        { status: response.status }
      );
    }

    let rewrittenText = data?.candidates?.[0]?.content?.parts?.[0]?.text || '';
    let detectedTone = null;

    // ✅ If auto-detect, extract the tone and clean the response
    if (tone === 'auto' && rewrittenText) {
      const lines = rewrittenText.split('\n');
      for (const line of lines) {
        if (line.toLowerCase().includes('original tone:')) {
          detectedTone = line.replace(/Original Tone:/i, '').trim();
        }
        if (line.toLowerCase().includes('rewritten:')) {
          rewrittenText = line.replace(/Rewritten:/i, '').trim();
          break;
        }
      }
    }

    if (!rewrittenText) {
      return NextResponse.json(
        { error: 'No text generated' },
        { status: 500 }
      );
    }

    // ✅ Return success response
    return NextResponse.json({ 
      rewrittenText, 
      detectedTone 
    });
    
  }  catch (error) {
    console.error('Server Error:', error);
    
    // Explicitly cast or check the error message
    const errorMessage = error instanceof Error ? error.message : 'Unknown error';

    return NextResponse.json(
      { error: `Server error: ${errorMessage}` },
      { status: 500 }
    );
  }
}
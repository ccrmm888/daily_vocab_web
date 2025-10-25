import { NextResponse } from "next/server";
import { words } from "@/data/words";

export async function GET() {
  const randomIndex = Math.floor(Math.random() * words.length);
  const word = words[randomIndex];
  console.log('Rose was here...');
  return NextResponse.json({ data: word });
}



// page.tsx (ใน dashboard)
    const getRandomWord = useCallback(async () => {
        // const randomIndex = Math.floor(Math.random() * words.length);
        // const word = words[randomIndex]; // TODO fetch api

        const response = await fetch("/api/word");
        const result = await response.json();
        
        setCurrentWord(result.data);
        setSentence('');
        setScore(0);
        setFeedbackColor('text-gray-700');
        setIsSubmitted(false);
    }, []);
'use client';

import { useRef, useState, useEffect } from 'react';

const WELCOME = [
  "Hello, Welcome to my Portfolio Website",
  "I am Julio Salim",
  "I am interested in AI and NLP and currently deep dive about it",
  "Currently searching for a Part-Time Job and a Internship",
  "Feel free to look around and explore my Portfolio Website and reach me out if your interested in my work",
  "Feel free to use the commands below to navigate through my Portfolio Website",
  "Type 'help' for available commands",
  "Type 'impressum' for legal disclosure",
  "Type 'change language to [choose your language]' for changing the portofolio language",
  "       Current Available Languages: [EN] or [DE]",
  '',
];

const COMMANDS: { [key: string]: string[] } = {
  help: [
    "Available commands:",
    "[about] - Learn more about me",
    "[clear] - Clear the terminal",
    "[contact] - How to reach me",
    "[projects] - See my featured projects",
  ],
  about: [
    "I'm Julio Salim, a student of Computer Linguistics at University of Heinrich-Heine, Germany. I am currently in my end of studies and searching my Bachelor Thema",
    "I love working with Python, Pandas, SpaCy, HuggingFace and and currently learning Java, PyTorch, skicit-learn, JavaScript and Next.js.",
    "My Motivation Quote:",
    " ",
    "              'The Only Way to achieve perfection is to practice it everyday' ",
    " ",
  ],
  contact: [
    "You can reach me at: juliosalim@outlook.com",
    "Or connect on LinkedIn: linkedin.com/in/juliosalim",
    "My huggingface profile: https://huggingface.co/juliosalim",
    "My github profile: https://github.com/juliosalim",
    "and my website: https://juliosalim.comm'"
  ],
  projects: [
    "Currently working on Projects:",
    "- Portfolio Terminal [this site]",
    "- Text Simplification using WordNet with context awarness [Uni-Project]",
    "- SemEval-2024 - Task 1: AdMiRe [SemEval-2024 Contest]",
    "The Research Paper will be release soon in ACL Anthology"
  ],
  clear: [],
};

function useCharTypewriter(lines: string[], onDone?: () => void) {
  const [displayedLines, setDisplayedLines] = useState<string[]>([]);
  const [isTyping, setIsTyping] = useState(false);
  const [currentCharIndex, setCurrentCharIndex] = useState<{ line: number; char: number }>({ line: 0, char: 0 });
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let cancelled = false;
    async function typeLines() {
      setIsTyping(true);
      let newDisplayed: string[] = [];
      for (let i = 0; i < lines.length; i++) {
        let line = '';
        for (let j = 0; j <= lines[i].length; j++) {
          if (cancelled) return;
          line = lines[i].slice(0, j);
          setDisplayedLines((prev) => {
            const arr = [...newDisplayed, line];
            return arr;
          });
          setCurrentCharIndex({ line: i, char: j });
          // Slower, natural typing speed (45-70ms per character)
          const pause = 45 + Math.floor(Math.random() * 25);
          await new Promise((res) => setTimeout(res, pause));
        }
        newDisplayed.push(lines[i]);
      }
      setDisplayedLines([...lines]);
      setIsTyping(false);
      if (onDone) onDone();
    }
    typeLines();
    return () => {
      cancelled = true;
    };
    // eslint-disable-next-line
  }, [lines.join('\n')]);

  useEffect(() => {
    scrollRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [displayedLines, currentCharIndex]);

  return { displayedLines, isTyping, scrollRef, currentCharIndex };
}

function useTypewriter(lines: string[], typingSpeed = 18, onDone?: () => void) {
  const [displayedLines, setDisplayedLines] = useState<string[]>([]);
  const [isTyping, setIsTyping] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let cancelled = false;
    async function typeLines() {
      setIsTyping(true);
      let newDisplayed: string[] = [];
      for (let i = 0; i < lines.length; i++) {
        let line = '';
        for (let j = 0; j <= lines[i].length; j++) {
          if (cancelled) return;
          line = lines[i].slice(0, j);
          setDisplayedLines([...newDisplayed, line]);
          const pause = 45 + Math.floor(Math.random() * 25);
          await new Promise((res) => setTimeout(res, pause));
        }
        newDisplayed.push(lines[i]);
      }
      setDisplayedLines([...lines]);
      setIsTyping(false);
      if (onDone) onDone();
    }
    typeLines();
    return () => {
      cancelled = true;
    };
    // eslint-disable-next-line
  }, [lines.join('\n')]);

  useEffect(() => {
    scrollRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [displayedLines]);

  return { displayedLines, isTyping, scrollRef };
}

function Terminal() {
  const [history, setHistory] = useState<string[]>([]);
  const [input, setInput] = useState('');
  const [commandQueue, setCommandQueue] = useState<string[][]>([]);
  const [historyIndex, setHistoryIndex] = useState<number | null>(null);
  const [welcomeDone, setWelcomeDone] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);
  const outerScrollRef = useRef<HTMLDivElement>(null);

  const PROMPT = "user@julio's-portfolio:~$";

  // Animate the welcome message on mount (character-by-character)
  const { displayedLines: welcomeLines, isTyping: isWelcomeTyping, scrollRef: welcomeScrollRef, currentCharIndex } = useCharTypewriter(
    WELCOME,
    () => {
      setWelcomeDone(true);
      setHistory([...WELCOME]); // Keep welcome message visible
    }
  );

  // Typewriter effect for the last output block (if any)
  const { displayedLines, isTyping, scrollRef } = useTypewriter(
    commandQueue.length > 0 ? commandQueue[0] : [],
    18
  );

  // Merge typewriter output into history for display
  const visibleLines =
    !welcomeDone
      ? welcomeLines
      : commandQueue.length > 0 && displayedLines.length > 0
        ? [...history, ...displayedLines]
        : history;

  useEffect(() => {
    if (welcomeDone) inputRef.current?.focus();
  }, [welcomeDone]);

  // Auto-scroll outer container on any visibleLines change
  useEffect(() => {
    outerScrollRef.current?.scrollTo({ top: outerScrollRef.current.scrollHeight, behavior: 'smooth' });
  }, [visibleLines]);

  const handleCommand = (cmd: string) => {
    // Always add the prompt + input to the history as a new line (even if input is empty)
    setHistory((prev) => [
      ...prev,
      cmd.trim() ? `${PROMPT} ${cmd}` : PROMPT,
    ]);
    const command = cmd.trim().toLowerCase();
    if (command === '') return;
    if (COMMANDS[command]) {
      if (command === 'clear') {
        setHistory(['']);
        setCommandQueue([]);
      } else {
        setCommandQueue((prev) => [...prev, COMMANDS[command]]);
      }
    } else {
      setCommandQueue((prev) => [...prev, [`Command not found: ${cmd} - or might be under maintenance :D, but you can always try again later on`]]);
    }
  };

  // When typewriter finishes, merge output into history and dequeue
  useEffect(() => {
    if (!isTyping && commandQueue.length > 0 && welcomeDone) {
      setHistory((prev) => [
        ...prev,
        ...commandQueue[0],
        // Do NOT add PROMPT here
      ]);
      setCommandQueue((prev) => prev.slice(1));
    }
    // eslint-disable-next-line
  }, [isTyping, welcomeDone]);

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter' && !isTyping && welcomeDone) {
      handleCommand(input);
      setHistoryIndex(null);
      setInput('');
    } else if (e.key === 'ArrowUp') {
      const prevCmds = history.filter((l) => l.startsWith(`${PROMPT} `)).map((l) => l.replace(`${PROMPT} `, ''));
      if (prevCmds.length === 0) return;
      setHistoryIndex((prev) => {
        const idx = prev === null ? prevCmds.length - 1 : Math.max(prev - 1, 0);
        setInput(prevCmds[idx]);
        return idx;
      });
    } else if (e.key === 'ArrowDown') {
      const prevCmds = history.filter((l) => l.startsWith(`${PROMPT} `)).map((l) => l.replace(`${PROMPT} `, ''));
      if (prevCmds.length === 0) return;
      setHistoryIndex((prev) => {
        if (prev === null) return null;
        const idx = Math.min(prev + 1, prevCmds.length - 1);
        setInput(prevCmds[idx] || '');
        return idx === prevCmds.length - 1 ? null : idx;
      });
    }
  };

  return (
    <div className="min-h-screen w-full flex items-center justify-center bg-[#23272e]" style={{ fontFamily: 'Menlo, Monaco, Consolas, \"Liberation Mono\", \"Courier New\", monospace' }}>
      <div className="w-full max-w-[98vw] h-[92vh] sm:h-[96vh] rounded-2xl shadow-2xl border border-[#222] bg-[#181a20] overflow-hidden flex flex-col">
        {/* Terminal header bar */}
        <div className="flex items-center h-8 px-4 bg-[#23272e] border-b border-[#222]">
          <div className="flex space-x-2">
            <span className="w-3 h-3 rounded-full bg-[#ff5f56] border border-[#e0443e] inline-block" />
            <span className="w-3 h-3 rounded-full bg-[#ffbd2e] border border-[#dea123] inline-block" />
            <span className="w-3 h-3 rounded-full bg-[#27c93f] border border-[#13a10e] inline-block" />
          </div>
        </div>
        {/* Terminal body */}
        <div ref={outerScrollRef} className="flex-1 overflow-y-auto p-2 sm:p-4 text-white text-xs sm:text-sm">
          {visibleLines.map((line, i) => (
            <div key={i} className="whitespace-pre-wrap leading-relaxed">
              {line}
              {/* Blinking cursor for the currently animating welcome line */}
              {!welcomeDone && isWelcomeTyping && i === currentCharIndex.line && (
                <span className="animate-pulse"> █</span>
              )}
            </div>
          ))}
          <div ref={welcomeDone ? scrollRef : welcomeScrollRef} />
          <div className="flex items-center w-full">
            <span className="text-[#6cb6eb]">{PROMPT}</span>
            <input
              ref={inputRef}
              className="bg-transparent border-none outline-none text-white flex-1 ml-2 caret-white text-xs sm:text-sm"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={handleKeyDown}
              autoFocus
              spellCheck={false}
              style={{ fontFamily: 'inherit' }}
              disabled={isTyping}
            />
            <span className="animate-pulse ml-1 text-white">█</span>
          </div>
        </div>
        <div className="px-4 py-2 bg-[#23272e] border-t border-[#222] text-center text-xs text-gray-400 select-none">
          Click anywhere to focus • Type 'help' for available commands • Type 'impressum' for legal disclosure
        </div>
      </div>
    </div>
  );
}

export default Terminal;

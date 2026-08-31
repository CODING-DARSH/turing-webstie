import { useEffect, useState } from 'react';

const LINES = [
  { text: '$ python train.py --model resnet --epochs 10', color: 'text-text-dim' },
  { text: 'model = Sequential(', color: 'text-text' },
  { text: '  Conv2d(3, 64), ReLU(),', color: 'text-text-muted' },
  { text: '  Linear(512, 10)', color: 'text-text-muted' },
  { text: ')', color: 'text-text' },
  { text: 'Epoch 1/10  — loss: 1.842  acc: 0.412', color: 'text-text-dim' },
  { text: 'Epoch 5/10  — loss: 0.703  acc: 0.781', color: 'text-text-dim' },
  { text: 'Epoch 10/10 — loss: 0.187  acc: 0.943', color: 'text-primary-light' },
];

const TYPE_SPEED = 18; // ms per character
const LINE_PAUSE = 220; // ms pause between lines
const RESTART_PAUSE = 2200; // ms pause before looping

export default function TerminalPanel({ className = '' }) {
  const [lineIdx, setLineIdx] = useState(0);
  const [charIdx, setCharIdx] = useState(0);
  const [done, setDone] = useState(false);

  useEffect(() => {
    if (done) {
      const t = setTimeout(() => {
        setLineIdx(0);
        setCharIdx(0);
        setDone(false);
      }, RESTART_PAUSE);
      return () => clearTimeout(t);
    }

    const currentLine = LINES[lineIdx].text;

    if (charIdx < currentLine.length) {
      const t = setTimeout(() => setCharIdx((c) => c + 1), TYPE_SPEED);
      return () => clearTimeout(t);
    }

    // finished this line
    if (lineIdx < LINES.length - 1) {
      const t = setTimeout(() => {
        setLineIdx((l) => l + 1);
        setCharIdx(0);
      }, LINE_PAUSE);
      return () => clearTimeout(t);
    }

    setDone(true);
  }, [charIdx, lineIdx, done]);

  return (
    <div
      className={`rounded-lg border border-border bg-surface overflow-hidden shadow-2xl shadow-black/50 ${className}`}
    >
      {/* title bar */}
      <div className="flex items-center gap-1.5 px-3.5 py-2.5 border-b border-border bg-[#0d0d0f]">
        <span className="w-2 h-2 rounded-full bg-[#ff5f57]" />
        <span className="w-2 h-2 rounded-full bg-[#febc2e]" />
        <span className="w-2 h-2 rounded-full bg-[#28c840]" />
        <span className="ml-2.5 text-[11px] font-mono text-text-dim">train.py</span>
      </div>

      {/* code/output body */}
      <div className="p-4 font-mono text-[11.5px] leading-relaxed min-h-[190px]">
        {LINES.slice(0, lineIdx).map((line, i) => (
          <div key={i} className={line.color}>
            {line.text}
          </div>
        ))}
        <div className={LINES[lineIdx]?.color}>
          {LINES[lineIdx]?.text.slice(0, charIdx)}
          <span className="inline-block w-1.5 h-3 bg-primary-light align-middle ml-0.5 animate-pulse" />
        </div>
      </div>
    </div>
  );
}
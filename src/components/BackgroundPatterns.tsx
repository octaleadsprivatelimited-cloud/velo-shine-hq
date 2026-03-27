const DotGrid = ({ className = "" }: { className?: string }) => (
  <svg className={className} width="200" height="200" viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
    {Array.from({ length: 10 }).map((_, row) =>
      Array.from({ length: 10 }).map((_, col) => (
        <circle key={`${row}-${col}`} cx={10 + col * 20} cy={10 + row * 20} r="1.5" fill="currentColor" />
      ))
    )}
  </svg>
);

const CircleRing = ({ className = "" }: { className?: string }) => (
  <svg className={className} width="300" height="300" viewBox="0 0 300 300" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="150" cy="150" r="140" stroke="currentColor" strokeWidth="0.5" />
    <circle cx="150" cy="150" r="100" stroke="currentColor" strokeWidth="0.5" />
    <circle cx="150" cy="150" r="60" stroke="currentColor" strokeWidth="0.5" />
  </svg>
);

const CrossPattern = ({ className = "" }: { className?: string }) => (
  <svg className={className} width="160" height="160" viewBox="0 0 160 160" fill="none" xmlns="http://www.w3.org/2000/svg">
    {Array.from({ length: 5 }).map((_, row) =>
      Array.from({ length: 5 }).map((_, col) => (
        <g key={`${row}-${col}`} transform={`translate(${8 + col * 36}, ${8 + row * 36})`}>
          <line x1="0" y1="6" x2="12" y2="6" stroke="currentColor" strokeWidth="0.8" />
          <line x1="6" y1="0" x2="6" y2="12" stroke="currentColor" strokeWidth="0.8" />
        </g>
      ))
    )}
  </svg>
);

const DiagonalLines = ({ className = "" }: { className?: string }) => (
  <svg className={className} width="200" height="200" viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
    {Array.from({ length: 8 }).map((_, i) => (
      <line key={i} x1={0} y1={i * 30} x2={200} y2={i * 30 + 60} stroke="currentColor" strokeWidth="0.4" />
    ))}
  </svg>
);

const HexGrid = ({ className = "" }: { className?: string }) => (
  <svg className={className} width="240" height="240" viewBox="0 0 240 240" fill="none" xmlns="http://www.w3.org/2000/svg">
    {[0, 1, 2, 3].map((row) =>
      [0, 1, 2, 3].map((col) => {
        const x = col * 60 + (row % 2 === 1 ? 30 : 0) + 20;
        const y = row * 52 + 20;
        return (
          <polygon
            key={`${row}-${col}`}
            points={`${x},${y - 18} ${x + 16},${y - 9} ${x + 16},${y + 9} ${x},${y + 18} ${x - 16},${y + 9} ${x - 16},${y - 9}`}
            stroke="currentColor"
            strokeWidth="0.5"
            fill="none"
          />
        );
      })
    )}
  </svg>
);

export { DotGrid, CircleRing, CrossPattern, DiagonalLines, HexGrid };

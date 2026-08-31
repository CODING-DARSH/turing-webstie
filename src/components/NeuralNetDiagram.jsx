export default function NeuralNetDiagram({ className = '' }) {
  // wide layout so it can stretch full-bleed behind the hero
  const layers = [
    { x: 60, nodes: [60, 160, 260, 360, 460] },
    { x: 280, nodes: [20, 100, 180, 260, 340, 420, 500] },
    { x: 500, nodes: [20, 100, 180, 260, 340, 420, 500] },
    { x: 720, nodes: [20, 100, 180, 260, 340, 420, 500] },
    { x: 940, nodes: [140, 260, 380] },
  ];

  const edges = [];
  for (let l = 0; l < layers.length - 1; l++) {
    const from = layers[l];
    const to = layers[l + 1];
    from.nodes.forEach((fy) => {
      to.nodes.forEach((ty) => {
        edges.push({ x1: from.x, y1: fy, x2: to.x, y2: ty });
      });
    });
  }

  return (
    <svg
      viewBox="0 0 1000 540"
      className={className}
      fill="none"
      preserveAspectRatio="xMidYMid slice"
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* edges */}
      <g stroke="#2563eb" strokeOpacity="0.10" strokeWidth="1">
        {edges.map((e, i) => (
          <line key={i} x1={e.x1} y1={e.y1} x2={e.x2} y2={e.y2} />
        ))}
      </g>

      {/* nodes */}
      {layers.map((layer, li) =>
        layer.nodes.map((y, ni) => (
          <circle
            key={`${li}-${ni}`}
            cx={layer.x}
            cy={y}
            r={li === 0 || li === layers.length - 1 ? 4.5 : 3.5}
            fill="#0a0a0a"
            stroke="#3b82f6"
            strokeOpacity="0.35"
            strokeWidth="1.2"
          />
        ))
      )}
    </svg>
  );
}
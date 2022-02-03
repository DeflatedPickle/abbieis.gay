// https://stackoverflow.com/a/64828660/8550264

const shadows = document.querySelectorAll('.shadow');

const clamp = (a, m, n) => {
  const max = Math.max(m, n);
  const min = Math.min(m, n);

  return Math.max(min, Math.min(max, a));
};

const paint = (p, x, y) => {
  const r = p.getBoundingClientRect();

  const max_offset = getComputedStyle(p, null).getPropertyValue("--shadow-offset") ?? 0;
  const shadow_type = getComputedStyle(p, null).getPropertyValue("--shadow-type") ?? 0;

  const o = Math.min(r.width, r.height, max_offset); // compute max shadow offset
  
  const mx = clamp(x, r.left - o, r.right + o); // clamp mouse coordinates within the shadow projection bounding box.
  const my = clamp(y, r.top - o, r.bottom + o);
  const px = r.right - r.width / 2; // compute element bb midpoints.
  const py = r.bottom - r.height / 2;
  const nx = (mx - px) / (r.right - r.left + 2 * o); // project mouse position relative to the bounding box to [-.5, .5];
  const ny = (my - py) / (r.bottom - r.top + 2 * o); 
  
  requestAnimationFrame(() => {
    p.style.boxShadow = `${-1 * nx * o}px ${-1 * ny * o}px black`;
    
    p.childNodes.forEach((d) => {
      const o2 = Math.min(r.width, r.height, 12);
      d.style.filter = `drop-shadow(${-1 * nx * o2}px ${-1 * ny * o2}px 0px rgba(0, 0, 0, 0.1))`
    });
  });
};

shadows.forEach((v, k, p) => {
    document.addEventListener('DOMContentLoaded', (e) => paint(v, 0, 0), {
      passive: true
    });

    document.addEventListener('mousemove', (e) => paint(v, e.clientX, e.clientY), {
      passive: true
    });
  }
)
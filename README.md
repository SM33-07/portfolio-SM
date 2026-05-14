# Aether Realm — Developer Portfolio

A developer portfolio built as a playable isometric RPG world. Instead of scrolling through sections, you walk a character through a 3D game world and explore zones to discover projects, skills, and contact info.

Built with Next.js, TypeScript, and React Three Fiber.

---

## Live Demo

> Coming soon

---

## What it is

The world has four named zones spread across an isometric grid map. Your avatar starts at the center and you navigate using WASD or arrow keys. Walking into a zone triggers a content panel with real portfolio information, awards XP, and logs the event in the HUD.

| Zone | Purpose | Lore |
|---|---|---|
| The Forge | Projects & builds | Ancient creation chamber where constructs were forged |
| The Archives | Skills & tech stack | A forbidden repository of technical knowledge |
| The Oracle | About & journey | An ancient sentient entity preserving memory fragments |
| The Gateway | Contact & links | A dimensional portal connecting realms |

---

## Tech stack

- **Next.js 14** — App Router, TypeScript, file-based routing
- **React Three Fiber** — React renderer for Three.js
- **@react-three/drei** — helpers: Billboard, Grid, OrbitControls
- **Zustand** — global game state (XP, level, zones)
- **Tailwind CSS** — HUD and panel styling
- **Three.js** — 3D engine underneath R3F

---

## Project structure

```
src/
├── app/
│   ├── page.tsx              # root page, composes scene + UI
│   ├── layout.tsx
│   └── globals.css
├── components/
│   ├── scene/
│   │   ├── Avatar.tsx        # player character with billboard sprite
│   │   ├── AetherCrystal.tsx # animated zone marker
│   │   ├── WorldGround.tsx   # ground plane + grid
│   │   ├── GameHUD.tsx       # RPG status panel, XP bar, event log
│       └── ZonePanel.tsx     # content panel that opens on zone entry
├── hooks/
│   ├── useKeyboardMovement.ts  # WASD/arrow input + proximity detection
│   └── useCameraFollow.ts      # smooth camera lerp behind avatar
├── store/
│   └── useGameStore.ts         # zustand: level, XP, visited zones
└── data/
    └── zones.ts                # zone config: position, content, colors
```

---

## How the core systems work

**Movement**

Keys are tracked in a `useRef` — not `useState` — because `useFrame` reads them 60 times per second. Using state would cause 60 re-renders per second and kill performance. A `Set` of currently held keys means diagonal movement works naturally.

**Proximity detection**

Every frame, the hook computes `position.distanceTo(zone.position)` for each zone. If under the trigger radius, `visitZone` fires. An `insideZone` flag after the loop resets `currentZone` to null when the player walks away.

**XP and level-up**

`gainXP` in the Zustand store handles overflow correctly — if XP gained crosses the threshold, the remainder carries over to the next level rather than resetting to zero. `xpToNextLevel` scales by 1.5x each level.

**Camera follow**

`useCameraFollow` runs in `useFrame` and lerps `camera.position.x` and `camera.position.z` toward `avatarX + 10, avatarZ + 10` each frame, preserving the isometric offset. Lerp factor is multiplied by `delta * 60` to stay framerate-independent.

**HUD**

Pure React HTML absolutely positioned over the canvas. Reads from Zustand with `useGameStore`. No Three.js involved. Zone name uses a stepped interval animation (`scanning → locking → zone name`) on each zone change.

---

## Getting started

```bash
# clone
git clone https://github.com/yourusername/aether-realm
cd aether-realm

# install
npm install

# run
npm run dev
```

Open `localhost:3000`. Use **WASD** or **arrow keys** to move. Walk toward a glowing crystal to enter a zone.

---

## Controls

| Key | Action |
|---|---|
| W / Arrow Up | Move forward (northwest) |
| S / Arrow Down | Move backward (southeast) |
| A / Arrow Left | Move left (southwest) |
| D / Arrow Right | Move right (northeast) |

---

## Roadmap

- [ ] Zone content panels with real portfolio data
- [ ] Pixel art character sprite via Billboard
- [ ] Ambient particles and zone atmosphere
- [ ] Day/night cycle based on visitor local time
- [ ] Level-up animation and rank reveal
- [ ] localStorage persistence for progress
- [ ] Secret hidden zone off the main map
- [ ] Mobile touch controls

---

## Build log

Following the full build publicly on LinkedIn — each post covers one specific technical concept learned during development.

---

## License

MIT

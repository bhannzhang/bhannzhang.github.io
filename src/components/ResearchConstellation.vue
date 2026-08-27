<template>
  <div class="constellation" @pointerleave="hoveredId = null">
    <svg
      class="constellation__canvas"
      viewBox="0 0 1000 560"
      role="img"
      aria-labelledby="constellation-title constellation-description"
      @click.self="clearSelection"
    >
      <title id="constellation-title">Research constellation</title>
      <desc id="constellation-description">
        An interactive map connecting research themes with selected projects. Hover, focus, or tap a node to reveal its relationships.
      </desc>

      <defs>
        <radialGradient id="constellation-bg" cx="52%" cy="45%" r="68%">
          <stop offset="0%" stop-color="#21105a" stop-opacity="0.72" />
          <stop offset="48%" stop-color="#10082d" stop-opacity="0.66" />
          <stop offset="100%" stop-color="#050509" stop-opacity="0.98" />
        </radialGradient>
        <radialGradient id="node-core" cx="35%" cy="30%">
          <stop offset="0%" stop-color="#ffffff" />
          <stop offset="32%" stop-color="#f8d94e" />
          <stop offset="100%" stop-color="#a855f7" />
        </radialGradient>
        <radialGradient id="node-concept" cx="35%" cy="30%">
          <stop offset="0%" stop-color="#ffffff" />
          <stop offset="42%" stop-color="#9de8ff" />
          <stop offset="100%" stop-color="#38bdf8" />
        </radialGradient>
        <radialGradient id="node-project" cx="35%" cy="30%">
          <stop offset="0%" stop-color="#ffffff" />
          <stop offset="38%" stop-color="#f0abfc" />
          <stop offset="100%" stop-color="#a855f7" />
        </radialGradient>
        <filter id="constellation-glow" x="-160%" y="-160%" width="420%" height="420%">
          <feGaussianBlur stdDeviation="5" result="blur" />
          <feMerge>
            <feMergeNode in="blur" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
      </defs>

      <rect class="constellation__backdrop" width="1000" height="560" rx="28" />

      <g class="constellation__stars" aria-hidden="true">
        <circle
          v-for="star in stars"
          :key="star.id"
          :cx="star.x"
          :cy="star.y"
          :r="star.r"
          :style="{ '--delay': `${star.delay}s`, opacity: star.opacity }"
        />
      </g>

      <g class="constellation__links" aria-hidden="true">
        <line
          v-for="link in links"
          :key="`${link.source}-${link.target}`"
          class="constellation__link"
          :x1="nodeById[link.source].x"
          :y1="nodeById[link.source].y"
          :x2="nodeById[link.target].x"
          :y2="nodeById[link.target].y"
          :class="{
            'constellation__link--active': isActiveLink(link),
            'constellation__link--dimmed': activeId && !isActiveLink(link),
            'constellation__link--flow': link.flow && isActiveLink(link),
          }"
        />
      </g>

      <g class="constellation__nodes">
        <component
          :is="node.href ? 'a' : 'g'"
          v-for="node in nodes"
          :key="node.id"
          :href="node.href ? getHref(node.href) : undefined"
          :class="[
            'constellation__node',
            `constellation__node--${node.type}`,
            {
              'constellation__node--active': activeId === node.id,
              'constellation__node--related': isRelated(node.id),
              'constellation__node--dimmed': isDimmed(node.id),
              'constellation__node--linked': Boolean(node.href),
            },
          ]"
          :aria-label="node.href ? `Open project: ${node.label}` : node.label"
          :role="node.href ? 'link' : 'button'"
          :tabindex="node.href ? undefined : 0"
          @pointerenter="hoveredId = node.id"
          @pointerleave="hoveredId = null"
          @focus="selectedId = node.id"
          @blur="selectedId = null"
          @click.stop.prevent="handleNodeClick(node)"
          @keydown.enter.prevent="handleKeyboardAction(node)"
          @keydown.space.prevent="selectedId = node.id"
        >
          <circle
            class="constellation__node-halo"
            :cx="node.x"
            :cy="node.y"
            :r="node.radius * 2.5"
          />
          <circle
            class="constellation__node-dot"
            :cx="node.x"
            :cy="node.y"
            :r="node.radius"
          />
          <text
            v-show="isLabelVisible(node)"
            class="constellation__label"
            :class="{ 'constellation__label--project': node.type === 'project' }"
            :x="node.x"
            :y="node.y - node.radius - 11"
            text-anchor="middle"
          >
            {{ node.label }}{{ node.href ? ' ↗' : '' }}
          </text>
        </component>
      </g>
    </svg>

    <p class="constellation__hint">
      <span aria-hidden="true">✦</span>
      <span class="constellation__hint-copy constellation__hint-copy--tap">Tap to trace connections · Tap a project again to open</span>
      <span class="constellation__hint-copy constellation__hint-copy--hover">Hover to trace connections · Select a project to explore</span>
    </p>
  </div>
</template>

<script setup>
import { computed, onBeforeUnmount, onMounted, ref } from 'vue'

defineOptions({
  name: 'ResearchConstellation',
})

const hoveredId = ref(null)
const selectedId = ref(null)
const lastTappedId = ref(null)
const isCompact = ref(false)
const isTouchMode = ref(false)
const activeId = computed(() => hoveredId.value ?? selectedId.value)

let compactMediaQuery
let touchMediaQuery
const syncCompactMode = () => {
  isCompact.value = compactMediaQuery?.matches ?? false
}
const syncTouchMode = () => {
  isTouchMode.value = touchMediaQuery?.matches ?? false
}

onMounted(() => {
  compactMediaQuery = window.matchMedia('(max-width: 768px)')
  touchMediaQuery = window.matchMedia('(hover: none), (pointer: coarse)')
  syncCompactMode()
  syncTouchMode()
  compactMediaQuery.addEventListener('change', syncCompactMode)
  touchMediaQuery.addEventListener('change', syncTouchMode)
})

onBeforeUnmount(() => {
  compactMediaQuery?.removeEventListener('change', syncCompactMode)
  touchMediaQuery?.removeEventListener('change', syncTouchMode)
})

const nodes = [
  { id: 'human-systems', label: 'Human–Intelligent System Interaction', type: 'core', x: 110, y: 275, radius: 14, alwaysLabel: true },
  { id: 'hmi', label: 'HMI', type: 'core', x: 235, y: 165, radius: 12, alwaysLabel: true },
  { id: 'social-interaction', label: 'Social Interaction', type: 'core', x: 500, y: 88, radius: 13, alwaysLabel: true },
  { id: 'intelligent-systems', label: 'Intelligent Systems', type: 'core', x: 485, y: 292, radius: 14, alwaysLabel: true },
  { id: 'embodied-ai', label: 'Embodied AI', type: 'core', x: 700, y: 278, radius: 14, alwaysLabel: true },
  { id: 'multi-agent', label: 'Human–Multi-Agent Interaction', type: 'core', x: 882, y: 105, radius: 12, alwaysLabel: true },

  { id: 'trust', label: 'Trust · Acceptance · Workload', type: 'concept', x: 360, y: 220, radius: 8 },
  { id: 'multimodal', label: 'Multimodal Cues', type: 'concept', x: 665, y: 95, radius: 8 },
  { id: 'simulation', label: 'Simulator Studies', type: 'concept', x: 250, y: 388, radius: 8 },
  { id: 'industry', label: 'Production HMI Practice', type: 'concept', x: 92, y: 422, radius: 8, href: '#work-experience' },
  { id: 'movement', label: 'Robot Movement', type: 'concept', x: 850, y: 352, radius: 8 },
  { id: 'adaptation', label: 'Adaptive Interaction', type: 'concept', x: 810, y: 210, radius: 7 },
  { id: 'roles', label: 'Roles · Strategy · Coordination', type: 'concept', x: 918, y: 245, radius: 7 },

  { id: 'benchmarking', label: 'Intelligent-Cockpit Benchmarking', type: 'project', x: 102, y: 82, radius: 6, href: '/research/automotive-benchmarking/' },
  { id: 'autonomous-delivery', label: 'Autonomous Delivery & eHMI', type: 'project', x: 345, y: 82, radius: 7, href: '/research/autonomous-delivery/' },
  { id: 'driver-automation', label: 'Driver–Automation Study', type: 'project', x: 302, y: 305, radius: 7, href: '/research/driver-automation/' },
  { id: 'driving-platform', label: 'Driving Simulation Platform', type: 'project', x: 205, y: 505, radius: 6, href: '/research/driving-simulation-platform/' },
  { id: 'digital-twin', label: 'Real-World Digital Twin', type: 'project', x: 350, y: 470, radius: 6, href: '/research/digital-twin-driving/' },
  { id: 'oyi', label: 'OYI Companion Robot', type: 'project', x: 748, y: 150, radius: 8, href: '/research/oyi/' },
  { id: 'voice-assistant', label: 'Embodied Voice Assistant', type: 'project', x: 565, y: 404, radius: 7, href: '/research/voice-assistant/' },
  { id: 'gesture-arm', label: 'Gesture-to-Motion Robotic Arm', type: 'project', x: 792, y: 448, radius: 6, href: '/research/gesture-arm/' },
  { id: 'soft-actuator', label: 'Pneumatic Soft Actuators', type: 'project', x: 925, y: 458, radius: 6, href: '/research/soft-actuator/' },
  { id: 'emg', label: 'EMG & Vibrotactile Feedback', type: 'project', x: 655, y: 500, radius: 6, href: '/research/emg/' },
  { id: 'sleep-posture', label: 'Sleep-Posture Sensing & Actuation', type: 'project', x: 485, y: 510, radius: 6, href: '/research/sleep-posture/' },
]

const links = [
  { source: 'human-systems', target: 'hmi' },
  { source: 'human-systems', target: 'social-interaction' },
  { source: 'human-systems', target: 'intelligent-systems' },
  { source: 'hmi', target: 'trust' },
  { source: 'hmi', target: 'autonomous-delivery' },
  { source: 'hmi', target: 'driver-automation' },
  { source: 'hmi', target: 'benchmarking' },
  { source: 'industry', target: 'hmi' },
  { source: 'industry', target: 'driver-automation' },
  { source: 'industry', target: 'benchmarking' },
  { source: 'autonomous-delivery', target: 'social-interaction' },
  { source: 'autonomous-delivery', target: 'trust' },
  { source: 'autonomous-delivery', target: 'multimodal' },
  { source: 'driver-automation', target: 'trust' },
  { source: 'driver-automation', target: 'simulation' },
  { source: 'simulation', target: 'driving-platform' },
  { source: 'simulation', target: 'digital-twin' },
  { source: 'intelligent-systems', target: 'trust' },
  { source: 'intelligent-systems', target: 'embodied-ai', flow: true },
  { source: 'intelligent-systems', target: 'adaptation' },
  { source: 'intelligent-systems', target: 'voice-assistant' },
  { source: 'social-interaction', target: 'multimodal' },
  { source: 'social-interaction', target: 'oyi' },
  { source: 'social-interaction', target: 'multi-agent' },
  { source: 'social-interaction', target: 'roles' },
  { source: 'multimodal', target: 'embodied-ai' },
  { source: 'multimodal', target: 'oyi' },
  { source: 'multimodal', target: 'voice-assistant' },
  { source: 'embodied-ai', target: 'oyi' },
  { source: 'embodied-ai', target: 'voice-assistant' },
  { source: 'embodied-ai', target: 'movement' },
  { source: 'embodied-ai', target: 'emg' },
  { source: 'embodied-ai', target: 'sleep-posture' },
  { source: 'movement', target: 'gesture-arm' },
  { source: 'movement', target: 'soft-actuator' },
  { source: 'movement', target: 'oyi' },
  { source: 'adaptation', target: 'oyi' },
  { source: 'adaptation', target: 'multi-agent' },
  { source: 'roles', target: 'multi-agent' },
]

const nodeById = Object.fromEntries(nodes.map((node) => [node.id, node]))

const relatedIds = computed(() => {
  if (!activeId.value) return new Set()
  const related = new Set([activeId.value])
  links.forEach((link) => {
    if (link.source === activeId.value) related.add(link.target)
    if (link.target === activeId.value) related.add(link.source)
  })
  return related
})

const isActiveLink = (link) => activeId.value === link.source || activeId.value === link.target
const isRelated = (id) => Boolean(activeId.value && id !== activeId.value && relatedIds.value.has(id))
const isDimmed = (id) => Boolean(activeId.value && !relatedIds.value.has(id))
const isLabelVisible = (node) => {
  if (isCompact.value) return activeId.value === node.id
  return node.alwaysLabel || activeId.value === node.id || isRelated(node.id)
}

const getHref = (href) => {
  if (!href || href.startsWith('#') || /^(https?:\/\/|mailto:)/.test(href)) return href
  const base = import.meta.env.BASE_URL || '/'
  return `${base}${href.replace(/^\//, '')}`
}

const clearSelection = () => {
  selectedId.value = null
  lastTappedId.value = null
}

const handleNodeClick = (node) => {
  const usesTapInteraction = isTouchMode.value || window.matchMedia('(max-width: 768px), (hover: none), (pointer: coarse)').matches
  if (usesTapInteraction) {
    if (lastTappedId.value !== node.id) {
      lastTappedId.value = node.id
      selectedId.value = node.id
      return
    }

    if (node.href) window.location.href = getHref(node.href)
    else clearSelection()
    return
  }

  if (node.href) window.location.href = getHref(node.href)
  else selectedId.value = selectedId.value === node.id ? null : node.id
}

const handleKeyboardAction = (node) => {
  if (node.href) window.location.href = getHref(node.href)
  else selectedId.value = selectedId.value === node.id ? null : node.id
}

const makeStars = (count) => {
  let seed = 1287
  const random = () => {
    seed = (seed * 16807) % 2147483647
    return (seed - 1) / 2147483646
  }

  return Array.from({ length: count }, (_, index) => ({
    id: index,
    x: 20 + random() * 960,
    y: 18 + random() * 524,
    r: 0.45 + random() * 1.35,
    opacity: 0.2 + random() * 0.55,
    delay: random() * 4,
  }))
}

const stars = makeStars(96)
</script>

<style lang="scss" scoped>
.constellation {
  position: relative;
  margin-top: 2rem;
  isolation: isolate;

  &__canvas {
    display: block;
    width: 100%;
    min-height: 420px;
    overflow: visible;
    border: 1px solid rgba(167, 139, 250, 0.22);
    border-radius: 28px;
    background: #050509;
    box-shadow:
      inset 0 0 70px rgba(49, 5, 169, 0.18),
      0 30px 80px rgba(0, 0, 0, 0.3);
  }

  &__backdrop {
    fill: url(#constellation-bg);
  }

  &__stars circle {
    fill: #c4b5fd;
    animation: twinkle 4s ease-in-out var(--delay) infinite alternate;
  }

  &__link {
    stroke: #a5a7b1;
    stroke-width: 0.55;
    stroke-opacity: 0.24;
    stroke-dasharray: 2.5 6;
    stroke-linecap: round;
    vector-effect: non-scaling-stroke;
    transition: stroke 220ms ease, stroke-opacity 220ms ease, stroke-width 220ms ease;

    &--active {
      stroke: #a78bfa;
      stroke-width: 0.8;
      stroke-opacity: 0.92;
    }

    &--dimmed {
      stroke-opacity: 0.035;
    }

    &--flow {
      stroke: #a78bfa;
      animation: connection-flow 1.4s linear infinite;
    }
  }

  &__node {
    color: #a78bfa;
    cursor: default;
    outline: none;
    transition: opacity 220ms ease;

    &--core {
      color: #f8d94e;

      .constellation__node-dot {
        fill: url(#node-core);
      }
    }

    &--concept {
      color: #67e8f9;

      .constellation__node-dot {
        fill: url(#node-concept);
      }
    }

    &--project {
      color: #e879f9;

      .constellation__node-dot {
        fill: url(#node-project);
      }
    }

    &--linked {
      cursor: pointer;
    }

    &--active,
    &:focus-visible {
      .constellation__node-dot {
        filter: url(#constellation-glow);
        transform: scale(1.38);
      }

      .constellation__node-halo {
        opacity: 0.34;
        transform: scale(1.12);
      }
    }

    &--related {
      .constellation__node-dot {
        filter: url(#constellation-glow);
      }

      .constellation__node-halo {
        opacity: 0.2;
      }
    }

    &--dimmed {
      opacity: 0.13;
    }
  }

  &__node-dot,
  &__node-halo {
    transform-box: fill-box;
    transform-origin: center;
    transition: transform 220ms ease, opacity 220ms ease, filter 220ms ease;
  }

  &__node-dot {
    stroke: rgba(255, 255, 255, 0.7);
    stroke-width: 0.8;
  }

  &__node-halo {
    fill: currentColor;
    opacity: 0.07;
  }

  &__label {
    fill: #f8fafc;
    stroke: rgba(5, 5, 9, 0.96);
    stroke-width: 4px;
    paint-order: stroke fill;
    font-size: 13px;
    font-weight: 600;
    letter-spacing: 0.01em;
    pointer-events: none;

    &--project {
      fill: #f5d0fe;
    }
  }

  &__hint {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 0.55rem;
    margin: 0.9rem 0 0;
    color: var(--color-text-muted);
    font-size: 0.75rem;
    letter-spacing: 0.04em;

    span {
      color: #f8d94e;
    }
  }

  &__hint-copy {
    &--tap {
      display: none;
    }
  }
}

@keyframes twinkle {
  from { opacity: 0.18; }
  to { opacity: 0.78; }
}

@keyframes connection-flow {
  to { stroke-dashoffset: -26; }
}

@media (max-width: 768px) {
  .constellation {
    margin-top: 1.5rem;

    &__canvas {
      min-height: 360px;
      border-radius: 20px;
    }

    &__label {
      font-size: 34px;
      opacity: 0 !important;
    }

    &__node--active .constellation__label {
      opacity: 1 !important;
    }

    &__hint {
      max-width: 270px;
      margin-inline: auto;
      text-align: center;
    }

    &__hint-copy--tap {
      display: inline;
      color: inherit;
    }

    &__hint-copy--hover {
      display: none;
    }
  }
}

@media (hover: none), (pointer: coarse) {
  .constellation__hint-copy--tap {
    display: inline;
    color: inherit;
  }

  .constellation__hint-copy--hover {
    display: none;
  }
}

@media (prefers-reduced-motion: reduce) {
  .constellation__stars circle,
  .constellation__link--flow {
    animation: none;
  }
}
</style>

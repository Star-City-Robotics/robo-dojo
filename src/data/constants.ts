import { javaProgrammingCourse } from "./courses/java-programming.course";
import { dummyCourse } from "./courses/dummy.course";
import { howToWriteMarkdown } from "./courses/how-to-write-markdown";
import {
  BookOpen,
  Video,
  FileText,
  Code,
  Zap,
  Terminal,
  Bug,
  Calculator,
  Camera,
  Clock,
  Coffee,
  Database,
  Download,
  Edit,
  Eye,
  FileCode,
  Folder,
  Globe,
  Heart,
  Home,
  Image,
  Key,
  Lightbulb,
  Lock,
  Mail,
  Map,
  Monitor,
  Music,
  Palette,
  PenTool,
  Phone,
  Play,
  Puzzle,
  Rocket,
  Search,
  Settings,
  Shield,
  Star,
  Target,
  Trophy,
  Upload,
  User,
  Wifi,
  Wrench,
  Gamepad2,
  Cpu,
  Brain,
  Microscope,
  FlaskConical,
  Atom,
  Binary,
  CircuitBoard,
  Cog,
  Compass,
  Construction,
  Dna,
  Factory,
  Fingerprint,
  Gauge,
  HardDrive,
  Layers,
  LineChart,
  MemoryStick,
  Network,
  Orbit,
  Package,
  Radar,
  Router,
  Satellite,
  Scan,
  Server,
  Smartphone,
  Tablet,
  Thermometer,
  Timer,
  Usb,
  Waves,
  Workflow,
  Zap as Lightning,
  type LucideIcon,
} from "lucide-react";

// VS Code theme colors for resource icons
export const RESOURCE_ICON_COLORS = {
  // Primary theme colors
  blue: "#569cd6", // VS Code blue (keywords, types)
  green: "#4ec9b0", // VS Code teal/green (strings, success)
  orange: "#ce9178", // VS Code orange (strings, numbers)
  yellow: "#dcdcaa", // VS Code yellow (functions)
  purple: "#c586c0", // VS Code purple (keywords, control flow)
  red: "#f44747", // VS Code red (errors, warnings)

  // Secondary colors
  lightBlue: "#9cdcfe", // VS Code light blue (variables)
  lightGreen: "#b5cea8", // VS Code light green (comments)
  lightOrange: "#d7ba7d", // VS Code light orange
  lightPurple: "#dbb7d4", // VS Code light purple

  // Neutral colors
  white: "#cccccc", // VS Code main text
  gray: "#6a6a6a", // VS Code muted text
  darkGray: "#3e3e42", // VS Code borders
} as const;

// Comprehensive icon set for resources
export const RESOURCE_ICONS = {
  // Learning & Education
  book: BookOpen,
  video: Video,
  document: FileText,
  code: Code,
  terminal: Terminal,
  calculator: Calculator,
  lightbulb: Lightbulb,
  brain: Brain,
  microscope: Microscope,
  flask: FlaskConical,
  atom: Atom,
  dna: Dna,

  // Technology & Programming
  binary: Binary,
  circuit: CircuitBoard,
  cpu: Cpu,
  database: Database,
  server: Server,
  network: Network,
  router: Router,
  wifi: Wifi,
  usb: Usb,
  memory: MemoryStick,
  hardDrive: HardDrive,
  monitor: Monitor,
  smartphone: Smartphone,
  tablet: Tablet,

  // Tools & Utilities
  wrench: Wrench,
  cog: Cog,
  settings: Settings,
  construction: Construction,
  factory: Factory,
  package: Package,

  // Actions & Activities
  play: Play,
  edit: Edit,
  eye: Eye,
  search: Search,
  download: Download,
  upload: Upload,
  scan: Scan,
  target: Target,
  rocket: Rocket,
  lightning: Lightning,
  zap: Zap,

  // Gaming & Interactive
  gamepad: Gamepad2,
  puzzle: Puzzle,
  trophy: Trophy,
  star: Star,

  // Navigation & Location
  map: Map,
  compass: Compass,
  globe: Globe,
  satellite: Satellite,
  radar: Radar,
  orbit: Orbit,

  // Media & Design
  image: Image,
  camera: Camera,
  music: Music,
  palette: Palette,
  penTool: PenTool,
  layers: Layers,

  // Communication & Social
  mail: Mail,
  phone: Phone,
  user: User,
  heart: Heart,

  // Security & Privacy
  lock: Lock,
  key: Key,
  shield: Shield,
  fingerprint: Fingerprint,

  // Time & Measurement
  clock: Clock,
  timer: Timer,
  gauge: Gauge,
  thermometer: Thermometer,
  waves: Waves,
  lineChart: LineChart,

  // Organization & Structure
  folder: Folder,
  workflow: Workflow,
  home: Home,

  // Miscellaneous
  coffee: Coffee,
  bug: Bug,
  fileCode: FileCode,
} as const;

export const courses = [javaProgrammingCourse, dummyCourse, howToWriteMarkdown];

import * as React from "react";
import {
  Mail,
  Lock,
  Eye,
  EyeOff,
  Phone,
  MapPin,
  ChevronDown,
  ArrowLeft,
  ArrowRight,
  Home,
  Info,
  Users,
  LogIn,
  BookOpen,
  Heart,
  CheckSquare,
  Calendar,
  BarChart3,
  LogOut,
  Clock,
  MessageCircle,
  Star,
  User,
  Settings,
  Search,
  Filter,
  Download,
  Upload,
  Share,
  Bookmark,
  BookmarkCheck,
  Play,
  Pause,
  Volume2,
  VolumeX,
  Menu,
  X,
  Plus,
  Minus,
  Edit,
  Trash2,
  Save,
  RefreshCw,
  ExternalLink,
  ChevronUp,
  ChevronLeft,
  ChevronRight,
  Check,
  AlertCircle,
  CheckCircle,
  HelpCircle,
  Shield,
  Award,
  Target,
  TrendingUp,
  Globe,
  Map,
  Compass,
  TreePine,
  Sun,
  Moon,
  Sparkles,
  Zap,
  Flame,
  Crown,
  Gem,
  ThumbsUp,
  MessageSquare,
  Send,
  Bell,
  BellOff,
  UserPlus,
  UserMinus,
  UserCheck,
  UserX,
  Unlock,
  Key,
  CreditCard,
  DollarSign,
  Percent,
  Calculator,
  PieChart,
  Activity,
  Database,
  Server,
  Cloud,
  Wifi,
  WifiOff,
  Signal,
  Battery,
  BatteryLow,
  Power,
  PowerOff,
  RotateCcw,
  RotateCw,
  Maximize,
  Minimize,
  Move,
  GripVertical,
  GripHorizontal,
  MoreHorizontal,
  MoreVertical,
  Dot,
  Circle,
  Square,
  Triangle,
  Hexagon,
  Octagon,
  Pentagon,
  Diamond,
} from "lucide-react";

type IconProps = React.SVGProps<SVGSVGElement> & {
  size?: number;
  className?: string;
};

// Professional icon components using Lucide React
export const MailIcon = ({ size = 16, className, ...props }: IconProps) => (
  <Mail size={size} className={className} {...props} />
);

export const LockIcon = ({ size = 16, className, ...props }: IconProps) => (
  <Lock size={size} className={className} {...props} />
);

export const EyeIcon = ({ size = 16, className, ...props }: IconProps) => (
  <Eye size={size} className={className} {...props} />
);

export const EyeOffIcon = ({ size = 16, className, ...props }: IconProps) => (
  <EyeOff size={size} className={className} {...props} />
);

export const PhoneIcon = ({ size = 16, className, ...props }: IconProps) => (
  <Phone size={size} className={className} {...props} />
);

export const LocationIcon = ({ size = 16, className, ...props }: IconProps) => (
  <MapPin size={size} className={className} {...props} />
);

export const ChevronDownIcon = ({ size = 16, className, ...props }: IconProps) => (
  <ChevronDown size={size} className={className} {...props} />
);

export const ArrowLeftIcon = ({ size = 16, className, ...props }: IconProps) => (
  <ArrowLeft size={size} className={className} {...props} />
);

export const ArrowRightIcon = ({ size = 16, className, ...props }: IconProps) => (
  <ArrowRight size={size} className={className} {...props} />
);

export const PalmLogo = ({ size = 16, className, ...props }: IconProps) => (
  <TreePine size={size} className={className} {...props} />
);

export const HomeIcon = ({ size = 16, className, ...props }: IconProps) => (
  <Home size={size} className={className} {...props} />
);

export const InfoIcon = ({ size = 16, className, ...props }: IconProps) => (
  <Info size={size} className={className} {...props} />
);

export const UsersIcon = ({ size = 16, className, ...props }: IconProps) => (
  <Users size={size} className={className} {...props} />
);

export const LogInIcon = ({ size = 16, className, ...props }: IconProps) => (
  <LogIn size={size} className={className} {...props} />
);

export const BookOpenIcon = ({ size = 16, className, ...props }: IconProps) => (
  <BookOpen size={size} className={className} {...props} />
);

export const HeartIcon = ({ size = 16, className, ...props }: IconProps) => (
  <Heart size={size} className={className} {...props} />
);

export const CheckSquareIcon = ({ size = 16, className, ...props }: IconProps) => (
  <CheckSquare size={size} className={className} {...props} />
);

export const CalendarIcon = ({ size = 16, className, ...props }: IconProps) => (
  <Calendar size={size} className={className} {...props} />
);

export const BarChartIcon = ({ size = 16, className, ...props }: IconProps) => (
  <BarChart3 size={size} className={className} {...props} />
);

export const LogOutIcon = ({ size = 16, className, ...props }: IconProps) => (
  <LogOut size={size} className={className} {...props} />
);

export const ClockIcon = ({ size = 16, className, ...props }: IconProps) => (
  <Clock size={size} className={className} {...props} />
);

export const WhatsappIcon = ({ size = 24, className, ...props }: IconProps) => (
  <MessageCircle size={size} className={className} {...props} />
);

// Additional professional icons
export const StarIcon = ({ size = 16, className, ...props }: IconProps) => (
  <Star size={size} className={className} {...props} />
);

export const UserIcon = ({ size = 16, className, ...props }: IconProps) => (
  <User size={size} className={className} {...props} />
);

export const SettingsIcon = ({ size = 16, className, ...props }: IconProps) => (
  <Settings size={size} className={className} {...props} />
);

export const SearchIcon = ({ size = 16, className, ...props }: IconProps) => (
  <Search size={size} className={className} {...props} />
);

export const FilterIcon = ({ size = 16, className, ...props }: IconProps) => (
  <Filter size={size} className={className} {...props} />
);

export const DownloadIcon = ({ size = 16, className, ...props }: IconProps) => (
  <Download size={size} className={className} {...props} />
);

export const UploadIcon = ({ size = 16, className, ...props }: IconProps) => (
  <Upload size={size} className={className} {...props} />
);

export const ShareIcon = ({ size = 16, className, ...props }: IconProps) => (
  <Share size={size} className={className} {...props} />
);

export const BookmarkIcon = ({ size = 16, className, ...props }: IconProps) => (
  <Bookmark size={size} className={className} {...props} />
);

export const BookmarkCheckIcon = ({ size = 16, className, ...props }: IconProps) => (
  <BookmarkCheck size={size} className={className} {...props} />
);

export const PlayIcon = ({ size = 16, className, ...props }: IconProps) => (
  <Play size={size} className={className} {...props} />
);

export const PauseIcon = ({ size = 16, className, ...props }: IconProps) => (
  <Pause size={size} className={className} {...props} />
);

export const VolumeIcon = ({ size = 16, className, ...props }: IconProps) => (
  <Volume2 size={size} className={className} {...props} />
);

export const VolumeOffIcon = ({ size = 16, className, ...props }: IconProps) => (
  <VolumeX size={size} className={className} {...props} />
);

export const MenuIcon = ({ size = 16, className, ...props }: IconProps) => (
  <Menu size={size} className={className} {...props} />
);

export const XIcon = ({ size = 16, className, ...props }: IconProps) => (
  <X size={size} className={className} {...props} />
);

export const PlusIcon = ({ size = 16, className, ...props }: IconProps) => (
  <Plus size={size} className={className} {...props} />
);

export const MinusIcon = ({ size = 16, className, ...props }: IconProps) => (
  <Minus size={size} className={className} {...props} />
);

export const EditIcon = ({ size = 16, className, ...props }: IconProps) => (
  <Edit size={size} className={className} {...props} />
);

export const TrashIcon = ({ size = 16, className, ...props }: IconProps) => (
  <Trash2 size={size} className={className} {...props} />
);

export const SaveIcon = ({ size = 16, className, ...props }: IconProps) => (
  <Save size={size} className={className} {...props} />
);

export const RefreshIcon = ({ size = 16, className, ...props }: IconProps) => (
  <RefreshCw size={size} className={className} {...props} />
);

export const ExternalLinkIcon = ({ size = 16, className, ...props }: IconProps) => (
  <ExternalLink size={size} className={className} {...props} />
);

export const ChevronUpIcon = ({ size = 16, className, ...props }: IconProps) => (
  <ChevronUp size={size} className={className} {...props} />
);

export const ChevronLeftIcon = ({ size = 16, className, ...props }: IconProps) => (
  <ChevronLeft size={size} className={className} {...props} />
);

export const ChevronRightIcon = ({ size = 16, className, ...props }: IconProps) => (
  <ChevronRight size={size} className={className} {...props} />
);

export const CheckIcon = ({ size = 16, className, ...props }: IconProps) => (
  <Check size={size} className={className} {...props} />
);

export const AlertCircleIcon = ({ size = 16, className, ...props }: IconProps) => (
  <AlertCircle size={size} className={className} {...props} />
);

export const CheckCircleIcon = ({ size = 16, className, ...props }: IconProps) => (
  <CheckCircle size={size} className={className} {...props} />
);

export const HelpCircleIcon = ({ size = 16, className, ...props }: IconProps) => (
  <HelpCircle size={size} className={className} {...props} />
);

export const ShieldIcon = ({ size = 16, className, ...props }: IconProps) => (
  <Shield size={size} className={className} {...props} />
);

export const AwardIcon = ({ size = 16, className, ...props }: IconProps) => (
  <Award size={size} className={className} {...props} />
);

export const TargetIcon = ({ size = 16, className, ...props }: IconProps) => (
  <Target size={size} className={className} {...props} />
);

export const TrendingUpIcon = ({ size = 16, className, ...props }: IconProps) => (
  <TrendingUp size={size} className={className} {...props} />
);

export const GlobeIcon = ({ size = 16, className, ...props }: IconProps) => (
  <Globe size={size} className={className} {...props} />
);

export const MapIcon = ({ size = 16, className, ...props }: IconProps) => (
  <Map size={size} className={className} {...props} />
);

export const CompassIcon = ({ size = 16, className, ...props }: IconProps) => (
  <Compass size={size} className={className} {...props} />
);

export const TreeIcon = ({ size = 16, className, ...props }: IconProps) => (
  <TreePine size={size} className={className} {...props} />
);

export const SunIcon = ({ size = 16, className, ...props }: IconProps) => (
  <Sun size={size} className={className} {...props} />
);

export const MoonIcon = ({ size = 16, className, ...props }: IconProps) => (
  <Moon size={size} className={className} {...props} />
);

export const SparklesIcon = ({ size = 16, className, ...props }: IconProps) => (
  <Sparkles size={size} className={className} {...props} />
);

export const ZapIcon = ({ size = 16, className, ...props }: IconProps) => (
  <Zap size={size} className={className} {...props} />
);

export const FlameIcon = ({ size = 16, className, ...props }: IconProps) => (
  <Flame size={size} className={className} {...props} />
);

export const CrownIcon = ({ size = 16, className, ...props }: IconProps) => (
  <Crown size={size} className={className} {...props} />
);

export const GemIcon = ({ size = 16, className, ...props }: IconProps) => (
  <Gem size={size} className={className} {...props} />
);

export const ThumbsUpIcon = ({ size = 16, className, ...props }: IconProps) => (
  <ThumbsUp size={size} className={className} {...props} />
);

export const MessageSquareIcon = ({ size = 16, className, ...props }: IconProps) => (
  <MessageSquare size={size} className={className} {...props} />
);

export const SendIcon = ({ size = 16, className, ...props }: IconProps) => (
  <Send size={size} className={className} {...props} />
);

export const BellIcon = ({ size = 16, className, ...props }: IconProps) => (
  <Bell size={size} className={className} {...props} />
);

export const BellOffIcon = ({ size = 16, className, ...props }: IconProps) => (
  <BellOff size={size} className={className} {...props} />
);

export const UserPlusIcon = ({ size = 16, className, ...props }: IconProps) => (
  <UserPlus size={size} className={className} {...props} />
);

export const UserMinusIcon = ({ size = 16, className, ...props }: IconProps) => (
  <UserMinus size={size} className={className} {...props} />
);

export const UserCheckIcon = ({ size = 16, className, ...props }: IconProps) => (
  <UserCheck size={size} className={className} {...props} />
);

export const UserXIcon = ({ size = 16, className, ...props }: IconProps) => (
  <UserX size={size} className={className} {...props} />
);

export const UnlockIcon = ({ size = 16, className, ...props }: IconProps) => (
  <Unlock size={size} className={className} {...props} />
);

export const KeyIcon = ({ size = 16, className, ...props }: IconProps) => (
  <Key size={size} className={className} {...props} />
);

export const CreditCardIcon = ({ size = 16, className, ...props }: IconProps) => (
  <CreditCard size={size} className={className} {...props} />
);

export const DollarSignIcon = ({ size = 16, className, ...props }: IconProps) => (
  <DollarSign size={size} className={className} {...props} />
);

export const PercentIcon = ({ size = 16, className, ...props }: IconProps) => (
  <Percent size={size} className={className} {...props} />
);

export const CalculatorIcon = ({ size = 16, className, ...props }: IconProps) => (
  <Calculator size={size} className={className} {...props} />
);

export const PieChartIcon = ({ size = 16, className, ...props }: IconProps) => (
  <PieChart size={size} className={className} {...props} />
);

export const ActivityIcon = ({ size = 16, className, ...props }: IconProps) => (
  <Activity size={size} className={className} {...props} />
);

export const DatabaseIcon = ({ size = 16, className, ...props }: IconProps) => (
  <Database size={size} className={className} {...props} />
);

export const ServerIcon = ({ size = 16, className, ...props }: IconProps) => (
  <Server size={size} className={className} {...props} />
);

export const CloudIcon = ({ size = 16, className, ...props }: IconProps) => (
  <Cloud size={size} className={className} {...props} />
);

export const WifiIcon = ({ size = 16, className, ...props }: IconProps) => (
  <Wifi size={size} className={className} {...props} />
);

export const WifiOffIcon = ({ size = 16, className, ...props }: IconProps) => (
  <WifiOff size={size} className={className} {...props} />
);

export const SignalIcon = ({ size = 16, className, ...props }: IconProps) => (
  <Signal size={size} className={className} {...props} />
);

export const BatteryIcon = ({ size = 16, className, ...props }: IconProps) => (
  <Battery size={size} className={className} {...props} />
);

export const BatteryLowIcon = ({ size = 16, className, ...props }: IconProps) => (
  <BatteryLow size={size} className={className} {...props} />
);

export const PowerIcon = ({ size = 16, className, ...props }: IconProps) => (
  <Power size={size} className={className} {...props} />
);

export const PowerOffIcon = ({ size = 16, className, ...props }: IconProps) => (
  <PowerOff size={size} className={className} {...props} />
);

export const RotateCcwIcon = ({ size = 16, className, ...props }: IconProps) => (
  <RotateCcw size={size} className={className} {...props} />
);

export const RotateCwIcon = ({ size = 16, className, ...props }: IconProps) => (
  <RotateCw size={size} className={className} {...props} />
);

export const MaximizeIcon = ({ size = 16, className, ...props }: IconProps) => (
  <Maximize size={size} className={className} {...props} />
);

export const MinimizeIcon = ({ size = 16, className, ...props }: IconProps) => (
  <Minimize size={size} className={className} {...props} />
);

export const MoveIcon = ({ size = 16, className, ...props }: IconProps) => (
  <Move size={size} className={className} {...props} />
);

export const GripVerticalIcon = ({ size = 16, className, ...props }: IconProps) => (
  <GripVertical size={size} className={className} {...props} />
);

export const GripHorizontalIcon = ({ size = 16, className, ...props }: IconProps) => (
  <GripHorizontal size={size} className={className} {...props} />
);

export const MoreHorizontalIcon = ({ size = 16, className, ...props }: IconProps) => (
  <MoreHorizontal size={size} className={className} {...props} />
);

export const MoreVerticalIcon = ({ size = 16, className, ...props }: IconProps) => (
  <MoreVertical size={size} className={className} {...props} />
);

export const DotIcon = ({ size = 16, className, ...props }: IconProps) => (
  <Dot size={size} className={className} {...props} />
);

export const CircleIcon = ({ size = 16, className, ...props }: IconProps) => (
  <Circle size={size} className={className} {...props} />
);

export const SquareIcon = ({ size = 16, className, ...props }: IconProps) => (
  <Square size={size} className={className} {...props} />
);

export const TriangleIcon = ({ size = 16, className, ...props }: IconProps) => (
  <Triangle size={size} className={className} {...props} />
);

export const HexagonIcon = ({ size = 16, className, ...props }: IconProps) => (
  <Hexagon size={size} className={className} {...props} />
);

export const OctagonIcon = ({ size = 16, className, ...props }: IconProps) => (
  <Octagon size={size} className={className} {...props} />
);

export const PentagonIcon = ({ size = 16, className, ...props }: IconProps) => (
  <Pentagon size={size} className={className} {...props} />
);

export const DiamondIcon = ({ size = 16, className, ...props }: IconProps) => (
  <Diamond size={size} className={className} {...props} />
);

// Social Media Icons
export const GoogleIcon = ({ size = 16, className, ...props }: IconProps) => (
  <svg width={size} height={size} viewBox="0 0 24 24" className={className} {...props}>
    <path
      fill="#EA4335"
      d="M12 10.2v3.9h5.5c-.2 1.3-1.6 3.9-5.5 3.9-3.3 0-6-2.7-6-6s2.7-6 6-6c1.9 0 3.2.8 3.9 1.5l2.6-2.5C15.9 3 14.1 2.2 12 2.2 6.9 2.2 2.8 6.3 2.8 11.4S6.9 20.6 12 20.6c7.2 0 9.9-5 9.9-7.6 0-.5-.1-.9-.1-1.2H12z"
    />
  </svg>
);

export const FacebookIcon = ({ size = 16, className, ...props }: IconProps) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="#1877F2"
    className={className}
    {...props}
  >
    <path d="M22 12a10 10 0 1 0-11.5 9.9v-7h-2.3V12h2.3V9.7c0-2.3 1.4-3.5 3.4-3.5.9 0 1.9.1 2.8.3v2.5h-1.6c-1.3 0-1.7.8-1.7 1.6V12h3l-.5 2.9h-2.5v7A10 10 0 0 0 22 12z" />
  </svg>
);

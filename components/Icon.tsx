import {
  Code2,
  ShoppingCart,
  Wrench,
  Smartphone,
  Server,
  BarChart3,
  MessageCircle,
  Users,
  PenLine,
  Award,
  ShieldCheck,
  Zap,
  Layers,
  type LucideIcon,
} from "lucide-react";

const icons: Record<string, LucideIcon> = {
  code: Code2,
  cart: ShoppingCart,
  wrench: Wrench,
  phone: Smartphone,
  server: Server,
  chart: BarChart3,
  message: MessageCircle,
  users: Users,
  edit: PenLine,
  pin: Award,
  shield: ShieldCheck,
  bolt: Zap,
  layers: Layers,
};

export function Icon({
  name,
  className,
}: {
  name: string;
  className?: string;
}) {
  const Component = icons[name] ?? Layers;
  return <Component className={className} strokeWidth={1.75} />;
}

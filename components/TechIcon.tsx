import { Layers, LayoutPanelLeft, ShoppingCart, Store } from "lucide-react";
import {
  SiWordpress,
  SiJoomla,
  SiPrestashop,
  SiWoocommerce,
  SiPhp,
  SiLaravel,
  SiMysql,
  SiFlutter,
  SiNextdotjs,
  SiReact,
  SiGit,
  SiLinux,
} from "react-icons/si";
import type { IconType } from "react-icons";
import type { ComponentType } from "react";

const brandIcons: Record<string, { icon: IconType; color: string }> = {
  wordpress: { icon: SiWordpress, color: "#21759B" },
  "joomla!": { icon: SiJoomla, color: "#5091CD" },
  prestashop: { icon: SiPrestashop, color: "#DF0067" },
  woocommerce: { icon: SiWoocommerce, color: "#96588A" },
  php: { icon: SiPhp, color: "#777BB4" },
  laravel: { icon: SiLaravel, color: "#FF2D20" },
  mysql: { icon: SiMysql, color: "#4479A1" },
  flutter: { icon: SiFlutter, color: "#02569B" },
  "next.js": { icon: SiNextdotjs, color: "#111110" },
  react: { icon: SiReact, color: "#61DAFB" },
  git: { icon: SiGit, color: "#F05032" },
  "vps / linux serveri": { icon: SiLinux, color: "#111110" },
};

// Brands without a Simple Icons entry — generic stand-in icon instead.
const fallbackIcons: Record<string, ComponentType<{ className?: string; style?: React.CSSProperties }>> = {
  filament: LayoutPanelLeft,
  opencart: ShoppingCart,
  magento: Store,
};

export function TechIcon({ name, className }: { name: string; className?: string }) {
  const key = name.toLowerCase();
  const brand = brandIcons[key];

  if (brand) {
    const Icon = brand.icon;
    return <Icon className={className} style={{ color: brand.color }} />;
  }

  const Fallback = fallbackIcons[key] ?? Layers;
  return <Fallback className={className} style={{ color: "var(--color-brand-green-dark)" }} />;
}

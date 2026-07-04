/**
 * General-purpose SVG icons used for UI elements.
 * Wraps lucide-react icons and custom SVGs.
 */
import { GlobeIcon, MailIcon, FileText, Folder, ArrowRight } from "lucide-react";
import type { IconProps } from "./types";

export const GeneralIcons = {
  globe: (props: IconProps) => <GlobeIcon {...props} />,
  email: (props: IconProps) => <MailIcon {...props} />,
  doc: (props: IconProps) => <FileText {...props} />,
  folder: (props: IconProps) => <Folder {...props} />,
  arrowRight: (props: IconProps) => <ArrowRight {...props} />,
} as const;

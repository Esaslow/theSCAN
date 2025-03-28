import {
  Shield,
  Database,
  BarChart,
  Globe,
  Lock,
  Zap,
  Users,
  CreditCard,
  Network,
  Chart,
  User,
  Blocks
} from 'lucide-react';

// Export renamed components
export const ShieldIcon = Shield;
export const DatabaseIcon = Database;
export const ChartIcon = Chart;
export const GlobeIcon = Globe;
export const LockIcon = Lock;
export const ZapIcon = Zap;
export const UsersIcon = Users;
export const CreditCardIcon = CreditCard;
export const BarChartIcon = BarChart;
export const NetworkIcon = Network;
export const UserIcon = User;
export const BlockchainIcon = Blocks;

// Export types
export type IconProps = React.ComponentProps<typeof Shield>;

export function SecurityIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
    </svg>
  );
}

export function SpeedIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <path d="M12 2v4" />
      <path d="M12 18v4" />
      <path d="M4.93 4.93l2.83 2.83" />
      <path d="M16.24 16.24l2.83 2.83" />
      <path d="M2 12h4" />
      <path d="M18 12h4" />
      <path d="M4.93 19.07l2.83-2.83" />
      <path d="M16.24 7.76l2.83-2.83" />
    </svg>
  );
} 
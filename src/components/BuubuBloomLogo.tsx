import React from 'react';

export interface BuubuBloomLogoProps {
  className?: string;
  variant?: 'stacked' | 'badge' | 'circle';
  theme?: 'light' | 'dark';
  height?: number | string;
  ariaLabel?: string;
}

/**
 * Official Buubu Bloom Logo
 * - Wordmark: "Buubu Bloom"
 * - Deep Blue lettering (#123B68)
 * - Orange circular/flower element replacing the second 'o' in Bloom (#F58220)
 * - Teal curved smile/bloom arc element underneath (#27AFA5)
 * - Clean light background framing
 */
export const BuubuBloomLogo: React.FC<BuubuBloomLogoProps> = ({
  className = '',
  variant = 'stacked',
  theme = 'light',
  height = 46,
  ariaLabel = 'Buubu Bloom official logo'
}) => {
  const isDark = theme === 'dark';
  const textColor = isDark ? '#FFFFFF' : '#123B68';
  const orangeColor = '#F58220';
  const tealColor = '#27AFA5';

  if (variant === 'circle' || variant === 'badge') {
    return (
      <svg
        viewBox="0 0 160 160"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className={`shrink-0 select-none ${className}`}
        style={{ height }}
        role="img"
        aria-label={ariaLabel}
      >
        <defs>
          <style>{`
            .buubu-font-circle {
              font-family: 'Fredoka', 'Quicksand', 'Nunito', system-ui, -apple-system, sans-serif;
              font-weight: 700;
            }
          `}</style>
        </defs>

        {/* Soft circular background matching the official Instagram profile avatar */}
        <circle 
          cx="80" 
          cy="80" 
          r="77" 
          fill="#FFFFFF" 
          stroke="#EBF3F6" 
          strokeWidth="2.5" 
        />

        {/* Buubu - Line 1 */}
        <text
          x="26"
          y="68"
          className="buubu-font-circle"
          fontSize="35"
          fill="#123B68"
          letterSpacing="-0.5px"
        >
          Buubu
        </text>

        {/* Bloom - Line 2 with signature Orange second 'o' */}
        <text
          x="26"
          y="103"
          className="buubu-font-circle"
          fontSize="35"
          letterSpacing="-0.5px"
        >
          <tspan fill="#123B68">Bl</tspan>
          <tspan fill="#123B68">o</tspan>
          <tspan fill={orangeColor}>o</tspan>
          <tspan fill="#123B68">m</tspan>
        </text>

        {/* Teal curved smile/bloom element underneath */}
        <path
          d="M 64 110 C 72 119, 95 119, 103 110"
          stroke={tealColor}
          strokeWidth="4"
          strokeLinecap="round"
          fill="none"
        />
      </svg>
    );
  }

  // Default: Clean stacked wordmark without bounding box
  return (
    <svg
      viewBox="0 0 146 94"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={`shrink-0 select-none ${className}`}
      style={{ height }}
      role="img"
      aria-label={ariaLabel}
    >
      <defs>
        <style>{`
          .buubu-font-stacked {
            font-family: 'Fredoka', 'Quicksand', 'Nunito', system-ui, -apple-system, sans-serif;
            font-weight: 700;
          }
        `}</style>
      </defs>

      {/* Buubu - Line 1 */}
      <text
        x="8"
        y="35"
        className="buubu-font-stacked"
        fontSize="34"
        fill={textColor}
        letterSpacing="-0.5px"
      >
        Buubu
      </text>

      {/* Bloom - Line 2 with signature Orange circular second 'o' */}
      <text
        x="8"
        y="70"
        className="buubu-font-stacked"
        fontSize="34"
        letterSpacing="-0.5px"
      >
        <tspan fill={textColor}>Bl</tspan>
        <tspan fill={textColor}>o</tspan>
        <tspan fill={orangeColor}>o</tspan>
        <tspan fill={textColor}>m</tspan>
      </text>

      {/* Teal curved smile/bloom element underneath */}
      <path
        d="M 46 77 C 54 86, 77 86, 85 77"
        stroke={tealColor}
        strokeWidth="3.8"
        strokeLinecap="round"
        fill="none"
      />
    </svg>
  );
};

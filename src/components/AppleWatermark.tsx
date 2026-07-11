import React from 'react';
import logoImg from '../assets/images/fruto_prohibido_logo_1783471370385.jpg';

interface AppleWatermarkProps {
  className?: string;
  size?: number | string;
  opacity?: number;
  isDarkBg?: boolean;
}

export default function AppleWatermark({ 
  className = '', 
  size = '100%', 
  opacity = 0.15,
  isDarkBg = false,
}: AppleWatermarkProps) {
  // If isDarkBg is true, we invert colors and use screen blending to make the white background black/transparent.
  // If not, we use multiply blending to make the white background merge with the light pink background.
  const filterStyle = isDarkBg 
    ? 'invert(1) hue-rotate(180deg) brightness(1.2) contrast(1.1)' 
    : 'none';
  const blendModeStyle = isDarkBg ? 'screen' : 'multiply';

  return (
    <div 
      className={`pointer-events-none select-none transition-all duration-700 ${className}`} 
      style={{ 
        width: size, 
        height: size,
        opacity: opacity,
      }}
    >
      <img 
        src={logoImg} 
        alt="Fruto Prohibido Logo Watermark" 
        className="w-full h-full object-contain"
        style={{
          filter: filterStyle,
          mixBlendMode: blendModeStyle as any,
        }}
        referrerPolicy="no-referrer"
      />
    </div>
  );
}

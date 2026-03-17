import React from 'react'
import { Link } from 'react-router-dom'

type ServiceCardProps = {
  title: string
  desc?: string
  link: string
  /** Optional looping background video (public path) */ 
  videoSrc?: string
  /** Optional static poster image (public path) */
  poster?: string
  /** Optional icon or SVG to render centered when no video */ 
  Icon?: React.ReactNode
}

export default function ServiceCard({ title, desc, link, videoSrc, poster, Icon }: ServiceCardProps) {
  return (
    <Link
      to={link}
      className="group service-grid-card relative aspect-square min-h-[350px] rounded-2xl overflow-hidden border-2 border-[#ff7a00] transition-all duration-300 hover:-translate-y-[10px] hover:scale-[1.02] active:translate-y-[3px] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#ff7a00] focus-visible:ring-offset-2 focus-visible:ring-offset-black"
      aria-label={`${title} - les mer`}
    >
      {/* Background fallback (dark industrial gradient) */}
      <div className="absolute inset-0 bg-gradient-to-br from-zinc-900 to-black" aria-hidden />

      {/* Video background when provided */}
      {videoSrc ? (
        <video
          src={videoSrc}
          poster={poster}
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover object-center"
          aria-hidden
        />
      ) : (
        // Centered icon / illustration when no video
        <div className="absolute inset-0 flex items-center justify-center p-6" aria-hidden>
          <div className="w-28 h-28 md:w-36 md:h-36 text-[#ff7a00] opacity-85">
            {Icon ?? (
              <svg viewBox="0 0 24 24" fill="none" className="w-full h-full" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3" />
              </svg>
            )}
          </div>
        </div>
      )}

      {/* Dark overlay for legibility (subtle, increases on hover) */}
      <div className="absolute inset-0 bg-black/60 group-hover:bg-black/50 transition-colors duration-300" aria-hidden />

      {/* Text content anchored to bottom with gradient fade */}
      <div className="absolute bottom-0 left-0 right-0 p-6 pt-14 bg-gradient-to-t from-black/95 via-black/70 to-transparent">
        <h3 className="text-lg md:text-xl font-bold text-white tracking-wider">{title}</h3>
        {desc && <p className="mt-1 text-zinc-300 text-sm md:text-base">{desc}</p>}
        <span className="mt-3 inline-block text-[#ff7a00] font-semibold tracking-wide">LES MER →</span>
      </div>

      {/* Thick 3D base (fake depth) */}
      <div className="absolute -bottom-3 left-0 right-0 h-3 bg-[#ff7a00] opacity-70 blur-sm rounded-b-2xl" aria-hidden />
    </Link>
  )
}


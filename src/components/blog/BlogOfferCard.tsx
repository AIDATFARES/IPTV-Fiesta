import Link from 'next/link';
import { Tv, Sparkles, CheckCircle2, ChevronRight } from 'lucide-react';

export default function BlogOfferCard() {
  return (
    <div className="my-8 p-6 md:p-8 rounded-2xl bg-gradient-to-br from-surface-container to-surface-container-high border border-primary/20 shadow-lg relative overflow-hidden group">
      {/* Background accents */}
      <div className="absolute top-0 right-0 -mr-16 -mt-16 w-64 h-64 bg-primary/10 rounded-full blur-3xl opacity-50 group-hover:opacity-70 transition-opacity duration-500 pointer-events-none" />
      <div className="absolute bottom-0 left-0 -ml-16 -mb-16 w-48 h-48 bg-tertiary/10 rounded-full blur-2xl opacity-50 group-hover:opacity-70 transition-opacity duration-500 pointer-events-none" />
      
      <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="flex-1">
          <div className="flex items-center gap-2 mb-3">
            <span className="bg-primary/20 text-primary px-3 py-1 rounded-full text-xs font-bold tracking-wider uppercase flex items-center gap-1.5">
              <Sparkles className="w-3.5 h-3.5" /> Premium Offer
            </span>
            <span className="text-on-surface-variant text-sm font-semibold">IPTV FIESTA</span>
          </div>
          <h3 className="text-2xl md:text-3xl font-bold text-on-surface mb-3 leading-tight font-display-md">
            Upgrade Your Streaming Experience
          </h3>
          <p className="text-on-surface-variant mb-4 text-base md:text-lg">
            Get access to 50,000+ live channels, 200,000+ VODs in 4K/FHD with zero buffering. 
          </p>
          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 mb-6 md:mb-0">
            <li className="flex items-center text-sm text-on-surface-variant/80">
              <CheckCircle2 className="w-4 h-4 text-primary mr-2 flex-shrink-0" />
              <span>4K & Full HD Quality</span>
            </li>
            <li className="flex items-center text-sm text-on-surface-variant/80">
              <CheckCircle2 className="w-4 h-4 text-primary mr-2 flex-shrink-0" />
              <span>Anti-Buffer Technology</span>
            </li>
            <li className="flex items-center text-sm text-on-surface-variant/80">
              <CheckCircle2 className="w-4 h-4 text-primary mr-2 flex-shrink-0" />
              <span>All Smart TVs Supported</span>
            </li>
            <li className="flex items-center text-sm text-on-surface-variant/80">
              <CheckCircle2 className="w-4 h-4 text-primary mr-2 flex-shrink-0" />
              <span>Instant Activation</span>
            </li>
          </ul>
        </div>
        
        <div className="w-full md:w-auto shrink-0 flex flex-col items-center">
          <div className="mb-4 text-center">
            <span className="text-sm text-on-surface-variant block mb-1">Starting at</span>
            <div className="text-4xl font-bold text-primary flex items-end justify-center">
              $14.99<span className="text-lg text-on-surface-variant font-normal ml-1">/mo</span>
            </div>
          </div>
          <Link 
            href="/pricing"
            className="w-full md:w-auto flex items-center justify-center px-8 py-3.5 bg-primary hover:bg-primary-container text-on-primary hover:text-on-primary-container font-bold rounded-xl transition-all duration-300 shadow-md hover:shadow-xl hover:-translate-y-1 group/btn"
          >
            <Tv className="w-5 h-5 mr-2" />
            View Pricing
            <ChevronRight className="w-5 h-5 ml-1 group-hover/btn:translate-x-1 transition-transform" />
          </Link>
          <p className="text-xs text-on-surface-variant/60 mt-3 text-center">7-Day Money-Back Guarantee</p>
        </div>
      </div>
    </div>
  );
}

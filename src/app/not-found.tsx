import React from "react";
import Link from "next/link";
import { ArrowLeft, Home, Compass, ShieldAlert } from "lucide-react";
import { Button } from "@/components/common/Button";

export default function NotFound() {
  return (
    <div className="min-h-[70vh] flex items-center justify-center py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-lg w-full text-center space-y-6">
        <div className="w-16 h-16 rounded-2xl bg-blue-950/80 border border-blue-800/60 flex items-center justify-center text-blue-400 mx-auto">
          <ShieldAlert className="w-8 h-8" />
        </div>

        <div className="space-y-2">
          <div className="text-xs font-mono font-bold text-blue-400 uppercase tracking-widest">
            Error 404: Resource Unavailable
          </div>
          <h1 className="text-3xl sm:text-4xl font-bold tracking-tight text-white font-display">
            Page Not Located
          </h1>
          <p className="text-sm sm:text-base text-slate-300 leading-relaxed font-sans max-w-sm mx-auto">
            The page or resource you requested may have moved, been reorganized, or is temporarily offline.
          </p>
        </div>

        <div className="p-4 rounded-xl bg-[#0E1627] border border-white/[0.08] text-xs text-slate-400 text-left space-y-2">
          <p className="font-semibold text-slate-200">Recommended Navigation:</p>
          <ul className="space-y-1.5 pl-1">
            <li>
              <Link href="/services" className="text-blue-400 hover:underline">
                → Explore our 8 Core IT Capabilities
              </Link>
            </li>
            <li>
              <Link href="/industries" className="text-blue-400 hover:underline">
                → Review Industry Sector Solutions
              </Link>
            </li>
            <li>
              <Link href="/contact" className="text-blue-400 hover:underline">
                → Reach our Advisory Team directly
              </Link>
            </li>
          </ul>
        </div>

        <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-3">
          <Button
            href="/"
            variant="primary"
            size="md"
            leftIcon={<Home className="w-4 h-4" />}
          >
            Return to Homepage
          </Button>
          <Button
            href="/services"
            variant="secondary"
            size="md"
            leftIcon={<Compass className="w-4 h-4" />}
          >
            Browse All Services
          </Button>
        </div>
      </div>
    </div>
  );
}

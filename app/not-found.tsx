"use client"

import { Button } from "@/components/ui/button"
import { useRouter } from "next/navigation"
import { ArrowLeft, Home } from "lucide-react"

export default function NotFound() {
  const router = useRouter()

  return (
    <div className="min-h-screen relative flex items-center justify-center">
      <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900"></div>
      <div className="absolute inset-0 backdrop-blur-sm"></div>

      <div className="relative z-10 text-center">
        <div className="backdrop-blur-md bg-white/10 rounded-2xl p-12 border border-white/20 shadow-xl max-w-md mx-auto">
          <h1 className="text-6xl font-bold text-white mb-4">404</h1>
          <h2 className="text-2xl font-semibold text-white mb-4">Page Not Found</h2>
          <p className="text-white/70 mb-8">Sorry, the page you are looking for doesn't exist or has been moved.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              onClick={() => router.back()}
              variant="outline"
              className="border-white/20 text-white hover:bg-white/10 bg-transparent"
            >
              <ArrowLeft className="h-4 w-4 mr-2" />
              Go Back
            </Button>
            <Button
              onClick={() => router.push("/")}
              className="bg-white/20 text-white hover:bg-white/30 border border-white/20"
            >
              <Home className="h-4 w-4 mr-2" />
              Home Page
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}

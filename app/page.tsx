
export default function Home() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-gradient-to-br from-zinc-50 via-gray-100 to-zinc-200">
      <main className="relative flex flex-col items-center justify-center px-6 py-20 text-center">
        {/* Animated background elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-40 -right-40 h-80 w-80 rounded-full bg-red-500/10 blur-3xl animate-pulse"></div>
          <div
            className="absolute -bottom-40 -left-40 h-80 w-80 rounded-full bg-zinc-500/10 blur-3xl animate-pulse"
            style={{ animationDelay: "1s" }}
          ></div>
        </div>

        {/* Content container */}
        <div className="relative z-10 max-w-4xl">
          {/* Logo */}
          <h1 className="mb-4 text-7xl font-black tracking-tight text-zinc-900 sm:text-8xl lg:text-9xl">
            Rex<span className="text-red-600">Hub</span>
          </h1>

          {/* Animated loader */}
          <div className="mx-auto mb-8 h-12 w-12 animate-spin rounded-full border-4 border-zinc-300 border-t-red-600"></div>

          {/* Tagline */}
          <p className="mb-6 text-2xl font-medium text-zinc-700 sm:text-3xl lg:text-4xl">
            A smarter, faster way to manage
          </p>
          <p className="mb-12 text-2xl font-medium text-zinc-700 sm:text-3xl lg:text-4xl">
            payments and integrations.
          </p>

          {/* Launch status */}
          <div className="mb-16 inline-flex items-center gap-2 rounded-full bg-zinc-900 px-6 py-3 text-sm font-semibold text-white">
            <span className="relative flex h-3 w-3">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-red-400 opacity-75"></span>
              <span className="relative inline-flex h-3 w-3 rounded-full bg-red-500"></span>
            </span>
            Launching Soon
          </div>

          {/* Features grid */}
          <div className="mb-16 grid gap-6 sm:grid-cols-3">
            <div className="rounded-2xl bg-white/50 p-6 backdrop-blur-sm">
              <div className="mb-3 text-4xl">⚡</div>
              <h3 className="mb-2 font-bold text-zinc-900">Lightning Fast</h3>
              <p className="text-sm text-zinc-600">Instant payment processing</p>
            </div>
            <div className="rounded-2xl bg-white/50 p-6 backdrop-blur-sm">
              <div className="mb-3 text-4xl">🔒</div>
              <h3 className="mb-2 font-bold text-zinc-900">Secure</h3>
              <p className="text-sm text-zinc-600">Bank-grade encryption</p>
            </div>
            <div className="rounded-2xl bg-white/50 p-6 backdrop-blur-sm">
              <div className="mb-3 text-4xl">🔌</div>
              <h3 className="mb-2 font-bold text-zinc-900">Integrated</h3>
              <p className="text-sm text-zinc-600">Seamless connections</p>
            </div>
          </div>

          {/* Footer */}
          <div className="border-t border-zinc-300 pt-8">
            <p className="text-sm text-zinc-600">© 2025 Ferracore Technologies. All rights reserved.</p>
            <p className="mt-2 text-xs text-zinc-500">
              FerraCore.tech provides technology and infrastructure services for financial platforms.
            </p>
          </div>
        </div>
      </main>
    </div>
  );
}

export default function LoginPage() {
  return (
    <div className="font-display bg-background-page text-text-main antialiased h-screen flex flex-col overflow-hidden">
      <div className="flex h-full w-full flex-row">
        {/* Left Side - Hero Image */}
        <div
          className="relative hidden w-1/2 lg:flex flex-col justify-end p-12 bg-cover bg-center overflow-hidden"
          style={{
            backgroundImage:
              'url("https://lh3.googleusercontent.com/aida-public/AB6AXuDBdZ3XagsAhRiAC9eg-tfEDO2VcdegWIKTwV4UWiWBPGrjdMJVq0DcbUswWoakrVG4UzO4lx4YtiOTQCfjoDNWmgxV37jeD9l4XbSwBboSA7yqpo6icAk_GSB2SdMvC_T1uaCSuIafCQGCn_b86Z-1_Gczx0LuZ745b3m2oofz3-hnlpUST-LNOkq9c-LPHnR5K76JJHnKSHd_6qmlPJ1ArHBJI4CuZDwcezooFdbIkvCu0iVRsHIpuiY1oZcS-znkijlhEUENXjw")',
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-t from-background-page via-background-page/80 to-transparent"></div>
          <div className="relative z-10 max-w-lg">
            <div className="mb-6 flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary text-white shadow-lg shadow-primary/30">
                <span className="material-symbols-outlined">queue_music</span>
              </div>
              <span className="text-xl font-bold tracking-tight text-white">Salsa &amp; Bachata Online</span>
            </div>
            <h1 className="text-4xl font-extrabold leading-tight tracking-tight text-white lg:text-5xl mb-4">
              Master the Rhythm <br /> from Home.
            </h1>
            <p className="text-lg text-gray-300">
              Join thousands of dancers learning authentic moves, footwork, and partner styling from world-class instructors.
            </p>
            <div className="mt-8 flex gap-4">
              <div className="flex -space-x-3">
                <img
                  alt="User avatar"
                  className="h-10 w-10 rounded-full border-2 border-background-page"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuAzV_uqLUgkvGFoB0l7BTSpnQwcTof9CIEyMZxTLhx2bFfQo7nKul3VLRGovZoJSHwaFkXKHmX6bFK2kRLzMNJBubxw01KL6rDFbvJ0rU5p9vfcJaSGIyQkaFkFF6uE4ENYKuUxV3J9YziIs7ffcQFLggNHKihMMhB8LRm9jrzfIzqFrnsowf3An1LrAtuQD1J4JSP5hcZX1FRQ93oa0vaFlPUMhXQK2JNU9JnGnzkf91Vy-kt3edk--j9wUmxdUiB-uDzTZm1wKSs"
                />
                <img
                  alt="User avatar"
                  className="h-10 w-10 rounded-full border-2 border-background-page"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuDxYfaotTTMwh95UgBwglNoVISUeHPHxVS5H2lAConpi31bW61U4ULibRNDZlqy91Ke56cOr3WzR7XlrLFDXllknozPDWb_kjDGrqFZPQDpIVg7QM18CesN1_jpvVHvfs5eRSaUSvaj4yQsBDRXXBwkva5Ky465UhrhCjGLw1DQINdHpMEFFNE7sl8NwAaIjRtmm-MJJYZbY-RfXUnk21SV-FQ1Mgr4pjhfT2Cj7tFV6yM8INyJ427kpdRqx7z5yTKkRmsYdYZLsi8"
                />
                <img
                  alt="User avatar"
                  className="h-10 w-10 rounded-full border-2 border-background-page"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuCQxAQP_f3TTkPftvf8c72oBgYKk8yuN9VYdOKC1r1VlNWzjq_IklVrrQnPwkBv0sThkIIyFVIng5Zt_p1QlXFUCM66rTUxlcXj64nKpcWLUnF46FqNK91G9maHFkUS2pdHkAQ-_HD2xTJQBXsbNWphXitc0AFYYF5W1JK-npCOpSQn7aTPpiaWa21FIIbKhPCTJadj19RdzK-JYkNXY1vYNeBbDt_HFZtzHaEWVmpvGR0yagOJ-PRSa_kpzwXm3kmEuLarhhB5S0k"
                />
              </div>
              <div className="flex items-center text-sm font-medium text-white">
                <span className="mr-1 font-bold text-primary">2,000+</span> dancers joined this week
              </div>
            </div>
          </div>
        </div>

        {/* Right Side - Login Form */}
        <div className="flex w-full flex-col justify-center bg-background-page px-6 py-12 lg:w-1/2 lg:px-20 xl:px-32 relative overflow-y-auto">
          <div className="absolute top-6 left-6 lg:hidden flex items-center gap-2 mb-8">
            <div className="flex h-8 w-8 items-center justify-center rounded-full bg-primary text-white">
              <span className="material-symbols-outlined text-[1.2rem]">queue_music</span>
            </div>
            <span className="text-lg font-bold tracking-tight text-white">SalsaOnline</span>
          </div>
          <div className="mx-auto w-full max-w-[480px]">
            {/* Tab Switcher */}
            <div className="mb-10">
              <div className="flex p-1 bg-surface rounded-lg relative ring-1 ring-zinc-800">
                <label className="flex-1 text-center cursor-pointer relative z-10">
                  <input className="peer sr-only" name="auth-mode" type="radio" value="login" defaultChecked />
                  <div className="py-2.5 text-sm font-bold rounded-md text-text-sub hover:text-white peer-checked:bg-zinc-900 peer-checked:text-primary peer-checked:ring-1 peer-checked:ring-zinc-800 peer-checked:shadow-sm transition-all duration-200">
                    Log In
                  </div>
                </label>
                <label className="flex-1 text-center cursor-pointer relative z-10">
                  <input className="peer sr-only" name="auth-mode" type="radio" value="signup" />
                  <div className="py-2.5 text-sm font-bold rounded-md text-text-sub hover:text-white peer-checked:bg-zinc-900 peer-checked:text-primary peer-checked:ring-1 peer-checked:ring-zinc-800 peer-checked:shadow-sm transition-all duration-200">
                    Sign Up
                  </div>
                </label>
              </div>
            </div>

            <div className="mb-8 text-center">
              <h2 className="text-3xl font-bold tracking-tight text-white">Welcome back</h2>
              <p className="mt-2 text-sm text-text-sub">Enter your details to access your lessons.</p>
            </div>

            <form action="#" className="space-y-6">
              <div>
                <label className="block text-sm font-semibold leading-6 text-gray-300 mb-2" htmlFor="email">
                  Email address
                </label>
                <div className="relative group">
                  <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-4 text-gray-500 group-focus-within:text-primary transition-colors">
                    <span className="material-symbols-outlined" style={{ fontSize: '20px' }}>
                      mail
                    </span>
                  </div>
                  <input
                    className="block w-full rounded-lg border-0 bg-zinc-900 py-3.5 pl-11 pr-4 text-white shadow-sm ring-1 ring-inset ring-zinc-800 placeholder:text-gray-600 focus:ring-2 focus:ring-inset focus:ring-primary focus:bg-surface sm:text-sm sm:leading-6 transition-all duration-200"
                    id="email"
                    name="email"
                    placeholder="dancer@example.com"
                    type="email"
                  />
                </div>
              </div>

              <div>
                <div className="flex items-center justify-between mb-2">
                  <label className="block text-sm font-semibold leading-6 text-gray-300" htmlFor="password">
                    Password
                  </label>
                  <a className="text-sm font-semibold text-primary hover:text-orange-600 transition-colors" href="#">
                    Forgot password?
                  </a>
                </div>
                <div className="relative group">
                  <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-4 text-gray-500 group-focus-within:text-primary transition-colors">
                    <span className="material-symbols-outlined" style={{ fontSize: '20px' }}>
                      lock
                    </span>
                  </div>
                  <input
                    className="block w-full rounded-lg border-0 bg-zinc-900 py-3.5 pl-11 pr-10 text-white shadow-sm ring-1 ring-inset ring-zinc-800 placeholder:text-gray-600 focus:ring-2 focus:ring-inset focus:ring-primary focus:bg-surface sm:text-sm sm:leading-6 transition-all duration-200"
                    id="password"
                    name="password"
                    placeholder="••••••••"
                    type="password"
                  />
                  <button
                    className="absolute inset-y-0 right-0 flex items-center pr-3 text-gray-500 hover:text-white cursor-pointer transition-colors"
                    type="button"
                  >
                    <span className="material-symbols-outlined" style={{ fontSize: '20px' }}>
                      visibility_off
                    </span>
                  </button>
                </div>
              </div>

              <div>
                <button
                  className="flex w-full justify-center rounded-lg bg-primary px-3 py-3.5 text-sm font-bold leading-6 text-white shadow-lg hover:shadow-lg hover:shadow-primary/30 hover:bg-orange-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary transition-all duration-300 transform active:scale-[0.98]"
                  type="submit"
                >
                  Log In
                </button>
              </div>
            </form>

            <div className="relative mt-8">
              <div aria-hidden="true" className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-zinc-800"></div>
              </div>
              <div className="relative flex justify-center text-sm font-medium leading-6">
                <span className="bg-background-page px-6 text-text-sub">Or continue with</span>
              </div>
            </div>

            <div className="mt-8 grid grid-cols-2 gap-4">
              <a
                className="flex w-full items-center justify-center gap-3 rounded-lg bg-zinc-900 px-3 py-2.5 text-white shadow-sm ring-1 ring-inset ring-zinc-800 hover:bg-surface hover:ring-gray-600 transition-all duration-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
                href="#"
              >
                <svg aria-hidden="true" className="h-5 w-5" viewBox="0 0 24 24">
                  <path
                    d="M12.0003 20.45c4.6667 0 8.45-3.7833 8.45-8.45 0-4.6667-3.7833-8.45-8.45-8.45-4.6667 0-8.45 3.7833-8.45 8.45 0 4.6667 3.7833 8.45 8.45 8.45Z"
                    fill="#fff"
                    fillOpacity="0"
                    stroke="currentColor"
                    strokeWidth="0"
                  ></path>
                  <path
                    d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                    fill="#4285F4"
                  ></path>
                  <path
                    d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                    fill="#34A853"
                  ></path>
                  <path
                    d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
                    fill="#FBBC05"
                  ></path>
                  <path
                    d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
                    fill="#EA4335"
                  ></path>
                </svg>
                <span className="text-sm font-semibold">Google</span>
              </a>
              <a
                className="flex w-full items-center justify-center gap-3 rounded-lg bg-zinc-900 px-3 py-2.5 text-white shadow-sm ring-1 ring-inset ring-zinc-800 hover:bg-surface hover:ring-gray-600 transition-all duration-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
                href="#"
              >
                <svg aria-hidden="true" className="h-5 w-5 text-[#1877F2]" fill="currentColor" viewBox="0 0 24 24">
                  <path
                    clipRule="evenodd"
                    d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
                    fillRule="evenodd"
                  ></path>
                </svg>
                <span className="text-sm font-semibold">Facebook</span>
              </a>
            </div>

            <p className="mt-8 text-center text-xs text-text-sub">
              By continuing, you agree to our{' '}
              <a className="font-semibold text-primary hover:text-orange-600 transition-colors" href="#">
                Terms of Service
              </a>{' '}
              and{' '}
              <a className="font-semibold text-primary hover:text-orange-600 transition-colors" href="#">
                Privacy Policy
              </a>
              .
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

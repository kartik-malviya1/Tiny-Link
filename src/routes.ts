/**
 * An array of routes that are accessible to the public
 * These routes do not require authentication
 * @type {string[]}
 */
export const publicRoutes = [
  "/",
  "/auth/new-verification",
  "/auth/create-new",
  "/api/shorten",
]

/**
 * An array of routes that are used for authentication
 * These routes will redirect logged in user to /settings
 * @type {string[]}
 */
export const authRoutes = [
  "/auth/login",
  "/auth/sign-up",
  "/auth/error",
  "/auth/reset",
  "/auth/new-password",
]

/**
 * The prefix for API authentication routes
 * Routes that start with this prefix are used for API authentication purposes
 * @type {string}
 */
export const apiAuthPrefix = "/api/auth"

/**
 * The default redirect path after logging in
 * @type {string}
 */
export const DEFAULT_LOGIN_REDIRECT = "/dashboard"

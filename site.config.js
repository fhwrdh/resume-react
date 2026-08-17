/**
 * Publish mode for resume.fhwrdh.net.
 *
 * Change `mode`, commit, push to master. The deploy workflow reads this after
 * building and reshapes ./dist accordingly. Nothing about the GitHub Pages
 * setup changes — same branch, same custom domain, same TLS certificate — so
 * flipping back to 'live' is just another push.
 *
 *   'live'     Publish the resume normally.
 *   'redirect' Publish only a redirect to `redirectTo`.
 *   'hidden'   Publish only a short placeholder.
 *
 * In both 'redirect' and 'hidden' the generated resume files (txt/md/json/pdf)
 * and the app bundle are removed from ./dist, so the content is not reachable
 * at its direct URLs either.
 *
 * Note: GitHub Pages serves static files and cannot return an HTTP 302. The
 * redirect is a meta refresh plus location.replace() — effective in browsers,
 * but client-side rather than a real status code.
 */
export default {
  mode: 'redirect',
  redirectTo: 'https://fhwrdh.net',
};

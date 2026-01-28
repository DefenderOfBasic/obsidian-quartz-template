import { QuartzComponent, QuartzComponentConstructor, QuartzComponentProps } from "./types"
import { QuartzPluginData } from "../plugins/vfile"
import { classNames } from "../util/lang"

// @ts-ignore
import script from "./scripts/mobileSidebar.inline"
import style from "./styles/mobileSidebar.scss"

import Explorer from "./Explorer"

export interface MobileSidebarOptions {
  /**
   * Whether to enable the mobile sidebar feature.
   * When disabled, the mobile menu button and sidebar will not be rendered.
   * @default true
   */
  enabled: boolean
}

const defaultOptions: MobileSidebarOptions = {
  enabled: true,
}

export default ((userOpts?: Partial<MobileSidebarOptions>) => {
  const opts = { ...defaultOptions, ...userOpts }

  const explorerOpts = typeof userOpts === "object" && "explorerOpts" in userOpts 
    ? (userOpts as any).explorerOpts 
    : undefined
  const ExplorerComponent = Explorer(explorerOpts)

  const MobileSidebar: QuartzComponent = (props: QuartzComponentProps) => {
    const { displayClass, cfg } = props
    
    // Check global config first, then fall back to component options
    const enabled = cfg.enableMobileSidebar ?? opts.enabled
    
    // If disabled, return null
    if (!enabled) {
      return null
    }

    return (
      <div class={classNames(displayClass, "mobile-sidebar-container")} id="mobile-sidebar-container">
        <div class="mobile-sidebar-backdrop" id="mobile-sidebar-backdrop"></div>
        <aside class="mobile-sidebar" id="mobile-sidebar" aria-label="Mobile navigation">
          <div class="mobile-sidebar-header">
            <h2>Navigation</h2>
            <button
              type="button"
              class="mobile-sidebar-close"
              id="mobile-sidebar-close"
              aria-label="Close sidebar"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                <line x1="18" y1="6" x2="6" y2="18"></line>
                <line x1="6" y1="6" x2="18" y2="18"></line>
              </svg>
            </button>
          </div>
          <div class="mobile-sidebar-content">
            <ExplorerComponent {...props} displayClass={undefined} />
          </div>
        </aside>
      </div>
    )
  }

  MobileSidebar.css = style
  MobileSidebar.afterDOMLoaded = script
  return MobileSidebar
}) satisfies QuartzComponentConstructor

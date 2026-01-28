import { QuartzComponent, QuartzComponentConstructor, QuartzComponentProps } from "./types"
import { classNames } from "../util/lang"

export interface MobileSidebarToggleOptions {
  /**
   * Whether to enable the mobile sidebar toggle button.
   * When disabled, the hamburger menu button will not be rendered.
   * @default true
   */
  enabled: boolean
}

const defaultOptions: MobileSidebarToggleOptions = {
  enabled: true,
}

export default ((userOpts?: Partial<MobileSidebarToggleOptions>) => {
  const opts = { ...defaultOptions, ...userOpts }

  const MobileSidebarToggle: QuartzComponent = ({ displayClass, cfg }: QuartzComponentProps) => {
    // Check global config first, then fall back to component options
    const enabled = cfg.enableMobileSidebar ?? opts.enabled
    
    // If disabled, return null
    if (!enabled) {
      return null
    }

    return (
      <button
        type="button"
        class={classNames(displayClass, "mobile-sidebar-toggle")}
        id="mobile-sidebar-toggle"
        aria-label="Open navigation menu"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        >
          <line x1="3" y1="12" x2="21" y2="12"></line>
          <line x1="3" y1="6" x2="21" y2="6"></line>
          <line x1="3" y1="18" x2="21" y2="18"></line>
        </svg>
      </button>
    )
  }

  MobileSidebarToggle.css = `
.mobile-sidebar-toggle {
  background: none;
  border: none;
  cursor: pointer;
  padding: 0.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--darkgray);
  border-radius: 5px;
  transition: background-color 0.2s ease;

  &:hover {
    background-color: var(--lightgray);
  }

  svg {
    width: 24px;
    height: 24px;
  }
}
`

  return MobileSidebarToggle
}) satisfies QuartzComponentConstructor

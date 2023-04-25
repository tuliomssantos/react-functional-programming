import { Link } from 'react-router-dom'

import type { ReactNode } from 'react'

const Navbar = () => (
  <nav>
    <ul>
      <li>
        <Link to="/">Pure Functional Component</Link>
      </li>
    </ul>
  </nav>
)

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <div>
      <header>
        <Navbar />
      </header>
      <main>{children}</main>
    </div>
  )
}

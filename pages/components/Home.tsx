import Link from 'next/link'
import React from 'react'

const Home = () => {
  return (
    
      <><nav>  <ul>
          <li>
              <Link href="/components/Home">
                  Home
              </Link>
          </li>
          <li>
              <Link href="/components/RQSuperHeroes">
                  RQSuperHeroes
              </Link>
          </li>
          <li>
              <Link href="/components/SuperHeroes">
                  SuperHero
              </Link>
          </li>
      </ul>
      </nav><div>Home</div></>
  )
}

export default Home
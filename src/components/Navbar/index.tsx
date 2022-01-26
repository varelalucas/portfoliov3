import { NextPage } from 'next'
import styles from './Navbar.module.scss'
import { useRouter } from 'next/router'

const Navbar: NextPage = () => {
  const router = useRouter()
  return (
    <nav className={styles.navbar}>
        <div className="container">
          <div className={styles.flex}>
            <div className={styles.brand}>
              <button onClick={() => router.push('/')}>
              <svg width="203" height="102" viewBox="0 0 203 102" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M4.34312 90.5752L0 80.2948L33.6033 80.5521C33.6033 80.5521 42.5933 83.2252 52.0627 85.7117C61.5321 88.1974 73.253 91.3272 78.1091 92.6663C82.9652 94.0045 97.5035 97.8233 97.5035 97.8233C97.5035 97.8233 108.678 100.895 109.423 101.323C110.945 102.194 61.9939 102.234 29.2708 101.388L8.68624 100.855L4.34312 90.5752Z" fill="url(#paint0_linear_70_354)"/>
                  <path d="M21.5946 57.6025C29.4253 49.5298 45.1459 33.2671 56.5294 21.462L77.2262 0L82.7895 11.3837L88.3519 22.7675L71.775 39.7537C62.657 49.0955 43.7791 68.2843 43.7791 68.2843L33.6034 80.4684L4.34312 90.4914L0 80.2111L3.67828 76.2456C5.70106 74.0647 13.764 65.6751 21.5946 57.6025Z" fill="url(#paint1_linear_70_354)"/>
                  <path d="M150.892 74.6422C150.892 74.6422 194.24 13.0995 200.498 3.28124C201.712 1.37563 202.793 -0.098726 202.899 0.00517138C203.093 0.194825 191.822 28.1078 187.191 38.9057C184.509 45.1593 167.184 87.6376 162.892 98.4817L161.506 101.986H150.429H139.353L150.892 74.6422Z" fill="url(#paint2_linear_70_354)"/>
                  <path d="M147.88 70.1208L150.908 74.656L161.514 101.984L139.369 102L128.624 79.5301C122.713 67.1713 116.374 53.9062 114.536 50.0513C112.699 46.1964 107.471 35.2501 102.92 25.7261L94.6442 8.4099L98.9616 7.88794C101.337 7.60099 106.619 7.13345 110.701 6.84897L118.123 6.33278L120.304 11.0815C122.4 15.6456 130.427 32.8043 134.482 41.3932C139.698 52.4385 147.88 70.1208 147.88 70.1208Z" fill="url(#paint3_linear_70_354)"/>
                  <defs>
                  <linearGradient id="paint0_linear_70_354" x1="109.483" y1="91.5188" x2="-7.08713e-08" y2="91.5188" gradientUnits="userSpaceOnUse">
                  <stop stopColor="#68FA65"/>
                  <stop offset="0.561454" stopColor="#68FA65" stopOpacity="0.854621"/>
                  <stop offset="0.755063" stopColor="#68FA65" stopOpacity="0.672664"/>
                  <stop offset="1" stopColor="#68FA65" stopOpacity="0.5"/>
                  </linearGradient>
                  <linearGradient id="paint1_linear_70_354" x1="44.176" y1="8.22994e-10" x2="44.1477" y2="151.524" gradientUnits="userSpaceOnUse">
                  <stop stopColor="white"/>
                  <stop offset="0.213542" stopColor="white" stopOpacity="0.924231"/>
                  <stop offset="0.4375" stopColor="white" stopOpacity="0.755208"/>
                  <stop offset="0.645833" stopColor="white" stopOpacity="0.624648"/>
                  <stop offset="0.739583" stopColor="white" stopOpacity="0.577391"/>
                  <stop offset="0.833333" stopColor="white" stopOpacity="0.454524"/>
                  <stop offset="0.895833" stopColor="white" stopOpacity="0.284077"/>
                  <stop offset="1" stopColor="white" stopOpacity="0"/>
                  </linearGradient>
                  <linearGradient id="paint2_linear_70_354" x1="202.916" y1="52.7384" x2="139.353" y2="52.7384" gradientUnits="userSpaceOnUse">
                  <stop stopColor="#68FA65"/>
                  <stop offset="0.561454" stopColor="#68FA65" stopOpacity="0.854621"/>
                  <stop offset="0.755063" stopColor="#68FA65" stopOpacity="0.672664"/>
                  <stop offset="1" stopColor="#68FA65" stopOpacity="0.5"/>
                  </linearGradient>
                  <linearGradient id="paint3_linear_70_354" x1="128.079" y1="6.33278" x2="128.037" y2="166.524" gradientUnits="userSpaceOnUse">
                  <stop stopColor="white"/>
                  <stop offset="0.213542" stopColor="white" stopOpacity="0.924231"/>
                  <stop offset="0.4375" stopColor="white" stopOpacity="0.755208"/>
                  <stop offset="0.645833" stopColor="white" stopOpacity="0.624648"/>
                  <stop offset="0.739583" stopColor="white" stopOpacity="0.577391"/>
                  <stop offset="0.833333" stopColor="white" stopOpacity="0.454524"/>
                  <stop offset="0.895833" stopColor="white" stopOpacity="0.284077"/>
                  <stop offset="1" stopColor="white" stopOpacity="0"/>
                  </linearGradient>
                  </defs>
                </svg>
              </button>
            </div>
            <div className={styles.links}>
              <ul>
                <li>
                  <button onClick={() => router.push('/')}>
                    Início
                  </button>
                </li>
                <li>
                  <button onClick={() => router.push('/blog')}>
                    Blog
                  </button>
                </li>
                <li>
                  <button onClick={() => router.push('/#projetos')}>
                    Projetos
                  </button>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </nav>
  )
}

export { Navbar }
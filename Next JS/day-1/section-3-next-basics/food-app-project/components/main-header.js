'use client'

import Link from "next/link";
import LogoImg from '@/assets/logo.png'
import classes from './main-header.module.css'
import Image from "next/image";
import { usePathname } from "next/navigation";
export default function MainHeader() {
    const path = usePathname();
  return (
    <header className={classes.header}>
        <Link className={classes.logo} href={'/'}>
        <Image src={LogoImg} alt="logo img" priority></Image>
        NextLevel Food
        </Link>
        <nav className={classes.nav}>
            <ul>
                <li>
                    <Link href={'/meals'} className={path.startsWith('/meals') ? classes.active :undefined}>Meals</Link>
                </li>
                <li>
                    <Link href={'/community'} className={path === ('/community') ? classes.active :undefined}>Community</Link>
                </li>
                
            </ul>
        </nav>
    </header>
  )
}

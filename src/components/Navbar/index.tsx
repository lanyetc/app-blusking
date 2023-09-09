"use client"

import { FC } from "react"
import Image from 'next/image'
import style from './index.module.css'
import { usePathname } from "next/navigation";
import classnames from "classnames";
import Link from "next/link";

const Transparent_BG_Pages = [
	'/music-festival',
	'/resources',
]

const LinkItem = (props: any) => {
	const { label, href } = props;
	return (
		<Link className={style.link} href={href}>
			<span className={style.label}>{label}</span>
			<div className={style.underline}/>
		</Link>
	)
}

const Menu = (props: any) => {
	const { menus } = props;
	const pathname = usePathname();
	// const activeItem = menus.find((item:any) => item.href === pathname) || menus?.[0];
	return (
		<div className={style.menu}>
			<LinkItem label={menus[0].label} href={menus[0].href} />
			<div className={style.dropdown}>
			{menus?.map((item:any, index:number ) => <LinkItem key={index} label={item.label} href={item.href} />)}
			</div>
		</div>
	)
}

const Navbar: FC = () => {
	const pathname = usePathname();
	const transparentBG = Transparent_BG_Pages.includes(pathname);
	const navs = [
		{
			children: [
				{label: 'About', href: '/'},
				{label: 'History', href: '/history'},
				{label: 'Story', href: '/story'},
				{label: 'Goal', href: '/goal'},
			]
		},
		{label: 'Map', href: '/map'},
		{
			children: [
				{label: 'News', href: '/news'},
				{label: 'Application', href: '/application'},
				{label: 'Music Festival', href: '/music-festival'},
				{label: 'Regulations', href: '/regulations'},
			]
		},
		{label: 'Support', href: '/support'},
	]
	return (
		<div className={classnames(style.navbar, {[style.transparent]: transparentBG})}>
			<span className="icon">
				<Image src="/blusking-logo.png"
					alt="Blusking Logo"
					width={100}
					height={24}
					priority />
			</span>
			<span style={{flex: 1}}/>
			<div className={style.navs}>
				{navs.map((nav:any, index:number)=>(
					nav.children ? 
						<Menu key={index} menus={nav.children}/>
						: <LinkItem key={index} label={nav.label} href={nav.href} />
				))}
			{/* <LinkItem label='About' href='/about' /> */}
			</div>
		</div>
	)
}

export default Navbar;
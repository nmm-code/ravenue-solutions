"use client";
import styles from "./Footer.module.scss";
import Image from "next/image";
import logo from "@/assets/main/logo-with.svg";
import { Language } from "@/types/Language";
import { useRouter, usePathname } from "next/navigation";

export function Footer({ lang }: { lang: Language }) {
	let year = new Date().getFullYear();
	const path = usePathname();
	const router = useRouter();
	function handleRouter(num: number) {
		switch (num) {
			case 1:
				router.push(lang == Language.EN ? "/en/imprint" : "/impressum");
				break;
			case 2:
				router.push(
					lang == Language.EN ? "/en/privacy" : "/datenschutz"
				);
				break;
			case 3:
				router.push(lang == Language.EN ? "/en/terms" : "/agb");
				break;
		}
	}
	return (
		<>
			<footer
				id={path.length < 4 || path.includes("#") ? styles.long : ""}
				className={`${styles.footer} `}
			>
				<div>
					<section>
						<Image src={logo} alt="logo" />
						{lang == Language.DE ? (
							<p>Wegweiser zu messbarem Geschäftserfolg</p>
						) : (
							<p>Your guide to measurable business success</p>
						)}
						<p>&copy;{year} Ravenue Solutions</p>
					</section>
				</div>
			</footer>
		</>
	);
}

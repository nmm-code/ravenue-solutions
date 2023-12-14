"use client";
import { useEffect, useState } from "react";
import styles from "./RawNav.module.scss";
import { Language } from "@/types/Language";
import { usePathname, useRouter } from "next/navigation";
import Link from "next/link";

export function scrollToElement(
	event: React.MouseEvent<HTMLAnchorElement, MouseEvent>
) {
	event.preventDefault();
	const id = event.currentTarget.href.split("#")[1];
	let elementToScrollTo = document.getElementById(id);
	if (elementToScrollTo) {
		elementToScrollTo.scrollIntoView({ behavior: "smooth" });
	}
}

export function RawNav({ lang }: { lang: Language }) {
	const [currentVisibleSection, setCurrentVisibleSection] = useState();
	const path = usePathname();
	const router = useRouter();
	const scrollToElement = (
		event: React.MouseEvent<HTMLAnchorElement, MouseEvent>
	) => {
		event.preventDefault();
		const id = event.currentTarget.href.split("#")[1];

		if (path.length > 4) {
			router.push(`${lang != Language.DE ? "/en" : ""}/#${id}`);
		}
		let elementToScrollTo = document.getElementById(id);
		if (elementToScrollTo) {
			elementToScrollTo.scrollIntoView({ behavior: "smooth" });
		}
	};

	function findHref(isGer: boolean) {
		if (path.indexOf("#") != -1) {
			return `${isGer ? "/en" : "/"}${path.split("#")[1]}`;
		}
		if (isGer) {
			switch (path) {
				case "/impressum":
					return "/en/imprint";
				case "/datenschutz":
					return "/en/privacy";
				case "/agb":
					return "/en/terms";
			}
			return path.replace("/", "/en/");
		} else {
			switch (path) {
				case "/en/imprint":
					return "/impressum";
				case "/en/privacy":
					return "/datenschutz";
				case "/en/terms":
					return "/agb";
			}
			return path.replace("/en/", "/");
		}
	}

	useEffect(() => {
		const handleIntersection = (entries: any, observer: any) => {
			for (let index = 0; index < entries.length; index++) {
				if (entries[index].isIntersecting) {
					setCurrentVisibleSection(entries[index].target.id);
				}
			}
		};

		const observer = new IntersectionObserver(handleIntersection, {
			threshold: 1,
		});

		const sections = document.querySelectorAll(".sec");

		sections.forEach((section) => {
			observer.observe(section);
		});

		const observerHidden = new IntersectionObserver(
			(entries: any) => {
				entries.forEach((element: any) => {
					if (element.isIntersecting) {
						element.target.classList.add("show");
					}
				});
			},
			{ threshold: 1 }
		);
		const hiddenElements = document.querySelectorAll(".hidden");
		hiddenElements.forEach((element) => {
			observerHidden.observe(element);
		});

		return () => {
			observer.disconnect();
			observerHidden.disconnect();
		};
	}, [path]);

	const switchLanguage = (
		event: React.MouseEvent<HTMLAnchorElement, MouseEvent>
	) => {
		if (event.currentTarget.href.indexOf("#") != -1) {
			event.preventDefault();

			router.push(`${lang == Language.DE ? "/en" : "/"}`);
			const id = currentVisibleSection ?? "home";
			setTimeout(() => {
				if (path.length > 4) {
					router.push(`${lang != Language.DE ? "/en" : ""}/#${id}`);
				}
				let elementToScrollTo = document.getElementById(id);
				if (elementToScrollTo) {
					elementToScrollTo.scrollIntoView({ behavior: "smooth" });
				}
			}, 500);
		}
	};

	return (
		<>
			{lang == Language.DE ? (
				<nav lang="de" className={styles.inner}>
					<a
						href="#home"
						onClick={scrollToElement}
						className={
							currentVisibleSection == "home" ? styles.active : ""
						}
					>
						Home
					</a>
					<a
						href="#complead"
						onClick={scrollToElement}
						className={
							currentVisibleSection == "complead"
								? styles.active
								: ""
						}
					>
						CompLead
					</a>
					<a
						href="#aboutus"
						onClick={scrollToElement}
						className={
							currentVisibleSection == "aboutus"
								? styles.active
								: ""
						}
					>
						Über uns
					</a>
					<a
						href="#contact"
						onClick={scrollToElement}
						className={
							currentVisibleSection == "contact"
								? styles.active
								: ""
						}
					>
						Kontakt
					</a>
					<Link href={findHref(true)} onClick={switchLanguage}>
						EN
					</Link>
				</nav>
			) : (
				<nav lang="en" className={styles.inner}>
					<a
						href="#home"
						onClick={scrollToElement}
						className={
							currentVisibleSection == "home" ? styles.active : ""
						}
					>
						Home
					</a>
					<a
						href="#complead"
						onClick={scrollToElement}
						className={
							currentVisibleSection == "complead"
								? styles.active
								: ""
						}
					>
						CompLead
					</a>
					<a
						href="#aboutus"
						onClick={scrollToElement}
						className={
							currentVisibleSection == "aboutus"
								? styles.active
								: ""
						}
					>
						About us
					</a>
					<a
						href="#contact"
						onClick={scrollToElement}
						className={
							currentVisibleSection == "contact"
								? styles.active
								: ""
						}
					>
						Contact
					</a>
					<Link href={findHref(false)} onClick={switchLanguage}>
						DE
					</Link>
				</nav>
			)}
		</>
	);
}

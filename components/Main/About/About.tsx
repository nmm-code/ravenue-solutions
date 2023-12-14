import styles from "./About.module.scss";
import Image from "next/image";
import stock from "@/assets/main/about/about.svg";
import { Language } from "@/types/Language";

export default function About({ lang }: { lang: Language }) {
	const isGerman = lang === Language.DE;

	return (
		<div className={styles.about}>
			<h1 className="hidden">
				{isGerman
					? "Über Ravenue Solutions"
					: "About Ravenue Solutions"}
			</h1>
			<p className="hidden">
				{isGerman
					? "Als Innovatoren im Bereich der datengesteuerten Technologie streben wir danach, die Art und Weise, wie Unternehmen ihre Vertriebs- und Marketingprozesse führen, neu zu definieren. Erfahren Sie mehr über unsere Reise und unsere Vision."
					: "As innovators in the field of data-driven technology, we strive to redefine the way businesses conduct their sales and marketing processes. Learn more about our journey and our vision."}
			</p>
			<div className={styles.container}>
				<ul className={styles.enum}>
					<li className="hidden">
						<div>
							<h3>{isGerman ? "Der Anfang" : "The Beginning"}</h3>
							<p>
								{isGerman
									? "Gegründet im Jahr 2022, hat sich Ravenue Solutions schnell einen Namen im Bereich der Leadgenerierung und der automatisierten CRM-System Pflege gemacht."
									: "Founded in 2022, Ravenue Solutions quickly made a name for itself in the field of lead generation and automated CRM system maintenance."}
							</p>
						</div>
					</li>
					<li className="hidden">
						<div>
							<h3>
								{isGerman
									? "Sitz in Hamburg"
									: "Based in Hamburg"}
							</h3>
							<p>
								{isGerman
									? "Hier arbeiten wir eng mit unseren Kunden zusammen, um Lösungen zu entwickeln, die ihre Geschäftsprozesse transformieren und einen messbaren Einfluss auf ihre Ergebnisse haben."
									: "Here, we work closely with our clients to develop solutions that transform their business processes and have a measurable impact on their results."}
							</p>
						</div>
					</li>
					<li className="hidden">
						<div>
							<h3>
								{isGerman ? "Unsere Wirkung" : "Our Impact"}
							</h3>
							<p>
								{isGerman
									? "Hier arbeiten wir eng mit unseren Kunden zusammen, um Lösungen zu entwickeln, die ihre Geschäftsprozesse transformieren und einen messbaren Einfluss auf ihre Ergebnisse haben."
									: "Here, we work closely with our clients to develop solutions that transform their business processes and have a measurable impact on their results."}
							</p>
						</div>
					</li>
				</ul>
				<Image
					src={stock}
					width={1162}
					height={800}
					alt="stock"
				></Image>
			</div>
		</div>
	);
}

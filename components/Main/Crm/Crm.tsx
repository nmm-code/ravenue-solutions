import styles from "./Crm.module.scss";
import ai from "@/assets/main/ai.svg";
import Image from "next/image";
import Button from "@/components/utils/Button";
import { Language } from "@/types/Language";

export default function Crm({ lang }: { lang: Language }) {
	return (
		<div className={styles.main}>
			<Image className="hidden" src={ai} alt={"ai"}></Image>
			<div>
				<h1 className="hidden">
					{lang == Language.DE ? (
						<>
							Was Sie bekommen: Integrierte <br /> Daten in Ihr
							CRM-System
						</>
					) : (
						<>
							What you get: Integrated <br /> Data in your CRM
							system
						</>
					)}
				</h1>
				<p className="hidden">
					{lang == Language.DE ? (
						<>
							Lorem ipsum dolor sit amet consectetur. Sapien
							gravida aliquam ac libero convallis. Tellus
							suspendisse posuere porttitor egestas magna mauris.
							Habitant lorem fermentum in sollicitudin id molestie
							semper imperdiet. Amet sit arcu diam amet nibh.
							Tincidunt vitae adipiscing hac egestas.
						</>
					) : (
						<>
							Lorem ipsum dolor sit amet consectetur. Sapien
							gravida aliquam ac libero convallis. Tellus
							suspendisse posuere porttitor egestas magna mauris.
							Habitant lorem fermentum in sollicitudin id molestie
							semper imperdiet. Amet sit arcu diam amet nibh.
							Tincidunt vitae adipiscing hac egestas.
						</>
					)}
				</p>
				<Button href={"#"}>
					{lang == Language.DE ? "Erfahre mehr" : "Learn more"}
				</Button>
			</div>
		</div>
	);
}

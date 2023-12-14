'use client';
import { useState } from 'react';
import styles from './Ratings.module.scss';
import Image from 'next/image';
import user from '@/assets/main/user.png';
import { Language } from '@/types/Language';
const ratings = [
	{
		name: 'Edward Tyson',
		rating: 5,
		text: {
			de: 'Ich bin begeistert von der Professionalität und dem Engagement des Teams. Sie haben mir geholfen, meine Website auf die nächste Stufe zu bringen.',
			en: 'I am amazed by the professionalism and dedication of the team. They helped me take my website to the next level.',
		},
	},
	{
		name: 'John Doe',
		rating: 5,
		text: {
			en: 'The quality of work is incredible. I am very satisfied with the result and would recommend Ravenue Solutions to anyone in need of a great website.',
			de: 'Die Qualität der Arbeit ist unglaublich. Ich bin sehr zufrieden mit dem Ergebnis und würde Ravenue Solutions jedem empfehlen, der eine großartige Website benötigt.',
		},
	},
	{
		name: 'Natalie Smith',
		rating: 4,
		text: {
			de: 'Ich war beeindruckt von der schnellen und effizienten Arbeit des Teams. Sie haben meine Erwartungen übertroffen und ich bin sehr zufrieden mit dem Ergebnis.',
			en: 'I was impressed by the quick and efficient work of the team. They exceeded my expectations and I am very satisfied with the result.',
		},
	},
];

function numToStar(num: number) {
	let stars = '';
	for (let i = 0; i < num; i++) {
		stars += '⭐';
	}
	return stars;
}

export default function Ratings({ lang }: { lang: Language }) {
	const length = ratings.length;
	const [idx, setIdx] = useState(0);

	const [animate, setAnimate] = useState(false);

	function handleAnimation() {
		setTimeout(() => {
			setAnimate(false);
		}, 1000);

		setTimeout(() => {
			setIdx(idx + 1 === length ? 0 : idx + 1);
		}, 500);
	}

	const ratingText = lang === Language.DE ? ratings[idx].text.de : ratings[idx].text.en;

	return (
		<>
			<div className={styles.container}>
				<div className={`${styles.rating}`}>
					<div className={animate ? styles.start : ''}>

						<p className='hidden'>
							{'"'}
							{ratingText}
							{'"'}
						</p>
						<p className='hidden'>{numToStar(ratings[idx].rating)}</p>
						<h4 className='hidden'>{ratings[idx].name} </h4>
					</div>
				</div>
				<div className={styles.static}>
					<h1 className='hidden'>
						{lang === Language.DE ? 'Echte Geschichte, Echtes Ergebnis.' : 'Real Story, Real Result.'}
					</h1>
					<button
						disabled={animate}
						className='button hidden'
						onClick={() => {
							setAnimate(true);
							handleAnimation();
						}}
					>
						{lang === Language.DE ? 'Mehr lesen' : 'Read more'}
					</button>
				</div>
			</div>
		</>
	);
}

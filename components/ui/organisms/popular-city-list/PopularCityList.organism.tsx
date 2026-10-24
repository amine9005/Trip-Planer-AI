"use client";
import {
	Carousel,
	Card,
} from "@/components/ui/organisms/carousels/apple-cards-carousel";
import { useAiSendMessageHook } from "@/hooks/submit/useAiSendMessage.submit";

interface MainProps {
	onSend: ({ message }: { message: string }) => void;
}

export function PopularCityListOrganism() {
	const { onSend } = useAiSendMessageHook();

	const data = [
		{
			category: "Paris, France",

			title: "Explore the City of Lights – Eiffel Tower, Louvre & more",

			src: "https://images.unsplash.com/photo-1502602898657-3e91760cbb34?q=80&w=2600&auto=format&fit=crop",

			content: <DummyContent title={"Paris, France"} onSend={onSend} />,
		},

		{
			category: "New York, USA",

			title: "Experience NYC – Times Square, Central Park, Broadway",

			src: "https://plus.unsplash.com/premium_photo-1661954654458-c673671d4a08?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",

			content: <DummyContent title={"New York, USA"} onSend={onSend} />,
		},

		{
			category: "Tokyo, Japan",

			title: "Discover Tokyo – Shibuya, Cherry Blossoms, Temples",

			src: "https://images.unsplash.com/photo-1522547902298-51566e4fb383?q=80&w=735&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",

			content: <DummyContent title={"Tokyo, Japan"} onSend={onSend} />,
		},

		{
			category: "Rome, Italy",

			title: "Walk through History – Colosseum, Vatican, Roman Forum",

			src: "https://plus.unsplash.com/premium_photo-1675975678457-d70708bf77c8?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",

			content: <DummyContent title={"Rome, Italy"} onSend={onSend} />,
		},

		{
			category: "Dubai, UAE",

			title: "Luxury and Innovation – Burj Khalifa, Desert Safari",

			src: "https://images.unsplash.com/photo-1526495124232-a04e1849168c?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",

			content: <DummyContent title={"Dubai, UAE"} onSend={onSend} />,
		},

		{
			category: "India",

			title: "Harbour Views – Opera House, Bondi Beach & Wildlife",

			src: "https://images.unsplash.com/photo-1524492412937-b28074a5d7da?q=80&w=1171&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",

			content: <DummyContent title={"india"} onSend={onSend} />,
		},
	];

	const cards = data.map((card, index) => (
		<Card key={card.src} card={card} index={index} />
	));

	return (
		<div className="w-full max-w-7xl h-full pt-20">
			<h2 className="max-w-7xl pl-4 mx-auto text-xl md:text-5xl font-bold text-neutral-800 dark:text-neutral-200 font-sans">
				Popular Destinations To Visit
			</h2>
			<Carousel items={cards} />
		</div>
	);
}

interface DummyContentProps {
	title: string;
}

const DummyContent = ({ onSend, title }: DummyContentProps & MainProps) => {
	return (
		<div
			onClick={() => onSend({ message: "I Want To Go To: " + title })}
			className="bg-[#F5F5F7] dark:bg-neutral-800 rounded-3xl "
		>
			<p className="text-neutral-600 dark:text-neutral-400 text-base md:text-2xl font-sans max-w-3xl mx-auto">
				<span className="font-bold text-neutral-700 dark:text-neutral-200">
					The first rule of Apple club is that you boast about Apple club.
				</span>{" "}
				Keep a journal, quickly jot down a grocery list, and take amazing class
				notes. Want to convert those notes to text? No problem. Langotiya jeetu
				ka mara hua yaar is ready to capture every thought.
			</p>
			<img
				src="https://assets.aceternity.com/macbook.png"
				alt="Place image"
				height="500"
				width="500"
				className="md:w-1/2 md:h-1/2 h-full w-full mx-auto object-contain"
			/>
		</div>
	);
};

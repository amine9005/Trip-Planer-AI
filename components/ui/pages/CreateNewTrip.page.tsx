"use client";
import TripPlannerAction from "@/components/ui/actions/trip-planner/TripPlanner.action";
import { useEffect, useState } from "react";
import {
	Globe2,
	ListChecks,
	Loader2Icon,
	MapIcon,
	MessageCircle,
	Plane,
} from "lucide-react";
import { P } from "@/components/ui/atoms/text/Text";
import GlobalMapOrganism from "@/components/ui/organisms/map/GlobalMap.organism";
import { Button } from "@/components/ui/atoms/button/button";
import SelectPageMolecule from "@/components/ui/molecules/select-page/SelectPage.molecule";
import { useAIMessagesStore } from "@/store/AI/messages.store";
import ChatBoxAction from "@/components/ui/actions/trip-planner/ChatBox.action";
import OneTwoLayout from "@/components/ui/layouts/OneTwo.layout";

const CreateNewTripPage = () => {
	const [smallScreen, setSmallScreen] = useState(true);
	const [loading, setLoading] = useState(true);
	// const [activeIndex, setActiveIndex] = useState(1);
	const activeIndex = useAIMessagesStore((state) => state.switchView);
	const setActiveIndex = useAIMessagesStore((state) => state.setSwitchView);

	const handle_map_switch = () => {
		// console.log("active index: ", activeIndex);

		if (activeIndex === 1) {
			setActiveIndex(2);
		} else {
			setActiveIndex(1);
		}
	};

	const switch_page_mobile = () => {
		switch (activeIndex) {
			case 0:
				return <ChatBoxAction />;
			case 1:
				return <GlobalMapOrganism />;
			case 2:
				return <TripPlannerAction />;
			default:
				return <ChatBoxAction />;
		}
	};

	const page_name_by_index = () => {
		switch (activeIndex) {
			case 0:
				return (
					<div className="flex flex-row items-center gap-4">
						{" "}
						<MessageCircle /> Chat{" "}
					</div>
				);
			case 1:
				return (
					<div className="flex flex-row items-center gap-4">
						{" "}
						<MapIcon /> Map{" "}
					</div>
				);
			case 2:
				return (
					<div className="flex flex-row items-center gap-4">
						{" "}
						<ListChecks /> Itinerary{" "}
					</div>
				);
			default:
				return (
					<div className="flex flex-row items-center gap-4">
						{" "}
						<MessageCircle /> Chat{" "}
					</div>
				);
		}
	};

	useEffect(() => {
		const handleResize = () => {
			// console.log("window size: ", window.innerWidth);

			if (window.innerWidth > 600) {
				setSmallScreen(false);
			} else {
				setSmallScreen(true);
				setActiveIndex(0);
			}
			setLoading(false);
		};
		handleResize();
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	if (loading) {
		return (
			<div className="flex justify-center items-center h-screen">
				<div className="flex flex-col justify-center items-center gap-4">
					<Loader2Icon className="animate-spin size-10" />
					<P>Loading...</P>
				</div>
			</div>
		);
	}

	if (smallScreen) {
		return (
			<div>
				<SelectPageMolecule
					minPage={0}
					maxPage={2}
					count={activeIndex}
					alias={page_name_by_index()}
					setCount={setActiveIndex}
				/>

				{switch_page_mobile()}
			</div>
		);
		// Render ChatBoxAction on small screen
	}

	return (
		<OneTwoLayout
			left={<ChatBoxAction />}
			right={
				<div className="relative col-span-1 lg:col-span-2">
					{activeIndex == 1 && <GlobalMapOrganism />}
					{activeIndex == 2 && <TripPlannerAction />}

					<Button
						className="absolute bottom-10 right-0"
						onClick={() => handle_map_switch()}
					>
						{activeIndex == 1 && (
							<>
								Switch To Itinerary <Plane className="size-5" />{" "}
							</>
						)}
						{activeIndex == 2 && (
							<>
								Switch To Map <Globe2 className="size-5" />{" "}
							</>
						)}
					</Button>
				</div>
			}
		></OneTwoLayout>
	);
};

export default CreateNewTripPage;

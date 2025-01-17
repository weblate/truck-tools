import { useContext } from "react";
import { ProfileContex } from "@/hooks/useProfileContex";
import OptionCard from "@/components/OptionCard";

// images
// ets2
import img1 from "@/static/img/ets2/OptionsImages/1.webp";
import img6 from "@/static/img/ets2/OptionsImages/6.webp";
import img7 from "@/static/img/ets2/OptionsImages/7.webp";
import img8 from "@/static/img/ets2/OptionsImages/8.webp";
import img9 from "@/static/img/ets2/OptionsImages/9.webp";
import img10 from "@/static/img/ets2/OptionsImages/10.webp";

// ats
import img6_ats from "@/static/img/ats/OptionsImages/6.webp";
import img7_ats from "@/static/img/ats/OptionsImages/7.webp";
import img8_ats from "@/static/img/ats/OptionsImages/8.webp";
import img9_ats from "@/static/img/ats/OptionsImages/9.webp";
import img10_ats from "@/static/img/ats/OptionsImages/10.webp";

// modals
import RepairTruck from "@/routes/pages/TrucksOptions/Modals/RepairTruck";
import RepairAllTrucks from "@/routes/pages/TrucksOptions/Modals/RepairAllTrucks";
import FillTruckFuel from "@/routes/pages/TrucksOptions/Modals/FillTruckFuel";
import SetInfiniteFuel from "@/routes/pages/TrucksOptions/Modals/SetInfiniteFuel";
import FillAllTrucksFuel from "@/routes/pages/TrucksOptions/Modals/FillAllTrucksFuel";
import EditLicensePlate from "@/routes/pages/TrucksOptions/Modals/EditLicensePlate";
import SetTruckEngine from "@/routes/pages/TrucksOptions/Modals/SetTruckEngine";
import SetTruckTransmission from "@/routes/pages/TrucksOptions/Modals/SetTruckTransmission";

const TrucksOptions = () => {
	const { game } = useContext(ProfileContex);

	const items = [
		{
			id: "1",
			title: "Change truck engine",
			description: "Change the engine of the truck",
			image: game === "ets2" ? img6 : img6_ats,
			modal: <SetTruckEngine />,
			disable: false,
		},
		{
			id: "2",
			title: "Change truck transmission",
			description: "Change the transmission of the truck",
			image: game === "ets2" ? img7 : img7_ats,
			modal: <SetTruckTransmission />,
			disable: false,
		},
		{
			id: "3",
			title: "Change truck license plate",
			description: "Change the license plate of the truck",
			image: img1,
			modal: <EditLicensePlate />,
			disable: game === "ets2" ? false : true,
		},
		{
			id: "4",
			title: "Repair truck",
			description: "Repair your current truck",
			image: game === "ets2" ? img8 : img8_ats,
			modal: <RepairTruck />,
			disable: false,
		},
		{
			id: "5",
			title: "Repair all trucks",
			description: "Repairs all fleet trucks",
			image: game === "ets2" ? img8 : img8_ats,
			modal: <RepairAllTrucks />,
			disable: false,
		},
		{
			id: "6",
			title: "Fill fuel",
			description: "Fill fuel in current truck",
			image: game === "ets2" ? img9 : img9_ats,
			modal: <FillTruckFuel />,
			disable: false,
		},
		{
			id: "7",
			title: "Fill all trucks fuel",
			description: "Refueling all fleet trucks",
			image: game === "ets2" ? img9 : img9_ats,
			modal: <FillAllTrucksFuel />,
			disable: false,
		},
		{
			id: "8",
			title: "Infinite fuel on current truck",
			description: "Infinite fuel on current truck",
			image: game === "ets2" ? img10 : img10_ats,
			modal: <SetInfiniteFuel />,
			disable: false,
		},
	];

	return (
		<div className="flex flex-col gap-4">
			<div className="my-4 grid grid-cols-3 gap-4">
				{items.map((item) => {
					if (item.disable) return;

					return (
						<OptionCard
							key={item.id}
							id={item.id}
							title={item.title}
							description={item.description}
							image={item.image}
							footerJsx={item.modal}
						/>
					);
				})}
			</div>
		</div>
	);
};

export default TrucksOptions;

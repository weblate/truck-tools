import { useState, useContext } from "react";
import { ProfileContex } from "@/hooks/useProfileContex";
import {
	Modal,
	ModalContent,
	ModalHeader,
	Divider,
	ModalBody,
	ModalFooter,
	Button,
	useDisclosure,
	RadioGroup,
} from "@nextui-org/react";
import CustomRadio from "@/components/CustomRadio";
import { setProfileGarageStatus } from "@/utils/fileEdit";
import AlertSave from "@/components/AlertSave";

// icons
import { IconPencil, IconDeviceFloppy } from "@tabler/icons-react";

// images
// ets2
import smallGarage from "@/static/img/ets2/garages/small.webp";
import mediumGarage from "@/static/img/ets2/garages/medium.webp";
import largeGarage from "@/static/img/ets2/garages/large.webp";

// ats
import smallGarage_ats from "@/static/img/ats/garages/small.webp";
import mediumGarage_ats from "@/static/img/ats/garages/medium.webp";
import largeGarage_ats from "@/static/img/ats/garages/large.webp";

interface completedProps {
	error: boolean;
	completed: boolean;
}

const SetGarageStatus = () => {
	const { selectedSave, game } = useContext(ProfileContex);
	const { isOpen, onOpen, onOpenChange } = useDisclosure();

	const [GarageStatus, setGarageStatus] = useState<string>("3");
	const [isLoading, setIsLoading] = useState<boolean>(false);
	const [completed, setCompleted] = useState<completedProps>({
		error: false,
		completed: false,
	});

	const onClickApply = async () => {
		if (completed.completed) {
			setCompleted({ error: false, completed: false });
		}

		if (!selectedSave) return;

		setIsLoading(true);

		const res = await setProfileGarageStatus(selectedSave.dir, GarageStatus);

		setCompleted({
			error: !res,
			completed: true,
		});
		setIsLoading(false);
	};

	return (
		<>
			<Button
				endContent={<IconPencil stroke={2} />}
				onPress={onOpen}
				isDisabled={!selectedSave}
				color="primary"
				variant="shadow"
			>
				Open
			</Button>
			<Modal
				hideCloseButton
				size="md"
				backdrop="blur"
				isOpen={isOpen}
				onOpenChange={onOpenChange}
				shouldBlockScroll={false}
			>
				<ModalContent>
					{(onClose) => (
						<>
							<ModalHeader className="flex flex-col gap-1">
								Set Garage Status
							</ModalHeader>
							<Divider />
							<ModalBody className="py-1">
								<p>
									Select the status of the garage you want to apply to your
									profile
								</p>
								<RadioGroup
									className="items-center"
									value={GarageStatus}
									onValueChange={(value) => setGarageStatus(value)}
									orientation="horizontal"
									label="Garage status"
								>
									<CustomRadio
										selectedGarage={GarageStatus}
										text="Sell Garage"
										value="1"
									/>
									<CustomRadio
										selectedGarage={GarageStatus}
										image={game === "ets2" ? smallGarage : smallGarage_ats}
										text="Small Garage"
										value="6"
									/>
									<CustomRadio
										selectedGarage={GarageStatus}
										image={game === "ets2" ? mediumGarage : mediumGarage_ats}
										text="Medium Garage"
										value="2"
									/>
									<CustomRadio
										selectedGarage={GarageStatus}
										image={game === "ets2" ? largeGarage : largeGarage_ats}
										text="Large Garage"
										value="3"
									/>
								</RadioGroup>
								<AlertSave
									message={
										completed.error
											? "An error occurred in the process"
											: "Saved successfully"
									}
									error={completed.error}
									show={completed.completed}
									setShowFalse={() =>
										setCompleted({ error: completed.error, completed: false })
									}
								/>
							</ModalBody>
							<ModalFooter>
								<Button color="danger" variant="light" onPress={onClose}>
									Close
								</Button>
								<Button
									endContent={<IconDeviceFloppy />}
									isLoading={isLoading}
									color="success"
									onPress={onClickApply}
								>
									Apply
								</Button>
							</ModalFooter>
						</>
					)}
				</ModalContent>
			</Modal>
		</>
	);
};

export default SetGarageStatus;

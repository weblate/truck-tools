import { FC } from "react";
import { useDarkMode } from "../../hooks/useDarkModeContex";
import {
	Modal,
	ModalContent,
	ModalHeader,
	Divider,
	ModalBody,
	ModalFooter,
	Button,
	Select,
	SelectItem,
	Switch,
	Input,
} from "@nextui-org/react";

// types
import { themeTypesSystem } from "../../types/fileEditTypes";

// icons
import { IconFolderSearch, IconFileTypeZip } from "@tabler/icons-react";

interface SettingsModalProps {
	isOpen: boolean;
	onOpenChange: () => void;
}

const SettingsModal: FC<SettingsModalProps> = ({ isOpen, onOpenChange }) => {
	const { userTheme, setUserTheme } = useDarkMode();

	const onClickTheme = (theme: themeTypesSystem) => {
		setUserTheme(theme);
	};

	return (
		<Modal
			size="sm"
			backdrop="blur"
			isOpen={isOpen}
			onOpenChange={onOpenChange}
		>
			<ModalContent>
				{(_onClose) => (
					<>
						<ModalHeader className="flex flex-col gap-1">Settings</ModalHeader>
						<Divider />
						<ModalBody className="flex gap-3 pb-1">
							<div className="flex flex-col gap-1">
								<Select
									selectedKeys={[userTheme]}
									onChange={(e) => onClickTheme(e.target.value as any)}
									label="Change theme"
									variant="bordered"
									placeholder="Select a theme"
									className="max-w-xs"
								>
									<SelectItem key="system">System</SelectItem>
									<SelectItem key="dark">Dark</SelectItem>
									<SelectItem key="light">Light </SelectItem>
								</Select>
							</div>
							<div className="flex flex-col gap-1">
								<Select
									label="Change language"
									variant="bordered"
									placeholder="Select a language"
									className="max-w-xs"
									isDisabled
								>
									<SelectItem key="light ">English</SelectItem>
								</Select>
							</div>
							<div className="flex flex-col gap-1">
								<Switch isDisabled>Enable console and developer mode</Switch>
							</div>
							<div className="flex flex-col gap-1">
								<Switch isDisabled>Enable 128 convoy mode slots</Switch>
							</div>
							<div className="flex flex-col gap-1">
								<Input
									className="mt-1"
									disabled={true}
									startContent={<IconFileTypeZip />}
									endContent={
										<Button
											color="primary"
											startContent={<IconFolderSearch />}
											disabled={true}
										/>
									}
									label="Document folder"
									placeholder="Enter the document folder"
									isDisabled
								/>
							</div>
						</ModalBody>
						<ModalFooter className="items-center justify-center gap-1"></ModalFooter>
					</>
				)}
			</ModalContent>
		</Modal>
	);
};

export default SettingsModal;
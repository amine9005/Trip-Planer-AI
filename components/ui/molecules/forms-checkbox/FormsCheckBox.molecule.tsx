import { Checkbox } from "@/components/ui/atoms/checkbox/checkbox";
import { Label } from "@/components/ui/atoms/label/label";
import { UseFormReturn } from "react-hook-form";

interface Values {
	labelTitle: string | React.ReactNode;
	// eslint-disable-next-line @typescript-eslint/no-explicit-any
	form: UseFormReturn<any>;
}

interface Props {
	// eslint-disable-next-line @typescript-eslint/no-explicit-any
	values: any;
	className?: string;
	checkFor: string;
	checkClassName?: string;
}

const FormsCheckBox = ({
	values,
	className,
	checkFor,
	checkClassName,
}: Props) => {
	return (
		<div className={`flex items-center gap-2 ${className}`}>
			<Checkbox
				className={checkClassName}
				checked={values.form.watch(checkFor)}
				id={checkFor}
				onClick={() => {
					values.form.setValue(checkFor, !values.form.getValues(checkFor));
				}}
			/>
			<Label className="hover:cursor-pointer" htmlFor={checkFor}>
				{values.labelTitle}
			</Label>
		</div>
	);
};

export default FormsCheckBox;

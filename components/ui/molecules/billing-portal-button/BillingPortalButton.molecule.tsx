import { Button } from "@/components/ui/atoms/button/button";
import { useGetBillingPortalHook } from "@/hooks/mutations/useSubscription.mutation";
import { Loader2 } from "lucide-react";
import { redirect } from "next/navigation";
import { useState } from "react";

interface Props {
	text: string;
	referenceId?: string;
	returnUrl: string;
}

const BillingPortalButtonMolecule = ({
	text,
	referenceId,
	returnUrl,
}: Props) => {
	const { mutateAsync: getBillingPortal } = useGetBillingPortalHook();
	const [loading, seLoading] = useState(false);

	const handel_click = async ({
		referenceId,
		returnUrl,
	}: {
		referenceId?: string;
		returnUrl: string;
	}) => {
		if (!referenceId) return;
		seLoading(true);
		const resp = await getBillingPortal({ referenceId, returnUrl });
		// console.log("billing portal: ", resp);
		redirect(resp.data.data.url);
	};

	return (
		<Button
			onClick={() => handel_click({ referenceId, returnUrl })}
			disabled={loading}
		>
			{text}
			{loading && <Loader2 className="size-5 animate-spin" />}
		</Button>
	);
};

export default BillingPortalButtonMolecule;

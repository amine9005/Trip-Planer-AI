"use client";
import { useMutation } from "@tanstack/react-query";
import axiosInstance from "@/lib/axios";
import { MessageAISchemaType } from "@/validations/AI.zod";
import { apiPaths } from "@/helpers/routes.helper";

interface Props {
	messages: MessageAISchemaType[];
	isFinal: boolean;
}

export const useAI_Mutation = () => {
	const susePromptAI_RequestFn = async ({ messages, isFinal }: Props) => {
		const response = await axiosInstance.post(apiPaths.AI_ROUTES.POST.GOOGLE, {
			messages,
			isFinal,
		});
		return response;
	};

	return useMutation({
		mutationFn: susePromptAI_RequestFn,
	});
};

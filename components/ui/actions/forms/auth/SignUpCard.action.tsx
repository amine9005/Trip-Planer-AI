"use client";
import { memo } from "react";
import { useSignUp } from "@/hooks/forms/useAuthForms.hook";
import FormLayout from "@/components/ui/layouts/Form.layout";
import SignUpFormCard from "@/components/ui/organisms/signup/SignUpCard.organism";
import { useSignUpSubmit } from "@/hooks/submit/useAuthSubmit.hook";

const SignInCardAction = () => {
  const form = useSignUp();
  const { handleSubmit } = form;
  const { onSubmit, loading } = useSignUpSubmit(form);

  const card = { title: "Welcome, Sign Up", description: "" };

  return (
    <FormLayout>
      {" "}
      <SignUpFormCard
        loading={loading}
        form={form}
        card={card}
        formName="sign-in"
        handle_submit={handleSubmit(onSubmit)}
      />
    </FormLayout>
  );
};

export default memo(SignInCardAction);

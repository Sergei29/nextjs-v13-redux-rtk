"use client";

import ReduxProvider from "@/app/store/ReduxProvider";
import LoginForm from "./LoginForm";

interface IProps {}

const ClientFormWrapper = ({}: IProps): JSX.Element => {
  return (
    <ReduxProvider>
      <LoginForm />
    </ReduxProvider>
  );
};

export default ClientFormWrapper;

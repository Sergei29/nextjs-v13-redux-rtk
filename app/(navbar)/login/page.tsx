import ClientLoginFormWrapper from "./ClientFormWrapper";

interface IProps {}

const LoginPage = ({}: IProps): JSX.Element => {
  return (
    <div className="h-screen w-full flex">
      <div className="m-auto">
        <h1 className="font-bold text-3xl">Login</h1>
        <br />
        <ClientLoginFormWrapper />
      </div>
    </div>
  );
};

export default LoginPage;

import ClientStuff from "./ClientStuff";

/**
 * @description With the nest.js backend above running, you can type any dummy username and password and this will take you to the account page
 */

interface IProps {}

const AccountPage = ({}: IProps): JSX.Element => {
  return (
    <div className="p-5">
      <ClientStuff />
    </div>
  );
};

export default AccountPage;

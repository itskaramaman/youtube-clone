import { SUBSCRIPTION_LOGO, USER_LOGO } from "../utils/constant";

const Subscription = () => {
  return (
    <div className="w-screen flex flex-col gap-2 justify-center items-center h-screen">
      <img className="h-20 shadow-2xl" src={SUBSCRIPTION_LOGO} alt="sub-logo" />
      <h1 className="text-xl">
        Sign in to see updates from your favourite YouTube channels.
      </h1>
      <div className="flex items-center gap-1 border border-blue-500 rounded-2xl py-1 px-2 cursor-pointer">
        <img src={USER_LOGO} alt="user-logo" className="h-5" />
        <p className="text-blue-800 font-bold">Sign In</p>
      </div>
    </div>
  );
};

export default Subscription;

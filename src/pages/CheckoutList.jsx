import FormDisplay from "../components/FormDisplay";
import InfoForm from "../components/InfoForm";

export default function CheckoutList() {
  return (
    <div className="mx-10 my-5 capitalize mb-10 lg:mb-20">
      <header className="text-wine-700 leading-loose font-bold tracking-widest my-3">
        <h1 className=" text-4xl py-2">checkout</h1>
        <h2 className=" text-2xl py-1">personal information</h2>
      </header>
      <form className="my-5 lg:grid grid-cols-2 gap-10">
              <InfoForm />
              <FormDisplay/>
      </form>
    </div>
  );
}

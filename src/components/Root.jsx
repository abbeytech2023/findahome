import { CiFacebook, CiInstagram, CiTwitter } from "react-icons/ci";

export default function Root() {
  return (
    <div className="bg-[#666] text-white flex sm:flex-col gap-8 sm:gap-5 min-[0px]:flex-col text-center text-2xl justify-center py-6">
      <div>
        <p>Fair housing opportunity for everyone | &#169; 2025</p>
      </div>
      <div>Urban Oasis: Where City Meets Serenity | Follow us on</div>

      <div className="flex items-center gap-4  justify-center">
        <span className=" border-2 border-solid text-4xl rounded ">
          <CiFacebook />
        </span>

        <span className=" border-2 border-solid  text-4xl">
          <CiTwitter />
        </span>
        <span className="border-2 border-solid  text-4xl">
          <CiInstagram />
        </span>
      </div>
    </div>
  );
}

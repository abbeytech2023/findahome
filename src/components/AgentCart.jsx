import { BsGooglePlay } from "react-icons/bs";
import { CgGoogle } from "react-icons/cg";
import { CiInstagram } from "react-icons/ci";
import { FaInstagram } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa6";
import { GrGoogle } from "react-icons/gr";
import { Link } from "react-router-dom";

export default function AgentCart({ documents }) {
  console.log(documents);

  return (
    <div className="flex gap-10 flex-wrap justify-center items-center">
      {documents &&
        documents.map((doc) => {
          console.log(doc.googleLink);

          const strGoogle = doc?.googleLink;
          const gogle = strGoogle?.slice(9);
          const googleLink = "www." + gogle;
          console.log(googleLink);

          return (
            <div
              key={doc.id}
              className="w-[20rem] border-2 border-black px-5 rounded-xl h-[24rem]"
            >
              <p>Name {doc.displayName}</p>
              <p>email: {doc.email}</p>
              <p>Mobile: {doc.mobilePhone}</p>
              <p>Home-address: {doc.homeAdress}</p>
              <p>Gender: {doc.gender}</p>
              <p>office-adress: {doc.officeAdress}</p>
              <p>state: {doc.state}</p>
              <p className="flex gap-7">
                <CgGoogle />: {OpenGoogleInNewTab(doc.googleLink)}
              </p>
              <p className="flex gap-7">
                <FaInstagram />:{<Link to={doc.instagramLink}>click-here</Link>}
                <Link to={doc.googleLink}>press</Link>
              </p>
              <p className="flex gap-7">
                <FaFacebook />: {<Link to={doc.facebookLink}>click-here</Link>}
              </p>
              <p></p>
            </div>
          );
        })}
    </div>
  );
}

function OpenGoogleInNewTab(link) {
  const handleOpen = () => {
    window.open(link, "_blank");
  };

  return <button onClick={handleOpen}>Open google business</button>;
}

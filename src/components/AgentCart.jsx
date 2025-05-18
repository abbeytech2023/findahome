import { BsGooglePlay } from "react-icons/bs";
import { CgGoogle } from "react-icons/cg";
import { CiInstagram } from "react-icons/ci";
import { FaInstagram } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa6";
import { GrGoogle } from "react-icons/gr";
import { Link } from "react-router-dom";
import styled from "styled-components";

const StyledUserDiv = styled.div`
  padding: 1.4 1.8rem;
  border-radius: 1rem;
  box-shadow: 3px 3px 8px rgba(85, 85, 85, 0.487);
  width: 25rem;
  height: 20rem;
  font-size: 1.12rem;
`;

export default function AgentCart({ documents }) {
  console.log(documents);

  return (
    <div className="flex gap-10 flex-wrap justify-center items-center">
      {documents &&
        documents.map((doc) => {
          console.log(doc.googleLink);

          return (
            <StyledUserDiv key={doc.id}>
              <p>Name {doc.displayName}</p>
              <p>email: {doc.email}</p>
              {doc.mobilePhone && <p>Mobile: {doc.mobilePhone}</p>}
              {doc.homeAdress && <p>Home-address: {doc.homeAdress}</p>}
              <p>Gender: {doc.gender}</p>
              <p>office-adress: {doc.officeAdress}</p>
              <p>state: {doc.state}</p>
              {doc.googleLink && (
                <p className="flex gap-3">
                  <CgGoogle className="text-2xl" />:{" "}
                  {OpenGoogleInNewTab(doc.googleLink)}
                </p>
              )}
              {doc.instagramLink && (
                <p className="flex gap-3">
                  <FaInstagram className="text-orange-700 text-2xl" />:
                  {<Link to={doc.instagramLink}>click-here</Link>}
                </p>
              )}
              {doc.facebookLink && (
                <p className="flex gap-3">
                  <FaFacebook className="text-blue-900 text-2xl" />:{" "}
                  {<Link to={doc.facebookLink}>click-here</Link>}
                </p>
              )}
              <p></p>
            </StyledUserDiv>
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

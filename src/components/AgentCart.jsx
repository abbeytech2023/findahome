import { BsGooglePlay } from "react-icons/bs";
import { CgGoogle } from "react-icons/cg";
import { CiInstagram } from "react-icons/ci";
import { FaInstagram } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa6";
import { GrGoogle } from "react-icons/gr";
import { Link } from "react-router-dom";
import styled from "styled-components";

const StyledUserDiv = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;
  /* align-items: center; */
  justify-content: center;
  padding-right: 2.5rem;
  padding-left: 2.5rem;
  padding-top: 2rem;
  padding-bottom: 2rem;
  border-radius: 1rem;
  box-shadow: 3px 3px 8px rgba(85, 85, 85, 0.487);
  /* max-width: 20rem; */
  height: 29rem;
  font-size: 1.12rem;
`;

const StyledUserParagraph = styled.div`
  display: flex;
  width: 18rem;
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
              <StyledUserParagraph>Name {doc.displayName}</StyledUserParagraph>
              <StyledUserParagraph>email: {doc.email}</StyledUserParagraph>
              {doc.mobilePhone && (
                <StyledUserParagraph>
                  Mobile: {doc.mobilePhone}
                </StyledUserParagraph>
              )}
              {doc.homeAdress && (
                <StyledUserParagraph>
                  Home-address: {doc.homeAdress}
                </StyledUserParagraph>
              )}
              <StyledUserParagraph>Gender: {doc.gender}</StyledUserParagraph>
              {doc.occupation && (
                <StyledUserParagraph>
                  Gender: {doc.occupation}
                </StyledUserParagraph>
              )}
              <StyledUserParagraph>
                office-adress: {doc.officeAdress}
              </StyledUserParagraph>
              <StyledUserParagraph>state: {doc.state}</StyledUserParagraph>
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
              <StyledUserParagraph></StyledUserParagraph>
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

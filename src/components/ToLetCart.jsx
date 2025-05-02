import { MdDelete, MdDialerSip } from "react-icons/md";
import { GridContainer, GridInner } from "./Grid";
import { useDeleteMutateToLets } from "../hooks/useDeleteMutate";
import styled from "styled-components";
import { FaMobileRetro } from "react-icons/fa6";
import { CgProfile } from "react-icons/cg";

const ToLetContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 2rem;
`;

export const ToLetCart = ({ documents }) => {
  const { mutate } = useDeleteMutateToLets("Tolet");
  console.log(documents);

  return (
    <ToLetContainer className="">
      {documents &&
        documents.map((doc) => {
          return (
            <div
              key={doc.uid}
              className="border-2 pt-5 flex flex-col justify-between   border-[#144c6f] w-[12rem]"
            >
              <p className=" px-4">
                {doc.propertyDescription}, {doc.propertyLocation} Lorem ipsum
                dolor sit amet consectetur adipisicing elit. Eum quae
                consequatur laboriosam ab architecto beatae tempore consequuntur
                corporis esse eius. Blanditiis error molestias beatae possimus,
                laboriosam debitis tenetur hic quis fugit accusamus, nesciunt,
                ratione dolorum ad. Modi pariatur soluta praesentium officia
                nesciunt a dolor aspernatur esse quasi eos! Molestias dolorum in
                incidunt eius! Nostrum cum inventore nulla hic, magnam soluta,
                nam iusto temporibus quas ab nihil veniam ipsa earum officia.
                Nisi maiores obcaecati maxime commodi praesentium expedita,
                eaque iure.
              </p>
              <div className="bg-[#144c6f40] mt-5 items-center px-1 py-2">
                <div className=" flex items-center gap-1">
                  <CgProfile />: <p>{doc.agentName}</p>
                </div>
                <div className=" flex items-center gap-1 ">
                  <MdDialerSip />:<p>{doc.phoneNumber}</p>
                </div>
              </div>
            </div>
          );
        })}
    </ToLetContainer>
  );
};

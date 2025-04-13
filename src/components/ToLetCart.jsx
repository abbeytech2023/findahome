import { MdDelete } from "react-icons/md";
import { GridContainer } from "./Grid";
import { useDeleteMutateToLets } from "../hooks/useDeleteMutate";

export const ToLetCart = ({ documents }) => {
  console.log(documents);

  const deleteCart = location.pathname === "/myaccount";

  const { mutate } = useDeleteMutateToLets("Tolet");
  return (
    <div>
      {documents &&
        documents.map((doc) => {
          return (
            <GridContainer key={doc.id}>
              <div className="flex justify-center items-center text-[0.4rem] px-4 gap-4  relative">
                {deleteCart && (
                  <button onClick={() => mutate(doc.id)} className="">
                    <MdDelete className="text-2xl absolute right-0 top-0 text-gray-500" />
                  </button>
                )}
                <div className="flex flex-col items-center  justify-center text-lg max-w-[70%] min-w-32 text-center bg-[#e3e3fa] py-6  gap-6 px-7">
                  <h2>Property</h2>
                  <div className="w-60">
                    <p>
                      {doc.propertyDescription},{doc.propertyLocation}
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Iste, dolore?
                    </p>
                  </div>
                </div>
                <span className="w-28 text-lg bg-[#ffe5e5] text-center">
                  <h2 className="mb-4">Agent</h2> <p>{doc.agentName} </p>
                </span>
              </div>
            </GridContainer>
          );
        })}
    </div>
  );
};

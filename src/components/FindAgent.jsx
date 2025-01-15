import styled from "styled-components";
import Input from "./Input";

const FindAgentDiv = styled.div`
  color: #fff;
  display: flex;
  flex-direction: column;
  gap: 2.25rem;
  margin: auto;
`;

const FindAgentH1 = styled.h1`
  font-weight: 500;
  letter-spacing: 4px;
  font-size: 4.5rem;
`;

function FindAgent(props) {
  return (
    <FindAgentDiv className="text-white mx-auto my-auto flex flex-col gap-9 ">
      <FindAgentH1 className="font-medium tracking-[4px] lg:text-7xl  sm:text-3xl md:text-5xl  ">
        A great agent makes <br /> all the difference
      </FindAgentH1>

      <div className="text-black bg-slate-100 flex flex-col gap-2 px-12 py-4">
        <div>
          <p className="text-3xl sm:text-2xl md:text-3xl">
            Find a real estate agent
          </p>
        </div>
        <div className="flex text-blue-500 font-semibold ">
          <button className=" border-2 border-blue-500 p-3">Location</button>
          <button className="border-2 border-blue-500 p-3">Name</button>
          <Input />
        </div>
      </div>
    </FindAgentDiv>
  );
}

export default FindAgent;

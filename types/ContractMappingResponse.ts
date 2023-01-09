import { BigNumber } from "ethers";

type ContractMappingResponse = {
  isData: boolean;
  value: BigNumber;
  //! value is from my smart contract
};

export default ContractMappingResponse;
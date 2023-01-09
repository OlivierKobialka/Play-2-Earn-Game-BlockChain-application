import { Json } from "@thirdweb-dev/sdk";
import { BigNumber } from "ethers";

type EditionDropMetaData = {
    //? This is the metadata for the edition drop
    matadata: {
        [x: string]: Json;
    };
    supply: BigNumber;
};
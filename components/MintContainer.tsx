import React from "react";
import {
  useAddress,
  useClaimNFT,
  useContract,
  Web3Button,
} from "@thirdweb-dev/react";
import { CHARACTERS_ADDRESS } from "../const/contractAddresses";
import styles from "../styles/Home.module.css";

export default function MintContainer() {
  const address = useAddress();

  return (
    <div className={styles.collectionContainer}>
      <h1>Edition Drop</h1>

      <p>Claim your Character NFT to start playing!</p>

      <div className={`${styles.nftBox} ${styles.spacerBottom}`}>
        <img src="miner.img" style={{ height: 200 }} alt="Your Character" />
      </div>

      <div className={styles.smallMargin}>
        <Web3Button
          colorMode="dark"
          contractAddress={CHARACTERS_ADDRESS}
          action={(contract) => contract.erc1155.claim(0, 1)}
        >
          Claim
        </Web3Button>
      </div>
    </div>
  );
}

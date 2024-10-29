import React, { useState } from "react";
import { Wallet } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { ethers } from "ethers";

const WalletConnect = () => {
  const [defaultAccount, setDefaultAccount] = useState("");
  const [accountBalance, setAccountBalance] = useState("");
  const [isConnecting, setIsConnecting] = useState(false);
  const [error, setError] = useState("");

  const connectWalletHandler = async () => {
    setIsConnecting(true);
    setError("");
    
    try {
      if (window.ethereum) {
        const result = await window.ethereum.request({
          method: "eth_requestAccounts",
        });
        await accountChangeHandler(result[0]);
      } else {
        setError("Please install MetaMask");
      }
    } catch (err) {
      setError("Failed to connect wallet");
    } finally {
      setIsConnecting(false);
    }
  };

  const accountChangeHandler = async (account) => {
    setDefaultAccount(account);
    try {
      const balance = await window.ethereum.request({
        method: "eth_getBalance",
        params: [account, "latest"],
      });
      setAccountBalance(ethers.formatEther(balance));  // Keep original balance value
    } catch (err) {
      setError("Failed to fetch balance");
    }
  };

  const formatAddress = (address) => {
    if (!address) return "";
    return `${address.slice(0, 6)}...${address.slice(-4)}`;
  };

  if (error) {
    return (
      <Alert variant="destructive" className="w-auto bg-red-950 border-red-900">
        <AlertDescription className="text-red-400">{error}</AlertDescription>
      </Alert>
    );
  }

  if (!defaultAccount) {
    return (
      <Button
        onClick={connectWalletHandler}
        disabled={isConnecting}
        variant="outline"
        className="flex items-center gap-2 bg-gray-900 border-gray-800 hover:bg-gray-800 hover:text-white hover:border-gray-700 text-gray-200"
      >
        <Wallet className="h-4 w-4" />
        {isConnecting ? "Connecting..." : "Connect"}
      </Button>
    );
  }

  return (
    <div className="inline-flex items-center gap-3 bg-gray-900 px-3 py-2 rounded-lg border border-gray-800">
      <div className="flex items-center gap-2">
        <Wallet className="h-4 w-4 text-gray-400" />
        <span className="text-sm font-medium text-gray-200">
          {accountBalance} ETH
        </span>
      </div>
      <div className="h-4 w-px bg-gray-800" />
      <span className="text-sm text-gray-400">
        {formatAddress(defaultAccount)}
      </span>
    </div>
  );
};

export default WalletConnect;
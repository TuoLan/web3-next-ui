import { useState, useEffect } from "react";
import { Card, CardBody, Input, Button } from "@nextui-org/react"
import { title } from "@/components/primitives";
import DefaultLayout from "@/layouts/default";
import { stakeAbi, stakeAddress } from "@/config/contract"
import { useReadContract, useWriteContract, useAccount } from "wagmi"
import { parseEther, formatEther } from 'viem'
import { WalletButton } from '@rainbow-me/rainbowkit';

export default function IndexPage() {
  const [sumStakeCount, setSumStakeCount] = useState<number>(0)
  const [stakeCount, setStakeCount] = useState<number>(0)
  const [rewardsCount, setRewardsCount] = useState<number>(0)
  const [stakeInput, setStakeInput] = useState<number>(0)
  const [withdrawInput, setWithdrawInput] = useState<number>(0)
  const { writeContractAsync } = useWriteContract()
  const { address } = useAccount()
  const handleStakeInput = (value: any) => {
    setStakeInput(value)
  }
  const handleWithdrawInput = (value: any) => {
    setWithdrawInput(value)
  }
  const handleStakeClick = async () => {
    const amountInWei = parseEther(stakeInput + '');
    try {
      await writeContractAsync({
        abi: stakeAbi,
        address: stakeAddress,
        functionName: "stake",
        value: amountInWei
      })
    } catch {
      alert('Withdraw Error')
    }
    setStakeInput(0)
    setWithdrawInput(0)
  }
  const handleWithdrawClick = async () => {
    const amountInWei = parseEther(withdrawInput + '');
    try {
      await writeContractAsync({
        abi: stakeAbi,
        address: stakeAddress,
        functionName: "unstake",
        args: [amountInWei]
      })
    } catch {
      alert('revert You have already staked')
    }
    setStakeInput(0)
    setWithdrawInput(0)
  }

  const { data: recordSumStakeCount } = useReadContract({
    abi: stakeAbi,
    address: stakeAddress,
    functionName: "totalEthStaked",
  });

  const { data: recordStakeCount } = useReadContract({
    abi: stakeAbi,
    address: stakeAddress,
    functionName: "getStakedBalance",
    args: [address as `0x${string}`]
  });

  useEffect(() => {
    let saveSumStakeCount = recordSumStakeCount ? parseFloat(formatEther(recordSumStakeCount as bigint)).toFixed(5) : 0
    let saveStakeCount = recordStakeCount ? parseFloat(formatEther(recordStakeCount as bigint)).toFixed(5) : 0
    let saveRewardsCount = recordStakeCount ? (Number(parseFloat(formatEther(recordStakeCount as bigint))) * 50).toFixed(5) : 0
    setSumStakeCount(Number(saveSumStakeCount))
    setStakeCount(Number(saveStakeCount))
    setRewardsCount(Number(saveRewardsCount))
  }, [recordSumStakeCount, recordStakeCount]);
  return (
    <DefaultLayout>
      <section className="flex flex-col items-center justify-center gap-4 py-8 md:py-10 h-full">
        <div className="inline-block max-w-xl text-center justify-center">
          <span className={title()}>Stake&nbsp;</span>
          <span className={title({ color: "violet" })}>ETH&nbsp;</span>
          <span className={title()}>for&nbsp;</span>
          <span className={title({ color: "violet" })}>30&nbsp;</span>
          <span className={title()}>days&nbsp;</span><br /><br />
          <span className={title()}>to receive&nbsp;</span>
          <span className={title({ color: "violet" })}>Calf&nbsp;</span>
          <span className={title()}>rewards.&nbsp;</span>
        </div>

        <div className="flex gap-3 h-11/12 w-2/5">
          <Card className="flex-1">
            <CardBody className="flex px-7">
              <div className="flex justify-between mb-3.5 mt-3.5 w-4/5"><span>Total staked amount: </span><span>{sumStakeCount} ETH</span></div>
              <div className="flex justify-between mb-3.5 w-4/5"><span>My staked amount: </span><span>{stakeCount} ETH</span></div>
              <div className="flex justify-between mb-5 w-4/5"><span>Estimated staking rewards: </span><span>{rewardsCount} CALF</span></div>
              <Input
                className="mb-5"
                type="number"
                label="Stake ETH"
                placeholder="0.00"
                labelPlacement="outside"
                variant="underlined"
                onValueChange={handleStakeInput}
              />
              <Input
                className="mb-3.5"
                type="number"
                label="Withdraw ETH"
                placeholder="0.00"
                labelPlacement="outside"
                variant="underlined"
                onValueChange={handleWithdrawInput}
              />
              <div className="mt-3.5 w-full flex justify-between">
                {
                  address ?
                    <>
                      <Button className="w-6/12 mr-2" onClick={handleWithdrawClick}>Withdraw</Button>
                      <Button className="w-6/12" color="primary" onClick={handleStakeClick}>Stake</Button>
                    </> :
                    <WalletButton.Custom wallet="metamask">
                      {({ connect }) => {
                        return (
                          <Button
                            className="w-full"
                            color="primary"
                            onClick={connect}
                          >
                            Connect Wallet
                          </Button>
                        );
                      }}
                    </WalletButton.Custom>
                }
              </div>
            </CardBody>
          </Card>
        </div>
      </section>
    </DefaultLayout>
  );
}

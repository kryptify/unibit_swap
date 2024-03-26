import React, { useState, useContext, useEffect } from "react";
// Material
import { Button, Stack, Box, Typography, Input, Dialog } from "@mui/material";
// Context
import { AppContext } from "src/AppContext";
import getConfig from "src/utils/getConfig";
//component
import Page from "src/components/Page";
import WalletConnectButton from "./WalletConnectButton";
import StakingInput from "./StakingInput";
import StakingStatistics from "./StakingStatistics";
// constants
import contractModules from "src/Contracts";
// Utils
import switchNetworkTo from "src/utils/switchNetworkToMetamask";
import { checkBalanceForToken } from "src/utils/checkBalanceHandlers/checkBalanceMetamask";
import { claimReward, getDataForStaking, isOwner, setAPR, stakeUIBT, unStake } from "src/utils/stakingHandlers";
import ManualAPRDialog from "./ManualAPRDialog";
import StakingTypeSelect from "./StakingTypeSelect";
import StakingInputNew from "./StakingInputNew";
import StakingWelcomePage from "./StakingWelcomePage";
import { ethers } from "ethers";

export default function StakingComponent() {
    const { contractAddresses, contractABIs } = contractModules;
    const { tokenContractAddress } = contractAddresses;
    const { UnibitContractABI } = contractABIs;

    const { openSnackbar, darkMode, walletContext, modalContext, loading, setLoading } = useContext(AppContext);
    const { showConnectWallet } = modalContext;
    const { walletAccount, walletType, WalletTypes } = walletContext;
    const defaultNetwork = getConfig().EVMDefaultNetwork;

    const [balance, setBalance] = useState(0);
    const [waleltReady, setWalletReady] = useState(false);
    const [amountin, setAmountin] = useState(0);//stake amount
    const [amountOut, setAmountOut] = useState(0);// unstake amount
    const [userStaking, setUserStaking] = useState(null);
    const [reward, setReward] = useState(0);
    const [reload, setReload] = useState(0);
    const [rates, setRates] = useState(null);
    const [rateIndex, setRateIndex] = useState(0);// for staking

    const [manualAPR, setManualAPR] = useState(0);
    const [aprOpen, setAPROpen] = useState(false);
    const [isAdmin, setIsAdmin] = useState(false);
    const MULTIPLYER = 1000;
    useEffect(() => {
        const handler = async () => {
            const ready = await checkWalletType();
            setWalletReady(ready);
        }
        handler();
        return () => { };
    }, [walletType, reload]);

    const checkWalletType = async () => {
        if (walletType === WalletTypes.xverse || walletType === WalletTypes.unisat) {
            openSnackbar(
                <div>
                    Staking is only supported for Arbitrum network for now.
                    <br />
                    Please connect EVM chain to stake.
                </div>,
                "warning"
            );
        } else if (walletType === WalletTypes.metamask) {
            if (window.ethereum.networkVersion !== defaultNetwork.chainId) {
                setLoading(true);
                await switchNetworkTo(defaultNetwork, openSnackbar, setLoading);
            }
            const _bal = await checkBalanceForToken(tokenContractAddress, UnibitContractABI, walletAccount.address, openSnackbar, setLoading);
            setBalance(_bal);
            await getRates();
            await checkAdmin();
            return true;
        }

        setBalance(0);
        return false;
    };

    const stakeHandler = async () => {
        if (amountin < 100) {
            openSnackbar("Should stake at least 100 UIBT", "warning");
            return;
        } else if (amountin > balance) {
            openSnackbar("Can't stake more than you have.", "warning");
            return;
        } else if (balance === 0) {
            openSnackbar("Not enough balance to stake.", "warning");
            return;
        }
        setLoading(true);
        try {
            await stakeUIBT(amountin.toString(), rateIndex);
        } catch (error) {
            openSnackbar(<div style={{ maxWidth: 500 }}>
                <p>Error occured while staking. </p>
                <p>{error.message}</p>
            </div>, "error");
        }
        setLoading(false);
        setReload(reload + 1);
    };
    const claimHandler = async () => {
        setLoading(true);
        try {
            await claimReward();
        } catch (error) {
            openSnackbar(<div style={{ maxWidth: 500 }}>
                <p>Error occured while staking. </p>
                <p>{error.message}</p>
            </div>, "error");
        }
        setLoading(false);
        setReload(reload + 1);
    };

    const unStakeHandler = async () => {
        if (amountOut > parseInt(ethers.utils.formatEther(userStaking.balance))) {
            openSnackbar("Can not withdraw more than you staked.", "warning");
            return;
        }
        setLoading(true);
        try {
            await unStake(amountOut.toString());
        } catch (error) {
            openSnackbar(<div style={{ maxWidth: 500 }}>
                <p>Error occured while staking. </p>
                <p>{error.message}</p>
            </div>, "error");
        }
        setLoading(false);
        setReload(reload + 1);
    }

    const setAPRHandler = async () => {
        setLoading(true);
        try {
            await setAPR(manualAPR * 100);
        } catch (error) {
            openSnackbar(<div style={{ maxWidth: 500 }}>
                <p>Error occured while setting APR. </p>
                <p>{error.message}</p>
            </div>, "error");
            console.log(error)
        }
        setReload(reload + 1);
        setLoading(false);
    }

    const checkAdmin = async () => {
        try {
            const res = await isOwner();
            setIsAdmin(res);
        } catch (error) {
            openSnackbar(<div style={{ maxWidth: 500 }}>
                <p>Error occured while checking admin. </p>
                <p>{error.message}</p>
            </div>, "error");
        }
    }

    const getRates = async () => {
        try {
            const r = await getDataForStaking(walletAccount, "rates");
            setRates([
                { period: "15", rate: r[0] },
                { period: "45", rate: r[1] },
                { period: "90", rate: r[2] },
                { period: "120", rate: r[3] },
                { period: "365", rate: r[4] },
            ]);
        } catch (error) {
            console.log("Error: ", error);
            openSnackbar(<div style={{ maxWidth: 500 }}>
                <p>Error occured while getting rates. </p>
                <p>{error.message}</p>
            </div>, "error");
        }
    }

    return (
        <Page title="Create">
            <Stack justifyContent="center" alignItems="center" display="flex" minHeight="80vh">
                <Box
                    maxWidth="lg"
                    minWidth="35vw"
                    px={4}
                    py={2}
                    sx={{
                        borderRadius: "10px",
                        border: darkMode ? "1px solid rgb(255, 255, 255)" : "1px solid rgb(0, 0, 0, 0.3)"
                    }}
                >
                    <div style={{ display: "flex", justifyContent: "space-between" }}>
                        <Typography variant="h3">Unibit Staking</Typography>
                        {waleltReady && isAdmin && <div style={{ alignItems: "center" }}>

                            <Button variant="outlined" onClick={() => setAPROpen(true)}>Set APR</Button>
                            <ManualAPRDialog open={aprOpen} setOpen={setAPROpen} manualAPR={manualAPR} setManualAPR={setManualAPR} onOK={setAPRHandler} />
                        </div>}
                    </div>

                    {waleltReady ? 
                    <Stack justifyContent="center" alignItems="left" display="flex" sx={{ mt: 1 }}>
                        {/* <Box display="flex" justifyContent="space-between" textAlign="center" m={1} mt={1}>
                            <Typography variant="h4"></Typography>
                            <Typography>Balance: {balance}</Typography>
                        </Box> */}
                        <Box display="flex" justifyContent="space-between" gap={1} textAlign="center" my={1}>
                            <StakingInputNew amountin={amountin}
                                setAmountin={setAmountin}
                                balance={balance}
                                rates={rates}/>
                            <StakingTypeSelect rates={rates} rateIndex={rateIndex} setRateIindex={setRateIndex} MULTIPLYER={MULTIPLYER} />
                        </Box>
                        
                        <StakingStatistics
                            rates={rates}
                            MULTIPLYER={MULTIPLYER}
                            balance={balance}
                            userStaking={userStaking}
                            setUserStaking={setUserStaking}
                            reward={reward}
                            setReward={setReward}
                            reload={reload} />
                    </Stack>
                    :
                    <Stack justifyContent="center" alignItems="center" display="flex" sx={{ mt: 3 }}>
                    <StakingWelcomePage />
                    </Stack>
                    }
                    <Stack justifyContent="center" alignItems="center" display="flex">
                        {!walletAccount ? (
                            <WalletConnectButton showConnectWallet={showConnectWallet} />
                        ) : (
                            loading ?
                                <h3>Please wait...</h3>
                                :
                                <>
                                    {userStaking && userStaking.balance > 0 && <Box display="flex" width={"100%"} justifyContent={"space-between"} height={50} my={2} gap={1}>
                                        <StakingInputNew 
                                            amountin={amountOut}
                                            balance={ethers.utils.formatEther(userStaking.balance)}
                                            setAmountin={setAmountOut}
                                        />                                        
                                        <Button
                                            variant="outlined"
                                            onClick={unStakeHandler}
                                        >
                                            Unstake
                                        </Button>
                                    </Box>}
                                    <Box display="flex" width={"100%"} height={50} mt={1} justifyContent="space-around">

                                        <Button
                                            variant="outlined"
                                            onClick={stakeHandler}
                                        >
                                            <h3>Stake UIBT</h3>
                                        </Button>
                                        <Button
                                            disabled={reward > 0 ? false : true}
                                            variant="outlined"
                                            onClick={() => {
                                                claimHandler();
                                            }}
                                        >
                                            <h3>Claim Reward</h3>
                                        </Button>
                                    </Box>
                                </>
                        )}
                    </Stack>
                </Box>
            </Stack>
        </Page>
    );
}

/******************************
 * This component needs to be refactored
 */
import { useState, useEffect, useContext } from "react";
import { ethers } from "ethers";
import Decimal from "decimal.js";
// Material
import { Box, MenuItem, Stack, TextField, Typography, Button, Input, InputAdornment } from "@mui/material";

import SwapVerticalCircleIcon from "@mui/icons-material/SwapVerticalCircle";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import SearchIcon from "@mui/icons-material/Search";
// abi
import router_abi from "src/Contracts/router_abi.json";
import token_abi from "src/Contracts/token_abi.json";
// components
import BootstrapDialogTitle from "src/components/common/BootstrapDialogTitle";
import WalletConnectButton from "src/components/WalletConnectButton";
import SwapButton from "./SwapButton";
import SwapSetting from "./SwapSetting";
// context
import { AppContext } from "src/AppContext";
// utils
import { DEFAULT_TOKENS } from "src/utils/tokenList";
import { ADDR_WETH, router_address } from "src/utils/constants";
import getPrice from "src/utils/swapping/getPrice";
import getTokeninfo from "src/utils/swapping/getTokeninfo";
// styles
import { BootstrapDialog } from "src/utils/styles";

export default function Swapping() {
    const { openSnackbar, modalContext, walletContext, darkMode, setLoading, loading } = useContext(AppContext);
    const { showConnectWallet } = modalContext;
    const { walletAccount } = walletContext;
    const [slippage, setSlippage] = useState(0.5);

    const [tokens, setTokens] = useState(DEFAULT_TOKENS);
    const [select1, setSelect1] = useState(1); //
    const [select2, setSelect2] = useState(2); //

    const [amount1, setAmount1] = useState(0);
    const [amount2, setAmount2] = useState(0);

    const [bal1, setBal1] = useState(0);
    const [bal2, setBal2] = useState(0);

    const [swapPrice, setSwapPrice] = useState(0);

    const checkBalance = async (address) => {
        // TODO:
        return 1000;
    };

    useEffect(() => {
        const token = tokens[select1];
        const address = token.address;
        checkBalance(address).then((amount) => {
            setBal1(amount);
        });
    }, [select1]);

    useEffect(() => {
        const token = tokens[select2];
        const address = token.address;

        checkBalance(address).then((amount) => {
            setBal2(amount);
        });
    }, [select2]);

    useEffect(() => {
        // checkPrice(amount1);
    }, [amount1, select1, select2]);

    useEffect(() => {
        setTokens(DEFAULT_TOKENS);
    }, [DEFAULT_TOKENS]);

    const reverse_swap = () => {
        setSelect1(select2);
        setSelect2(select1);
        setAmount1(amount2);
        setAmount2(amount1);
    };

    const swapHandler = async () => {};

    return (
        <Box>
            <Stack alignItems="center" justifyContent="center" minHeight="84vh">
                <Box
                    minWidth="38vw"
                    sx={{
                        borderRadius: "10px",
                        border: darkMode ? "solid 1px rgb(255, 255, 255)" : "solid 1px rgb(0, 0, 0, 0.3)",
                        padding: "15px 35px",
                        mt: 1
                    }}
                >
                    <Stack direction="row" display="flex" justifyContent="space-between" alignItems="center">
                        <Typography variant="h3">Unibit Swap</Typography>
                        <SwapSetting slippage={slippage} setSlippage={setSlippage} />
                    </Stack>
                    <br />
                    <Box>
                        <Box
                            display="flex"
                            alignItems="center"
                            justifyContent="space-between"
                            sx={{
                                border: darkMode ? "solid 1px rgb(255, 255, 255)" : "solid 1px rgb(0, 0, 0, 0.3)",
                                borderRadius: "10px",
                                padding: "20px 20px"
                            }}
                        >
                            <Stack>
                                <Button
                                    id="token1"
                                    value={select1}
                                    variant="outlined"
                                    onClick={() => {
                                        //
                                    }}
                                    sx={{ minWidth: 120, padding: "10px 0px" }}
                                >
                                    <Stack direction="row" spacing={0.8} alignItems="center">
                                        <img style={{ height: 23 }} src={DEFAULT_TOKENS[select1].logo} />
                                        <Typography variant="s4">{DEFAULT_TOKENS[select1].symbol}</Typography>
                                        <ArrowDropDownIcon />
                                    </Stack>
                                </Button>
                                <Box display="flex" justifyContent="space-between" alignItems="center" sx={{ mt: 1 }}>
                                    <Typography>Balance: {Math.round(bal1 * 100000) / 100000}</Typography>
                                    {bal1 > 0 && (
                                        <Button
                                            variant="outlined"
                                            sx={{
                                                maxHeight: "25px",
                                                color: "black",
                                                border: "1px solid rgb(0, 0, 0)",
                                                borderRadius: "10px"
                                            }}
                                            onClick={() => {
                                                setAmount1(bal1);
                                            }}
                                        >
                                            max
                                        </Button>
                                    )}
                                </Box>
                            </Stack>
                            <Input
                                display="flex"
                                onChange={(e) => {
                                    setAmount1(e.target.value);
                                }}
                                value={amount1}
                                placeholder="0.0"
                                disableUnderline
                                sx={{
                                    width: "100%",
                                    input: {
                                        autoComplete: "off",
                                        padding: "10px 0px",
                                        border: "none",
                                        fontSize: "18px",
                                        textAlign: "end",
                                        appearance: "none",
                                        fontWeight: 700
                                    }
                                }}
                            />
                        </Box>
                        <Box textAlign="center" alignItems="center" sx={{ m: -1.8 }}>
                            <SwapVerticalCircleIcon
                                onClick={() => {
                                    reverse_swap();
                                }}
                                sx={{ height: "35px", width: "35px", cursor: "pointer" }}
                            />
                        </Box>
                        <Box
                            display="flex"
                            alignItems="center"
                            justifyContent="space-between"
                            sx={{
                                border: darkMode ? "solid 1px rgb(255, 255, 255)" : "solid 1px rgb(0, 0, 0, 0.3)",
                                borderRadius: "10px",
                                padding: "20px 20px"
                            }}
                        >
                            <Stack>
                                <Button
                                    id="token2"
                                    value={select2}
                                    variant="outlined"
                                    onClick={() => {
                                        //
                                    }}
                                    sx={{ minWidth: 120, padding: "10px 0px" }}
                                >
                                    <Stack direction="row" spacing={0.8} alignItems="center">
                                        <img style={{ height: 23 }} src={DEFAULT_TOKENS[select2].logo} />
                                        <Typography variant="s4">{DEFAULT_TOKENS[select2].symbol}</Typography>
                                        <ArrowDropDownIcon />
                                    </Stack>
                                </Button>
                                <Box display="flex" justifyContent="space-between" alignItems="center" sx={{ mt: 1 }}>
                                    <Typography>Balance: {Math.round(bal2 * 100000) / 100000}</Typography>
                                </Box>
                            </Stack>
                            <Input
                                display="flex"
                                onChange={(e) => {
                                    setAmount2(e.target.value);
                                }}
                                value={amount2}
                                placeholder="0.0"
                                disableUnderline
                                disabled
                                sx={{
                                    width: "100%",
                                    input: {
                                        autoComplete: "off",
                                        padding: "10px 0px",
                                        border: "none",
                                        fontSize: "18px",
                                        textAlign: "end",
                                        appearance: "none",
                                        fontWeight: 700
                                    }
                                }}
                            />
                        </Box>
                        <br />
                        <Box padding="10px">
                            <Stack display="flex" justifyContent="space-between" direction="row">
                                <Typography variant="s1">Slippage</Typography>
                                <Typography variant="s1">{slippage === 100 ? "Auto" : `${slippage}%`}</Typography>
                            </Stack>
                            <Stack display="flex" justifyContent="space-between" direction="row">
                                <Typography variant="s1">Price</Typography>
                                <Typography variant="s1">
                                    {swapPrice} {DEFAULT_TOKENS[select2].symbol} per {DEFAULT_TOKENS[select1].symbol}
                                </Typography>
                            </Stack>
                            <Stack display="flex" justifyContent="space-between" direction="row">
                                <Typography variant="s1">fee</Typography>
                                <Typography variant="s1">0.3%</Typography>
                            </Stack>
                        </Box>
                        <Box display="flex" justifyContent="space-around" alignItems="center" textAlign="center" sx={{ mt: 1 }} width="100%">
                            {walletAccount ? <SwapButton amount1={amount1} swapHandler={swapHandler} /> : <WalletConnectButton showConnectWallet={showConnectWallet} />}
                        </Box>
                    </Box>
                </Box>
            </Stack>
        </Box>
    );
}

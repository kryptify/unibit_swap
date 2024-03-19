import { useState, useContext } from "react";
// Material
import {
  Container,
  Stack,
  TextField,
  Button,
  Typography,
  FormControl,
  RadioGroup,
  FormControlLabel,
  Radio
} from "@mui/material";
// Context
import { AppContext } from "src/AppContext";
//component
import Page from "src/components/Page";
export default function CreateBRC20() {
  const { openSnackbar } = useContext(AppContext);
  const [tokenName, setTokenName] = useState("");
  const [tokenSymbol, setTokenSymbol] = useState("");
  const [customCode, setCustomCode] = useState("");
  const [codeType, setCodeType] = useState("Template");
  const listBRC20Tokens = () => {
    openSnackbar("listing BRC20 tokens");
  }
  const mintBRC20 = () => {
    openSnackbar("minting BRC20 token");
  }
  return (
      <Page title="Create">
          <Container maxWidth="md" sx={{ marginBottom: "3vh" }}>
              <Stack spacing={2} marginBottom={3} marginTop={3}>
                  <Typography variant="h4">Create New BRC20 Token</Typography>
                  <Typography variant="caption">Name</Typography>
                  <TextField
                      required
                      placeholder="Token Name"
                      margin="dense"
                      onChange={(e) => {
                          setTokenName(e.target.value);
                      }}
                      value={tokenName}
                      sx={{
                          "&.MuiTextField-root": {
                              marginTop: 1
                          }
                      }}
                  />
              </Stack>
              <Stack spacing={2} marginBottom={3}>
                  <Typography variant="caption">Symbol</Typography>
                  <TextField
                      required
                      placeholder="Token Symbol"
                      margin="dense"
                      onChange={(e) => {
                          setTokenSymbol(e.target.value);
                      }}
                      value={tokenSymbol}
                      sx={{
                          "&.MuiTextField-root": {
                              marginTop: 1
                          }
                      }}
                  />
              </Stack>
              <FormControl>
                  <RadioGroup
                      row
                      aria-labelledby="demo-row-radio-buttons-group-label"
                      name="row-radio-buttons-group"
                      value={codeType}
                      onChange={(e) => {
                          setCodeType(e.target.value);
                      }}
                  >
                      <FormControlLabel value="Template" control={<Radio />} label="Template" />
                      <FormControlLabel value="Customize" control={<Radio />} label="Customized code" />
                  </RadioGroup>
              </FormControl>
              {codeType == "Customize" && (
                  <>
                      <Stack spacing={2} marginBottom={3} marginTop={2}>
                          <Typography variant="caption">BRC20 custom code</Typography>
                          <TextField
                              placeholder="Provide a customized code"
                              margin="dense"
                              multiline
                              maxRows={4}
                              value={customCode}
                              onChange={(e) => {
                                  setCustomCode(e.target.value);
                              }}
                              sx={{
                                  "&.MuiTextField-root": {
                                      marginTop: 1,
                                      minHeight: 10
                                  },
                                  "& .MuiOutlinedInput-root": {
                                      height: 100,
                                      alignItems: "start"
                                  }
                              }}
                          />
                      </Stack>
                  </>
              )}
              <Stack spacing={2} marginBottom={3} marginTop={3} direction="row">
                  <Button
                      sx={{ padding: 1, width: "35%" }}
                      onClick={() => mintBRC20()}
                      variant="contained"
                  >
                      Create
                  </Button>
                  <Button sx={{ padding: 1, width: "35%" }} onClick={() => listBRC20Tokens()} variant="contained">
                      List Token
                  </Button>
              </Stack>
          </Container>         
      </Page>
  );
}

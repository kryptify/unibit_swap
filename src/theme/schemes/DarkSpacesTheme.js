import { alpha, createTheme, darken } from "@mui/material";
import "@mui/lab/themeAugmentation";

// import i18n from 'src/i18n/i18n';

const themeColors = {
    primary: "#f4f5fb", // '#CB3C1D', #04CD58
    secondary: "#A1A1A1",
    success: "#57CA22",
    warning: "#FFA319",
    error: "#FF1943",
    info: "#33C2FF",
    black: "#FFFFFF",
    white: "#252525",
    primaryAlt: "#090A0C",
    trueWhite: "#ffffff"
};

const colors = {
    gradients: {
        blue1: "linear-gradient(135deg, #6B73FF 0%, #000DFF 100%)",
        blue2: "linear-gradient(135deg, #ABDCFF 0%, #0396FF 100%)",
        blue3: "linear-gradient(127.55deg, #141E30 3.73%, #243B55 92.26%)",
        blue4: "linear-gradient(-20deg, #2b5876 0%, #4e4376 100%)",
        blue5: "linear-gradient(135deg, #97ABFF 10%, #123597 100%)",
        orange1: "linear-gradient(135deg, #FCCF31 0%, #F55555 100%)",
        orange2: "linear-gradient(135deg, #FFD3A5 0%, #FD6585 100%)",
        orange3: "linear-gradient(120deg, #f6d365 0%, #fda085 100%)",
        purple1: "linear-gradient(135deg, #43CBFF 0%, #9708CC 100%)",
        purple3: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
        pink1: "linear-gradient(135deg, #F6CEEC 0%, #D939CD 100%)",
        pink2: "linear-gradient(135deg, #F761A1 0%, #8C1BAB 100%)",
        green1: "linear-gradient(135deg, #FFF720 0%, #3CD500 100%)",
        green2: "linear-gradient(to bottom, #00b09b, #96c93d)",
        black1: "linear-gradient(100.66deg, #434343 6.56%, #000000 93.57%)",
        black2: "linear-gradient(60deg, #29323c 0%, #485563 100%)"
    },
    shadows: {
        success: "0px 1px 4px rgba(68, 214, 0, 0.25), 0px 3px 12px 2px rgba(68, 214, 0, 0.35)",
        error: "0px 1px 4px rgba(255, 25, 67, 0.25), 0px 3px 12px 2px rgba(255, 25, 67, 0.35)",
        info: "0px 1px 4px rgba(51, 194, 255, 0.25), 0px 3px 12px 2px rgba(51, 194, 255, 0.35)",
        primary: "0px 1px 4px rgba(162, 48, 23, 0.25), 0px 3px 12px 2px rgba(162, 48, 23, 0.35)",
        warning: "0px 1px 4px rgba(255, 163, 25, 0.25), 0px 3px 12px 2px rgba(255, 163, 25, 0.35)",
        card: "0px 0px 2px #ffffff29",
        cardSm: "0px 0px 2px #ffffff29",
        cardLg: "0 0rem 14rem 0 rgb(255 255 255 / 20%), 0 0.8rem 2.3rem rgb(111 130 156 / 3%), 0 0.2rem 0.7rem rgb(17 29 57 / 15%)"
    },
    layout: {
        general: {
            bodyBg: "#121619" //'#1C1C1C'
        },
        sidebar: {
            background: themeColors.primaryAlt,
            textColor: themeColors.secondary,
            dividerBg: "#1d1818",
            menuItemColor: "#A3A3A3",
            menuItemColorActive: "#ffffff",
            menuItemBg: themeColors.primaryAlt,
            menuItemBgActive: "#221e1e",
            menuItemIconColor: themeColors.secondary,
            menuItemIconColorActive: "#ffffff",
            menuItemHeadingColor: darken(themeColors.secondary, 0.3)
        }
    },
    alpha: {
        white: {
            5: alpha(themeColors.white, 0.02),
            10: alpha(themeColors.white, 0.1),
            30: alpha(themeColors.white, 0.3),
            50: alpha(themeColors.white, 0.5),
            70: alpha(themeColors.white, 0.7),
            100: themeColors.white
        },
        trueWhite: {
            5: alpha(themeColors.trueWhite, 0.02),
            10: alpha(themeColors.trueWhite, 0.1),
            30: alpha(themeColors.trueWhite, 0.3),
            50: alpha(themeColors.trueWhite, 0.5),
            70: alpha(themeColors.trueWhite, 0.7),
            100: themeColors.trueWhite
        },
        black: {
            5: alpha(themeColors.black, 0.02),
            10: alpha(themeColors.black, 0.1),
            30: alpha(themeColors.black, 0.3),
            50: alpha(themeColors.black, 0.5),
            70: alpha(themeColors.black, 0.7),
            90: alpha(themeColors.black, 0.9),
            100: themeColors.black
        }
    },
    primary: {
        lighter: alpha(themeColors.primary, 0.85),
        light: alpha(themeColors.primary, 0.3),
        main: themeColors.primary,
        dark: darken(themeColors.primary, 0.2)
    },
    secondary: {
        lighter: alpha(themeColors.secondary, 0.85),
        light: alpha(themeColors.secondary, 0.6),
        main: themeColors.secondary,
        dark: darken(themeColors.secondary, 0.2)
    },
    success: {
        lighter: alpha(themeColors.success, 0.85),
        light: alpha(themeColors.success, 1 /*0.3*/),
        main: themeColors.success,
        dark: darken(themeColors.success, 0.2)
    },
    warning: {
        lighter: alpha(themeColors.warning, 0.85),
        light: alpha(themeColors.warning, 1 /*0.3*/),
        main: themeColors.warning,
        dark: darken(themeColors.warning, 0.2)
    },
    error: {
        lighter: alpha(themeColors.error, 0.85),
        light: alpha(themeColors.error, 1 /*0.3*/),
        main: themeColors.error,
        dark: darken(themeColors.error, 0.2)
    },
    info: {
        lighter: alpha(themeColors.info, 0.85),
        light: alpha(themeColors.info, 1 /*0.3*/),
        main: themeColors.info,
        dark: darken(themeColors.info, 0.2)
    }
};

export const DarkSpacesTheme = createTheme({
    // direction: i18n.dir(),
    colors: {
        nav: {
            background: "#121619"
        },
        gradients: {
            blue1: colors.gradients.blue1,
            blue2: colors.gradients.blue2,
            blue3: colors.gradients.blue3,
            blue4: colors.gradients.blue4,
            blue5: colors.gradients.blue5,
            orange1: colors.gradients.orange1,
            orange2: colors.gradients.orange2,
            orange3: colors.gradients.orange3,
            purple1: colors.gradients.purple1,
            purple3: colors.gradients.purple3,
            pink1: colors.gradients.pink1,
            pink2: colors.gradients.pink2,
            green1: colors.gradients.green1,
            green2: colors.gradients.green2,
            black1: colors.gradients.black1,
            black2: colors.gradients.black2
        },
        shadows: {
            success: colors.shadows.success,
            error: colors.shadows.error,
            primary: colors.shadows.primary,
            info: colors.shadows.info,
            warning: colors.shadows.warning
        },
        alpha: {
            white: {
                5: alpha(themeColors.white, 0.02),
                10: alpha(themeColors.white, 0.1),
                30: alpha(themeColors.white, 0.3),
                50: alpha(themeColors.white, 0.5),
                70: alpha(themeColors.white, 0.7),
                100: themeColors.white
            },
            trueWhite: {
                5: alpha(themeColors.trueWhite, 0.02),
                10: alpha(themeColors.trueWhite, 0.1),
                30: alpha(themeColors.trueWhite, 0.3),
                50: alpha(themeColors.trueWhite, 0.5),
                70: alpha(themeColors.trueWhite, 0.7),
                100: themeColors.trueWhite
            },
            black: {
                5: alpha(themeColors.black, 0.02),
                10: alpha(themeColors.black, 0.1),
                30: alpha(themeColors.black, 0.3),
                50: alpha(themeColors.black, 0.5),
                70: alpha(themeColors.black, 0.7),
                100: themeColors.black
            }
        },
        primary: {
            lighter: alpha(themeColors.primary, 0.1),
            light: alpha(themeColors.primary, 0.3),
            main: themeColors.primary,
            dark: darken(themeColors.primary, 0.2)
        },
        secondary: {
            lighter: alpha(themeColors.secondary, 0.1),
            light: alpha(themeColors.secondary, 0.3),
            main: themeColors.secondary,
            dark: darken(themeColors.secondary, 0.2)
        },
        success: {
            lighter: alpha(themeColors.success, 0.1),
            light: alpha(themeColors.success, 0.3),
            main: themeColors.success,
            dark: darken(themeColors.success, 0.2)
        },
        warning: {
            lighter: alpha(themeColors.warning, 0.1),
            light: alpha(themeColors.warning, 0.3),
            main: themeColors.warning,
            dark: darken(themeColors.warning, 0.2)
        },
        error: {
            lighter: alpha(themeColors.error, 0.1),
            light: alpha(themeColors.error, 0.3),
            main: themeColors.error,
            dark: darken(themeColors.error, 0.2)
        },
        info: {
            lighter: alpha(themeColors.info, 0.1),
            light: alpha(themeColors.info, 0.3),
            main: themeColors.info,
            dark: darken(themeColors.info, 0.2)
        }
    },
    general: {
        reactFrameworkColor: "#00D8FF",
        borderRadiusSm: "6px",
        borderRadius: "10px",
        borderRadiusLg: "12px",
        borderRadiusXl: "16px"
    },
    sidebar: {
        background: colors.layout.sidebar.background,
        textColor: colors.layout.sidebar.textColor,
        dividerBg: colors.layout.sidebar.dividerBg,
        menuItemColor: colors.layout.sidebar.menuItemColor,
        menuItemColorActive: colors.layout.sidebar.menuItemColorActive,
        menuItemBg: colors.layout.sidebar.menuItemBg,
        menuItemBgActive: colors.layout.sidebar.menuItemBgActive,
        menuItemIconColor: colors.layout.sidebar.menuItemIconColor,
        menuItemIconColorActive: colors.layout.sidebar.menuItemIconColorActive,
        menuItemHeadingColor: colors.layout.sidebar.menuItemHeadingColor,
        boxShadow: "1px 0 0 #413333",
        width: "290px"
    },
    header: {
        height: "80px",
        background: themeColors.primaryAlt,
        boxShadow: "0px 1px 0px" + themeColors.primaryAlt,
        textColor: colors.secondary.main
    },
    spacing: 9,
    palette: {
        common: {
            black: colors.alpha.black[100],
            white: colors.alpha.white[100]
        },
        mode: "dark",
        primary: {
            light: colors.primary.light,
            main: colors.primary.main,
            dark: colors.primary.dark
        },
        secondary: {
            light: colors.secondary.light,
            main: colors.secondary.main,
            dark: colors.secondary.dark
        },
        error: {
            light: colors.error.light,
            main: colors.error.main,
            dark: colors.error.dark,
            contrastText: themeColors.trueWhite
        },
        success: {
            light: colors.success.light,
            main: colors.success.main,
            dark: colors.success.dark,
            contrastText: themeColors.trueWhite
        },
        info: {
            light: colors.info.light,
            main: colors.info.main,
            dark: colors.info.dark,
            contrastText: themeColors.trueWhite
        },
        warning: {
            light: colors.warning.light,
            main: colors.warning.main,
            dark: colors.warning.dark,
            contrastText: themeColors.trueWhite
        },
        text: {
            primary: colors.alpha.black[100],
            secondary: colors.alpha.black[70],
            disabled: colors.alpha.black[50]
        },
        background: {
            paper: "#21252B", // colors.alpha.white[100],
            default: colors.layout.general.bodyBg
        },
        action: {
            active: colors.alpha.black[100],
            hover: colors.primary.lighter,
            hoverOpacity: 0.1,
            selected: colors.alpha.black[10],
            selectedOpacity: 0.1,
            disabled: colors.alpha.black[50],
            disabledBackground: colors.alpha.black[5],
            disabledOpacity: 0.38,
            focus: colors.alpha.black[10],
            focusOpacity: 0.05,
            activatedOpacity: 0.12
        }
    },
    breakpoints: {
        values: {
            xs: 0,
            mobile: 450,
            sm: 600,
            md: 900,
            lg: 1200,
            xl: 1536,
            xxl: 2248
        }
    },
    components: {
        MuiBackdrop: {
            styleOverrides: {
                root: {
                    backgroundColor: alpha(darken("#1C1C1C", 0.5), 0.4),
                    backdropFilter: "blur(2px)",

                    "&.MuiBackdrop-invisible": {
                        backgroundColor: "transparent",
                        backdropFilter: "blur(2px)"
                    }
                }
            }
        },
        MuiFormHelperText: {
            styleOverrides: {
                root: {
                    textTransform: "none",
                    marginLeft: 8,
                    marginRight: 8,
                    fontWeight: "bold"
                }
            }
        },
        MuiDialog: {
            defaultProps: {
                // disableScrollLock: true, keepMounted: true, disablePortal: true
            },
            styleOverrides: {
                paper: {
                    backgroundColor: darken(themeColors.primaryAlt, 0.5)
                }
            }
        },
        MuiCssBaseline: {
            styleOverrides: {
                "html, body": {
                    width: "100%",
                    height: "100%"
                },
                body: {
                    display: "flex",
                    flexDirection: "column",
                    minHeight: "100%",
                    width: "100%",
                    flex: 1
                },
                "#__next": {
                    width: "100%",
                    display: "flex",
                    flex: 1,
                    flexDirection: "column"
                },
                html: {
                    display: "flex",
                    flexDirection: "column",
                    minHeight: "100%",
                    width: "100%",
                    MozOsxFontSmoothing: "grayscale",
                    WebkitFontSmoothing: "antialiased"
                },
                ".child-popover .MuiPaper-root .MuiList-root": {
                    flexDirection: "column"
                },
                ":root": {
                    "--swiper-theme-color": colors.primary.main,
                    colorScheme: "dark"
                },
                code: {
                    background: colors.info.lighter,
                    color: colors.alpha.black[100],
                    borderRadius: 4,
                    padding: 4
                },
                "@keyframes pulse": {
                    "0%": {
                        transform: "scale(.75)"
                    },
                    "20%": {
                        transform: "scale(1.1)"
                    },
                    "40%": {
                        transform: "scale(.75)"
                    },
                    "60%": {
                        transform: "scale(1.05)"
                    },
                    "80%": {
                        transform: "scale(.75)"
                    },
                    "100%": {
                        transform: "scale(.75)"
                    }
                },
                "@keyframes ripple": {
                    "0%": {
                        transform: "scale(.8)",
                        opacity: 1
                    },
                    "100%": {
                        transform: "scale(2.8)",
                        opacity: 0
                    }
                },
                "@keyframes float": {
                    "0%": {
                        transform: "translate(0%, 0%)"
                    },
                    "100%": {
                        transform: "translate(3%, 3%)"
                    }
                }
            }
        },
        MuiSelect: {
            styleOverrides: {
                iconOutlined: {
                    color: colors.alpha.black[50]
                },
                icon: {
                    top: "calc(50% - 14px)"
                }
            }
        },
        MuiOutlinedInput: {
            styleOverrides: {
                root: {
                    "& .MuiInputAdornment-positionEnd.MuiInputAdornment-outlined": {
                        paddingRight: 6
                    },
                    "&:hover .MuiOutlinedInput-notchedOutline": {
                        borderColor: colors.alpha.black[50]
                    },
                    "&.Mui-focused:hover .MuiOutlinedInput-notchedOutline": {
                        borderColor: colors.primary.main
                    }
                }
            }
        },
        MuiListSubheader: {
            styleOverrides: {
                colorPrimary: {
                    fontWeight: "bold",
                    lineHeight: "40px",
                    fontSize: 13,
                    background: colors.alpha.black[5],
                    color: colors.alpha.black[70]
                }
            }
        },
        MuiCardHeader: {
            styleOverrides: {
                action: {
                    marginTop: -5,
                    marginBottom: -5
                },
                title: {
                    fontSize: 15
                }
            }
        },
        MuiRadio: {
            styleOverrides: {
                root: {
                    borderRadius: "50px"
                }
            }
        },
        MuiChip: {
            styleOverrides: {
                root: {
                    color: colors.alpha.black[50]
                },
                colorSecondary: {
                    background: colors.alpha.black[5],
                    color: colors.alpha.black[50],

                    "&:hover": {
                        background: colors.alpha.black[10]
                    }
                },
                icon: {
                    color: colors.alpha.black[50]
                },
                label: {
                    paddingLeft: "8px",
                    paddingRight: "5px"
                },
                deleteIcon: {
                    color: colors.alpha.black[50],

                    "&:hover": {
                        color: colors.alpha.black[70]
                    }
                }
            }
        },
        MuiAccordion: {
            styleOverrides: {
                root: {
                    // boxShadow: 'none',

                    "&.Mui-expanded": {
                        margin: 0
                    },
                    "&::before": {
                        display: "none"
                    }
                }
            }
        },
        MuiAccordionDetails: {
            styleOverrides: {
                root: {
                    background: alpha(colors.layout.general.bodyBg, 1),
                    borderBottomLeftRadius: "10px",
                    borderBottomRightRadius: "10px"
                }
            }
        },
        MuiAvatar: {
            styleOverrides: {
                root: {
                    fontSize: 14,
                    fontWeight: "bold"
                },
                colorDefault: {
                    background: colors.alpha.black[30],
                    color: colors.alpha.trueWhite[100]
                }
            }
        },
        MuiAvatarGroup: {
            styleOverrides: {
                root: {
                    alignItems: "center"
                },
                avatar: {
                    background: colors.alpha.black[10],
                    fontSize: 13,
                    color: colors.alpha.black[70],
                    fontWeight: "bold",

                    "&:first-of-type": {
                        border: 0,
                        background: "transparent"
                    }
                }
            }
        },
        MuiListItemAvatar: {
            styleOverrides: {
                alignItemsFlexStart: {
                    marginTop: 0
                }
            }
        },
        MuiPaginationItem: {
            styleOverrides: {
                page: {
                    fontSize: 13,
                    fontWeight: "bold",
                    transition: "all .2s"
                },
                textPrimary: {
                    "&.Mui-selected": {
                        boxShadow: colors.shadows.primary
                    },
                    "&.MuiButtonBase-root:hover": {
                        background: colors.alpha.black[5]
                    },
                    "&.Mui-selected.MuiButtonBase-root:hover": {
                        background: colors.primary.main
                    }
                }
            }
        },
        MuiButton: {
            defaultProps: {
                disableRipple: true
            },
            styleOverrides: {
                root: {
                    fontWeight: "bold",
                    textTransform: "none",
                    paddingLeft: 16,
                    paddingRight: 16,

                    ".MuiSvgIcon-root": {
                        transition: "all .2s"
                    }
                },
                endIcon: {
                    marginRight: -8
                },
                containedPrimary: {
                    // backgroundColor: '#F4F5FB',
                    color: colors.alpha.white[100],
                    "&:hover, &.MuiSelected": {
                        // backgroundColor: '#BEC5CB',
                        color: colors.alpha.white[100]
                    }
                },
                outlinedPrimary: {
                    // backgroundColor: colors.secondary.main,
                    color: colors.alpha.black[100],
                    // border: '1px solid ' + alpha('#BEC5CB', 0.3),
                    "&:hover, &.MuiSelected": {
                        // backgroundColor: alpha('#BEC5CB', 0.1),
                        // border: '1px solid ' + alpha('#BEC5CB', 0.1),
                        // color: colors.alpha.black[100]
                    }
                },
                containedSecondary: {
                    backgroundColor: colors.secondary.main,
                    color: colors.alpha.white[100],
                    border: "1px solid " + colors.alpha.black[30]
                },
                outlinedSecondary: {
                    backgroundColor: colors.alpha.white[100],

                    "&:hover, &.MuiSelected": {
                        backgroundColor: colors.alpha.black[5],
                        color: colors.alpha.black[100]
                    }
                },
                sizeSmall: {
                    padding: "6px 16px",
                    lineHeight: 1.5
                },
                sizeMedium: {
                    padding: "8px 20px"
                },
                sizeLarge: {
                    padding: "11px 24px"
                },
                textSizeSmall: {
                    padding: "7px 12px"
                },
                textSizeMedium: {
                    padding: "9px 16px"
                },
                textSizeLarge: {
                    padding: "12px 16px"
                }
            }
        },
        MuiButtonBase: {
            defaultProps: {
                disableRipple: false
            },
            styleOverrides: {
                root: {
                    borderRadius: 10
                }
            }
        },
        // MuiButtonDisabled:{
        //   background: 'rgb(165, 168, 190)',
        //   borderColor: 'rgb(60, 55, 66)',
        //   cursor: 'not-allowed'
        // },
        MuiToggleButton: {
            defaultProps: {
                disableRipple: true
            },
            styleOverrides: {
                root: {
                    color: colors.primary.main,
                    background: colors.alpha.white[100],
                    transition: "all .2s",

                    "&:hover, &.Mui-selected, &.Mui-selected:hover": {
                        color: colors.alpha.white[100],
                        background: colors.primary.main
                    }
                }
            }
        },
        MuiIconButton: {
            styleOverrides: {
                root: {
                    borderRadius: 8,
                    padding: 8,

                    "& .MuiTouchRipple-root": {
                        borderRadius: 8
                    }
                },
                sizeSmall: {
                    padding: 4
                }
            }
        },
        MuiListItemText: {
            styleOverrides: {
                root: {
                    margin: 0
                }
            }
        },
        MuiListItemButton: {
            styleOverrides: {
                root: {
                    "& .MuiTouchRipple-root": {
                        opacity: 0.3
                    }
                    // '&:hover, &.Mui-selected, &.Mui-selected:hover': {
                    //   color: colors.alpha.white[70],
                    //   background: colors.alpha.white[70],
                    // }
                }
            }
        },
        MuiDivider: {
            styleOverrides: {
                root: {
                    background: colors.alpha.black[10],
                    border: 0,
                    height: 1
                },
                vertical: {
                    height: "auto",
                    width: 1,

                    "&.MuiDivider-flexItem.MuiDivider-fullWidth": {
                        height: "auto"
                    },
                    "&.MuiDivider-absolute.MuiDivider-fullWidth": {
                        height: "100%"
                    }
                },
                withChildren: {
                    "&:before, &:after": {
                        border: 0
                    }
                },
                wrapper: {
                    background: colors.alpha.white[100],
                    fontWeight: "bold",
                    height: 24,
                    lineHeight: "24px",
                    marginTop: -12,
                    color: "inherit",
                    textTransform: "uppercase"
                }
            }
        },
        MuiPaper: {
            styleOverrides: {
                root: {
                    background: "#21252B",
                    padding: 0,
                    border: "1px solid #32373C"
                }
                // elevation0: {
                //   boxShadow: 'none'
                // },
                // elevation: {
                //   boxShadow: colors.shadows.card
                // },
                // elevation2: {
                //   boxShadow: colors.shadows.cardSm
                // },
                // elevation24: {
                //   boxShadow: colors.shadows.cardLg
                // },
                // outlined: {
                //   boxShadow: colors.shadows.card
                // }
            }
        },
        MuiLink: {
            defaultProps: {
                underline: "hover",
                color: "#2de370"
            }
        },
        MuiLinearProgress: {
            styleOverrides: {
                root: {
                    borderRadius: 6,
                    height: 6
                }
            }
        },
        MuiSlider: {
            styleOverrides: {
                root: {
                    "& .MuiSlider-valueLabelCircle, .MuiSlider-valueLabelLabel": {
                        transform: "none"
                    },
                    "& .MuiSlider-valueLabel": {
                        borderRadius: 6,
                        background: colors.alpha.black[100],
                        color: colors.alpha.white[100]
                    }
                }
            }
        },
        MuiList: {
            styleOverrides: {
                root: {
                    padding: 0,

                    "& .MuiListItem-button": {
                        transition: "all .2s",

                        "& > .MuiSvgIcon-root": {
                            minWidth: 34
                        },

                        "& .MuiTouchRipple-root": {
                            opacity: 0.2
                        }
                    },
                    "& .MuiListItem-root.MuiButtonBase-root.Mui-selected": {
                        backgroundColor: alpha(colors.primary.lighter, 0.4)
                    },
                    "& .MuiMenuItem-root.MuiButtonBase-root:active": {
                        backgroundColor: alpha(colors.primary.lighter, 0.4)
                    },
                    "& .MuiMenuItem-root.MuiButtonBase-root .MuiTouchRipple-root": {
                        opacity: 0.2
                    }
                },
                padding: {
                    padding: "12px",

                    "& .MuiListItem-button": {
                        borderRadius: 6,
                        margin: "1px 0"
                    }
                }
            }
        },
        MuiTabs: {
            styleOverrides: {
                root: {
                    height: 38,
                    minHeight: 38,
                    overflow: "visible"
                },
                indicator: {
                    height: 38,
                    minHeight: 38,
                    borderRadius: 6
                    // border: '1px solid ' + colors.primary.dark,
                    // boxShadow: '0px 2px 10px ' + colors.primary.light
                },
                scrollableX: {
                    // overflow: 'visible !important'
                }
            }
        },
        MuiTab: {
            styleOverrides: {
                root: {
                    padding: 0,
                    height: 38,
                    minHeight: 38,
                    borderRadius: 6,
                    transition: "color .2s",
                    textTransform: "capitalize",

                    "&.MuiButtonBase-root": {
                        minWidth: "auto",
                        paddingLeft: 20,
                        paddingRight: 20,
                        marginRight: 4
                    },
                    "&.Mui-selected, &.Mui-selected:hover": {
                        color: colors.alpha.white[100],
                        zIndex: 5
                    },
                    "&:hover": {
                        color: colors.alpha.black[100]
                    }
                }
            }
        },
        MuiMenu: {
            // defaultProps: {
            //   disableScrollLock: true, keepMounted: true, disablePortal: true
            // },
            styleOverrides: {
                paper: {
                    padding: 12
                },
                list: {
                    padding: 12,

                    "& .MuiMenuItem-root.MuiButtonBase-root": {
                        fontSize: 14,
                        marginTop: 1,
                        marginBottom: 1,
                        transition: "all .2s",
                        color: colors.alpha.black[70],

                        "& .MuiTouchRipple-root": {
                            opacity: 0.2
                        },

                        "&:hover, &:active, &.active, &.Mui-selected": {
                            color: colors.alpha.black[100],
                            background: alpha(colors.primary.lighter, 0.2)
                        }
                    }
                }
            }
        },
        MuiMenuItem: {
            styleOverrides: {
                root: {
                    background: "transparent",
                    transition: "all .2s",

                    "&:hover, &:active, &.active, &.Mui-selected": {
                        color: colors.alpha.black[100],
                        background: alpha(colors.primary.lighter, 0.2)
                    },
                    "&.Mui-selected:hover": {
                        background: alpha(colors.primary.lighter, 0.2)
                    }
                }
            }
        },
        MuiListItem: {
            styleOverrides: {
                root: {
                    "&.MuiButtonBase-root": {
                        color: colors.secondary.main,

                        "&:hover, &:active, &.active, &.Mui-selected": {
                            color: colors.alpha.black[100],
                            background: alpha(colors.primary.lighter, 0.2)
                        }
                    }
                }
            }
        },
        MuiAutocomplete: {
            styleOverrides: {
                tag: {
                    margin: 1
                },
                clearIndicator: {
                    background: alpha(colors.error.lighter, 0.2),
                    color: colors.error.main,
                    marginRight: 8,

                    "&:hover": {
                        background: alpha(colors.error.lighter, 0.3)
                    }
                },
                popupIndicator: {
                    color: colors.alpha.black[70],

                    "&:hover": {
                        background: alpha(colors.primary.lighter, 0.2)
                    }
                }
            }
        },
        MuiTablePagination: {
            styleOverrides: {
                toolbar: {
                    "& .MuiIconButton-root": {
                        padding: 8
                    }
                },
                select: {
                    "&:focus": {
                        backgroundColor: "transparent"
                    }
                }
            }
        },
        MuiToolbar: {
            styleOverrides: {
                root: {
                    minHeight: "0 !important",
                    padding: "0 !important"
                }
            }
        },
        MuiTableRow: {
            styleOverrides: {
                head: {
                    background: colors.alpha.black[5]
                },
                root: {
                    transition: "background-color .2s",

                    "&.MuiTableRow-hover:hover": {
                        backgroundColor: colors.alpha.black[5]
                    }
                }
            }
        },
        MuiTableCell: {
            styleOverrides: {
                root: {
                    borderBottomColor: colors.alpha.black[10],
                    fontSize: 14
                },
                head: {
                    // textTransform: 'uppercase',
                    fontSize: 13,
                    whiteSpace: "nowrap",
                    // fontWeight: 'bold',
                    // color: colors.alpha.black[70],
                    // background: 'inherit'
                    background: alpha(colors.layout.general.bodyBg, 0)
                }
            }
        },
        MuiAlert: {
            styleOverrides: {
                root: {
                    // backgroundColor: '#ff0000',
                },
                message: {
                    lineHeight: 1.5,
                    fontSize: 14
                },
                standardInfo: {
                    color: colors.info.main
                },
                action: {
                    color: colors.alpha.black[70]
                }
            }
        },
        MuiTimelineDot: {
            styleOverrides: {
                root: {
                    margin: 0,
                    zIndex: 5,
                    position: "absolute",
                    top: "50%",
                    marginTop: -6,
                    left: -6
                },
                outlined: {
                    backgroundColor: colors.alpha.white[100],
                    boxShadow: "0 0 0 6px " + colors.alpha.white[100]
                },
                outlinedPrimary: {
                    backgroundColor: colors.alpha.white[100],
                    boxShadow: "0 0 0 6px " + colors.alpha.white[100]
                }
            }
        },
        MuiTimelineConnector: {
            styleOverrides: {
                root: {
                    position: "absolute",
                    height: "100%",
                    top: 0,
                    borderRadius: 50,
                    backgroundColor: colors.alpha.black[10]
                }
            }
        },
        MuiTimelineItem: {
            styleOverrides: {
                root: {
                    minHeight: 0,
                    padding: "8px 0",

                    "&:before": {
                        display: "none"
                    }
                },
                missingOppositeContent: {
                    "&:before": {
                        display: "none"
                    }
                }
            }
        },
        MuiPopover: {
            defaultProps: {
                disableScrollLock: true,
                keepMounted: true,
                disablePortal: true
            }
        },
        MuiPopper: {
            defaultProps: {
                keepMounted: true,
                disablePortal: true
            }
        },
        MuiTooltip: {
            styleOverrides: {
                tooltip: {
                    // backgroundColor: alpha(colors.alpha.black['100'], 0.95),
                    color: alpha(colors.alpha.black["100"], 0.95),
                    padding: "8px 16px",
                    fontSize: 14,
                    fontWeight: 500
                },
                arrow: {
                    color: alpha(colors.alpha.black["100"], 0.95)
                }
            }
        },
        MuiSwitch: {
            styleOverrides: {
                root: {
                    height: 33,
                    overflow: "visible",

                    "& .MuiButtonBase-root": {
                        position: "absolute",
                        padding: 6,
                        transition: "left 150ms cubic-bezier(0.4, 0, 0.2, 1) 0ms,transform 150ms cubic-bezier(0.4, 0, 0.2, 1) 0ms"
                    },
                    "& .MuiIconButton-root": {
                        borderRadius: 100
                    },
                    "& .MuiSwitch-switchBase.Mui-checked + .MuiSwitch-track": {
                        opacity: 0.3
                    }
                },
                thumb: {
                    border: "1px solid " + colors.alpha.black[30],
                    boxShadow: "0px 9px 14px " + colors.alpha.black[10] + ", 0px 2px 2px " + colors.alpha.black[10]
                },
                track: {
                    backgroundColor: colors.alpha.black[5],
                    border: "1px solid " + colors.alpha.black[10],
                    boxShadow: "inset 0px 1px 1px " + colors.alpha.black[10],
                    opacity: 1
                },
                colorPrimary: {
                    "& .MuiSwitch-thumb": {
                        backgroundColor: colors.alpha.white[100]
                    },

                    "&.Mui-checked .MuiSwitch-thumb": {
                        backgroundColor: colors.primary.main
                    }
                }
            }
        },
        MuiStepper: {
            styleOverrides: {
                root: {
                    paddingTop: 20,
                    paddingBottom: 20,
                    background: colors.alpha.black[5]
                }
            }
        },
        MuiStepIcon: {
            styleOverrides: {
                root: {
                    "&.MuiStepIcon-completed": {
                        color: colors.success.main
                    }
                }
            }
        },
        MuiTypography: {
            defaultProps: {
                variantMapping: {
                    h1: "h1",
                    h1a: "h1",
                    h2: "h2",
                    h2a: "h2",
                    h2b: "h2",
                    h3: "div",
                    h4: "div",
                    h5: "div",
                    h6: "div",
                    d1: "div",
                    d2: "div",
                    d3: "div",
                    d4: "div",
                    d5: "div",
                    subtitle1: "div",
                    subtitle2: "div",
                    body1: "div",
                    body2: "div",
                    s1: "span",
                    s2: "span",
                    s3: "span",
                    s4: "span",
                    s5: "span",
                    s6: "span",
                    s7: "span",
                    s8: "span",
                    s9: "span",
                    s10: "span",
                    s11: "span",
                    s12: "span",
                    s13: "span",
                    s14: "span",
                    caption: "span",
                    p1: "p",
                    p2: "p",
                    p3: "p",
                    p4: "p",
                    p5: "p",
                    p6: "p"
                }
            },
            styleOverrides: {
                gutterBottom: {
                    marginBottom: 4
                },
                paragraph: {
                    fontSize: 17,
                    lineHeight: 1.7
                }
            },
            variants: [
                {
                    props: { variant: "h1a" },
                    style: ({ theme }) => ({
                        fontWeight: 600,
                        fontSize: 28,
                        [theme.breakpoints.up("md")]: {
                            fontSize: 36
                        },
                        [theme.breakpoints.up("lg")]: {
                            fontSize: 40
                        }
                    })
                },
                {
                    props: { variant: "h2a" },
                    style: ({ theme }) => ({
                        fontWeight: 600,
                        fontSize: 18,
                        [theme.breakpoints.up("md")]: {
                            fontSize: 24
                        }
                    })
                },
                {
                    props: { variant: "s1" },
                    style: ({ theme }) => ({
                        fontWeight: 400,
                        fontSize: 18,
                        lineHeight: 1.4,
                        color: colors.alpha.black[100],
                        [theme.breakpoints.up("md")]: {
                            fontSize: 20
                        }
                    })
                },
                {
                    props: { variant: "s13" },
                    style: ({ theme }) => ({
                        fontWeight: 400,
                        fontSize: 12,
                        color: colors.alpha.black[50],
                        [theme.breakpoints.up("sm")]: {
                            fontSize: 16
                        }
                    })
                },
                {
                    props: { variant: "d5" },
                    style: ({ theme }) => ({
                        fontWeight: 600,
                        fontSize: 14,
                        color: colors.alpha.black[100],
                        [theme.breakpoints.up("sm")]: {
                            fontSize: 20
                        }
                    })
                }
            ]
        }
    },
    shape: {
        borderRadius: 10
    },
    typography: {
        fontFamily: '"Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji"',
        p1: {
            fontWeight: 700,
            fontSize: 16,
            lineHeight: 1.4,
            color: colors.alpha.black[100]
        },
        p2: {
            fontWeight: 400,
            fontSize: 16,
            lineHeight: 1.4,
            color: colors.alpha.black[100]
        },
        p3: {
            fontWeight: 500,
            fontSize: 12,
            lineHeight: 1.4,
            color: colors.alpha.black[70]
        },
        p4: {
            fontWeight: 600,
            fontSize: 16,
            color: colors.alpha.black[100]
        },
        p5: {
            fontWeight: 400,
            fontSize: 16,
            color: colors.alpha.black[100]
        },
        p6: {
            fontWeight: 400,
            fontSize: 12,
            color: colors.alpha.black[50]
        },
        s2: {
            fontWeight: 500,
            fontSize: 12,
            color: "#EB5757"
        },
        s3: {
            fontWeight: 600,
            fontSize: 16,
            color: colors.alpha.black[100]
        },
        s4: {
            fontWeight: 400,
            fontSize: 16,
            color: colors.alpha.black[50]
        },
        s5: {
            fontWeight: 500,
            fontSize: 16,
            color: colors.alpha.black[100]
        },
        s6: {
            fontWeight: 500,
            fontSize: 14
            // color: colors.alpha.black[100]
        },
        s7: {
            fontWeight: 400,
            fontSize: 12,
            color: colors.alpha.black[50]
        },
        s8: {
            fontWeight: 400,
            fontSize: 12,
            color: colors.alpha.black[100]
        },
        s9: {
            fontWeight: 700,
            fontSize: 25,
            lineHeight: 1.4,
            color: colors.alpha.black[100]
        },
        s10: {
            fontWeight: 400,
            fontSize: { xs: 11, sm: 16 },
            color: colors.alpha.black[100]
        },
        s11: {
            fontWeight: 400,
            fontSize: 12
        },
        s12: {
            fontWeight: 400,
            fontSize: 10,
            color: colors.alpha.black[50]
        },
        s14: {
            fontWeight: 500,
            fontSize: 12,
            color: colors.alpha.black[90]
        },
        h1: {
            fontWeight: 700,
            fontSize: 35
        },
        h2: {
            fontWeight: 700,
            fontSize: 30
        },
        h2b: {
            fontSize: "1rem",
            lineHeight: "1.5rem",
            fontWeight: 400
        },
        h3: {
            fontWeight: 700,
            fontSize: 25,
            lineHeight: 1.4,
            color: colors.alpha.black[100]
        },
        h4: {
            fontWeight: 700,
            fontSize: 16
        },
        h5: {
            fontWeight: 700,
            fontSize: 14
        },
        h6: {
            fontSize: 15
        },
        d1: {
            fontWeight: 400,
            fontSize: 16,
            color: colors.alpha.black[100]
        },
        d2: {
            fontWeight: 600,
            fontSize: 20,
            color: colors.alpha.black[100]
        },
        d3: {
            fontWeight: 400,
            fontSize: 16,
            color: colors.alpha.black[100]
        },
        d4: {
            fontWeight: 500,
            fontSize: 16,
            color: colors.alpha.black[70]
        },
        body1: {
            fontSize: 14
        },
        body2: {
            fontSize: 14
        },
        button: {
            fontWeight: 600
        },
        caption: {
            fontSize: 13,
            // textTransform: 'uppercase',
            color: colors.alpha.black[50]
        },
        subtitle1: {
            fontSize: 14,
            color: colors.alpha.black[70]
        },
        subtitle2: {
            fontWeight: 400,
            fontSize: 15,
            color: colors.alpha.black[50]
        },
        overline: {
            fontSize: 13,
            fontWeight: 700,
            textTransform: "uppercase"
        }
    },
    shadows: [
        "none",
        "none",
        "none",
        "none",
        "none",
        "none",
        "none",
        "none",
        "none",
        "none",
        "none",
        "none",
        "none",
        "none",
        "none",
        "none",
        "none",
        "none",
        "none",
        "none",
        "none",
        "none",
        "none",
        "none",
        "none"
    ]
});

import React from "react";
import PropTypes from "prop-types";
import Button from "@mui/material/Button";
import { styled } from "@mui/material/styles";
import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import DialogContent from "@mui/material/DialogContent";
import DialogActions from "@mui/material/DialogActions";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import CloseIcon from "@mui/icons-material/Close";
import { TextField } from "@mui/material";


const CheckInDialog = styled(Dialog)(({ theme }) => ({
    "& .MuiDialogContent-root": {
        padding: theme.spacing(5),
    },
    "& .MuiDialogActions-root": {
        padding: theme.spacing(1),
    },
}));

const CheckInDialogTitle = (props) => {
    const { children, onClose, ...other } = props;

    return (
        <DialogTitle md={{ m: 0, p: 2 }} {...other}>
            {children}
            {onClose ? (
                <IconButton
                    aria-label="close"
                    onClick={onClose}
                    sx={{
                        position: "absolute",
                        right: 8,
                        top: 8,
                        color: (theme) => theme.palette.grey[900],
                    }}
                >
                    <CloseIcon />
                </IconButton>
            ) : null}
        </DialogTitle>
    );
};

CheckInDialogTitle.propTypes = {
    children: PropTypes.node,
    onClose: PropTypes.func.isRequired,
};

function CheckInModal(props) {
    const [open, setOpen] = React.useState(false);

    const handleClickOpen = () => {
        setOpen(true);
    };
    const handleClose = () => {
        setOpen(false);
    };

    return (
        <div>
            <Button variant="contained" color="info" onClick={handleClickOpen}>
                유효성 검사
            </Button>
            <CheckInDialog
                onClose={handleClose}
                aria-labelledby="dialog__title"
                open={open}
            >
                <CheckInDialogTitle id="dialog__title" onClose={handleClose}>
                    <div className="checkIn__message">
                        게스트가 본인임을 확인 했습니다.
                    </div>
                </CheckInDialogTitle>
                <DialogContent dividers>
                    <span
                        style={{
                            color: "black",
                            fontWeight: "bolder",
                            fontSize: 20,
                        }}
                    >
                        게스트가 객실에 입실 완료했습니다.
                    </span>
                    <div>
                        <br />
                        <Typography>게스트 특이사항</Typography>

                        <TextField
                            id="standard-textarea"
                            label="Send Message"
                            placeholder="Some text here"
                            multiline
                            variant="filled"
                            
                            inputProps={{
                                maxLength: 255,
                            }}
                            InputProps={{
                                disableUnderline: true,
                            }}
                            style={{ 
                                width: 500 
                            }}
                            
                            />
                    </div>
                </DialogContent>
                <DialogActions>
                    <Button
                        variant="contained"
                        color="info"
                        autoFocus
                        onClick={handleClose}
                    >
                        체크인 하기
                    </Button>
                </DialogActions>
            </CheckInDialog>
        </div>
    );
}

export default CheckInModal;

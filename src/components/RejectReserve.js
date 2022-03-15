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
import { TextareaAutosize } from "@mui/material";

const RejectDialog = styled(Dialog)(({ theme }) => ({
    "& .MuiDialogContent-root": {
        padding: theme.spacing(5),
    },
    "& .MuiDialogActions-root": {
        padding: theme.spacing(1),
    },
}));

const RejectDialogTitle = (props) => {
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

RejectDialogTitle.propTypes = {
    children: PropTypes.node,
    onClose: PropTypes.func.isRequired,
};

function RejectReserve() {
    const [open, setOpen] = React.useState(false);

    const handleClickOpen = () => {
        setOpen(true);
    };
    const handleClose = () => {
        setOpen(false);
    };

    return (
        <div>
            <Button variant="contained" color="error" onClick={handleClickOpen}>
                예약거절
            </Button>
            <RejectDialog
                onClose={handleClose}
                aria-labelledby="dialog__title"
                open={open}
            >
                <RejectDialogTitle id="dialog__title" onClose={handleClose}>
                    <div className="reject__title" style={{ color: "red" }}>
                        정말로 예약을 거절 하시겠습니까?
                    </div>
                </RejectDialogTitle>
                <DialogContent dividers>
                    <span
                        style={{
                            color: "black",
                            fontWeight: "bolder",
                            fontSize: 20,
                        }}
                    >
                        예약을 거절하시는 이유를 적어주시면 게스트에게 메시지가
                        전송 됩니다.
                    </span>
                    <div>
                        <br />
                        <Typography>메시지 전달하기</Typography>
                        <TextareaAutosize
                            aria-label="dialog__contents"
                            minRows={6}
                            placeholder="500자 내외로 입력 해주세요."
                            style={{ width: 500 }}
                        />
                    </div>
                </DialogContent>
                <DialogActions>
                    <Button
                        variant="contained"
                        color="error"
                        autoFocus
                        onClick={handleClose}
                    >
                        거절완료
                    </Button>
                </DialogActions>
            </RejectDialog>
        </div>
    );
}

export default RejectReserve;

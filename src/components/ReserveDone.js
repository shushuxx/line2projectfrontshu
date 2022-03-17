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
import { ButtonGroup } from "@mui/material";
import ParentForm from "./ParentForm";

const ReserveDialog = styled(Dialog)(({ theme }) => ({
    "& .MuiDialogContent-root": {
        padding: theme.spacing(5),
    },
    "& .MuiDialogActions-root": {
        padding: theme.spacing(1),
    },
}));

const ReserveDialogTitle = (props) => {
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

ReserveDialogTitle.propTypes = {
    children: PropTypes.node,
    onClose: PropTypes.func.isRequired,
};

function ReserveDone() {
    const [open, setOpen] = React.useState(false);

    const handleClickOpen = () => {
        setOpen(true);
    };
    const handleClose = () => {
        setOpen(false);
    };

    return (
        <div>
            <Button
                variant="contained"
                color="success"
                onClick={handleClickOpen}
            >
                예약완료
            </Button>
            <ReserveDialog
                onClose={handleClose}
                aria-labelledby="dialog__title"
                open={open}
            >
                <ReserveDialogTitle id="dialog__title" onClose={handleClose}>
                    <div>감사합니다 고객님 예약이 확정 되었습니다.</div>
                </ReserveDialogTitle>
                <DialogContent dividers>
                    <div>
                        <ButtonGroup variant="outlined" color="success">
                            <Button>쉼터이름</Button>
                            <Button>쉼터 위치</Button>
                            <Button>객실이름</Button>
                            <Button>체크인날짜</Button>
                            <Button>체크아웃날짜</Button>
                        </ButtonGroup>
                    </div>
                    <br />
                    <Typography>메시지 전달하기</Typography>
                    <div>
                        <ParentForm />
                    </div>
                </DialogContent>
                <DialogActions>
                    <div
                        style={{
                            color: "grey",
                            fontWeight: "bolder",
                            fontSize: 8,
                            padding: 10,
                        }}
                    >
                        마이페이지에서 세부내역을 확인하세요{" "}
                    </div>
                    <Button
                        variant="contained"
                        color="success"
                        autoFocus
                        onClick={handleClose}
                    >
                        마이페이지
                    </Button>
                </DialogActions>
            </ReserveDialog>
        </div>
    );
}

export default ReserveDone;

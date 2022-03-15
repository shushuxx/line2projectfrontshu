import React from 'react';
import PropTypes from 'prop-types';
import Button from '@mui/material/Button';
import { styled } from '@mui/material/styles';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import DialogActions from '@mui/material/DialogActions';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import CloseIcon from '@mui/icons-material/Close';
import { ButtonGroup, TextareaAutosize } from '@mui/material';

const ReserveDialog = styled(Dialog)(({ theme }) => ({
  '& .MuiDialogContent-root': {
    padding: theme.spacing(5),
  },
  '& .MuiDialogActions-root': {
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
            position: 'absolute',
            right: 8,
            top: 8,
            color: (theme) => theme.palette.grey[500],
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
      <Button variant="outlined" onClick={handleClickOpen}>
        Open dialog
      </Button>
      <ReserveDialog onClose={handleClose} aria-labelledby="send-dialog-title" open={open}>
        <ReserveDialogTitle id="send-dialog-title" onClose={handleClose}>
          <div>감사합니다 고객님 예약이 확정 되었습니다.</div>
        </ReserveDialogTitle>
        <DialogContent dividers>
          <div>
            <ButtonGroup>
            <Button variant="outlined">쉼터이름</Button>
            <Button variant="outlined">쉼터 위치</Button>
            <Button variant="outlined">객실이름</Button>
            <Button variant="outlined">체크인날짜</Button>
            <Button variant="outlined">체크아웃날짜</Button>
            </ButtonGroup>
          </div>
          <br />
          <Typography>메시지 전달하기</Typography>
          <div>
          <TextareaAutosize aria-label="send-host-message" minRows={6} placeholder="호스트에게 문의 사항이 있다면 500자 내외로 입력 해주세요." style={{ width: 500 }} />
            </div>
        </DialogContent>
        <DialogActions>
          <h5>마이페이지에서 세부내역을 확인하세요.</h5>
          <Button color="primary" autoFocus onClick={handleClose}>
            마이페이지
          </Button>
        </DialogActions>
      </ReserveDialog>
    </div>
  );
}


export default ReserveDone;
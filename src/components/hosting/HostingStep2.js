import { Button, Checkbox, FormControl, InputLabel, MenuItem, Select, TextField } from '@mui/material';
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import HostingHeader from './HostingHeader';
import './HostingStep2.css';

function HostingStep2() {
    const facUrl = "http://localhost:8080/api/findAllShelterFacilities"

    const navigate = useNavigate();

    const [facility, setFacility] = useState([]);
    const [room, setRoom] = useState('');
    const [gender, setGender] = useState('');
    const [bedCounter, setBedCounter] = useState(0);
    const [bed2Counter, setBed2Counter] = useState(0);
    const [blanketCounter, setBlanketCounter] = useState(0);
    const [peopleCounter, setPeopleCounter] = useState(0);
    

    useEffect(()=>{
        axios.get(facUrl)
        .then(res=>{
            setFacility(res.data)
            console.log(res.data)
        });
    },[]);

    const handleRoomChange = (event) => {
        setRoom(event.target.value);
    }
    const handleGenderChange = (event) => {
        setGender(event.target.value);
    }
    const handleBedIncrement=()=>{
        setBedCounter(bedCounter+1);
    }
    const handleBedDecrement=()=>{
        if(bedCounter <= 0){
            setBedCounter(0);
        }else {
            setBedCounter(bedCounter-1);
        }
    }
    const handleBed2Increment=()=>{
        setBed2Counter(bed2Counter+1);
    }
    const handleBed2Decrement=()=>{
        if(bed2Counter <= 0){
            setBed2Counter(0);
        }else {
            setBed2Counter(bed2Counter-1);
        }
    }
    const handleBlanketIncrement=()=>{
        setBlanketCounter(blanketCounter+1);
    }
    const handleBlanketDecrement=()=>{
        if(blanketCounter <= 0){
            setBlanketCounter(0);
        }else {
            setBlanketCounter(blanketCounter-1);
        }
    }
    const handlePeoPleIncrement=()=>{
        setPeopleCounter(peopleCounter+1);
    }
    const handlePeoPleDecrement=()=>{
        if(peopleCounter <= 0){
            setPeopleCounter(0);
        }else {
            setPeopleCounter(peopleCounter-1);
        }
    }

    return (  
        <div className='hostingstep2'>
            <HostingHeader />
            <h2> ?????? ?????? ?????? ??????</h2>
            <div className='shleterFacility__container'>
                <h5>???????????? ?????? ?????? ?????? ??? ??? ?????? ????????? ????????? ?????????</h5>
                {
                    facility.map((item)=>(
                        <label  key={item.id}>
                        <input type="checkbox"/>
                        {item.shelterFacilityName}
                        </label>
                    ))
                }
            </div>
            
            <div className='shelterFacility__room'>
            <h2> ?????? ?????? ?????? ??????</h2>
                <div className='room__choice'>
                    <h3> ?????? ??????</h3>
                    <FormControl sx={{m:2, minWidth: 700 }}>
                        <InputLabel >?????? ???</InputLabel>
                        <Select
                            value={room}
                            onChange={handleRoomChange}
                        >
                            <MenuItem value={1}>1??????</MenuItem>
                            <MenuItem value={2}>2??????</MenuItem>
                            <MenuItem value={3}>4??????</MenuItem>
                            <MenuItem value={4}>8??????</MenuItem>
                        </Select>
                    </FormControl>
                    <h3> ?????? ?????? </h3>
                    <TextField id="outlined-basic" label="?????? ??????" variant="outlined" className='roomname' />
                    <h4>?????? 1?????? ?????? ????????? ?????? ??????????</h4>
                    <h5>?????? ??????</h5>
                        <div className='bed__count'>
                            <button name="dec" onClick={handleBedDecrement}> - </button>
                            <h4>{bedCounter}</h4>
                            <button name="inc" onClick={handleBedIncrement}> + </button>
                        </div>
                    <h5>2??? ??????</h5>
                        <div className='bed2__count'>
                                <button name="dec" onClick={handleBed2Decrement}> - </button>
                                <h4>{bed2Counter}</h4>
                                <button name="inc" onClick={handleBed2Increment}> + </button>
                        </div>
                    <h5>?????? ??????</h5>
                        <div className='blanket__count'>
                                <button name="dec" onClick={handleBlanketDecrement}> - </button>
                                <h4>{blanketCounter}</h4>
                                <button name="inc" onClick={handleBlanketIncrement}> + </button>
                        </div>
                        
                    <h3> ??????1??? ?????? ????????? ????????? ????????????????</h3>
                    <FormControl sx={{m:2, minWidth: 700 }}>
                        <InputLabel >???/??? ?????? ??????</InputLabel>
                        <Select
                            value={gender}
                            onChange={handleGenderChange}
                        >
                            <MenuItem value={1}>??????</MenuItem>
                            <MenuItem value={2}>??????</MenuItem>
                        </Select>
                    </FormControl>

                    <h3>?????? 1?????? ?????? ????????? ????????? ????????????????</h3>
                        <div className='people__count'>
                                <button name="dec" onClick={handlePeoPleDecrement}> - </button>
                                <h4>{peopleCounter}</h4>
                                <button name="inc" onClick={handlePeoPleIncrement}> + </button>
                        </div>
                </div>
                <div className='room__photo'>
                    <h3>?????? ????????? ????????? ??? ?????? ????????? ???????????????</h3>
                    <Button variant='contained'>?????? ?????????</Button>
                </div>
            </div>
            <div className='hostingstep1__button'>
                <Button variant='container' onClick={()=>navigate('/')} >????????????</Button>
            </div>
        </div>
    );
}

export default HostingStep2;
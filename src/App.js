import ReserveDone from "./components/ReserveDone";
import RejectReserve from "./components/RejectReserve";
import CheckInModal from "./components/CheckInModal";
import "./App.css";

function App() {
    return (
        <div>
            <ReserveDone />
            <RejectReserve />
            <CheckInModal />
        </div>
    );
}

export default App;

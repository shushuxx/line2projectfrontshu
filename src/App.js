import ReserveDone from "./components/ReserveDone";
import RejectReserve from "./components/RejectReserve";
import CheckInModal from "./components/CheckInModal";
import "./App.css";
import ParentForm from "./components/ParentForm";

function App() {
    return (
        <div>
            <ReserveDone />
            <RejectReserve />
            <CheckInModal />
            <ParentForm />
        </div>
    );
}

export default App;

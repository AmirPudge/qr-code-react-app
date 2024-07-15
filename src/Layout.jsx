import QrCodeGenerator from "./Components/QrCodeGenerator/QrCodeGenerator";
import QrCodeScanner from "./Components/QrCodeScanner/QrCodeScanner";
import Navigation from "./Components/Navigation/Navigation";
import { Routes, Route } from "react-router-dom";
import GenerateHistory from "./Components/GenerateHistory/GenerateHistory";
import ScanHistory from "./Components/ScanHistory/ScanHistory";

const Layout = () => {
    return (
        <div>
            <Navigation />
            {/* <QrCodeGenerator />
            <QrCodeScanner /> */}
             <Routes>
                <Route path="/generate" element={<QrCodeGenerator />} />
                <Route path="/scanner" element={<QrCodeScanner />} />
                <Route path="/scanHistory" element={<ScanHistory />} />
                <Route path="/generateHistory" element={<GenerateHistory />} />
            </Routes>
        </div>
    )
}

export default Layout;
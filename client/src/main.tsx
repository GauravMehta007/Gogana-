import { createRoot } from "react-dom/client";
import App from "./App";
import "./index.css";

// Import fonts
const fontLinkElement = document.createElement('link');
fontLinkElement.rel = 'stylesheet';
fontLinkElement.href = 'https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;500;600;700&family=Poppins:wght@300;400;500;600&family=Caveat:wght@400;500;600&display=swap';
document.head.appendChild(fontLinkElement);

// Add font awesome
const fontAwesomeLink = document.createElement('link');
fontAwesomeLink.rel = 'stylesheet';
fontAwesomeLink.href = 'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css';
document.head.appendChild(fontAwesomeLink);

// Set page title
document.title = "Gogana Village - Uttarakhand's Hidden Gem";

createRoot(document.getElementById("root")!).render(<App />);

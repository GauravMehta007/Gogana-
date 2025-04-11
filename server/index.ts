import express from "express";
import path from "path";
import { fileURLToPath } from "url";
import fs from "fs";
import apiRoutes from "./routes";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const app = express();
const port = process.env.PORT || 5000;

// Middleware
app.use(express.json());

// API Routes
app.use(apiRoutes);

// In development mode, use a more straightforward approach
if (process.env.NODE_ENV === "development") {
  console.log("Development mode - starting client build");
  
  // Start a child process to run the client
  import("child_process").then(({ spawn }) => {
    // Run npm build in client directory
    const buildProcess = spawn('cd client && npm run build', {
      shell: true,
      stdio: 'inherit'
    });
    
    buildProcess.on('close', (code) => {
      console.log(`Client build process exited with code ${code}`);
      
      if (code === 0) {
        console.log("Client built successfully, serving static files");
        
        // Serve static files from the client build directory
        app.use(express.static(path.join(__dirname, "../client/dist")));
        
        // Handle client-side routing
        app.get('*', (req, res) => {
          // Skip API routes
          if (req.path.startsWith('/api')) {
            return;
          }
          
          res.sendFile(path.join(__dirname, '../client/dist/index.html'));
        });
      }
    });
  });
  
  // While waiting for build, serve a temporary loading page
  app.get('/', (_, res) => {
    res.send(`
      <!DOCTYPE html>
      <html>
        <head>
          <title>Loading Gogana Village Website</title>
          <style>
            body { font-family: Arial, sans-serif; text-align: center; padding-top: 100px; }
            .loader { border: 16px solid #f3f3f3; border-top: 16px solid #3498db; border-radius: 50%; width: 120px; height: 120px; animation: spin 2s linear infinite; margin: 0 auto; }
            @keyframes spin { 0% { transform: rotate(0deg); } 100% { transform: rotate(360deg); } }
          </style>
        </head>
        <body>
          <h1>Building Application</h1>
          <p>Please wait while we prepare the Gogana Village website...</p>
          <div class="loader"></div>
          <script>
            setTimeout(() => { window.location.reload(); }, 5000);
          </script>
        </body>
      </html>
    `);
  });
}

// Static files in production
if (process.env.NODE_ENV === "production") {
  app.use(express.static(path.join(__dirname, "../dist/public")));
  app.get("*", (_, res) => {
    res.sendFile(path.join(__dirname, "../dist/public/index.html"));
  });
}

// Start the server
app.listen(port, () => {
  console.log(`[express] serving on port ${port}`);
});
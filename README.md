# ArtHup
A school project for the CSE 499 course.
ArtHup | Storytelling-Driven MarketplaceArtHup is a sophisticated digital ecosystem designed to bridge the gap between independent creators and global consumers. By balancing commercial efficiency with artistic identity, the platform empowers high-value niches—from bespoke furniture to organic gastronomy—through a storytelling-driven commerce engine.🚀 Technical StackFrontend: React (SPA) with AAA Usability Compliance.Backend: Node.js + Express.js.Database: PostgreSQL (Hybrid Relational-Documental with JSONB).Authentication: Google OAuth 2.0.Infrastructure: Render.com (Global CDN for Frontend, Web Service for Backend).DevOps: GitHub Actions for CI/CD.📂 Project Structure (Monorepo)Plaintext/ArtHup
  ├── /client   # Frontend: React Application
  └── /server   # Backend: Node.js API & Database Logic
🛠️ Getting StartedPrerequisitesNode.js (v18 or higher)PostgreSQL InstanceGoogle Cloud Console Account (for OAuth)InstallationClone the repository:Bashgit clone https://github.com/your-username/ArtHup.git
cd ArtHup
Setup the Backend:Bashcd server
npm install
# Create a .env file based on .env.example
npm start
Setup the Frontend:Bashcd ../client
npm install
npm start
📑 Database Strategy: The JSONB AdvantageTo support multiple niches without schema migrations, we utilize PostgreSQL JSONB for dynamic attributes.Example Data Structures:NicheDynamic Attribute Sample (JSONB)Furniture{"wood_type": "Walnut", "finish": "Wax", "dimensions": "120x60cm"}Gastronomy{"milk_type": "Raw Cow", "allergens": ["Lactose"], "maturation": "60d"}Fashion{"fabric": "Organic Cotton", "wash_care": "Hand wash only", "size": "M"}♿ Accessibility & StandardsThis project strictly adheres to WCAG AAA Compliance:Semantic HTML: Screen reader-friendly structure.Keyboard Navigation: Full focus management for all interactive elements.Color Contrast: High-contrast ratios for visual clarity.Responsive Design: Seamless experience from 320px to 4K displays.📈 Roadmap (4-Week Sprint)Sprint 1: Infrastructure, Database Schema, and Google OAuth.Sprint 2: Storytelling Hub, Creator Profiles, and Product Catalog.Sprint 3: Checkout Flow, Inventory Management, and Pre-order Logic.Sprint 4: AAA Accessibility Audit, Newsletter Automation, and Final Polish.👥 The TeamLead Engineer / Backend: [Your Name]Frontend & UX: [Member Name]Fullstack & DevOps: [Member Name]

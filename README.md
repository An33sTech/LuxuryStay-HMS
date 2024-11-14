## Environment Setup

1. Clone the repository:

   ```bash
   git clone https://github.com/An33sTech/LuxuryStay-HMS.git
   cd LuxuryStay-HMS
   cd client
   npm i
   npm run dev
2. Create a .env file based on root directory (outside of client and server folder):
   ```bash
   cp .env.example .env
3. Update the .env file with your actual values:
   ```bash
   VITE_API_URL=http://127.0.0.1:5173
4. Install the necessary dependencies:
   ```bash
   npm i
5. Run your application:
   ```bash
   npx nodemon index.js

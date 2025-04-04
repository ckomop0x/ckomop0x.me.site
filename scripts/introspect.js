// scripts/introspect.js
import { exec } from 'child_process';
import path from 'path';

import dotenv from 'dotenv';

// Load .env file from root
dotenv.config({ path: path.resolve(process.cwd(), '.env') });

const endpoint = process.env.NEXT_PUBLIC_GRAPHQL_URL_LOCAL;

if (!endpoint) {
  console.error('❌ NEXT_PUBLIC_GRAPHQL_URL_LOCAL is not defined in .env');
  process.exit(1);
}

exec(
  `rover graph introspect ${endpoint} > schema.graphql`,
  (err, stdout, stderr) => {
    if (err) {
      console.error(`❌ Error: ${stderr}`);
      process.exit(1);
    } else {
      console.log('✅ Schema introspected and saved to schema.graphql');
    }
  },
);

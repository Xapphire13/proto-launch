#!/usr/bin/env node

import * as express from "express";
import * as findUp from "find-up";
import * as fs from "fs-extra";
import * as getPort from "get-port";
import * as path from "path";
import * as process from "process";

async function main(): Promise<void> {
  const packageJsonPath = await findUp("package.json");

  if (!packageJsonPath) {
    console.error("Cannot find package.json");
    return process.exit(1);
  }

  const packageJson = await fs.readJSON(packageJsonPath);
  const packageEntry = path.resolve(path.dirname(packageJsonPath), packageJson["main"]);

  const app = express();

  app.get("/", (_req, res) => {
    res.type("html");
    res.send(`
      <html>
        <head>
          <title>${packageJson["name"]}</title>
        </head>
        <body>
          <script src="/${path.basename(packageEntry)}">
          </script>
        </body>
      </html>
      `);
  });
  app.use(express.static(path.dirname(packageEntry)));

  const portNumber = await getPort();
  app.listen(portNumber, () => console.log(`Project live at http://127.0.0.1:${portNumber}`));
}

main();

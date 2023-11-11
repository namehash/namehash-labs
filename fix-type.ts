import * as fs from "fs";

function fixType() {
  const packageJsonRaw = fs.readFileSync(
    "../../node_modules/@calcom/embed-react/package.json",
    "utf8"
  );
  const packageJson = JSON.parse(packageJsonRaw);

  packageJson.exports["."].types = "./dist/embed-react/src/index.d.ts";

  fs.writeFileSync(
    "../../node_modules/@calcom/embed-react/package.json",
    JSON.stringify(packageJson, null, 2)
  );
}

fixType();

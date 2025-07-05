import { Project, SyntaxKind } from "ts-morph";
import path = require("path");
import fg = require("fast-glob");

const baseDir = path.resolve(__dirname, "../apps/api/src/models");
const pattern = `${baseDir}/**/rest/entity/*.ts`;

const files = fg.sync(pattern);

const project = new Project();

files.forEach((filePath) => {
  const sourceFile = project.addSourceFileAtPath(filePath);
  let updated = false;

  // Ensure @nestjs/swagger is imported
  if (!sourceFile.getImportDeclaration("@nestjs/swagger")) {
    sourceFile.addImportDeclaration({
      moduleSpecifier: "@nestjs/swagger",
      namedImports: ["ApiProperty"],
    });
    updated = true;
  }

  sourceFile.getClasses().forEach((cls) => {
    cls.getProperties().forEach((prop) => {
      const hasApiProperty = prop.getDecorators().some((d) => d.getName() === "ApiProperty");
      if (!hasApiProperty) {
        prop.addDecorator({ name: "ApiProperty", arguments: [] });
        updated = true;
      }
    });
  });

  if (updated) {
    sourceFile.saveSync();
    console.log("✅ Updated:", filePath);
  } else {
    console.log("ℹ️ Skipped (no change):", filePath);
  }
});

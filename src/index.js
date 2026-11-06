#!/usr/bin/env node
import { readFile } from "node:fs/promises";
import { resolve } from "node:path";
import { exit, argv, stdout, stderr } from "node:process";

function printHelp() {
  stdout.write(`\
AI Prompt Orchestrator CLI\
\
Usage:\
  ai-prompt-orchestrator --template <templateFile> --context <contextFile>\
\
Options:\
  --template   Path to a prompt template file (must contain {{PLACEHOLDER}} tokens)\
  --context    Path to a JSON file providing values for the placeholders\
  -h, --help   Show this help message\
`);
  exit(0);
}

async function main() {
  const args = argv.slice(2);
  if (args.includes("-h") || args.includes("--help")) {
    printHelp();
  }

  const templateIdx = args.indexOf("--template");
  const contextIdx = args.indexOf("--context");

  if (templateIdx === -1 || contextIdx === -1) {
    stderr.write("Error: Both --template and --context arguments are required.
");
    exit(1);
  }

  const templatePath = resolve(args[templateIdx + 1]);
  const contextPath = resolve(args[contextIdx + 1]);

  try {
    const [templateRaw, contextRaw] = await Promise.all([
      readFile(templatePath, { encoding: "utf8" }),
      readFile(contextPath, { encoding: "utf8" })
    ]);
    const context = JSON.parse(contextRaw);
    let output = templateRaw;
    for (const [key, value] of Object.entries(context)) {
      const placeholder = new RegExp(`{{${key}}}`, "g");
      output = output.replace(placeholder, value);
    }
    stdout.write(output + "
");
    exit(0);
  } catch (e) {
    stderr.write(`Error: ${e.message}
`);
    exit(1);
  }
}

await main();
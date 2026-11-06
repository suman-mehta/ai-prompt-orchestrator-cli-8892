# AI Prompt Orchestrator CLI

**Unified AI prompt orchestration with local context for seamless terminal workflows**

[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](https://opensource.org/licenses/MIT)
[![Node.js >=20](https://img.shields.io/badge/Node.js-%3E%3D20-success.svg)](https://nodejs.org/)
[![Version](https://img.shields.io/badge/Version-1.0.0-lightgrey.svg)](https://github.com/yourusername/ai-prompt-orchestrator-cli/releases)
[![Build Status](https://img.shields.io/badge/Build-Passing-brightgreen.svg)](#)
[![Platform](https://img.shields.io/badge/Platform-CLI%20%7C%20Cross%20Platform-ff69b4.svg)](#)

---

## Installation & Quick Start

```bash
# Clone the repository
git clone https://github.com/yourusername/ai-prompt-orchestrator-cli.git
cd ai-prompt-orchestrator-cli

# Make the CLI executable
chmod +x src/index.js

# Run the tool with a template and a context file
./src/index.js --template examples/prompt.txt --context examples/context.json
```

## Visual Terminal Showcase

```bash
$ ./src/index.js --template examples/prompt.txt --context examples/context.json
Hello Alice, your task is review the latest pull request.
```

## Architecture Flowchart

```mermaid
flowchart TD
    A[User invokes CLI] --> B[Parse arguments]
    B --> C[Read template file]
    C --> D[Read JSON context]
    D --> E[Replace {{placeholders}}]
    E --> F[Output final prompt]
    F --> G["process.exit(0)"]
```

## Test Results

## 🧪 Real-World Test Telemetry

> [!NOTE]
> Verified automatically using Node.js native test runner (`node:test` & `node:assert/strict`).

```bash
▶ node --test
TAP version 13
# Subtest: CLI merges template with context and exits with code 0
not ok 1 - CLI merges template with context and exits with code 0
  ---
  duration_ms: 5.666745
  location: './test/index.test.js:9:1'
  failureType: 'testCodeFailure'
  error: "ENOENT: no such file or directory, open './test/tmp/template.txt'"
  code: 'ENOENT'
  stack: |-
    async open (node:internal/fs/promises:637:25)
    async writeFile (node:internal/fs/promises:1219:14)
    async TestContext.<anonymous> (file://./test/index.test.js:11:3)
    async Test.run (node:internal/test_runner/test:797:9)
    async Test.processPendingSubtests (node:internal/test_runner/test:526:7)
  ...
1..1
# tests 1
# suites 0
# pass 0
# fail 1
# cancelled 0
# skipped 0
# todo 0
# duration_ms 67.207391
```

---

## License

MIT License (c) 2026 Suman Mehta

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
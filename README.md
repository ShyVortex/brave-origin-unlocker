# Brave Origin Windows Unlocker

A TypeScript utility for unlocking Brave Origin Nightly features on Windows by modifying the local application state.

## Overview

This tool modifies the Brave Origin Nightly browser's local state configuration to unlock premium features. It works by updating the `Local State` JSON file used by Brave to store user preferences and license validation status.

## Features

- ✅ Unlocks Brave Origin Nightly features
- ✅ Modifies purchase validation state
- ✅ Updates SKU credentials
- ✅ Windows-compatible local data path handling

## Requirements

- **Deno** - Modern JavaScript/TypeScript runtime
- **Windows OS** - Designed for Windows file paths
- **Brave Origin Nightly** - The browser being modified
- **File Write Permissions** - Access to `%LOCALAPPDATA%` directory

## Installation

1. Install [Deno](https://deno.land/) if you haven't already
2. Clone this repository:
   ```bash
   git clone https://github.com/ObjectAscended/brave-origin-windows-unlocker.git
   cd brave-origin-windows-unlocker

## Pre-Bundled Deno Binaries 🎉

In our latest releases, we offer **pre-bundled Deno binaries** that make running the Windows unlocker easier than ever! 🚀 You can download them from our [latest release page](https://github.com/ObjectAscended/brave-origin-windows-unlocker/releases/latest).  These binaries ensure a smooth setup and save you time, so you can focus on enjoying your experience without unnecessary hassle! 🕒

## Why Run the Windows Unlocker Instead of WSL? 🤔

Running the Windows unlocker natively is typically a better choice than running a browser inside WSL. Here's why:

1. **Performance**: The native Windows experience generally offers better performance than emulated environments like WSL. ⚡
2. **Simplicity**: You avoid complex setups and configurations, making it more straightforward for users of all levels. 🛠️
3. **Compatibility**: Some features and functionalities might only work seamlessly in a Windows environment, ensuring you get the most out of your tools. 🔗  
4. **User Experience**: Enjoy a more intuitive interface and fewer problems managing dependencies. 😊

Enjoy using our tool! 🎈

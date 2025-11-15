# GEMINI.md - Interaction Rules and Troubleshooting

This document outlines important rules for interacting with the Gemini CLI agent and provides troubleshooting steps for common issues.

## 1. File Permissions

The Gemini CLI agent operates directly on your filesystem. If you encounter errors related to file access, writing, or deleting, it's likely a permissions issue.

**Troubleshooting Steps:**

*   **Check Directory Permissions:** Ensure the agent has write permissions to the project directory and its subdirectories. You can often fix this with `chmod -R u+rwX /path/to/your/project`.
*   **Check File Ownership:** Ensure the files are owned by your user. You can change ownership with `sudo chown -R your_username /path/to/your/project`.
*   **Run as Administrator (Last Resort):** If you are on Windows, running your terminal as an administrator might resolve some issues. On macOS/Linux, avoid using `sudo` with `npm` commands unless absolutely necessary, as it can lead to further permission problems.

## 2. Node.js and npm Environment Issues

During our session, we encountered persistent issues with `npm` failing to correctly install packages and find executables. This is a common problem that can arise from corrupted caches, conflicting installations, or environmental variables.

**Recommended Clean Reinstallation Procedure:**

If you experience similar issues (e.g., `command not found` for installed packages, styles not applying despite successful builds), follow these steps:

1.  **Clean Project Dependencies:**
    *   Navigate to the frontend directory: `cd frontend/cleanarch-frontend`
    *   Delete `node_modules` and `package-lock.json`: `rm -rf node_modules package-lock.json`
2.  **Uninstall Node.js and npm (System-Wide):**
    *   **macOS (Homebrew):** `brew uninstall node`
    *   **macOS (nvm):** `nvm uninstall <version_number>` (e.g., `nvm uninstall 22.16.0`)
    *   **macOS (Official Installer - use with caution):**
        ```bash
        sudo rm -rf /usr/local/bin/npm
        sudo rm -rf /usr/local/bin/node
        sudo rm -rf /usr/local/lib/node_modules
        ```
    *   **Windows:** Use the "Add or Remove Programs" feature to uninstall Node.js.
3.  **Reinstall Node.js (Latest LTS Version):**
    *   **Recommended (Homebrew on macOS):** `brew install node`
    *   **Recommended (nvm on macOS/Linux):**
        ```bash
        nvm install --lts
        nvm use --lts
        nvm alias default lts
        ```
    *   **Official Installer:** Download and run the installer for the latest LTS version from [https://nodejs.org/](https://nodejs.org/).
4.  **Reinstall Project Dependencies:**
    *   Navigate back to the frontend directory: `cd frontend/cleanarch-frontend`
    *   Run `npm install`

## 3. General Interaction Guidelines

*   **Absolute Paths:** Always provide absolute paths when referring to files or directories.
*   **Clear Instructions:** Be as specific as possible with your requests.
*   **Context is Key:** If you're referring to a specific part of the code or a problem, provide relevant context (e.g., file content, error messages).
*   **Verification:** After I make changes, always verify them by running tests or checking the application.
*   **Server Restart:** If styles or configuration changes don't appear, try restarting your development server and performing a hard refresh in your browser.

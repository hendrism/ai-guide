# AI Guide

A 7-day interactive guide to help newcomers explore artificial intelligence.

## Getting Started
1. Clone this repository.
2. Open `index.html` in your browser.
3. Install dependencies and run lint checks:
   ```bash
   npm install
   npm test
   ```

## Contributing
Contributions are welcome! Please read [CONTRIBUTING.md](CONTRIBUTING.md) and adhere to our [Code of Conduct](CODE_OF_CONDUCT.md). Use the issue and pull request templates provided in the `.github` directory.

## Notifications
Watch this repository to receive email updates for new issues. A sample GitHub Action (`issue-alert.yml`) is included to send custom email notifications when issues are opened. Configure the required secrets (`MAIL_USERNAME`, `MAIL_PASSWORD`, `ISSUE_ALERT_EMAIL`) in your repository settings to enable it.

## Issue Reporting from the App
The guide includes a built-in form for creating GitHub issues without leaving the page. When submitting, provide a GitHub personal access token when prompted. The token is stored locally in your browser for future use.

## Offline Use and Updates
A service worker caches core files so the guide works offline and keeps your progress between updates. When a new version is available, a prompt will appear with an Update button to reload the latest content.

## License
Distributed under the MIT License. See [LICENSE](LICENSE) for more information.

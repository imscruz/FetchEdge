# FetchEdge
Made with love ❤️

**License:** Apache License 2.0:
This project is licensed under the Apache License 2.0.
### ⚠️ Warning
Any usage of this fetch script is the sole responsibility of the user. The repository owner is not liable for any misuse, including actions like DoS (Denial of Service) or DDoS (Distributed Denial of Service). Use this tool responsibly and in accordance with applicable laws.

## About Repo
This project includes a script that performs periodic data fetching. The performance of this script may vary based on the client's internet speed. Additionally, settings such as fetch intervals can be customized as needed.

## Settings
```Node
// Settings
const URL = 'example.com'; // URL
const REQUEST_TYPE = 'GET'; // Fetch type: 'GET', 'POST', 'PUT', 'DELETE'
const INTERVAL = 1000; // Fetch interval ( 1000 ms = 1 second)
const FETCH_COUNT = 100; // Number of fetches to be sent each time
```
 
### Display
It simply assigns fetch requests and provides settings where you can edit these requests

## Installation

To install and run the script, follow these steps:
1. Clone repo
```bash
git clone https://github.com/imscruz/FetchEdge.git
```
2. Edit settings
3. Run file
```
node fetch.js
```

<details>
  <summary>Click to expand Test fetch</summary>

### some test in 11.11.2024
warning: These tests may not be 100% accurate
- 75mb/s 800-1100 request Max 1056 Request
- 100mb/s 1500-1600 request Max 1682 Request
- 1000mb/s 20000-25000 request Max 28000 Request
- all tests in tested https://dstat.one/l7/?=hetzner (<3)





# WebCrawlerJS

A powerful and modular Command-Line Interface (CLI) web crawler built in Node.js, developed using a **Test-Driven Development (TDD)** approach. This application is designed for efficient and customizable web scraping tasks.

## Features

- **Command-Line Interface (CLI)**: Interact with the crawler directly from your terminal for seamless integration into scripts and workflows.
- **Test-Driven Development (TDD)**: Developed with a focus on reliability and maintainability, ensuring robust performance through comprehensive testing.
- **Modular Architecture**: Easily extend and customize functionalities to suit various web scraping needs.
- **Asynchronous Operations**: Leverages Node.js's non-blocking I/O for efficient and concurrent web crawling.
- **Error Handling**: Implements robust mechanisms to manage errors and retries, ensuring resilience during crawling sessions.
- **Ethical Scraping**: Adheres to best practices by respecting `robots.txt` directives and includes guidelines for responsible data collection.

## Installation

1. **Clone the repository**:
   ```
   git clone https://github.com/TheAyushB/WebCrawlerJS.git
   cd WebCrawlerJS
    ```

2. **Install dependencies**:
    ```
    npm install
    ```
3. **Usage**:
   ```
    node main.js <URL to crawl>
   ```
## Project Structure

  ```
    ├── main.js             # Entry point for the CLI application
    ├── crawl.js            # Core crawling logic
    ├── crawl.test.js       # Unit tests for crawling functionality
    ├── report.js           # Report generation logic
    ├── report.test.js      # Unit tests for report generation
    ├── package.json        # Project metadata and dependencies
    ├── README.md           # Project documentation
    └── LICENSE             # License information
  ```

## Running Tests

   This project utilizes Jest for testing. To execute the test suite:

   ```
    npm test
   ```

## Contributing

  Contributions are welcome! Please adhere to the following guidelines:

  1. Fork the repository.
  2. Create a new branch for your feature or bug fix.
  3. Implement your changes, ensuring adherence to the project's coding standards.
  4. Write tests to cover new or modified functionality.
  5. Run all tests to confirm they pass.
  6. Submit a pull request with a detailed description of your changes.


## License

  This project is licensed under the MIT License. See the LICENSE file for more details.

## Acknowledgements

  Special thanks to the open-source community for providing the tools and libraries that made this project possible.















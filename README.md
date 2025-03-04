# Trialx
## Overview

## Getting Started

To start the project, follow these steps:

1. Clone the repository:
    ```sh
    git clone 
    ```
2. Navigate to the project directory:
    ```sh
    cd your-repo
    ```
3. Install the dependencies:
    ```sh
    npm install
    ```
4. Start the development server:
    ```sh
    npm run dev
    ```

## Features

- **Memoization**: Implemented `React.memo` to optimize performance by memoizing required variables.
- **Lazy Loading**: Used `React.lazy` and `Suspense` for lazy loading components, improving the initial load time.
- **Reusable Components**: Created reusable `Table` and `Card` components that receive data through props. All tabs can use the same `Card` and `Table` components even though the data structure is different, ensuring reusability and efficiency.
- **Data Management**: Data is stored in the `dummyData.tsx` file. Modify this file for data change purposes.
- **Port**: 5173.

# React application containing a page with a table and a modal window

[DEMO LINK](https://yegorkochetkov.github.io/redux-toolkit_react-hook-form/)

## Description
[Figma](https://www.figma.com/file/tJdorwZjlCUbZjX5XKfR6L/Test-(Copy)?node-id=2%3A20)

The main page of the application contains a table with saved data and buttons.
The table should display the data stored in the store (use @reduxjs/toolkit to store and manage the data).
The table should display the data stored in the store (use @reduxjs/toolkit to store and manage the data).
If the table is wider than the screen, provide a scroll, while the buttons on top of the table must be fixed.
By clicking on the “Delete” icon in a table row, a row in the table is deleted.
By clicking on the “Add” button, a step-by-step modal window for entering data should be displayed.

### Additional
Fields marked with * must be required.
The “Email” field from the third step should be email.
Displaying validation errors is up to you.
The mobile version is not required.

### Component with conversion
- One currency must have its own input and select.
- a separate input + select for the first currency, and a separate input + select for the second currency
- input is given a number to indicate the number of units to convert
- select must contain at least three currencies - UAH, USD, EUR.
- conversion must occur in both directions
- when changing the value in the first currency, the value in the second must be recalculated, and vice versa
- when changing the currency in each select, the conversion of both currencies should be recalculated correctly

#### To implement use
The modal window can be implemented independently or using react-modal.
Implement the form using react-hook-form.
To create a react application, you can use react-create-app or your own builders.
It is forbidden to use third-party modules (except those mentioned above).
The application must be typed using typescript.
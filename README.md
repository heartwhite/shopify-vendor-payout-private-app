# Vendor payout app

- this app accepts shop name, api_key and api_secret from private apps.
  you can pick date range from date picker. (if date picker doesnt appear you can use the same format with placeholder on date input field)

- build folder served by app.js.
  folders client & server includes actual app. after any changes in client "npm run build" first and copy=>paste this build folder again in main directory and it will be served.

- this is a non-professional app. open for any comment.

on click SUBMIT, it fetches all fulfilled orders with sold products, if data comes without problems, SUBMIT button turns "Show Results". when you click, app sorts all sold products by vendor names, shows total payouts for vendors. \*only fulfilled products count, refunded products doesnt count.
you can click on vendor names and download list of products belongs the vendor.

import React, { useState } from 'react';
import axios from 'axios';
import VendorCard from './VendorCard';
import baseUrl from '../baseUrl'

export default () => {
  const [startDate, setStartDate] = useState();
  const [endDate, setEndDate] = useState();
  const [dateChange, setDateChange] = useState(false);
  const [apiKey, setApiKey] = useState(localStorage.getItem('shopify-api-password') || '');
  const [apiPassword, setApiPassword] = useState(localStorage.getItem('shopify-api-key') || '');
  const [shopName, setShopName] = useState(localStorage.getItem('shopify-shop-name') || '');
  const [orders, setOrders] = useState([]);
  const [vendors, setVendors] = useState({ vendors: [] });
  const [download, setDownload] = useState(false);
  const [generalCSV, setGeneralCSV] = useState(null);
  const PostBody = {
    shopName: shopName,
    apiKey: apiKey,
    password: apiPassword,
    startDate: startDate,
    endDate: endDate,
  };

  async function getOrders() {
    const res = await axios.post(`${baseUrl}/orders`, PostBody);
    console.log('`${baseUrl}/orders`', `${baseUrl}/orders`)
    setOrders(res.data);
    setDateChange(false);
  }
  function clearLocalStorage() {
    setApiPassword('');
    setApiKey('');
    setShopName('');
    localStorage.clear();
  }
  function handelLoginInputChange(e) {
    switch (e.target.id) {
      case 'api-password':
        setApiPassword(e.target.value);
        localStorage.setItem('shopify-api-password', e.target.value);
        break;
      case 'api-key':
        setApiKey(e.target.value);
        localStorage.setItem('shopify-api-key', e.target.value);

        break;
      case 'shop-name':
        setShopName(e.target.value);
        localStorage.setItem('shopify-shop-name', e.target.value);

        break;
    }
  }
  function handelStartDateChange(e) {
    setStartDate(e.target.value);
    setDateChange(true);
  }
  function handelEndDateChange(e) {
    setEndDate(e.target.value);
    setDateChange(true);
  }

  function sanitiseData(orders) {
    const soldItems = [];
    orders.forEach((order) => {
      order.line_items[0].shipping = order.shipping_lines[0].discounted_price;
      order.line_items.forEach((product) => {
        product.orderNr = order.name;
        product.orderPlacedAt = order.created_at;
        product.orderFullfillment = order.fulfillment_status;
        soldItems.push(product);
      });
    });
    return soldItems;
  }
  function filterAndGroupVendors(clearData) {
    let vendors = {};
    let shippingFees = {
      name: 'Shipping',
      grossSale: 0,
      rood15: 0,
      amountToBePaid: 0,
      soldItems: [],
    };

    clearData.forEach((e) => {
      const order = e.orderNr;
      const vendorModal = {
        name: e.vendor,
        soldItems: [],
        itemCount: 0,
        grossSale: 0,
        amountToBePaid: 0,
        rood15: 0,
      };
      if (e.orderFullfillment === 'fulfilled' && e.shipping) {
        shippingFees.soldItems.push({
          orderNr: order,
          price: Number(e.shipping),
          quantity: 1,
          orderPlacedAt: e.orderDate,
        });
      }
      if (e.fulfillment_status === 'fulfilled') {
        if (e.vendor) {
          if (!vendors[e.vendor]) {
            if (e.vendor === 'Tip Jar') {
              vendors[e.vendor] = { ...vendorModal, name: 'Same Day Delivery' };
            } else {
              vendors[e.vendor] = vendorModal;
            }
          }
          vendors[e.vendor].soldItems.push({
            name: e.name,
            price: e.price,
            quantity: e.quantity,
            orderNr: e.orderNr,
            orderPlacedAt: e.orderPlacedAt,
          });
        }
      } else if (e.name === 'Tip') {
        if (!vendors.Tip) {
          vendors.Tip = { ...vendorModal, name: 'Tip' };
        }
        vendors.Tip.soldItems.push({
          name: e.name,
          price: e.price,
          quantity: e.quantity,
          orderNr: e.orderNr,
        });
      }
    });
    vendors.Shipping = shippingFees;
    return vendors;
  }

  function getFormattedDate(fullDate) {
    var date = new Date(fullDate);
    var dd = date.getDate();

    var mm = date.getMonth() + 1;
    var yyyy = date.getFullYear();
    if (dd < 10) {
      dd = '0' + dd;
    }

    if (mm < 10) {
      mm = '0' + mm;
    }

    date = mm + '-' + dd + '-' + yyyy;
    return date;
  }

  function takePercentage(amount, percentage) {
    return Number(((amount / 100) * percentage).toFixed(2));
  }
  function roundNumber(num) {
    return Number(num.toFixed(2));
  }

  function calculateTotals(vendors) {
    let totalGross = 0;
    let totalToPay = 0;
    let totalRood15 = 0;
    for (let vendor in vendors) {
      let totalSold = 0;

      vendors[vendor].soldItems.forEach((i) => {
        let amount = i.price * i.quantity;
        vendors[vendor].itemCount += i.quantity;
        totalSold += amount;
        vendors[vendor].grossSale += amount;
        if (i.orderPlacedAt) {
          i.orderPlacedAt = i.orderPlacedAt.slice(0, 10);
        }
        if (
          vendor !== 'Tip Jar' &&
          vendor !== 'Tip' &&
          getFormattedDate(i.orderPlacedAt) < getFormattedDate('2020-06-08 00:00:01 +0200')
        ) {
          let rood15 = takePercentage(amount, 15);
          i.rood15 = rood15;
          vendors[vendor].amountToBePaid += amount - rood15;
          vendors[vendor].rood15 += rood15;
        } else {
          vendors[vendor].amountToBePaid += amount;
        }
      });
      vendors[vendor].grossSale = roundNumber(vendors[vendor].grossSale);
      vendors[vendor].amountToBePaid = roundNumber(vendors[vendor].amountToBePaid);
      vendors[vendor].rood15 = roundNumber(vendors[vendor].rood15);
      vendors[vendor].soldItems.push({
        name: 'TOTAL',
        price: roundNumber(totalSold),
        rood15: vendors[vendor].rood15,
      });

      if (vendor !== 'Tip Jar') {
        totalToPay += vendors[vendor].amountToBePaid;
      }
      totalGross += vendors[vendor].grossSale;
      totalRood15 += vendors[vendor].rood15;
    }
    vendors.totalGross = roundNumber(totalGross);

    vendors.totalToPay = roundNumber(totalToPay);
    vendors.totalRood15 = roundNumber(totalRood15);

    return vendors;
  }

  async function getCsvFile(dataArray, name) {
    const res = await axios.post(`${baseUrl}/upload`, {
      dataArray,
      name,
    });
    if (res.data === 'it is ok') {
      setDownload({ name, url: `${baseUrl}/${name}.csv` });
    }
  }

  async function getGeneralCsvFile(dataArray) {
    let name;
    let startDate = getFormattedDate(dataArray[0].soldItems[0].orderPlacedAt);
    let endDate = getFormattedDate(dataArray[0].soldItems[0].orderPlacedAt);
    const newArr = dataArray.map((vendor) => {
      if (vendor.soldItems && vendor.name !== 'Tip Jar') {
        vendor.soldItems.forEach((item) => {
          if (item.quantity) {
            if (getFormattedDate(item.orderPlacedAt) > endDate) {
              endDate = getFormattedDate(item.orderPlacedAt);
            } else if (getFormattedDate(item.orderPlacedAt) < startDate) {
              startDate = getFormattedDate(item.orderPlacedAt);
            }
          }
        });

        name = `${startDate.replace(/\//g, '')}-${endDate.replace(/\//g, '')}generalCSV`;
        return {
          name: vendor.name,
          period: `${startDate}-${endDate}`,
          'Total Quantity': vendor.itemCount,
          'Gross Sale': vendor.grossSale,
          Payout: vendor.amountToBePaid,
          Roodkappje: vendor.rood15,
        };
      } else {
        console.log('this is a problem with general csv preparing function');
        return null;
      }
    });
    setGeneralCSV(name);

    getCsvFile(newArr, name);
  }
  function onShowClick() {
    if (orders[0]) {
      const clearData = sanitiseData(orders);
      let vendors = filterAndGroupVendors(clearData);
      vendors = calculateTotals(vendors);
      const vendorsArr = [];
      for (let i in vendors) {
        if (i !== 'totalGross' && i !== 'totalToPay' && i !== 'totalRood15') {
          vendorsArr.push(vendors[i]);
        }
      }

      vendors = {
        vendors: vendorsArr,
        totalGross: vendors.totalGross,
        totalToPay: vendors.totalToPay,
        totalRood15: vendors.totalRood15,
      };
      setVendors(vendors);
    }
  }
  return (
    <div>
      <div className='dropField'>
        <div className='upload-section'>
          <div className='date-input'>
            <section>
              <label htmlFor='shop-name'>Shopify Store Name </label>
              <input
                type='text'
                placeholder='your shop name'
                id='shop-name'
                onChange={handelLoginInputChange}
                value={shopName}
              />
            </section>
            <section>
              <label htmlFor='api-key'>Private App API Key </label>
              <input
                type='text'
                placeholder='API Key'
                id='api-key'
                onChange={handelLoginInputChange}
                value={apiKey}
              />
            </section>
            <section>
              <label htmlFor='api-password'>Private App API Password </label>
              <input
                type='text'
                placeholder='API Password'
                // value={apiPassword}
                id='api-password'
                onChange={handelLoginInputChange}
                value={apiPassword}
              />
            </section>
          </div>
          <button onClick={clearLocalStorage}>Delete credentials from local storage</button>
        </div>
        <div className='upload-section'>
          <h4>Pick Date Range</h4>

          <div className='date-input'>
            <section>
              <label htmlFor='start-date'>Start Date </label>
              <input
                type='datetime-local'
                placeholder='--/--/2020, 00:00'
                id='start-date'
                name='ali'
                onChange={handelStartDateChange}
              />
            </section>
            <section>
              <label htmlFor='end-date'>End Date </label>
              <input
                type='datetime-local'
                placeholder='--/--/2020, 23:59'
                id='end-date'
                onChange={handelEndDateChange}
              />
            </section>

            {vendors.vendors[0] &&
              (download.name !== generalCSV ? (
                <button onClick={() => getGeneralCsvFile(vendors.vendors)}>
                  Prepare Vendors CSV
                </button>
              ) : (
                <a href={download.url}>Download Csv</a>
              ))}
          </div>
          <div className='upload-input'>
            {!orders[0] || dateChange ? (
              <button className='submit' onClick={getOrders}>
                SUBMIT
              </button>
            ) : (
              <button className='submit' onClick={onShowClick}>
                Show Results
              </button>
            )}
          </div>
        </div>
        <div className='vendor-card-container'>
          {vendors.vendors[0] &&
            vendors.vendors.map((v) => (
              <VendorCard key={v.name} v={v} getCsvFile={getCsvFile} download={download} />
            ))}
        </div>
      </div>
    </div>
  );
};

import React from 'react';

export default ({ v, getCsvFile, download }) => {
  let own = false;
  if (v.name === 'Same Day Delivery' || v.name === 'Tip' || v.name === 'Shipping') {
    own = true;
  }
  return (
    <div key={v.name} className={`vendor-card ${own && 'own'}`}>
      <div>
        <label>{v.name} :</label>
        <p> {v.amountToBePaid}</p>
      </div>
      {v.soldItems && (
        <div>
          {download.name === v.name ? (
            <button>
              <a href={download.url}>Download Csv</a>
            </button>
          ) : (
            <button onClick={() => getCsvFile(v.soldItems, v.name)}>
              {' '}
              <p>{v.name}.csv</p>
            </button>
          )}
        </div>
      )}
    </div>
  );
};

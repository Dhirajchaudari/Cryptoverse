import React from "react";
// import { useGetExchangesQuery } from '../services/cryptoApi'

const Exchanges = () => {
  // const { data, isFetching} = useGetExchangesQuery();
  // console.log(data)

  return (
    <div>
      <p>
        Sorry ! You cannot access exchange endpoint without api(/exchange)
        subscription.
      </p>
    </div>
  );
};

export default Exchanges;

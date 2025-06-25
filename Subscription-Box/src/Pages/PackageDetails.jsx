import React, { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router";
import PackageCard from "../Components/SubscriptionServices/PackageCard";

const PackageDetails = () => {
   const { id } = useParams();
   const allPackageData = useLoaderData();

   const [packageData, setPackageData] = useState({});
   const [isAvailable, setIsAvailable] = useState(false);

   useEffect(() => {
      const data = allPackageData.find((item) => item.id === Number(id));
      setPackageData(data);
      setIsAvailable(true);
   }, [allPackageData, id]);

   return (
      <div>
         {isAvailable && (
            <PackageCard id={id} packageData={packageData}></PackageCard>
         )}
      </div>
   );
};

export default PackageDetails;

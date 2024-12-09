import React from "react";
import Footerimg from "@/components/Footerimg";
const Comparison = () => {
  const products = [
    {
      name: "Asgaard Sofa",
      price: "Rs. 250,000.00",
      rating: 4.7,
      reviews: 204,
      specs: {
        "Sales Package": "1 sectional sofa",
        "Model Number": "TFCBLGRBL6SRHS",
        "Secondary Material": "Solid Wood",
        "Configuration": "L-shaped",
        "Upholstery Material": "Fabric + Cotton",
        "Maximum Load Capacity": "280 KG",
        Dimensions: {
          Width: "265.32 cm",
          Height: "76 cm",
          Depth: "167.76 cm",
        },
        Warranty: {
          "Warranty Summary": "1 Year Manufacturing Warranty",
          "Warranty Period": "1 Year",
        },
      },
    },
    {
      name: "Outdoor Sofa Set",
      price: "Rs. 224,000.00",
      rating: 4.2,
      reviews: 145,
      specs: {
        "Sales Package": "1 Three Seater, 2 Single Seater",
        "Model Number": "DTUBLGRBL568",
        "Secondary Material": "Solid Wood",
        "Configuration": "L-shaped",
        "Upholstery Material": "Fabric + Cotton",
        "Maximum Load Capacity": "300 KG",
        Dimensions: {
          Width: "265.32 cm",
          Height: "76 cm",
          Depth: "167.76 cm",
        },
        Warranty: {
          "Warranty Summary": "1.2 Year Manufacturing Warranty",
          "Warranty Period": "3 Months",
        },
      },
    },
  ];

  return (

    <div>
      <img src="comaprison.png" />
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold text-center mb-8">Product Comparison</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {products.map((product, index) => (
          <div
            key={index}
            className="border rounded-lg shadow-lg p-4 hover:shadow-xl"
          >
            <h2 className="text-lg font-semibold mb-2">{product.name}</h2>
            <p className="text-gray-500">{product.price}</p>
            <p className="text-yellow-500">{`⭐ ${product.rating} (${product.reviews} reviews)`}</p>
            <ul className="mt-4 space-y-2">
              {Object.entries(product.specs).map(([key, value], idx) => (
                <li key={idx}>
                  <strong>{key}:</strong> {typeof value === "object" ? JSON.stringify(value) : value}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
    <br/>
    <Footerimg/>
    </div>
  );
};

export default Comparison;

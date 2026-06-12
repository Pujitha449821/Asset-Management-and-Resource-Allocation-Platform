import { useEffect, useState } from "react";
import API from "../services/api";

function AssetList() {
  const [assets, setAssets] = useState([]);

  useEffect(() => {
    fetchAssets();
  }, []);

  const fetchAssets = async () => {
    try {
      const res = await API.get("/assets");
      setAssets(res.data.assets);
    } catch (error) {
      console.error(error);
      alert("Failed to load assets");
    }
  };

  return (
    <div>
      <h2>Asset List</h2>

      {assets.map((asset) => (
        <div
          key={asset._id}
          style={{
            border: "1px solid black",
            margin: "10px",
            padding: "10px",
          }}
        >
          <h3>{asset.name}</h3>
          <p>ID: {asset._id}</p>
          <p>Category: {asset.category}</p>
          <p>Description: {asset.description}</p>
          <p>Available: {asset.availableQuantity}</p>
          <p>Status: {asset.status}</p>
        </div>
      ))}
    </div>
  );
}

export default AssetList;
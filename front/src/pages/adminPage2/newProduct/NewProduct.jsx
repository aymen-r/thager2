import { useContext, useState } from "react";
import "./newProduct.css";
import { Store } from "../../../Store";
import axios from "axios";
//  name: { type: String, required: true, unique: true },
//     watts: { type: String, required: true },
//     image: { type: String, required: true },
//     brand: { type: String, required: true },
//     category: { type: String, required: true },
//     description: { type: String },
//     type: { type: String, required: true },
//     tag: { type: String, required: true },
//     price: { type: Number },

export default function NewProduct() {
  const { state } = useContext(Store);
  const { userInfo } = state;

  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [brand, setBrand] = useState("");
  const [multipleFiles, setMultipleFiles] = useState("");
  const [category, setCategory] = useState("");
  const [type, setType] = useState("");
  const [tag, setTag] = useState("");
  const [description, setDescription] = useState("");
  const [watts, setWatts] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("name", name);
    formData.append("price", price);
    formData.append("brand", brand);
    formData.append("category", category);
    formData.append("type", type);
    formData.append("tag", tag);
    formData.append("watts", watts);
    formData.append("description", description);
    for (let i = 0; i < multipleFiles.length; i++) {
      formData.append("images", multipleFiles[i]);
    }
    await axios.post(`/api/products/newProduct`, formData, {
      headers: { Authorization: `Bearer ${userInfo.token}` },
    });
    console.log(formData);
  };
  return (
    <div className="newProduct">
      <h1 className="addProductTitle">New Product</h1>
      <form className="addProductForm" onSubmit={handleSubmit}>
        <div className="left-form">
          <div className="addProductItem">
            <label>Image</label>
            <input
              type="file"
              id="file"
              onChange={(e) => setMultipleFiles(e.target.files)}
              multiple
            />
          </div>
          <div className="addProductItem">
            <label>Name</label>
            <input
              type="text"
              placeholder="product name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div className="addProductItem">
            <label>Price</label>
            <input
              type="number"
              placeholder="product price"
              value={price}
              onChange={(e) => setPrice(e.target.value)}
            />
          </div>
          <div className="addProductItem">
            <label>Brand</label>
            <input
              type="text"
              placeholder="product brand"
              value={brand}
              onChange={(e) => setBrand(e.target.value)}
            />
          </div>
          <div className="addProductItem">
            <label>Description</label>
            <textarea
              cols="30"
              rows="10"
              placeholder="product description"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            ></textarea>
          </div>{" "}
        </div>
        <div className="right-from">
          <div className="addProductItem">
            <label>Power</label>
            <input
              type="text"
              placeholder="product power"
              value={watts}
              onChange={(e) => setWatts(e.target.value)}
            />
          </div>
          <div className="addProductItem">
            <label>Category</label>
            <select
              name="category"
              value={category}
              onChange={(e) => setCategory(e.target.value)}
            >
              <option value="panels">Solar Panels</option>
              <option value="inverters">Solar Inverters</option>
              <option value="batteries">Solar Batteries</option>
              <option value="street_lights">Solar Street Lights</option>
              <option value="combiner_box">PV Combiner Box & Cables</option>
              <option value="accessories">Structure & fixing</option>
            </select>
          </div>
          <div className="addProductItem">
            <label>Type</label>
            <select
              name="type"
              value={type}
              onChange={(e) => setType(e.target.value)}
            >
              <option disabled value="">
                product type
              </option>
              <option disabled value="">
                *********Panels*******{" "}
              </option>
              <option value="Half Cell">Half Cell</option>
              <option value="Bifacial">Bifacial</option>
              <option disabled value="">
                *********inverters*******{" "}
              </option>
              <option value="Off-Grid">Off-Grid</option>
              <option value="On-Grid">On-Grid</option>
              <option value="Hybrid">Hybrid</option>
              <option value="Pump">Pump</option>
              <option disabled value="">
                *********batteries*******{" "}
              </option>
              <option value="Lithium battery">Lithium battery</option>
              <option value="Gel battery">Gel battery</option>
              <option value="Tubular battery">Tubular battery</option>

              <option disabled value="">
                *********street lights*******{" "}
              </option>
              <option value="800 Watt">800 Watt</option>
              <option value="600 Watt big">600 Watt big</option>
              <option value="600 Watt small">600 Watt small</option>
              <option value="600 Watt">600 Watt</option>
              <option disabled value="">
                *********combiner box*******{" "}
              </option>
              <option value="2 string">2 string</option>
              <option value="4 string">4 string</option>
              <option value="6 string">6 string</option>
              <option value="8 string">8 string</option>
              <option value="10 string">10 string</option>
              <option value="12 string">12 string</option>
              <option disabled value="">
                *********Structure & fixing*******{" "}
              </option>
              <option value="Middle Clamp">Middle Clamp</option>
              <option value="End Clamp">End Clamp</option>
              <option value="Main Beam">Main Beam</option>
              <option value="Hinged Join">Hinged Join</option>
              <option value="Hand Crimping tools">Hand Crimping tools</option>
              <option value="MC4 connector">MC4 connector</option>
            </select>
          </div>
          <div className="addProductItem">
            <label>Tag</label>
            <input
              type="text"
              value={tag}
              onChange={(e) => setTag(e.target.value)}
              placeholder="product tag"
            />
            {/* <select
              name="category"
              value={tag}
              onChange={(e) => setTag(e.target.value)}
            >
              <option value="Tier one">Tier one</option>
              <option value="Tokkma">Tokkma</option>
              <option value="Jasaki">Jasaki</option>
              <option value="SERAPHIM">SERAPHIM</option>
              <option value="Must">Must</option>
              <option value="Veichi">Veichi</option>
            </select> */}
          </div>
          <button className="addProductButton">Create</button>
        </div>
      </form>
    </div>
  );
}

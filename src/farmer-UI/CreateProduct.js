import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { productsCreate } from '../features/productsSlice';
import './Farmer.css';

export default function CreateProduct() {
  const dispatch = useDispatch();

  const [productImg, setProductImg] = useState('');
  const [name, setName] = useState('');
  const [price, setPrice] = useState('');
  const [category, setCategory] = useState('');
  const [measurement, setMeasurement] = useState('');
  const [info, setInfo] = useState('');


  console.log(productImg);

  const handleProductImageUpload = (e) => {
    const file = e.target.files[0];
    transformFile(file);
  };

  const transformFile = (file) => {
    const reader = new FileReader();

    if (file) {
      reader.readAsDataURL(file);
      reader.onloadend = () => {
        setProductImg(reader.result);
      };
    } else {
      setProductImg('');
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(productsCreate({
      name,
      price,
      category,
      measurement,
      info,
      image: productImg,
    }));
  };
// 
  return (
    <div className="create-product">
      <form className="styled-form" onSubmit={handleSubmit}>
        <h4 classname="cp">Create a product</h4>
        <input type="file" accept="image/*" onChange={handleProductImageUpload} required />
        <select onChange={(e) => setCategory(e.target.value)} required>
          <option value="">Select Category</option>
          <option value="Wholesale">Wholesale</option>
          <option value="Retail">Retail</option>
        </select>
        <select onChange={(e) => setMeasurement(e.target.value)} required>
          <option value="">Select Measurement</option>
          <option value="Single">Single</option>
          <option value="Bale">Bale</option>
          <option value="Bunch">Bunch</option>
          <option value="Kilogram">Kilogram</option>
          <option value="other">Other</option>

        </select>
        <input type="text" required placeholder="Name" onChange={(e) => setName(e.target.value)} />
        <input type="text" required placeholder="Price in kshs" onChange={(e) => setPrice(e.target.value)} />
        <input type="text"  placeholder="Additional information on product" onChange={(e) => setInfo(e.target.value)} />
        <button className="create-submit" type="submit">Submit</button>
      </form>
      <div className="image-preview">
        {productImg ? (
          <div>
            <img src={productImg} alt="uploaded product" />
          </div>
        ) : (
          <p>Image preview will appear here</p>
        )}
      </div>
    </div>
  );
}

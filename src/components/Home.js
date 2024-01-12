import React, { useEffect, useState } from "react";
import Cars from "../shared/carsData.json";

export default function Home() {
  const allCars = Cars.data;
  const [filterdCars, setFilterdCars] = useState(allCars);

  const onFilterCarBrend = ({ brand }) => {
    const filterdCar = allCars.filter((car) => car.brand === brand);
    setFilterdCars(filterdCar);
  };

  const onClear = () => {
    setFilterdCars(allCars);
  };

  return (
    <>
      <section id="content">
        <div className="container">
          <div className="row holder-cars">
            <div className="col-12">
              <h1>Cars: </h1>
              <div className="holder-buttons">
                <span onClick={() => onFilterCarBrend({ brand: "Audi" })}>
                  Audi
                </span>
                <span onClick={() => onFilterCarBrend({ brand: "Bmw" })}>
                  Bmw
                </span>
                <span onClick={() => onFilterCarBrend({ brand: "Mercedes" })}>
                  Mercedes
                </span>
                <span onClick={onClear}>All Brands</span>
              </div>
            </div>
            <div className="col-12">
              <div className="row">
                {filterdCars.map((car) => (
                  <div className="col-12 col-md-6 col-lg-4" key={car.id}>
                    <div className="holder-box-cars">
                      <div className="holder-car-img">
                        <img src={car.img} alt="Img of car" />
                      </div>
                      <div className="holder-car-info">
                        <h5>Brand: {car.brand}</h5>
                        <p className="car-model">Model: {car.model}</p>
                        <p>Km: {car.km}km</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

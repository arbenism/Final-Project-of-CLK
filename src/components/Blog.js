import React from "react";
import peopleData from "../shared/peopleData";
const Blog = () => {
  return (
    <>
      <section id="content">
        <div className="container">
          <div className="row">
            <h1>Our Team:</h1>
            {peopleData.map((person) => (
              <div className="col-12 col-md-6 col-lg-4" key={person.id}>
                <div className="info-team">
                  <img
                    // src="https://via.placeholder.com/640x380"
                    src={person.img}
                    alt="sensdipsesposhfaqet"
                  />
                  <div className="holder-info">
                    <h4>
                      {person.name} {person.surname}
                    </h4>
                    <p>Age: {person.age}</p>
                    <a href={`mailto:${person.email}`} className="email-team">
                      {person.email}
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};
export default Blog;

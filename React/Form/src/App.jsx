import { useState } from "react";
import "./App.css";

function App() {

  const [formData, setFormData] = useState({
    firstName: "", lastName: "", email: "", country: "India",
    streetAddress: "", city: "", state: "", postalCode: "",
    comments: false, candidates: false, offers: false,
    pushNotification: ""
  })

  function changeHandler(event) {
    const { name, value, checked, type } = event.target;
    setFormData((prev) => ({ ...prev, [name]: type === "checkbox" ? checked : value }))
  }

  function submitHandler(event){
    event.preventDefault();

    console.log("Finally printing the value of form data");
    console.log(formData);

  }
  

  return (

    <div className="flex flex-col items-center">
      <form onSubmit={submitHandler}>

        <label htmlFor="firstName">First Name</label>
        <br />
        <input
          type="text"
          name="firstName"
          id="firstName"
          placeholder="Nayan"
          value={formData.firstName}
          onChange={changeHandler}

          className="outline"

        />

        <br />

        <label htmlFor="lastName">Last Name</label>
        <br />
        <input
          type="text"
          name="lastName"
          id="lastName"
          placeholder="Patidar"
          value={formData.lastName}
          onChange={changeHandler}

          className="outline"

        />

        <br />

        <label htmlFor="email">Email</label>
        <br />
        <input
          type="email"
          name="email"
          id="email"
          placeholder="nayan@gmail.com"
          value={formData.email}
          onChange={changeHandler}

          className="outline"

        />

        <br />

        <label htmlFor="country">Country</label>
        <br />
        <select
          id="country"
          name="country"
          value={formData.country}
          onChange={changeHandler}
        >
          <option>India</option>
          <option>United States</option>
          <option>Canada</option>
          <option>Maxico</option>
        </select>

        <br />

        <label htmlFor="streetAddress">Street Address</label>
        <br />
        <input
          type="text"
          name="streetAddress"
          id="streetAddress"
          placeholder="B-25C"
          value={formData.streetAddress}
          onChange={changeHandler}
          className="outline"

        />

        <br />

        <label htmlFor="city">City</label>
        <br />
        <input
          type="text"
          name="city"
          id="city"
          placeholder="B-25C"
          value={formData.city}
          onChange={changeHandler}
          className="outline"

        />

        <br />

        <label htmlFor="state">State</label>
        <br />
        <input
          type="text"
          name="state"
          id="state"
          placeholder="Bihar"
          value={formData.state}
          onChange={changeHandler}
          className="outline"

        />

        <br />

        <label htmlFor="postalCode">Postal Code</label>
        <br />
        <input
          type="text"
          name="postalCode"
          id="postalCode"
          placeholder="110077"
          value={formData.postalCode}
          onChange={changeHandler}
          className="outline"

        />

        <br />
        <br/>

        <fieldset>
          <legend>By Email</legend>

          <div className="flex">
            <input type="checkbox"
              id="comments"
              name="comments"
              checked={formData.comments}
              onChange={changeHandler}

            />

            <div>
              <label htmlFor="comments">Comments</label>
              <p>Get notified when someone posts a comment on a posting.</p>

            </div>


          </div>

          <div className="flex">
            <input type="checkbox"
              id="candidates"
              name="candidates"
              checked={formData.candidates}
              onChange={changeHandler}

            />

            <div>
              <label htmlFor="candidates">Candidates</label>
              <p>Get notified when a Candidate applies for a job</p>

            </div>


          </div>

          <div className="flex">
            <input type="checkbox"
              id="offers"
              name="offers"
              checked={formData.offers}
              onChange={changeHandler}

            />

            <div>
              <label htmlFor="offers">Offers</label>
              <p>Get notified whan a candidate accepts or rejects an offer</p>
            </div>


          </div>




        </fieldset>
 
        <br />


        <fieldset>
          <legend>Push Notifications</legend>
          <p>These are delivered via SMS to your mobile phone.</p>

          <input
            type="radio"
            id="pushEverything"
            name="pushNotification"
            value="Everything"
            onChange={changeHandler}
          />

          <label htmlFor="pushEverything">Everything</label>
          <br />
          <input
            type="radio"
            id="pushEmail"
            name="pushNotification"
            value="Same as email"
            onChange={changeHandler}
          />

          <label htmlFor="pushEmail">Same as email</label>
          <br />

          <input
            type="radio"
            id="pushNothing"
            name="pushNotification"
            value="No Push Notifications"
            onChange={changeHandler}
          />

          <label htmlFor="pushNothing">Nothing</label>

        </fieldset>

<button 
className="bg-blue-500 text-white font-bold round py-2 px-4"
>
Save</button>


      </form>
    </div>
  );
}

export default App;

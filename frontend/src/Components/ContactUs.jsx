import poseCarrelage from "../../assets/projets/pose-carrelage-vector.png";
import Button from "../Components/Button";

export default function ContactUs() {

    return (
           <section>
        <div className="contactUs">
          <div className="container">
            <p className="title">contact us</p>
            <h2>
              Discuss our services or
              <br />
              make an appointment
            </h2>
            <br />
            <p className="text">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Distinctio quae aperiam,
              <br />
              ducimus facere, inventore ut necessitatibus libero sit cupiditate
              laboriosam
              <br />
              voluptatibus magni velit voluptatem.
            </p>
            <div className="btns">
              <Button
                title="Nous joindre par téléphone"
                path="tel:+33298077047"
                extraClass="btn-secondary"
              />
              <Button
                title="Make An Appointment"
                path="/contact"
                extraClass="btn-border"
              />
            </div>
          </div>
          <img src={poseCarrelage} alt="" />
        </div>
      </section>

    );
}

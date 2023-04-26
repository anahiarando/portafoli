import Layout from "../components/Layout";
import Link from "next/link";

import { skills, experiences, projects } from "../profile";

function hab() {
  return (
    <Layout>
     {/* Second section */}

     <section className="row ">
      <div className="col-md-4 py-2 container p-2">
        <div className="card bg-light animate__animated animate__fadeInLeft">
          <div className="card-body">
            <h1>Habilidades</h1>

            {/* Skill Progress  */}
            {skills.map(({ skill, percentage }, i) => (
              <div className="py-3" key={i}>
                <h5>{skill}</h5>
                <div className="progress ">
                  <div
                    className="progress-bar"
                    role="progressbar"
                    style={{ width: `${percentage}%` }}
                    aria-valuenow="50"
                    aria-valuemin="0"
                    aria-valuemax="100"
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      
    </section>
    </Layout>
  );
}
export default hab;
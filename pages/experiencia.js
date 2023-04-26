import Layout from "../components/Layout";
import Link from "next/link";

import { experiences} from "../profile";

const Index = () => (
  
  <Layout>
    

    {/* Second section */}

    <section className="row">
      
      <div className="col-md-8 py-2 container p-2">
        {/* Experience */}
        <div className="card bg-light animate__animated animate__fadeInRight">
          <div className="card-body">
            <h1>Experiencias</h1>
           
            <ul>
              {/* List Item Experience */}
              
              {experiences.map(({ title, from, to, description}, index) => (
                <li key={index}>
                  <h3>{title}</h3>
                  <h5>
                    {from} {to ? `- ${to}` : "- current"}
                  </h5>
                  <p>
                    {description}
                  </p>
                </li>
              ))}
            </ul>
            
          </div>
        </div>
      </div>
    </section>
    
  </Layout>
);

export default Index;
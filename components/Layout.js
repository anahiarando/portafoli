import { useEffect } from "react";
import { useRouter } from "next/router";

import PropTypes from "prop-types";
import NProgress from "nprogress";
import nProgress from "nprogress";
import classNames from "classnames";
import BasicExample from "./Navbar";
import { Navbar } from "react-bootstrap";

const Layout = ({ children, title, footer = true, dark = false }) => {
  const router = useRouter();

  useEffect(() => {
    const handleRouteChange = (url) => {
      console.log(url);
      NProgress.start();
    };

    router.events.on("routeChangeStart", handleRouteChange);

    router.events.on("routeChangeComplete", () => NProgress.done());

    router.events.on("routeChangeError", () => nProgress.done());

    return () => {
      router.events.off("routeChangeStart", handleRouteChange);
    };
  }, []);

  return (
    
    <div className={classNames({ "bg-dark": dark, "bg-light": !dark })}>
      
      <BasicExample></BasicExample>
      <main className="container py-4">
        {/* Title */}
        {title && (
          <h1 className={classNames("text-center", { "text-light": dark })}>
            {title}
          </h1>
        )}

        {/* Content */}
        {children}
      </main>

      {footer && (
        <footer className="bg-dark text-light text-right">
          <div className="container p-4">
               <h2 className="text-center">&copy;Anahi Arando Portfolio</h2>
              <p className="text-center"> 2000 - {new Date().getFullYear()}</p>
              <a href='https://wa.me/qr/7VF6ZBEJRY2ZN1' className="py-4">Whatssap<br/> </a>
              <a href='https://www.facebook.com/anahi.arandochoque?mibextid=ZbWKwL'>   facebook<br/> </a>
              <a href='asach1807@gmail.com'>   Gmail<br/></a>
              <a href='https://github.com/anahiarando/portafoli.git'> Repositorio</a>
            
          </div>
          
        </footer>
      )}
    </div>
  );
};

Layout.proptypes = {
  children: PropTypes.node,
  title: PropTypes.string,
  footer: PropTypes.bool,
};

export default Layout;

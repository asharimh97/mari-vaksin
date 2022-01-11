import { any } from "prop-types";

function Container({ children }) {
  return (
    <section className="container">
      {children}
      <style jsx="true">{`
        .container {
          display: flex;
          flex-direction: column;
          margin: auto;
          padding: 32px 16px;
          width: 100%;
        }
        @media (min-width: 640px) {
          .container {
            padding: 32px;
          }
        }

        @media (min-width: 768px) {
          .container {
            width: 640px;
          }
        }

        @media (min-width: 1024px) {
          .container {
            width: 750px;
          }
        }
      `}</style>
    </section>
  );
}

Container.propTypes = {
  children: any,
};

export default Container;

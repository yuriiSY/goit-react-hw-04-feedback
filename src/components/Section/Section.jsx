const Section = ({ title, children }) => {
  return (
    <section>
      <h4>{title}</h4>
      {children}
    </section>
  );
};

export default Section;

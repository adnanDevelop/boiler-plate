import React from "react";
import Faq from "react-faq-component";

const faq = () => {
  const data = {
    title: "FAQ (How it works)",
    rows: [
      {
        title: "Lorem ipsum dolor sit amet,",
        content: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. In sed tempor sem. Aenean vel turpis feugiat,.`,
      },
    ],
  };

  const styles = {
    // bgColor: 'white',
    titleTextColor: "blue",
    rowTitleColor: "blue",
    // rowContentColor: 'grey',
    // arrowColor: "red",
  };

  return (
    <div>
      <Faq data={data} styles={styles} config={config} />
    </div>
  );
};

export default faq;
